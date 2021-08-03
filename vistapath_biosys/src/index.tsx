import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import './index.css';
import { rootReducer } from './redux/root.reducer';
import Router from './router';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
  document.getElementById('root')
);
