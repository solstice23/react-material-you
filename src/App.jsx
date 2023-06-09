import { useState } from 'react'
import './App.scss'
import './style/global.scss'
import Card from './components/Card.jsx';
import Checkbox from './components/Checkbox.jsx';
import TopAppBar from './components/TopAppBar.jsx';
import IconButton from './components/IconButton.jsx'
import FAB from './components/FAB.jsx';
import Button from './components/Button.jsx';
import SegmentedButtons from './components/SegmentedButtons.jsx';
import { MdArrowBack, MdNotifications, MdAttachFile, MdAdd, MdEdit, MdOutlineCircle, MdOutlineSquare, MdOutlineChangeHistory } from 'react-icons/md';
import classNames from 'classnames';

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
				<div className='content'>
					<Section name="Checkbox">
						<Checkbox label="Unchecked" defaultChecked={false} />
						<Checkbox label="Checked" defaultChecked={true} />
						<Checkbox label="Unchecked Disabled" defaultChecked={false} disabled />
						<Checkbox label="Checked Disabled" defaultChecked={true} disabled />
					</Section>
					<Section name="Card" className="card-section">
						<DemoCard type="outlined" title="Outlined" />
						<DemoCard type="filled" title="Filled" />
						<DemoCard type="elevated" title="Elevated" />
					</Section>
					<Section name="Button">
						Type - standard/filled/outlined/tonal
						<div className="row">
							<Button type="elevated">Elevated</Button>
							<Button type="filled">Filled</Button>
							<Button type="tonal">Tonal</Button>
							<Button type="outlined">Outlined</Button>
							<Button type="text">Text</Button>
						</div>
						With Icons
						<div className="row">
							<Button type="elevated" icon={<MdAdd/>}>Elevated</Button>
							<Button type="filled" icon={<MdAdd/>}>Filled</Button>
							<Button type="tonal" icon={<MdAdd/>}>Tonal</Button>
							<Button type="outlined" icon={<MdAdd/>}>Outlined</Button>
							<Button type="text" icon={<MdAdd/>}>Text</Button>
						</div>
						Disabled
						<div className="row">
							<Button type="elevated" disabled>Elevated</Button>
							<Button type="filled" disabled>Filled</Button>
							<Button type="tonal" disabled>Tonal</Button>
							<Button type="outlined" disabled>Outlined</Button>
							<Button type="text" disabled>Text</Button>
						</div>
					</Section>
					<Section name="Icon Button">
						Type - standard/filled/outlined/tonal
						<div className="row">
							<IconButton type="standard"><MdEdit/></IconButton>
							<IconButton type="filled"><MdEdit/></IconButton>
							<IconButton type="outlined"><MdEdit/></IconButton>
							<IconButton type="tonal"><MdEdit/></IconButton>
						</div>
						Disabled
						<div className="row">
							<IconButton type="standard" disabled><MdEdit/></IconButton>
							<IconButton type="filled" disabled><MdEdit/></IconButton>
							<IconButton type="outlined" disabled><MdEdit/></IconButton>
							<IconButton type="tonal" disabled><MdEdit/></IconButton>
						</div>
					</Section>
					<Section name="Floating Action Button">
						Size - small/normal/large
						<div className="row">
							<FAB size="small"><MdEdit/></FAB>
							<FAB size="normal"><MdEdit/></FAB>
							<FAB size="large"><MdEdit/></FAB>
						</div>
						Color - primary/surface/surface lowered/secondary/tertiary
						<div className="row">
							<FAB color="primary"><MdEdit/></FAB>
							<FAB color="surface"><MdEdit/></FAB>
							<FAB color="surface_lowered"><MdEdit/></FAB>
							<FAB color="secondary"><MdEdit/></FAB>
							<FAB color="tertiary"><MdEdit/></FAB>
						</div>
						Elevation - default/lowered/none
						<div className="row">
							<FAB elevation="default"><MdEdit/></FAB>
							<FAB elevation="lowered"><MdEdit/></FAB>
							<FAB elevation="none"><MdEdit/></FAB>
						</div>
					</Section>
					<Section name="Segmented Buttons">
						Single Choice
						<div className="row">
							<SegmentedButtons
								buttons={[
									{ label: "Day", value: "day", defaultSelected: true },
									{ label: "Week", value: "week" },
									{ label: "Year", value: "year" },
								]}
								onChange={(value) => console.log(value)}
							/>
						</div>
						Multiple Choice
						<div className="row">
							<SegmentedButtons
								buttons={[
									{ label: "Foo", value: "foo", defaultSelected: true },
									{ label: "Bar", value: "bar", defaultSelected: true },
									{ label: "Baz", value: "baz" },
									{ label: "Qux", value: "qux", defaultSelected: true },
								]}
								multiple
							/>
						</div>
						With Icons
						<div className="row">
							<SegmentedButtons
								buttons={[
									{ label: "Circle", value: "circle", icon: <MdOutlineCircle/> },
									{ label: "Square", value: "square", icon: <MdOutlineSquare/> },
									{ label: "Triangle", value: "triangle", icon: <MdOutlineChangeHistory/> },
								]}
								onChange={(value) => console.log(value)}
							/>
						</div>

					</Section>
				</div>
			</ThemeProvider>
		</>
	)
}

export default App


function Section(props) {
	return (
		<div className='section'>
			<div className='section-name'>{props.name}</div>
			<div className={
				classNames(
					'section-content',
					props.className
				)
			}>
				{props.children}
			</div>
		</div>
	)
}

function DemoCard(props) {
	return (
		<Card type={props.type} className="demo-card">
			<div className='card-title'>
				{props.title}
			</div>
			<div className='card-subtitle'>
				Subtitle
			</div>
			<div className='card-content'>
				lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl quis aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl.
			</div>
		</Card>
	);
}