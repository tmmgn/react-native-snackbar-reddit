import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity
} from "react-native";

const DURATION_SHORT = 4;
const DURATION_MEDIUM = 7;
const DURATION_LONG = 10;

class Snackbar extends Component {
  static DURATION_SHORT = DURATION_SHORT;

  static DURATION_MEDIUM = DURATION_MEDIUM;

  static DURATION_LONG = DURATION_LONG;

  static defaultProps = {
    duration: DURATION_SHORT,
    onClose: () => {}
  };

  state = {
    opacity: new Animated.Value(0.0)
  };

  componentDidMount() {
    const timing = Animated.timing;
    const { onClose, onAnimationEnd, duration } = this.props;
    if (this.anim) {
      this.anim = null;
    }
    const animArr = [
      timing(this.state.opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.delay(duration * 1000)
    ];
    if (duration > 0) {
      animArr.push(
        timing(this.state.opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        })
      );
    }
    this.anim = Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;
        if (onClose) {
          onClose();
        }
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
  }

  _handleOnPress = () => {
    this.props.action.onPress();
    this.props.onAnimationEnd();
  };

  render() {
    const {
      content,
      action,
      style,
      type,
      darkTheme,
      aboveTabBar,
      tabBarHeight,
      borderColor,
      actionTextColor,
      contentStyle
    } = this.props;
    const borderColor = borderColor
      ? borderColor
      : type === "info"
      ? "#1890ff"
      : type === "success"
      ? "#4CAF50"
      : type === "error"
      ? "#f5222d"
      : type === "warning"
      ? "#faad14"
      : "#4CAF50";
    return (
      <SafeAreaView
        pointerEvents="box-none"
        style={[
          styles.wrapper,
          { bottom: aboveTabBar ? (tabBarHeight ? tabBarHeight : 56) : 0 }
        ]}
      >
        <Animated.View
          pointerEvents="box-none"
          accessibilityLiveRegion="polite"
          style={{
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1]
                })
              }
            ]
          }}
        >
          <View
            pointerEvents="box-none"
            style={[
              styles.container,
              {
                backgroundColor: darkTheme ? "#323232" : "#ffffff",
                borderRadius: 5,
                borderLeftWidth: 5,
                borderColor: borderColor
              },
              style
            ]}
          >
            <Text
              style={[
                {
                  color: darkTheme ? "#ffffff" : "#000000"
                },
                contentStyle,
                styles.content
              ]}
            >
              {content}
            </Text>
            {action ? (
              <TouchableOpacity
                onPress={this._handleOnPress}
                style={styles.button}
                compact
                mode="text"
              >
                <Text
                  style={{
                    color: actionTextColor
                      ? actionTextColor
                      : darkTheme
                      ? "#eeeeee"
                      : "#757575"
                  }}
                >
                  {action.label.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </Animated.View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxWidth: 420
  },
  container: {
    elevation: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    minHeight: 48,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    paddingRight: 16
  },
  content: {
    marginLeft: 16,
    marginVertical: 8,
    flexWrap: "wrap",
    flex: 1
  },
  button: {
    minWidth: 36,
    minHeight: 36,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    marginLeft: 8
  }
});

export default Snackbar;
