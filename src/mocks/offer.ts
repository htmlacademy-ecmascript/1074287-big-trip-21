import { PointType } from '../types/point';

interface OfferItem {
	id: string;
	title: string;
	price: number;
}

interface Offer {
	type: PointType;
	offers: OfferItem[];
}

export { OfferItem, Offer };
