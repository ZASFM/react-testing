import logo from './logo.svg';
import './App.css';
import Login from './components/login';

function App() {
  let a=1;
  let b=2;
  return (
    <div className="App">
      App
{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Coco</li>
        </ul>
        <h1 data-testid="headerOne">Testing with title</h1>
        <span title='sum'>{a+b}</span>
      </header> */}
      <Login/>
    </div>
  );
}

export default App;
