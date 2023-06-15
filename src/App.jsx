import { useState } from 'react'
import './App.css'
import './style/global.scss'
import Card from './components/Card.jsx';
import Checkbox from './components/Checkbox.jsx';
import TopAppBar from './components/TopAppBar.jsx';
import IconButton from './components/IconButton.jsx'
import { MdArrowBack, MdNotifications, MdAttachFile } from 'react-icons/md';

import ThemeProvider from './theme/ThemeProvider.jsx';

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<ThemeProvider themeColor="#7ab191" mode="auto" customColors={[
				{
					name: "custom-1",
					value: "#ff0000",
					blend: true,
				},
			]}>
				<TopAppBar
					leftButtons={
						<IconButton><MdArrowBack/></IconButton>
					}
					rightButtons={
						<>
							<IconButton><MdNotifications/></IconButton>
							<IconButton><MdAttachFile/></IconButton>
						</>
					}
					type="medium"
				>
					Top App Bar
				</TopAppBar>
				<Card>
					This is a test card.
					<Checkbox label="Test Checkbox" defaultChecked={true} />
				</Card>
				<br/>
				<Card type="outlined">
					This is a outlined test card.
					<Checkbox label="Test Checkbox" defaultChecked={true} />
				</Card>
				<br/>
				<ThemeProvider themeColor="#120000" mode="auto">
					<Card type="elevated">
						This is a elevated test card with another theme context.
						<Checkbox label="Test Checkbox" defaultChecked={true} />
					</Card>
				</ThemeProvider>
				{
					[...Array(200)].map((_, i) => (
						<Card key={i} type="elevated">
							Placeholder
						</Card>
					))
				}
			</ThemeProvider>
		</>
	)
}

export default App
