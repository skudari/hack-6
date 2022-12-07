import logo from './logo.svg';
import './App.css';
import './index.css';
import { LandingPage } from './templates/LandingPage';
import {Helmet} from 'react-helmet';

function App() {
  return (
      <div className="landing_page">
          <Helmet>
              <style>{'body { background-color: #FAF9F6; }'}</style>
          </Helmet>
          <LandingPage/>
      </div>
  );
}

export default App;
