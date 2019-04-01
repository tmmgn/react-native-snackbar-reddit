import React from "react";
import Portal from "../portal";
import SnackContainer from "./SnackContainer";

function notice(
  content,
  type,
  duration,
  action,
  onClose,
  darkTheme,
  aboveTabBar
) {
  const key = Portal.add(
    <SnackContainer
      content={content}
      duration={duration}
      onClose={onClose}
      type={type}
      action={action}
      darkTheme={darkTheme}
      aboveTabBar={aboveTabBar}
      onAnimationEnd={() => Portal.remove(key)}
    />
  );
  return key;
}

export default {
  SHORT: 4,
  MEDIUM: 7,
  LONG: 10,
  show({ content, duration, action, onClose, darkTheme, aboveTabBar }) {
    return notice(
      content,
      "info",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar
    );
  },
  info({ content, duration, action, onClose, darkTheme, aboveTabBar }) {
    return notice(
      content,
      "info",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar
    );
  },
  success({ content, duration, action, onClose, darkTheme, aboveTabBar }) {
    return notice(
      content,
      "success",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar
    );
  },
  error({ content, duration, action, onClose, darkTheme, aboveTabBar }) {
    return notice(
      content,
      "error",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar
    );
  },
  warning({ content, duration, action, onClose, darkTheme, aboveTabBar }) {
    return notice(
      content,
      "warning",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar
    );
  }
};
