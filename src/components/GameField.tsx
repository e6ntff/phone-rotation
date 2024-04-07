import { observer } from 'mobx-react-lite';
import React from 'react';
import gameStore from '../utils/gameStore';
import { Flex } from 'antd';
import GameCell from './GameCell';

const GameField: React.FC = observer(() => {
	const { cells } = gameStore;

	return (
		<Flex
			wrap='wrap'
			style={{ inlineSize: '28.25em', blockSize: '28.25em' }}
			gap='1em'
		>
			{Object.keys(cells).map((index: string) => (
				<GameCell
					key={index}
					index={index}
				/>
			))}
		</Flex>
	);
});

export default GameField;
