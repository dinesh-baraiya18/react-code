import { Component } from "react";

export default class Class2 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <h4>hello, {this.props.name}</h4>
      </>
    );
  }
}
