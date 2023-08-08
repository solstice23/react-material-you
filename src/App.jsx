import { useState, useRef, useEffect } from 'react'
import './App.scss'
import './style/global.scss'
import Card from './components/Card.jsx';
import Checkbox from './components/Checkbox.jsx';
import Radio from './components/Radio.jsx';
import TextField from './components/TextField.jsx';
import TopAppBar from './components/TopAppBar.jsx';
import IconButton from './components/IconButton.jsx'
import FAB from './components/FAB.jsx';
import Button from './components/Button.jsx';
import SegmentedButtons from './components/SegmentedButtons.jsx';
import Slider from './components/Slider.jsx';
import RadioGroup from './components/RadioGroup.jsx';
import Menu from './components/Menu.jsx';
import MenuItem, {MenuDivider} from './components/MenuItem.jsx';
import { MdArrowBack, MdNotifications, MdAttachFile, MdAdd, MdEdit, MdOutlineCircle, MdOutlineSquare, MdOutlineChangeHistory, MdSearch } from 'react-icons/md';
import classNames from 'classnames';

import ThemeProvider from './theme/ThemeProvider.jsx';

function App() {
	const [wavePaused, setWavePaused] = useState(false);

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
					<Section name="Radio">
						Group 1
						<RadioGroup defaultValue="alice">
							<Radio label="Alice" value="alice"/>
							<Radio label="Bob" value="bob"/>
							<Radio label="Carol" value="carol"/>
						</RadioGroup>
						Group 2 (disabled)
						<RadioGroup defaultValue="foo">
							<Radio label="Foo" value="foo" disabled/>
							<Radio label="Bar" value="bar" disabled/>
						</RadioGroup>
					</Section>
					<Section name="Text Field">
						Normal<br/>
						<TextField type="outlined" label="Outlined" />
						{" "}
						<TextField type="filled" label="Filled" />
						<br/>With placeholder<br/>
						<TextField type="outlined" label="Outlined" placeholder="Placeholder" />
						{" "}
						<TextField type="filled" label="Filled" placeholder="Placeholder" />
						<br/>With leading icon<br/>
						<TextField type="outlined" label="Outlined" placeholder="Placeholder" leadingIcon={<MdSearch/>}/>
						{" "}
						<TextField type="filled" label="Filled" placeholder="Placeholder" leadingIcon={<MdSearch/>}/>
						<br/>No label<br/>
						<TextField type="outlined"/>
						{" "}
						<TextField type="filled"/>
						<br/>No label with placeholder<br/>
						<TextField type="outlined" placeholder="Placeholder"/>
						{" "}
						<TextField type="filled" placeholder="Placeholder"/>
						<br/>No label with leading icon<br/>
						<TextField type="outlined" placeholder="Placeholder" leadingIcon={<MdSearch/>}/>
						{" "}
						<TextField type="filled" placeholder="Placeholder" leadingIcon={<MdSearch/>}/>
						<br/>Disabled<br/>
						<TextField type="outlined" label="Outlined" disabled/>
						{" "}
						<TextField type="filled" label="Filled" disabled/>
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
					<Section name="Menu">
						<div className="row">
							<DemoMenu name="Normal Menu">
								<MenuItem>Item 1</MenuItem>
								<MenuItem>Item 2</MenuItem>
								<MenuItem>Item 3</MenuItem>
							</DemoMenu>
							<DemoMenu name="Menu with icons and deviders">
								<MenuItem
									icon={<MdNotifications/>}
								>
									Item 1
								</MenuItem>
								<MenuItem
									icon={<MdAttachFile/>}
								>
									Item 2
								</MenuItem>
								<MenuItem
									icon={<MdEdit/>}
								>
									Item 3
								</MenuItem>
								<MenuDivider/>
								<MenuItem>Item 4</MenuItem>
								<MenuItem>Item 5</MenuItem>
							</DemoMenu>
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
					<Section name="Slider">
						Normal
						<Slider defaultPercent={40}/>
						<Slider defaultPercent={60} disabled/>
						Wave
						<Slider defaultPercent={40} wave paused={wavePaused}/>
						<Slider defaultPercent={60} wave paused={wavePaused} disabled/>
						<Checkbox label="Pause wave" defaultChecked={false} onChange={setWavePaused}/>
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

function DemoMenu(props) {
	const menuRef = useRef(null);
	const openBtnRef = useRef(null);

	const [open, setOpen] = useState(false);

	const handleClickAway = (e) => {
		if (open && !menuRef.current.contains(e.target) && !openBtnRef.current.contains(e.target)) {
			setOpen(false);
		}
	}
	useEffect(() => {
		document.addEventListener('click', handleClickAway);
		return () => {
			document.removeEventListener('click', handleClickAway);
		}
	}, [open]);

	return (
		<>
			<Button
				ref={openBtnRef}
				onClick={() => setOpen(!open)}
			>
				{ props.name }
			</Button>
			<Menu
				ref={menuRef}
				className="song-filter-menu"
				anchorElement={openBtnRef?.current}
				anchorPosition="center top"
				open={open}
			>
				{ props.children }
			</Menu>
		</>
	);
}