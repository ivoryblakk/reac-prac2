import React from 'react';


//PRESENTATIONAL COMPONENT

//the presentational component will always end up like this: one render() function, and no other properties
export class GuineaPigs extends React.Component {
  render() {
  const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}


//A component class written as a function is called a stateless functional component. 
//Stateless functional components have some advantages over typical component classes.

// A component class written in the usual way:
/*
    export class MyComponentClass extends React.Component {
     render() {
      return <h1>Hello world</h1>;
        }
    }
  
  // The same component class, written as a stateless functional component:
  
    export const MyComponentClass = () => {
         return <h1>Hello world</h1>;
      }
  */