import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function MiComponenteA(props)  {
  console.log(props.children);
     return  props.children  
}

function MiComponenteB(props)  {
     return <p> {props.nombre} with react today  </p>   
}


class MiComponenteDeClase extends Component {
  render() {
     return <p> Hola soy de la clase </p> 
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Nelson"
    return (
      <div>
        <MiComponenteA nombre= {nombre} >
          <p> children 1 componente A </p>
          <p> children 2 componente A  </p>
          <p> {2+3+6}  </p>
        </MiComponenteA>
        <MiComponenteB nombre= {nombre}  />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
