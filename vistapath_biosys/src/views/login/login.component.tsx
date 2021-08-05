import React from 'react';
import './login.component.scss';
import { ReactComponent as Logo } from '../../assets/scenic-trail-logo.svg';
import { Button } from 'primereact/button';
import { USER_TYPE } from '../../redux/user.reducer';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user.action';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
	const dispatch = useDispatch();

	const login = (user: USER_TYPE) => {
		dispatch(setUser(user))
	}

	return (
		<div id="login-super">
			<div id="login-component-container">
				<Logo style={{marginBottom: '2rem'}}/>
				<Link to="/home">
					<Button className="p-button-text"
					onClick={() => login(USER_TYPE.BASIC)}
					key={'basic-user'}
					label={'Basic User'}
					icon="pi pi-user"
					/>
				</Link>
				<Link to="/home">
					<Button className="p-button-text"
						onClick={() => login(USER_TYPE.ADMIN)}
						style={{marginTop: '1rem'}}
						key={'admin-user'}
						label={'Admin User'}
						icon="pi pi-user-plus"
						/>
				</Link>
			</div>
		</div>
	);
};

export default LoginComponent;