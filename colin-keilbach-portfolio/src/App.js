import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo192.png" className="App-logo" alt="logo" />
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
        {Box("This website was made using React", "/logo192.png", "React Logo")}
      </header>
    </div>
  );
}

function Box(string, image, imageAlt) {
  return(
    <div className="Box">
      <img src={image} alt={imageAlt}/>
      <p className="BoxText">
        {string}
      </p>
    </div>
  );
}

export default App;
