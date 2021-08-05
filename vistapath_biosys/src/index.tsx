import React from 'react';
import ReactDOM from 'react-dom';
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import './index.scss';
import { rootReducer } from './redux/root.reducer';
import Router from './router';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
  document.getElementById('root')
);
