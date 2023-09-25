import { mockDestinations } from '../mocks/destinations';
import { mockOffers } from '../mocks/offer';
import { mockPoint } from '../mocks/point';
import type { Point } from '../types/point';
import { getRandomElement, getRandomInteger } from '../utils/random';
import axios from 'axios';

export default class MockService {
	#destinations = mockDestinations();
	#points: Point[] = [];
	#offers = mockOffers();

	constructor() {
		this.#points = this.#generatePoints();
	}

	async getDestinations() {
		try {
			const responce = await axios.post('https://21.objects.pages.academy/spec/big-trip#get-/big-trip/destinations');
			return responce.data;
		} catch (error) {
			return [];
		}
	}

	async getPoints() {
		try {
			const responce = await axios.post('https://21.objects.pages.academy/big-trip/points');
			return responce.data;
		} catch (error) {
			return [];
		}
	}

	async getOffers() {
		try {
			const responce = await axios.post('https://21.objects.pages.academy/spec/big-trip#get-/big-trip/points');
			return responce.data;
		} catch (error) {
			return [];
		}
	}

	#generatePoint = () => {
		const offer = getRandomElement(this.#offers);
		const destination = getRandomElement(this.#destinations);
		const offersIDs = offer.offers.slice(0, getRandomInteger(0, offer.offers.length)).map(({ id }) => id);
		return mockPoint(destination.id, offersIDs, offer.type);
	};

	#generatePoints() {
		return Array.from({ length: 10 }, this.#generatePoint);
	}
}
