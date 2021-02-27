class MyToDoList extends React.Component {
  state = {
    userInput: "",
    toDoList: []
  };

  handleSubmit = () => {
    this.setState(({ toDoList }) => {
      const arr = toDoList.slice();
      arr.push(this.state.userInput);

      return {
        toDoList: arr,
        userInput: ""
      };
    });
  };
  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };
  delItem = ind => {
    this.setState(({ toDoList }) => {
      const arr = [...toDoList.slice(0, ind), ...toDoList.slice(ind + 1)];
      return {
        toDoList: arr
      };
    });
  };
  render() {
    const items = this.state.toDoList.map((item, i) => (
      <li key={i}>
        {item}
        <button onClick={() => this.delItem(i)}>del</button>
      </li>
    ));
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}