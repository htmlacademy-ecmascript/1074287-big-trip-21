interface Picture {
	src: string;
	description: string;
}

interface Destionation {
	id: string;
	description: string;
	name: string;
	pictures: Picture[];
}

export type { Destionation, Picture };
