import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SnackbarCloseButton from './components/CloseButton';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';
// import './index.sass';
// import '../node_modules/bootstrap/scss/bootstrap.scss';
// import 'sass';
ReactDOM.render(
	<BrowserRouter>
		<SnackbarProvider
			maxSnack={4}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			action={(key) => <SnackbarCloseButton snackbarKey={key} />}
		>
			<App />
		</SnackbarProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
