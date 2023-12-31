import { render } from '../render';
import TripListView from '../views/trip-list-view';
import PointPresenter from './point';
import { DestinationModel, OffersModel, PointsModel } from '../models';

interface TripsPresenterProps {
	container: HTMLElement;
	pointsModel: PointsModel;
	offersModel: OffersModel;
	destinationsModel: DestinationModel;
}

export default class BoardPresenter {
	#pointsModel: PointsModel | null = null;
	#offersModel: OffersModel | null = null;
	#destinationsModel: DestinationModel | null = null;

	#container: HTMLElement | null = null;
	#list = new TripListView();
	#points: PointPresenter[] = [];

	constructor({ container, pointsModel, offersModel, destinationsModel }: TripsPresenterProps) {
		this.#container = container;
		this.#pointsModel = pointsModel;
		this.#offersModel = offersModel;
		this.#destinationsModel = destinationsModel;

		render(this.#list, this.#container);

		this.#renderInitial();

		// this.#points[0].switchToEdit();
	}

	#renderInitial() {
		const points = this.#pointsModel!.points;
		this.#points = points.map(
			(point) =>
				new PointPresenter({
					point,
					container: this.#list.element,
					pointsModel: this.#pointsModel!,
					offersModel: this.#offersModel!,
					destinationsModel: this.#destinationsModel!,
				})
		);
	}
}
