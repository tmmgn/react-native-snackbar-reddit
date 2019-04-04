# React Native Snackbar Reddit

React Native Snackbar with reddit-like style

![Success](https://user-images.githubusercontent.com/11463030/55329083-7538e000-5496-11e9-8cc6-8c6df0209ac1.png)
![Error](https://user-images.githubusercontent.com/11463030/55329110-8124a200-5496-11e9-8346-96023577380f.png)
![Warning](https://user-images.githubusercontent.com/11463030/55329112-81bd3880-5496-11e9-90e7-1247bf7c5c5e.png)
![Info](https://user-images.githubusercontent.com/11463030/55329113-8255cf00-5496-11e9-9b4a-d085c46532b1.png)
![With Action](https://user-images.githubusercontent.com/11463030/55329115-8255cf00-5496-11e9-8ba1-74a0b6d022c5.png)
![Dark Theme](https://user-images.githubusercontent.com/11463030/55329114-8255cf00-5496-11e9-9be8-0e258b0bd276.png)

## Installation

`$ npm install react-native-snackbar-reddit --save`

## Usage

Inside your main app.js file define a snackbar provider

```js
import { SnackProvider } from 'react-native-snackbar-reddit';

export default class App extends Component {
  render() {
    return (
      <SnackProvider>
        {...}
      </SnackProvider>
    );
  }
}
```

Now you can use Snackbar inside any component of SnackProvider.  
There are 4 types of snackbar with different border colors: `Snackbar.info()`, `Snackbar.error()`, `Snackbar.success()`, `Snackbar.warning()`

```js
import { Snackbar } from "react-native-snackbar-reddit";

export default class ExampleComponent extends Component {
  handleInfoSnackbar = () => {
    Snackbar.info({
      content: "Info Snackbar Content"
    });
  };

  handleErrorSnackbar = () => {
    Snackbar.error({
      content: "Error Snackbar Content",
      duration: 5,
      action: {
        onPress: () => console.warn("Action Pressed"),
        label: "Action"
      },
      onClose: () => console.warn("Snackbar close"),
      darkTheme: true,
      aboveTabBar: true
    });
  };

  handleSuccessSnackbar = () => {
    Snackbar.success({
      content: "Success Snackbar Content"
    });
  };

  handleWarningSnackbar = () => {
    Snackbar.warning({
      content: "Warning Snackbar Content"
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleInfoSnackbar}>
          <Text>Info Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleErrorSnackbar}>
          <Text>Error Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleSuccessSnackbar}>
          <Text>Success Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleWarningSnackbar}>
          <Text>Warning snack</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
```

### Properties for all snackbars

Content is required prop, every other prop is optional

| Prop                  | Description                                                  | Default    |
| --------------------- | ------------------------------------------------------------ | ---------- |
| **`content`**         | Content of Snackbar. Required                                | _None_     |
| **`duration`**        | Delay time to cloase Snackbar in seconds                     | `4`        |
| **`action`**          | Sets action for snackbar                                     | `{}`       |
| **`onClose`**         | A callback function Triggered when the Snackbar is closed    | `() => {}` |
| **`actionTextColor`** | Custom action button text color                              | `#757575`  |
| **`contentStyle`**    | Style object for snackbar text styling                       | `{}`       |
| **`aboveTabBar`**     | Sets Snackbar appearance above tab bar                       | `false`    |
| **`tabBarHeight`**    | TabBar Height in px. Works only when aboveTabBar set to true | `56`       |
| **`borderColor`**     | Custom border color                                          |            |
| **`position`**        | Snackbar position. Values are "top" and "bottom"             | `bottom`   |
| **`disableBorder`**   | Prop for disabling border on Snackbar                        | `false`    |
| **`borderWidth`**     | Snackbar border width                                        | `5`        |

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Alexander Bogdanov 2019-
