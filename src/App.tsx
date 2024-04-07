import React from 'react';
import GameField from './components/GameField';
import { observer } from 'mobx-react-lite';
import { Flex } from 'antd';

const App: React.FC = observer(() => {
	return (
		<Flex
			style={{ inlineSize: '100%', blockSize: '100%' }}
			justify='center'
			align='center'
		>
			<GameField />
		</Flex>
	);
});

export default App;
