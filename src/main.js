import { render } from './render.js';
import ComponentDisplay from './presenter/component-display.js';

const siteMainElement = document.querySelector('.page-body');
const siteHeaderElement = document.querySelector('.page-header');
const componentDisplay = new ComponentDisplay();

componentDisplay.init();
