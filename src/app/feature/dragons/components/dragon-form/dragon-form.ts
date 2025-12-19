import { Component, output, signal, computed, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import {
	Dragon, DragonRarity, DragonSpecialSkill, DragonCategory, DragonFamily, DragonElement,
	DragonSkill, DragonStrongSkill, DragonSkinRankLabel, DragonSkinRank
} from '@dragons/models/dragon.model';
import { getIdSuggestions, getNextAvailableId, getUsedDragonIds, isIdAvailable } from '@dragons/utils/dragon-id.utils';

@Component({
	selector: 'app-dragon-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './dragon-form.html',
	styleUrls: ['./dragon-form.scss']
})
export class DragonForm {
	dragonCreated = output<Dragon>();

	private readonly fb = inject(FormBuilder);

	readonly rarities = Object.values(DragonRarity);
	readonly specialSkillTypes = Object.values(DragonSpecialSkill);
	readonly categories = Object.values(DragonCategory);
	readonly families = Object.values(DragonFamily);
	readonly elements = Object.values(DragonElement);
	readonly skills = Object.values(DragonSkill);
	readonly strongSkills = Object.values(DragonStrongSkill);
	readonly skinRanks = Object.values(DragonSkinRankLabel);

	form: FormGroup;
	showPreview = signal(false);

	usedIds = signal<number[]>(getUsedDragonIds());
	nextAvailableId = signal<number>(getNextAvailableId());
	idSuggestions = signal<number[]>(getIdSuggestions(5));
	idError = signal<string>('');

	dragonPreview = computed(() => {
		if (!this.showPreview()) return null;
		return this.form.value as Dragon;
	});

	constructor() {
		this.form = this.fb.group({
			id: [null, Validators.required],
			name: ['', Validators.required],
			rarity: [DragonRarity.Heroic, Validators.required],
			image: ['', Validators.required],
			specialSkillTitle: [''],
			specialSkillDescription: [''],
			specialSkillType: [DragonSpecialSkill.Passive, Validators.required],
			category: [DragonCategory.Category9, Validators.required],
			family: [DragonFamily.Doom, Validators.required],
			elements: this.fb.array([], Validators.required),
			criticalElements: this.fb.array([], Validators.required),
			weakElements: this.fb.array([], Validators.required),
			skins: this.fb.array([]),
			skills: this.fb.array([], Validators.required)
		});

		effect(() => {
			const idControl = this.form.get('id');
			if (idControl) {
				idControl.valueChanges.subscribe(id => {
					this.validateId(id);
				});
			}
		});
	}

	get elementsArray(): FormArray {
		return this.form.get('elements') as FormArray;
	}

	get criticalElementsArray(): FormArray {
		return this.form.get('criticalElements') as FormArray;
	}

	get weakElementsArray(): FormArray {
		return this.form.get('weakElements') as FormArray;
	}

	get skinsArray(): FormArray {
		return this.form.get('skins') as FormArray;
	}

	get skillsArray(): FormArray {
		return this.form.get('skills') as FormArray;
	}

	validateId(id: number): void {
		if (!id || id < 1) {
			this.idError.set('El ID debe ser mayor a 0');
			return;
		}

		if (isIdAvailable(id)) {
			this.idError.set('');
		} else {
			this.idError.set(`⚠️ El ID ${id} ya está en uso. Prueba con: ${this.idSuggestions().join(', ')}`);
		}
	}

	useNextAvailableId(): void {
		this.form.patchValue({ id: this.nextAvailableId() });
	}

	useSuggestedId(id: number): void {
		this.form.patchValue({ id });
	}

	addElement(): void {
		this.elementsArray.push(this.fb.control(this.elements[0]));
	}

	removeElement(index: number): void {
		this.elementsArray.removeAt(index);
	}

	addCriticalElement(): void {
		this.criticalElementsArray.push(this.fb.control(this.elements[0]));
	}

	removeCriticalElement(index: number): void {
		this.criticalElementsArray.removeAt(index);
	}

	addWeakElement(): void {
		this.weakElementsArray.push(this.fb.control(this.elements[0]));
	}

	removeWeakElement(index: number): void {
		this.weakElementsArray.removeAt(index);
	}

	addSkin(): void {
		const skinGroup = this.fb.group({
			name: ['', Validators.required],
			image: ['', Validators.required],
			rank: [DragonSkinRankLabel.A, Validators.required],
			rankIcon: [DragonSkinRank.A, Validators.required],
			benefits: this.fb.array([this.fb.control('')])
		});
		this.skinsArray.push(skinGroup);
	}

	removeSkin(index: number): void {
		this.skinsArray.removeAt(index);
	}

	getSkinBenefits(skinIndex: number): FormArray {
		return this.skinsArray.at(skinIndex).get('benefits') as FormArray;
	}

	addSkinBenefit(skinIndex: number): void {
		this.getSkinBenefits(skinIndex).push(this.fb.control(''));
	}

	removeSkinBenefit(skinIndex: number, benefitIndex: number): void {
		this.getSkinBenefits(skinIndex).removeAt(benefitIndex);
	}

	onRankChange(skinIndex: number, rank: DragonSkinRankLabel): void {
		const rankIconMap: Record<DragonSkinRankLabel, DragonSkinRank> = {
			[DragonSkinRankLabel.SS]: DragonSkinRank.SS,
			[DragonSkinRankLabel.S_PLUS]: DragonSkinRank.S_PLUS,
			[DragonSkinRankLabel.S]: DragonSkinRank.S,
			[DragonSkinRankLabel.S_MINUS]: DragonSkinRank.S_MINUS,
			[DragonSkinRankLabel.A_PLUS]: DragonSkinRank.A_PLUS,
			[DragonSkinRankLabel.AA]: DragonSkinRank.AA,
			[DragonSkinRankLabel.A]: DragonSkinRank.A,
			[DragonSkinRankLabel.A_MINUS]: DragonSkinRank.A_MINUS,
		};

		const skinGroup = this.skinsArray.at(skinIndex) as FormGroup;
		skinGroup.patchValue({ rankIcon: rankIconMap[rank] });
	}

	addSkill(): void {
		const skillGroup = this.fb.group({
			name: [''],
			image: [this.skills[0], Validators.required],
			description: [''],
			isSpecial: [false],
			strongSkill: [null]
		});
		this.skillsArray.push(skillGroup);
	}

	removeSkill(index: number): void {
		this.skillsArray.removeAt(index);
	}

	onSubmit(): void {
		const id = this.form.get('id')?.value;
		if (!isIdAvailable(id)) {
			alert(`El ID ${id} ya está en uso. Por favor elige otro ID.`);
			return;
		}

		if (this.form.valid) {
			const dragon = this.form.value as Dragon;
			this.dragonCreated.emit(dragon);

			this.copyToClipboard(dragon);

			alert('¡Dragón creado! El código ha sido copiado al portapapeles.');
			this.resetForm();
		} else {
			alert('Por favor completa todos los campos requeridos');
		}
	}

	resetForm(): void {
		const newId = getNextAvailableId();
		this.nextAvailableId.set(newId);
		this.idSuggestions.set(getIdSuggestions(5));

		this.form.reset({
			id: newId,
			rarity: DragonRarity.Heroic,
			specialSkillType: DragonSpecialSkill.Passive,
			category: DragonCategory.Category9,
			family: DragonFamily.Doom
		});

		this.idError.set('');

		while (this.elementsArray.length) this.elementsArray.removeAt(0);
		while (this.criticalElementsArray.length) this.criticalElementsArray.removeAt(0);
		while (this.weakElementsArray.length) this.weakElementsArray.removeAt(0);
		while (this.skinsArray.length) this.skinsArray.removeAt(0);
		while (this.skillsArray.length) this.skillsArray.removeAt(0);
	}

	togglePreview(): void {
		this.showPreview.set(!this.showPreview());
	}

	copyToClipboard(dragon: Dragon): void {
		const dragonCode = this.generateDragonCode(dragon);
		navigator.clipboard.writeText(dragonCode);
	}

	generateDragonCode(dragon: Dragon): string {
		return `{
	id: ${dragon.id},
	name: '${dragon.name}',
	rarity: DragonRarity.${this.getRarityKey(dragon.rarity)},
	image: '${dragon.image}',
	specialSkillTitle: '${dragon.specialSkillTitle || ''}',
	specialSkillDescription: '${dragon.specialSkillDescription || ''}',
	specialSkillType: DragonSpecialSkill.${this.getSpecialSkillKey(dragon.specialSkillType)},
	category: DragonCategory.${this.getCategoryKey(dragon.category)},
	family: DragonFamily.${this.getFamilyKey(dragon.family)},
	elements: [${dragon.elements.map(e => `DragonElement.${this.getElementKey(e)}`).join(', ')}],
	criticalElements: [
		${dragon.criticalElements.map(e => `DragonElement.${this.getElementKey(e)}`).join(',\n\t\t')}
	],
	weakElements: [
		${dragon.weakElements.map(e => `DragonElement.${this.getElementKey(e)}`).join(',\n\t\t')}
	],
	skins: [
		${dragon.skins?.map(s => `{
			name: '${s.name}',
			image: '${s.image}',
			rank: DragonSkinRankLabel.${this.getSkinRankKey(s.rank)},
			rankIcon: DragonSkinRank.${this.getSkinRankKey(s.rank)},
			benefits: [
				${s.benefits.map(b => `'${b}'`).join(',\n\t\t\t\t')}
			]
		}`).join(',\n\t\t') || ''}
	],
	skills: [
		${dragon.skills.map(sk => `{
			${sk.name ? `name: '${sk.name}',` : ''}
			image: DragonSkill.${this.getSkillKey(sk.image)},
			${sk.description ? `description: '${sk.description}',` : ''}
			${sk.isSpecial ? `isSpecial: true,` : ''}
			${sk.strongSkill ? `strongSkill: DragonStrongSkill.${this.getStrongSkillKey(sk.strongSkill)}` : ''}
		}`).join(',\n\t\t')}
	]
},`;
	}

	private getRarityKey(value: DragonRarity): string {
		return Object.keys(DragonRarity).find(key => DragonRarity[key as keyof typeof DragonRarity] === value) || '';
	}

	private getSpecialSkillKey(value: DragonSpecialSkill): string {
		return Object.keys(DragonSpecialSkill).find(key => DragonSpecialSkill[key as keyof typeof DragonSpecialSkill] === value) || '';
	}

	private getCategoryKey(value: DragonCategory): string {
		return Object.keys(DragonCategory).find(key => DragonCategory[key as keyof typeof DragonCategory] === value) || '';
	}

	private getFamilyKey(value: DragonFamily): string {
		return Object.keys(DragonFamily).find(key => DragonFamily[key as keyof typeof DragonFamily] === value) || '';
	}

	private getElementKey(value: DragonElement): string {
		return Object.keys(DragonElement).find(key => DragonElement[key as keyof typeof DragonElement] === value) || '';
	}

	private getSkillKey(value: DragonSkill): string {
		return Object.keys(DragonSkill).find(key => DragonSkill[key as keyof typeof DragonSkill] === value) || '';
	}

	private getStrongSkillKey(value: DragonStrongSkill): string {
		return Object.keys(DragonStrongSkill).find(key => DragonStrongSkill[key as keyof typeof DragonStrongSkill] === value) || '';
	}

	private getSkinRankKey(value: DragonSkinRankLabel): string {
		return Object.keys(DragonSkinRankLabel).find(key => DragonSkinRankLabel[key as keyof typeof DragonSkinRankLabel] === value) || '';
	}
}