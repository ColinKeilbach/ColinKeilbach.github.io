import './App.css';
import React, {useRef, useEffect} from 'react';

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
        <Node string="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <button onClick={() => {
          let node = document.querySelector(".Node");

          node.classList.toggle("off");
          node.classList.toggle("on");
        }}>Test Button</button>
      </header>
    </div>
  );
}

function Box({string}) {
  return(
    <div className="Box">
      {string}
    </div>
  );
}

function Circle() {
  return(
    <div className="Circle"></div>
  )
}

function Node({string}) {
  const ref = useRef(null);

  useEffect(() => {
    let {height} = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--height", height + "px");
  }, []);

  return(
    <div className="Node off" ref={ref}>
      {string}
    </div>
  )
}

export default App;
