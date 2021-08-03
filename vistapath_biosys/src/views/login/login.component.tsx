import React from 'react';
import './login.component.scss';
import { ReactComponent as Logo } from '../../assets/scenic-trail-logo.svg';

const LoginComponent = () => {

	return (
		<div id="login-component-container">
			<Logo />
			<button>Admin User</button>
			<button>Basic User</button>
		</div>
	);
};

export default LoginComponent;