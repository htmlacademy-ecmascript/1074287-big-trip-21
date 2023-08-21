import AbstractView from './_abstract';

function createButtonHeardTemplate() {
	return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow">New event<button>';
}

export default class ButtonHeardView extends AbstractView<HTMLDivElement> {
	constructor() {
		super();
	}

	get template() {
		return createButtonHeardTemplate();
	}
}
