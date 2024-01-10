import logo from './logo.svg';
import './App.css';
import { LoginInput } from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <LoginInput />
    </div>
  );
}

export default App;
