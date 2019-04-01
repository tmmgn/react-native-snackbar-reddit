import React from "react";

export default class PortalConsumer extends React.Component {
  _key;
  async componentDidMount() {
    if (!this.props.manager) {
      throw new Error(
        "Looks like you forgot to wrap your root component with `Provider` component from `react-native-snackbar-reddit`.\n\n"
      );
    }

    // Delay updating to prevent React from going to infinite loop
    await Promise.resolve();

    this._key = this.props.manager.mount(this.props.children);
  }

  componentDidUpdate() {
    this.props.manager.update(this._key, this.props.children);
  }

  componentWillUnmount() {
    this.props.manager.unmount(this._key);
  }

  render() {
    return null;
  }
}
