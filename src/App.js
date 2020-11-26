import { Route, Switch, useLocation } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import OurWork from './pages/OurWork';
//router
//animate
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
          <Route path="/contact" exact>
            <ContactUs/>
          </Route>
          <Route path='/work/:id'>
            <MovieDetail/>
          </Route>
          <Route path="/work">
              <OurWork/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
