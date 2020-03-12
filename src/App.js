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

      formValue: " "
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
      list: [...this.state.list, this.state.formValue]
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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <form onSubmit={this.handleSubmit}>
          <label>To Do </label>
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
      </div>
    );
  }
}

export default App;
