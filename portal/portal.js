import React from "react";
import PortalConsumer from "./portal-consumer";
import PortalHost, { portal, PortalContext } from "./portal-host";

class Portal extends React.Component {
  static Host = PortalHost;
  static add = portal.add;
  static remove = portal.remove;

  render() {
    const { children } = this.props;

    return (
      <PortalContext.Consumer>
        {manager => (
          <PortalConsumer manager={manager}>{children}</PortalConsumer>
        )}
      </PortalContext.Consumer>
    );
  }
}

export default Portal;
