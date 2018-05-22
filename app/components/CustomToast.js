import React, { PureComponent } from 'react';
import { Text, Easing, Animated } from 'react-native';

import styles from './styles/CustomToastStyle';

const COMMON_ATTRS = {
  easing: Easing.bezier(0.0, 0.66, 0.2, 1),
  duration: 400,
  useNativeDriver: true
};

class CustomToast extends PureComponent {

  static registered = null;

  static register(component) {
    this.registered = component;
  }

  static show(message, type) {
    if (this.registered) {
      this.registered.show(message, type);
    }
  }

  height = 50;
  animatedValue = new Animated.Value(0);
  animationWaiting = false;
  toastShown = false;

  state = {
    message: '',
    type: 'default',
    translateYAnim: this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 0]
    })
  };

  componentWillMount() {
    this.constructor.register(this);
  }

  componentDidUpdate() {

  }

  show = (message = ' ', type = 'default') => {
    if (this.toastShown) {
      return;
    }

    this.animationWaiting = true;
    this.setState({
      type,
      message,
    });

    setTimeout(this.performAnimationIfNeeded, 100);
  };

  hide = () => {
    setTimeout(() => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 0,
          ...COMMON_ATTRS
        }).start(() => this.toastShown = false );
    }, 2000);
  };

  performAnimationIfNeeded = () => {
    if (this.animationWaiting) {

      const translateYAnim = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-this.height, 0]
      });

      this.setState({translateYAnim});

      Animated
        .timing(this.animatedValue, {
          toValue: 1,
          ...COMMON_ATTRS
        })
        .start(this.hide);
      this.animationWaiting = false;
    }
  };

  handleLayout = event => {
    console.log('handle layout');
    const { height } = event.nativeEvent.layout;
    this.height = height;
    this.performAnimationIfNeeded();
  };

  render() {
    const { message, type, translateYAnim } = this.state;

    return (<Animated.View
        style={[
          styles.container,
          styles[type],
          { transform: [{ translateY: translateYAnim }] }
        ]}
        onLayout={this.handleLayout}
      >
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    );
  }
}

export default CustomToast;
