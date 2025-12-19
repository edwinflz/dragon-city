
import { DRAGONS } from '@dragons/dragons.const';


export function getUsedDragonIds(): number[] {
	return DRAGONS.map(dragon => dragon.id).sort((a, b) => a - b);
}

export function getNextAvailableId(): number {
	const usedIds = getUsedDragonIds();

	if (usedIds.length === 0) return 1;

	for (let i = 0; i < usedIds.length; i++) {
		const expectedId = i + 1;
		if (usedIds[i] !== expectedId) {
			return expectedId;
		}
	}

	return (usedIds.at(-1) ?? 0) + 1;
}

export function isIdAvailable(id: number): boolean {
	return !DRAGONS.some(dragon => dragon.id === id);
}

export function getIdSuggestions(count: number = 5): number[] {
	const nextId = getNextAvailableId();
	const suggestions: number[] = [];

	for (let i = 0; i < count; i++) {
		let candidateId = nextId + i;
		while (!isIdAvailable(candidateId)) {
			candidateId++;
		}
		suggestions.push(candidateId);
	}

	return suggestions;
}