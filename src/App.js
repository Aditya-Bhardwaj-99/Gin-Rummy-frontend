import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/home';
import AppBar from './Components/AppBar/AppBar'
import './bootstrap/dist/css/bootstrap.css';
import Play from './Play/Play';
import Login from './Login/Login';
import Signin from './Signin/Signin';
import ConfirmMail from './ConfirmMail/ConfirmMail';
import MailRedirect from './MailRedirect/MailRedirect';
import Profile from './Profile/Profile';
import { Container } from 'react-bootstrap';

function App(props) {
  return (
    <div className="App">
      <Router>
        <AppBar/>
        <Container>
            <Route path='/' component={Home} exact></Route>
            <Route path='/play/:id' component={Play}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/signin' component={Signin}></Route>
            <Route path='/confirmmail' component={ConfirmMail}></Route>
            <Route path='/mailredirectcheckjwt/:tok' component={MailRedirect}></Route>
            <Route path='/profile' component={Profile}></Route>
        </Container>
      </Router>
      
    </div>
  );
}

export default App
