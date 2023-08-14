import { render } from './render';
import ButtonHeardView from './view/button-heard-view';
import BoardPresenter from './presenter/board-presenter';
import InfoView from './view/info-view';
import FilterView from './view/filter-view';

const headerNode = document.querySelector('.page-header');
const tripMainNode = document.querySelector('.trip-main');
const tripFilterNode = document.querySelector('.trip-controls__filters');
const tripEventNode = document.querySelector<HTMLDivElement>('.trip-events');

if (!headerNode || !tripMainNode || !tripFilterNode || !tripEventNode) {
	throw new Error('Critical elements not found');
}

render(new FilterView(), tripFilterNode!);
render(new InfoView(), tripMainNode!, 'afterbegin');
render(new ButtonHeardView(), tripMainNode!);
new BoardPresenter({ container: tripEventNode });
