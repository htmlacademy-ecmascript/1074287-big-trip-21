import { CITIES, POINT_TYPES } from '../constants';
import { Destionation } from '../types/destinations';
import { OfferItem } from '../types/offer';
import { Point } from '../types/point';
import { capitilize } from '../utils';
import AbstractView from '../framework/view/abstract-view';

interface EditEventViewProps {
	point: Point;
	getDestinations: (id: string) => Destionation | undefined;
	getOffers: (type: Point['type']) => OfferItem[];
}

const MARKUP_OF_TYPES = POINT_TYPES.map(
	(type) => `<div class="event__type-item">
    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitilize(type)}</label>
  </div>
`
).join('');

function markUp({ point, getDestinations, getOffers }: EditEventViewProps) {
	const destination = getDestinations(point.destination);
	const offers = getOffers(point.type);

	return `<form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="${point.type} icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${MARKUP_OF_TYPES}
            </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${point.type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${
					destination?.name || ''
				}" list="destination-list-1">
        <datalist id="destination-list-1">
        ${CITIES.map((city) => `<option value="${city}"></option>`).join('')}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${point.dateFrom.format(
					'YY/MM/DD HH:mm'
				)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${point.dateTo.format(
					'YY/MM/DD HH:mm'
				)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${offers
					.map(
						({ title, price, id }) => `<div class="event__offer-selector">
<input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${id}" type="checkbox" name="event-offer-luggage" ${
							point.offers.includes(id) ? 'checked' : ''
						}>
        <label class="event__offer-label" for="event-offer-luggage-${id}">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
        </label>
        </div>
        `
					)
					.join('')}

        </div>
      </section>
    </section>

    <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination?.description || ''}</p>
        <div class="event__photos-container">
        <div class="event__photos-tape">
         ${destination?.pictures.map(({ src, description }) => `<img class="event__photo" src="${src}" alt="${description}">`).join('')}
        </div>
      </div>
    </section>
  </form>`;
}

export default class EditEventView extends AbstractView<HTMLFormElement> {
	#props: EditEventViewProps | null = null;
	constructor(props: EditEventViewProps) {
		super();
		this.#props = props;
		this.setEventTypeHandlers();
	}

	get template() {
		return markUp(this.#props!);
	}

	private setEventTypeHandlers() {
		const eventTypeList = this.element.querySelector('.event__type-list');
		if (eventTypeList) {
			eventTypeList.addEventListener('change', this.handleEventTypeChange.bind(this));
		}
	}

	private handleEventTypeChange(event: Event) {
		const eventTypeInput = event.target as HTMLInputElement;
		if (eventTypeInput && eventTypeInput.tagName === 'INPUT' && eventTypeInput.name === 'event-type') {
			const eventType = eventTypeInput.value;
			const eventTypeIcon = this.element.querySelector('.event__type-icon') as HTMLImageElement;
			const eventTypeOutput = this.element.querySelector('.event__label.event__type-output');
			if (this.#props === null) {
				return;
			}
			if (eventTypeIcon && eventTypeOutput) {
				eventTypeIcon.src = `img/icons/${eventType}.png`;
				eventTypeIcon.alt = `${eventType} icon`;
				eventTypeOutput.textContent = eventType;
				this.#props.point.type = eventType as Point['type'];
			}
		}
	}
}
