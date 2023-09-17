import AbstractView from './framework/view/abstract-view';

/**
 *
 * @param template string parsable to HTML
 */
function createElement<E extends Element = HTMLElement>(template: string) {
	const newElement = document.createElement('div');
	newElement.innerHTML = template;

	return newElement.firstElementChild as E;
}

function render(component: AbstractView<Element>, container: Element, place: InsertPosition = 'beforeend') {
	container.insertAdjacentElement(place, component.element);
}

export { createElement, render };
