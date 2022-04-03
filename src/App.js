import { Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Visual from './components/main/Visual';
import Content from './components/main/Content';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Department from './components/sub/Department'

import './scss/style.scss'

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/Department' component={Department}></Route>
			<Route path='/youtube' component={Youtube}></Route>
			<Route path='/gallery' component={Gallery}></Route>

			<Footer />
		</>
	);
}

export default App;