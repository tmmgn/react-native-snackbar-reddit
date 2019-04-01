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
  aboveTabBar,
  tabBarHeight,
  borderColor,
  actionTextColor,
  contentStyle
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
      tabBarHeight={tabBarHeight}
      borderColor={borderColor}
      actionTextColor={actionTextColor}
      contentStyle={contentStyle}
      onAnimationEnd={() => Portal.remove(key)}
    />
  );
  return key;
}

export default {
  SHORT: 4,
  MEDIUM: 7,
  LONG: 10,
  show({
    content,
    duration,
    action,
    onClose,
    darkTheme,
    aboveTabBar,
    tabBarHeight,
    borderColor,
    actionTextColor,
    contentStyle
  }) {
    return notice(
      content,
      "info",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar,
      tabBarHeight,
      borderColor,
      actionTextColor,
      contentStyle
    );
  },
  info({
    content,
    duration,
    action,
    onClose,
    darkTheme,
    aboveTabBar,
    tabBarHeight,
    borderColor,
    actionTextColor,
    contentStyle
  }) {
    return notice(
      content,
      "info",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar,
      tabBarHeight,
      borderColor,
      actionTextColor,
      contentStyle
    );
  },
  success({
    content,
    duration,
    action,
    onClose,
    darkTheme,
    aboveTabBar,
    tabBarHeight,
    borderColor,
    actionTextColor,
    contentStyle
  }) {
    return notice(
      content,
      "success",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar,
      tabBarHeight,
      borderColor,
      actionTextColor,
      contentStyle
    );
  },
  error({
    content,
    duration,
    action,
    onClose,
    darkTheme,
    aboveTabBar,
    tabBarHeight,
    borderColor,
    actionTextColor,
    contentStyle
  }) {
    return notice(
      content,
      "error",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar,
      tabBarHeight,
      borderColor,
      actionTextColor,
      contentStyle
    );
  },
  warning({
    content,
    duration,
    action,
    onClose,
    darkTheme,
    aboveTabBar,
    tabBarHeight,
    borderColor,
    actionTextColor,
    contentStyle
  }) {
    return notice(
      content,
      "warning",
      duration,
      action,
      onClose,
      darkTheme,
      aboveTabBar,
      tabBarHeight,
      borderColor,
      actionTextColor,
      contentStyle
    );
  }
};
