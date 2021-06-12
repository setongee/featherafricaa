import './App.css';
import Landing from './sections/landing/landing'
import NavBar from './components/TitleBar/NavBar'
import Info from './sections/information/info'
const App = () => {
  return (

    <div className = 'container'>

      <NavBar/>
      <Landing/>
      <Info/>
      
    </div>

  );
}

export default App;

