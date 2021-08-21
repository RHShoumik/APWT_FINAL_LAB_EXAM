import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './components/Header'
import {BrowserRouter , Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Employee from './components/Employee'
import UpdateEmployee from './components/UpdateEmployee'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Job Portal Project</h1>
        <Route path = "/Login">
          <Login />
        </Route>
        <Route path = "/register">
          <Register />
        </Route>
        <Route path = "/Employee">
          <Employee />
        </Route>
        <Route path = "/UpdateEmployee">
          <UpdateEmployee />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;