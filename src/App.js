import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './Home/home';
import AppBar from './Components/AppBar/AppBar'
import './bootstrap/dist/css/bootstrap.css';
import Play from './Play/Play';
import Login from './Login/Login';
import Signin from './Signin/Signin';

function App(props) {
  return (
    <div className="App">
      <AppBar/>
      <Container>
        <Router>
          <Route path='/' component={Home} exact></Route>
          <Route path='/play/:id' component={Play}></Route>
          <Route path='/Login' component={Login}></Route>
          <Route path='/Signin' component={Signin}></Route>
        </Router>
      </Container>
    </div>
  );
}

export default App
