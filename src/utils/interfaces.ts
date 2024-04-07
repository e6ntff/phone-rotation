export interface Cells {
	[key: string]: Cell;
	'0': Cell;
	'1': Cell;
	'2': Cell;
	'3': Cell;
	'4': Cell;
	'5': Cell;
	'6': Cell;
	'7': Cell;
	'8': Cell;
}

export interface Cell {
	active: boolean;
	X?: boolean;
}
