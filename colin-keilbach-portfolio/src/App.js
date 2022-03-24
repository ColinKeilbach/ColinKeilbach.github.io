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
        <Node title="Project Title" description="This text is a description of the project. Click the link below to go to the full page on this project." src="/testImage.png" alt="Logo" href=""/>
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

function Node({title, description, src, alt, href}) {
  const ref = useRef(null);

  useEffect(() => {
    let {height} = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--height", height + "px");
  }, []);

  return(
    <div className="Node off" ref={ref}>
      <img className="NodeImage" src={src} alt={alt}/>
      <a className="NodeTitle">{title}</a>
      <p className="NodeDescription">{description}</p>
      <a className="NodeLink"
        href={href}
        target="_self"
        rel="noopener noreferrer"
        >See more information →</a>
    </div>
  )
}

export default App;
