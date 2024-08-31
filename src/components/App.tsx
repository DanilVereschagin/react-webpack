import { useState } from 'react';
import classes from './App.module.scss';
import { Outlet, Link } from 'react-router-dom';
import orionPng from '@/assets/images/Orion.png';
import pingJpg from '@/assets/images/pig.jpg';
import Grid from '@/assets/images/grid.svg';

export const App = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	// if (__PLATFORM__ === 'desktop') {
	// 	return <div>IS Desktop</div>;
	// }

	// if (__PLATFORM__ === 'mobile') {
	// 	return <div>IS Mobile</div>;
	// }

	return (
		<div data-testid={'App.DataTestId'}>
			<h1 data-testid={'Platform'}>Platform: {__PLATFORM__}</h1>
			<div>
				<img width={200} src={orionPng}></img>
				<img width={200} src={pingJpg}></img>
			</div>
			<div>
				<Grid color='teal' width={200} height={200} />
			</div>
			<Link to='/about'>About</Link>
			<br />
			<Link to='/shop'>Shop</Link>
			<h1 className={classes.value}>React {count}</h1>
			<button className={classes.myButton} onClick={increment}>
				<span>Add</span>
			</button>
			<button className={classes.myButton} onClick={decrement}>
				<span>Remove</span>
			</button>
			<Outlet />
		</div>
	);
};
