import AbstractView from '../framework/view/abstract-view';

function createTripListTemplate() {
	return '<ul class="trip-events__list"></ul>';
}

export default class TripListView extends AbstractView<HTMLUListElement> {
	constructor() {
		super();
	}

	get template() {
		return createTripListTemplate();
	}
}
