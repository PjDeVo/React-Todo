import React from "react";
import "./components/Todo.css";
import ToDoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          toDo: "something",
          done: false,
          id: 0
        },
        {
          toDo: "something else",
          done: false,
          id: 1
        }
      ],

      formValue: ""
    };
  }

  handleChange = e => {
    this.setState({
      formValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      list: [
        ...this.state.list,
        {
          toDo: this.state.formValue,
          done: false,
          id: this.state.list.length + 1
        }
      ]
    });
  };

  toggleDone = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    });
  };

  clearDone = e => {
    this.setState({
      list: this.state.list.filter(item => {
        return !item.done;
      })
    });
  };
  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>What Do I need To Remember To Do?</label>
          <input
            value={this.state.formValue}
            name="toDo"
            type="text"
            placeholder="what to do..."
            onChange={this.handleChange}
          />
          <button> add</button>
        </form>
        <ToDoList done={this.toggleDone} list={this.state.list} />
        <button className="clear-contents" onClick={this.clearDone}>
          {" "}
          Clear Contents
        </button>
      </div>
    );
  }
}

export default App;
