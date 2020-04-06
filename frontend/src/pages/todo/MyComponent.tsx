import React, { Component } from "react";
import MyList from "./MyList";
import InputContainer from "./InputContainer";
import { signIn } from "../../api/auth-api";

type MyState = {
  value: string;
  list: Array<string>;
};

class MyComponent extends Component {
  state: MyState = {
    value: "",
    list: [],
  };
  async componentDidMount() {
    signIn('admin@example.com', 'Qwerty1');
  }
  render() {
    const { value, list } = this.state;
    return (
      <div>
        <InputContainer
          value={value}
          onChange={(event) => this.setState({ value: event.target.value })}
          onAddItem={() =>
            this.setState((prevProps: MyState) => ({
              list: [...prevProps.list, prevProps.value],
              value: "",
            }))
          }
        />
        <MyList list={list} />
      </div>
    );
  }
}
export default MyComponent;
