import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles/HeaderLeftStyle'
import { Images } from '../themes';

export default class HeaderLeft extends PureComponent {

  handleMenuPress = () => {
    const { screenProps } = this.props;
    screenProps.openDrawer();
  };

  handleBackPress = () => {
    const { navigation: { goBack } } = this.props;
    goBack(null);
  };

  render() {
    const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
    const { navigationOptions } = this.props;
    const { hideBack, hideMenu } = navigationOptions;

    return (
      <View style={styles.container}>
        {!hideBack && <TouchableOpacity
          hitSlop={ hitSlop }
          onPress={this.handleBackPress}
          style={styles.iconButton}
        >
          <Icon name="arrow-left" type="feather"/>
        </TouchableOpacity>
        }
        {!hideMenu && (<TouchableOpacity
          hitSlop={ hitSlop }
          onPress={this.handleMenuPress}
          style={styles.iconButton}
        >
          <Icon name="menu" type="feather"/>
        </TouchableOpacity>)}
      </View>


    )
  }
}
