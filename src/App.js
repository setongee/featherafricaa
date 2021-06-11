import './App.css';
import Landing from './sections/landing/landing'
import NavBar from './components/TitleBar/NavBar'
const App = () => {
  return (

    <div className = 'container'>

      <NavBar/>
      <Landing/>
      
    </div>

  );
}

export default App;

