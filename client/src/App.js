import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { RegistrationForm } from './components/RegistrationForm';
import { RegistrationDisplay } from "./components/RegistrationsDisplay";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={RegistrationForm} />
        <Route exact path="/display" component={RegistrationDisplay} />
    </Switch>
    </BrowserRouter>

  );
}

export default App;
