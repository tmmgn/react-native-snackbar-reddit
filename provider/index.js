import React, { Component } from "react";
import Portal from "../portal";

export default class Provider extends Component {
  render() {
    return <Portal.Host>{this.props.children}</Portal.Host>;
  }
}
