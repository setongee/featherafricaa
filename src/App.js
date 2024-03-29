import './App.css';
import {BrowserRouter as Router, Redirect, Switch, Link, Route, withRouter } from 'react-router-dom'
import Home from './Home';
import Footer from './sections/footer/footer';
import NavBar from './components/TitleBar/NavBar';
import Privacy from './Privacy';
import Giveaway from './giveaway';

const App = () => {

  return (

    <div className='container'>

      <NavBar/>
          
      <Switch>

        <Route exact path = '/' component={Home} />
        <Route exact path = '/privacy' component={Privacy} />
        {/* <Route exact path = '/giveaway' component={Giveaway} /> */}

      </Switch>

      <Footer/>
    
    </div>

  );


}

export default App;

