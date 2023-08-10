import NewWithoutDestination from '../view/add-new-point-without-destination.js';
import NewWithoutOffers from '../view/add-new-point-without-offers.js';
import NewPoint from '../view/add-new-point.js';
import EditPoint from '../view/edit-point.js';
import FailedLoadData from '../view/failed-load-data.js';
import ListFilter from '../view/list-filter.js';
import ListSort from '../view/list-sort.js';
import Loading from '../view/loading.js';
import { render } from '../render.js';

export default class ComponentDisplay {
  newWithoutDestination = new NewWithoutDestination();
  newWithoutOffers = new NewWithoutOffers();
  newPoint = new NewPoint();
  editPoint = new EditPoint();
  failedLoadData = new FailedLoadData();
  listFilter = new ListFilter();
  listSort = new ListSort();
  loading = new Loading();

  constructor({ componentDisplay }) {
    this.componentDisplay = componentDisplay;
  }

  init() {
    render(this.loading);
  }
}
