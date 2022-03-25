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
        <Node title="Project Title" date="Feb 2021 - March 2022" description="This text is a description of the project. Click the link below to go to the full page on this project." src="/testImage.png" alt="Test Image" href="" background="orange"/>
        <button onClick={() => {
          let node = document.querySelector(".Node");
          let img = node.querySelector(".NodeImage");

          node.classList.toggle("off");
          node.classList.toggle("on");
          img.classList.toggle("off");
          img.classList.toggle("on");
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

// Node element
function Node({title, date, description, src, alt, href, background}) {
  const ref = useRef(null);

  useEffect(() => {
    let {height} = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--height", height + "px");
    ref.current.style.setProperty("--background-color", background);
  }, []);

  return(
    <div className="Node off" ref={ref}>
      <div className="NodeHeader">
        <img className="NodeImage off" src={src} alt={alt}/>
        <div className="NodeTitleDate">
          <h1 className="NodeTitle">{title}</h1>
          <p className="NodeDate">{date}</p>
        </div>
      </div>
      <p className="NodeDescription">{description}</p>
      <a className="NodeLink"
        href={href}
        target="_self"
        rel="noopener noreferrer"
        >See more information →</a>
    </div>
  );
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


export default App;
