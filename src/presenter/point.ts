import type { OffersModel, PointsModel, DestinationModel } from '../models';
import { render } from '../render';
import { Point, PointType } from '../types/point';
import TripItemView from '../views/trip-item';
import EditEventView from '../views/edit-events';
import EventView from '../views/event';
import { replace } from '../framework/render';
interface PointPresenterProps {
	point: Point;
	container: HTMLUListElement;
	pointsModel: PointsModel;
	offersModel: OffersModel;
	destinationsModel: DestinationModel;
}

export default class PointPresenter {
	#pointsModel: PointsModel | null = null;
	#offersModel: OffersModel | null = null;
	#destinationsModel: DestinationModel | null = null;
	#point: Point | null = null;

	#container: HTMLElement | null = null;
	#item = new TripItemView();
	#content: EditEventView | EventView | null = null;

	constructor({ container, pointsModel, offersModel, destinationsModel, point }: PointPresenterProps) {
		this.#container = container;
		this.#pointsModel = pointsModel;
		this.#offersModel = offersModel;
		this.#destinationsModel = destinationsModel;
		this.#point = point;

		this.#renderInfo();
		render(this.#item, this.#container);

		const rollupButton = this.#item.element.querySelector('.event__rollup-btn');
		rollupButton?.addEventListener('click', () => this.switchToEdit());

		const closeButton = this.#content!.element.querySelector('.event__rollup-btn');
		closeButton?.addEventListener('click', () => this.switchToClose());

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape' && this.#content instanceof EditEventView) {
				this.switchToClose();
			}
		});
	}

	switchToEdit() {
		const oldContent = this.#content!;
		oldContent.element.remove();
		oldContent.removeElement();
		this.#content = new EditEventView({
			point: this.#point!,
			getDestinations: this.#destinationsModel!.getById.bind(this.#destinationsModel!), // сделать функцию на поиск введенного города
			getOffers: (type: PointType) => this.#offersModel!.getByType(type)?.offers || [],
		});
		render(this.#content!, this.#item.element);
	}

	switchToClose() {
		const oldContent = this.#content!;
		const newContent = new EventView({
			point: this.#point!,
			city: destination?.name || '',
			offers: offer?.offers.filter(({ id }) => point.offers.includes(id)) || [],
		});
		replace(newContent, oldContent);
		oldContent.removeElement();
		this.#content = newContent;
	}

	#renderInfo() {
		const point = this.#point!;
		const destination = this.#destinationsModel!.getById(point.destination);
		const offer = this.#offersModel!.getByType(point.type);

		this.#content = new EventView({
			point,
			city: destination?.name || '',
			offers: offer?.offers.filter(({ id }) => point.offers.includes(id)) || [],
		});
		render(this.#content, this.#item.element);
	}
}
