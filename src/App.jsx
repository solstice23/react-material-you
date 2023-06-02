import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';
import Checkbox from './components/Checkbox.jsx';

import ThemeProvider from './theme/ThemeProvider.jsx';

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<ThemeProvider themeColor="#25aff3" mode="auto" customColors={[
				{
					name: "custom-1",
					value: "#ff0000",
					blend: true,
				},
			]}>
				<Card>
					This is a test card.
					<Checkbox label="Test checkbox" defaultChecked={true} />
				</Card>
				<ThemeProvider themeColor="#259745" mode="auto">
					<Card>
						This is a test card with another theme context.
						<Checkbox label="Test Checkbox" defaultChecked={true} />
					</Card>
				</ThemeProvider>
			</ThemeProvider>
		</>
	)
}

export default App
