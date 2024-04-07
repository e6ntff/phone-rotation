import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useMemo } from 'react';
import gameStore from '../utils/gameStore';
import { CloseOutlined, SmileOutlined } from '@ant-design/icons';

interface Props {
	index: string;
}

const GameCell: React.FC<Props> = observer(({ index }) => {
	const { cells, updateCell } = gameStore;

	const currentCell = cells[index];

	const changeCell = useCallback(() => {
		updateCell(index, { active: true, X: !currentCell.X });
	}, [updateCell, currentCell, index]);

	return (
		<Button
			onClick={changeCell}
			style={{ inlineSize: '10em', blockSize: '10em' }}
		>
			{true &&
				(currentCell.X ? (
					<CloseOutlined style={{ fontSize: '5em' }} />
				) : (
					<SmileOutlined style={{ fontSize: '5em' }} />
				))}
		</Button>
	);
});

export default GameCell;
