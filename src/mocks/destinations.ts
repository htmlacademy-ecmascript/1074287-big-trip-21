import { CITIES } from '../constants';
import type { Picture, Destionation } from '../types/destinations';
import { getRandomElement, getRandomInteger, getRandomBoolean } from '../utils/random';

const enum Description {
	MIN = 1,
	MAX = 5,
}

const MESSAGES = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.'];

const mockDescription = () => {
	Array.from({ length: getRandomInteger(Description.MAX - Description.MIN) }, () => getRandomElement(MESSAGES)).join(' ');
};

const mockPicture = (city: string): Picture => ({
	src: `https://loremflickr.com/248/152/${city}?random=${getRandomInteger()}`,
	description: mockDescription(),
});

const mockDestination = (name: string): Destionation => ({
	id: crypto.randomUUID(),
	description: mockDescription(),
	name,
	pictures: Array.from({ length: getRandomInteger(1, 5) }, () => mockPicture(name)),
});

export const mockDestination = () => CITIES.map(mockDestination);
