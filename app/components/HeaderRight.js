import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux';
import styles from './styles/HeaderRightStyle'
import { Images } from '../themes';

@connect(() => ({}))
export default class HeaderRight extends Component {
  state = {
    searchShown: false,
    searchText: '',
  };

  handlePress = () => {
    this.props.dispatch({ type: 'rateModel/updateState', payload: { searchShown: true } });
  };

  render() {
    const { navigationOptions: { hideProfile } } = this.props;
    return (
      <View style={styles.container}>
        {!(hideProfile) && (<TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={this.handlePress}>
          <Image source={Images.icSearch}/>
        </TouchableOpacity>)
        }
      </View>
    )
  }
}
