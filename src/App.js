import React from 'react';
import thunk from 'redux-thunk';
import { LogBox } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from "react-native-flash-message";
import { withNavigationFocus } from "@react-navigation/stack";
import Routes from './routes';
import reducers from './reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk
    )
  ),
);

// const MainApp = () => {
//   LogBox.ignoreLogs(['Warning: Cannot update a component from inside the function body of a different component']);
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Routes />
//       </NavigationContainer>
//       <FlashMessage position="top" />
//     </SafeAreaProvider>
//   );
// }

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: '',
      loading: true,
      counter: 0,
      timer: null
    }
  }
  
  componentDidMount() {
    // this.adjustCounter();
    // setInterval(() => console.log('hehe'), 2000)
    LogBox.ignoreLogs(['Warning: Cannot update a component from inside the function body of a different component']);
  }

  addCounter = () => {
    this.timer = setTimeout(() => {
      this.setState({ counter: this.state.counter + 1 });
      this.adjustCounter();
    }, 3000);
    if (this.state.counter > 1) {
      clearTimeout(this.timer);
    }
  }

  adjustCounter = () => {
    this.addCounter();
  }

  componentDidUpdate(prevProps) {
    console.log('update');
    console.log(prevProps);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(nextProps);
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    return null
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <FlashMessage position="top" />
      </SafeAreaProvider>
    )
  }
}


const App = () => {
  return (
    <StoreProvider store={store}>
      <MainApp />
    </StoreProvider>
  )
}

export default App
