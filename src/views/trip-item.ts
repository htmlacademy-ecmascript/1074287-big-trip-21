import AbstractView from '../framework/view/abstract-view';

const MARK_UP = '<li class="trip-events__item"></li>';

export default class TripItemView extends AbstractView<HTMLLIElement> {
	constructor() {
		super();
	}

	get template() {
		return MARK_UP;
	}
}
