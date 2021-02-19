import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>A change on master, that should not conflict</p>
        <p>Honestly</p>
        <p>A change for 49</p>
        <p>This is a change I want to stage - but I now need to amend!!! Please put in same commit</p>
        <p>and yet more stuff!!!</p>
        <p>This is my change in rebase branch</p>
        <p>I will get this right eventually...</p>
        <p>A no conflict change</p>
        <p>Squash 1</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Squash 2</p>
      </header>
    </div>
  );
}

export default App;
