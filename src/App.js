import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
import keyboard from './keyboard.svg';

const getUsers = (setUsers) =>
	axios
		.get('https://api.github.com/users')
		.then(({ data }) => setUsers(data))
		.catch((err) => console.log(err));

const HEADER = ['id', 'login'];

function App() {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState();
	useEffect(() => {
		getUsers((users) => setUsers(users.slice(0, 10)));
	}, []);
	return (
		<div className="container">
			<div className="hero">
				<div className="hero-body">
					<h1 className="title is-1">Keyboard Navigable Table</h1>
					<h2 className="subtitle is-4">
						<div className="level">
							<div className="level-left">Made with React.</div>
							<div className="level-right">
								<a
									style={{ color: 'inherit' }}
									href="https://elpopisencio.github.io"
								>
									<span class="icon is-large">
										<i class="fa fa-home"></i>
									</span>
								</a>
								<a
									style={{ color: 'inherit' }}
									href="https://github.com/elpopisencio/keyboard-navigable-table"
								>
									<span class="icon is-large">
										<i class="fab fa-github"></i>
									</span>
								</a>
							</div>
						</div>
					</h2>
				</div>
			</div>
			<img className="project-image" src={keyboard} alt="" />
			<section className="section">
				<h3 className="title">Description</h3>
				<p className="subtitle">
					In this project I made a keyboard navigable table with React.
				</p>
			</section>
			<Table
				items={users}
				attributes={HEADER}
				currentItem={currentUser}
				setCurrentItem={setCurrentUser}
			/>
		</div>
	);
}

export default App;
