import { mockDestination } from '../mocks/destinations';
import { mockPoint } from '../mocks/point';
import type { Point } from '../types/point';
import { getRandomElement, getRandomInteger } from '../utils/random';

export default class MockService {
	#destinations = mockDestinations();
	#points: Point[] = [];
	#offers = mockOffers();

	constructor() {
		this.#points = this.#generatePoints();
	}

	getDestinations() {
		return this.#destinations;
	}

	getPoints() {
		return this.#points;
	}
}
