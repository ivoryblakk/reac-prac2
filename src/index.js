import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './App';
import { ChildClass } from './App';
import { CChild } from './App';
import { CCChild } from './App';
import { Sibling } from './App2';
import { BestSeller } from './App';
import './index.css';
//import App from './App';

//_______________________________________________
/*STATELESS COMPONENTS FROM STATEFUL COMPONENTS
    Stateless Components Inherit From Stateful Components
    - stateful component pass its state to a stateless component.
    - To make that happen, you need two component classes: a stateful class, and a stateless class.
*/

class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: 'Frarthur' };
    }
  
    render() {
      return <Child  name={this.state.name} />;
    }
  };
  
  ReactDOM.render(
    <Parent />,
    document.getElementById('root')
  )
//A <Parent /> is supposed to pass its state to a <Child />.
//________________________________________________________
/* A component should never update this.props. 
Ex. 
class Bad extends React.Component {
  render() {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
}
//__________________________________________________________
A React component should use props to store
information that can be changed, but can only 
be changed by a different component.

A React component should use state to store information 
that the component itself can change.
*/

class ParentClass extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { totalClicks: 0 };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      const total = this.state.totalClicks;
  
      // calling handleClick will 
      // result in a state change:
      this.setState(
        { totalClicks: total + 1 }
      );
    }
  
    // The stateful component class passes down
    // handleClick to a stateless component class:
    render() {
      return (
        <ChildClass onClick={this.handleClick} />
      );
    }
  }
  ReactDOM.render(
    <ParentClass />,
    document.getElementById('root1'));
//__________________________________________________

/*
CHILD COMPONENTS UPDATE THEIR PARENTS' STATE
Receive the Event Handler

You just passed a function down to 
Child that can change Parent's state!
*/
class PParent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { name: 'Frarthur' };
      
      this.changeName = this.changeName.bind(this);
    }
    
    changeName(newName) {
      this.setState({
        name: newName
      });
    }
  
    render() {
      return(
          <div>
         <CChild name={this.state.name} onChange={this.changeName} />
         </div>
      )
    }
  }
  
  ReactDOM.render(
      <PParent />,
      document.getElementById('root2')
  );

//__________________________________________________

/*
CHILD COMPONENTS UPDATE THEIR SIBLINGS' PROPS
Pass the Right props to the Right Siblings
*/
class PPParent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { name: 'Frarthur' };
  
      this.changeName = this.changeName.bind(this);
    }
  
    changeName(newName) {
      this.setState({
        name: newName
      });
    }
  
    render() {
      return (
        <div>
          <CCChild 
          
            onChange={this.changeName} />
          <Sibling name = {this.state.name}  />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <PPParent />,
    document.getElementById('root3')
    /*
  CHILD COMPONENTS UPDATE THEIR SIBLINGS' PROPS
  Display Information in a Sibling Component
  You're on the last step!
  
  You've passed the name down to <Sibling /> as a prop. Now <Sibling /> has to display that prop.
  */
  );
//__________________________________________________
/*An inline style is a style that's 
   written as an attribute, like this:
  
  const styleMe = <h1 style = {{ background: 'lightblue', color: 'darkred' }} > Please style me! I am so bland!</h1>;
  
  ReactDOM.render(
      styleMe, 
      document.getElementById('app')
  );
  */
//__________________________________________________
  /*
  const styles = {
    background: 'lightblue',
    color:      'darkred'
  }
  
  const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;
  
  ReactDOM.render(
      styleMe, 
      document.getElementById('app')
  );
    */
   //__________________________________________________
  /*
    STYLE
    Style Name Syntax
    In regular JavaScript, style names are written in hyphenated-lowercase:
    
    const styles = {
      'margin-top':       "20px",
      'background-color': "green"
    };
    In React, those same names are instead written in camelCase:
    
    const styles = {
      marginTop:       "20px",
      backgroundColor: "green"
    };
    This has zero effect on style property values, only on style property names.*/
    //__________________________________________________

/* if you write a style value as a number, then the unit "px" is assumed.

How convenient! If you want a font size of 30px, you can write:

{ fontSize: 30 }

*/

//__________________________________________________

/*
CONTAINER COMPONENTS FROM PRESENTATIONAL COMPONENTS
Separate Container Components From Presentational 
Components: Apply */

export class BookList extends React.Component {
    render() {
      return (
        <div>
          <h1>Best Sellers</h1>
          <div>
            <ol>
              <BestSeller 
                title="Glory and War Stuff for Dads" 
                author="Sir Eldrich Van Hoorsgaard" 
                weeksOnList={10} />
              <BestSeller 
                title="The Crime Criminals!" 
                author="Brenda Sqrentun" 
                weeksOnList={2} />
              <BestSeller
                title="Subprime Lending For Punk Rockers" 
                author="Malcolm McLaren" 
                weeksOnList={600} />
            </ol>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
  <BookList />,
  document.getElementById('root4'));
  //___________________________________________________
 //REACT FORMS: Set the Input's Initial State
/*
Any time that someone types or deletes in <input />, the .handleUserInput() method will 
update this.state.userInput with the <input />'s text.

Since you're using this.setState, that means that Input needs an initial state! 
What should this.state's initial value be? answer this.state = { userInput: '' }
*/
 //
  export class Input extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { userInput: '' };
      
      this.handleUserInput = this.handleUserInput.bind(this);
    }
    
    handleUserInput(e) {
      this.setState({userInput: e.target.value});
    }
  
    render() {
      return (
        <div>
          <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
          <h1>{this.state.userInput}</h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(
      <Input />,
      document.getElementById('root5')
  );