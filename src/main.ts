import { render } from './render';
import ButtonHeardView from './views/button-heard-view';
import BoardPresenter from './presenter/board-presenter';
import InfoView from './views/info-view';
import FilterView from './views/filter-view';
import MockService from './services/mock';
import { PointsModel, DestinationModel, OffersModel } from './models';

const headerNode = document.querySelector('.page-header');
const tripMainNode = document.querySelector('.trip-main');
const tripFilterNode = document.querySelector('.trip-controls__filters');
const tripEventNode = document.querySelector<HTMLDivElement>('.trip-events');

const service = new MockService();
const [pointsModel, destinationsModel, offersModel] = [PointsModel, DestinationModel, OffersModel].map((Model) => new Model(service)) as [
	PointsModel,
	DestinationModel,
	OffersModel
];
if (!headerNode || !tripMainNode || !tripFilterNode || !tripEventNode) {
	throw new Error('Critical elements not found');
}

render(new FilterView(), tripFilterNode!);
render(new InfoView(), tripMainNode!, 'afterbegin');
render(new ButtonHeardView(), tripMainNode!);
new BoardPresenter({ container: tripEventNode, pointsModel, destinationsModel, offersModel });
