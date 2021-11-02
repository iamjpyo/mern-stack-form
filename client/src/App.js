import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { RegistrationForm } from './components/RegistrationForm';
import { RegistrationDisplay } from "./components/RegistrationsDisplay";


function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <RegistrationDisplay />
    </div>
  );
}

export default App;
