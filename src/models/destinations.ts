import type MockService from '../services/mock';
import { Destionation } from '../types/destinations';

export default class DestinationModel {
	#service: MockService | null = null;
	#destinations: Destionation[] = [];

	constructor(service: MockService) {
		this.#service = service;
		this.#destinations = this.#service.getDestinations();
	}

	get destinations() {
		return this.#destinations;
	}

	getById(id: string) {
		return this.#destinations.find((destination) => destination.id === id);
	}
}
