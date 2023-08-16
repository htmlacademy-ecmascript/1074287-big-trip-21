import { Dayjs } from 'dayjs';
import type { POINT_TYPES } from '../constants';
import type { OfferItem } from './offer';
import { CamelizeObject } from './util';
import { Destionation } from './destinations';
type PointType = (typeof POINT_TYPES)[number];

interface ServerPoint {
	id: string;
	base_price: number;
	date_from: string;
	date_to: string;
	destination: Destionation['id'];
	is_favorite: boolean;
	offers: OfferItem['id'][];
	type: PointType;
}

type Point = Omit<CamelizeObject<ServerPoint>, 'dateFrom' | 'dateTo'> & {
	dateFrom: Dayjs;
	dateTo: Dayjs;
};

export type { PointType, ServerPoint, Point };
