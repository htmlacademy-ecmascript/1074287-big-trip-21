const enum Default {
	Min = 0,
	Max = 5,
}

function getRandomInteger(min: number = Default.Min, max: number = Default.Max) {
	[min, max] = [min, max].sort((a, b) => a - b);
	min = Math.ceil(min);
	max = Math.ceil(max);

	return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomBoolean = () => Boolean(getRandomInteger(0, 1));
const getRandomElement = <El>(elements: El[] | readonly El[]) => elements[getRandomInteger(0, elements.length - 1)];

export { getRandomInteger, getRandomBoolean, getRandomElement };
