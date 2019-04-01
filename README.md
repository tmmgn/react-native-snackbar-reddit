# React Native Snackbar Reddit

React Native Snackbar with reddit-like style

## Installation

`$ npm install react-native-snackbar-reddit --save`

## Usage

Inside your main app.js file define a snackbar provider

```js
import { SnackbarProvider } from 'react-native-snackbar-reddit';

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

Now you can user Snackbar inside any component of SnackProvider

```js
import { Snackbar } from 'react-native-snackbar-reddit';

export default class ExampleComponent extends Component {

  handleSnackbar = () => {
    Snackbar.info({
      content: "Info Snackbar Content",
    });

     Snackbar.error({
      content: "Error Snackbar Content",
      duration: 5,
      action: {
      	onPress: () => console.warn('Action Pressed'),
      	label: 'Action'
      },
      onClose: () => console.warn('Snackbar close'),
      darkTheme: true,
      aboveTabBar: true,
    });

      Snackbar.success({
      content: "Success Snackbar Content",
    });

       Snackbar.warning({
      content: "Warning Snackbar Content",
    });
  };

render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleSnackbar} >
        	<Text>Activate snackbar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
```

### Properties for all progress components

| Prop                                 | Description                                                                  | Default                |
| ------------------------------------ | ---------------------------------------------------------------------------- | ---------------------- |
| **`content`**                        | Content of Snackbar.                             							  | _None_                 |
| **`duration`**                  	   | Delay time to cloase Snackbar in seconds. 									  | `4`                    |
| **`action`** 						   | Sets action for snackbar           										  | `{}`             	   |
| **`onClose`**                        | A callback function Triggered when the Snackbar is closed  				  | `() => {}`             |
| **`darkTheme`**                      | Sets dark theme of Snackbar.                                                 | `false` 			   |
| **`aboveTabBar`**                    | Sets Snackbar appearance above tab bar                                       | `false`                |

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Alexander Bogdanov 2019-
