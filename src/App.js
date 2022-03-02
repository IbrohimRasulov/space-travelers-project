import './reset.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';

// Components
import Header from './components/Header';
import Rockets from './components/Rockets';
import MissionsContainer from './components/MissionsContainer';
import Profile from './components/Profile';

const App = () => (
  <Provider store={store}>
    <div className="content-align">
      <Router>
        <Header className="App-header" />
        <Routes>
          <>
            <Route path="/" element={<Rockets className="rockets" />} />
            <Route path="/missions" element={<MissionsContainer className="missions" />} />
            <Route path="/profile" element={<Profile className="profile" />} />
          </>
        </Routes>
      </Router>
    </div>
  </Provider>
);

export default App;
