import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Audiofile from './components/Audiofile';
import Creative from './components/creative';
import DetailedPage from './components/DetailedPage';
import Html5image from './components/html5image';
import Videofile from './components/videofile';
// import * as Ru from 'reac'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<div className="App">
					{/* <Switch */}
					<Route path="/" exact render={() => <Creative />} />
					<Route path="/detailed/:num" exact render={() => <DetailedPage />} />
					<Route path="/home" exact render={() => <Creative />} />
					<Route path="/html5image" exact render={() => <Html5image />} />
					<Route path="/audiofile" exact render={() => <Audiofile />} />
					<Route path="/videofile" exact render={() => <Videofile />} />
				</div>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
