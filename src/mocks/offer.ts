import { POINT_TYPES } from '../constants';
import { Offer, OfferItem } from '../types/offer';
import { getRandomElement, getRandomInteger } from '../utils/random';

const OFFERS = [
	'Add breakfast',
	'Add luggage',
	'Book a taxi at the arrival point',
	'Business lounge',
	'Choose meal',
	'Choose seats',
	'Choose temperature',
	'Choose the radio station',
	'Choose the time of check-in',
	'Choose the time of check-out',
	'Drive slowly',
];

const mockItem = (): OfferItem => ({
	id: crypto.randomUUID(),
	title: getRandomElement(OFFERS),
	price: getRandomInteger(10, 1000),
});

const mockOffer = (type: Offer['type']): Offer => ({
	type,
	offers: Array.from({ length: getRandomInteger(0, 5) }, mockItem),
});

export const mockOffers = () => POINT_TYPES.map(mockOffer);
