import { render } from '../render';
import SortView from '../view/sort-view';
import EditView from '../view/edit-view';
import EntryPointView from '../view/entry-point-view';
import TripListView from '../view/trip-list-view';
import TripItemView from '../view/trip-item';

interface TripsPresenterProps {
	container: HTMLElement;
}

export default class BoardPresenter {
	#container: HTMLElement | null = null;
	#list = new TripListView();
	#items: TripItemView[] = [];

	constructor({ container }: TripsPresenterProps) {
		this.#container = container;
		render(this.#list, this.#container);

		this.#showEditExample();

		for (let i = 0; i < 3; i++) {
			this.#showItemExample();
		}
	}

	#createItem() {
		const item = new TripItemView();
		this.#items.push(item);
		render(item, this.#list.element);

		return item;
	}

	#showEditExample() {
		const wrapper = this.#createItem();
		const form = new EditView();
		render(form, wrapper.element);
	}

	#showItemExample() {
		const wrapper = this.#createItem();
		const event = new EntryPointView();
		render(event, wrapper.element);
	}
}
