import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import todoitems from "./Todoitems.js";


console.log(todoitems[todoitems.length - 1].id + 1);
//Creating an Array of functional Compnents App by importing the data and App functional component

//using class functional component and implementing states
class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: todoitems
    };

    //this.handleClick = this.handleClick.bind(this); (FOR THIS READ THE REACT ARTICLES FOR this KEYWORD AND EVENT HANDLERS CONCEPT)
  }

  handleClick = id => {
    //console.log("handleClick called");
    //console.log(this.state.todo);

    const newtodolist = this.state.todo.map(val => {
      val.isDone = val.id === id ? !val.isDone : val.isDone;
      return val;
    });

    this.setState({ todo: newtodolist });
  };

  addTodo = newtodo => {
    const newtodoObj = {
      id: todoitems[todoitems.length - 1].id + 1,
      task: newtodo,
      isDone: false
    };
    todoitems.push(newtodoObj);

    this.setState({ todo: todoitems });
  };
  render() {
    //Array of fucntional component
    const arrApp = this.state.todo.map(val => {
      return (
        <App
          key={val.id}
          id={val.id}
          task={val.task}
          isDone={val.isDone}
          handleClick={this.handleClick}
        />
      );
    });
    let newtodo;
    return (
      <>
        {arrApp}
        <input
          type="text"
          
          onChange={e => {
            newtodo = e.target.value;
          }}
        />
        <button onClick={() => this.addTodo(newtodo)}>Add</button>
      </>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
