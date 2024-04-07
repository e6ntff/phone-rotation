import { makeAutoObservable } from 'mobx';
import { Cell, Cells } from './interfaces';
import constants from './constants';

class GameStore {
	gameID: number | undefined = undefined;
	cells: Cells = constants.initialCells;

	setCells = (cells: Cells) => {
		this.cells = cells;
	};

	updateCell = (index: string, cell: Cell) => {
		const cells = this.cells;
		cells[index] = cell;
		this.setCells(cells);
	};

	constructor() {
		makeAutoObservable(this);
	}
}

const gameStore = new GameStore();

export default gameStore;
