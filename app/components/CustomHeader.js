import React, { Component } from 'react'
import { View, Text, Animated, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import styles from './styles/CustomHeaderStyle';

@connect(() => ({}))
class CustomHeader extends Component {
  render() {
    const { navigation, getScreenDetails, scene, screenProps } = this.props;
    const sceneOptions = getScreenDetails(scene).options;
    const { transparent, title, animatedValue, subTitle } = sceneOptions;
    const headerTitle = typeof title === 'string' ? title : '';

    const containerStyle = [
      styles.container,
      transparent ? styles.transparent : {},
      (transparent && animatedValue ) ? { backgroundColor: animatedValue } : {}
    ];

    return (<SafeAreaView>
      <Animated.View style={containerStyle}>
        <View style={styles.content}>
          <HeaderLeft navigation={navigation}
                      navigationOptions={sceneOptions}
                      screenProps={screenProps}/>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={styles.titleHeader}>{headerTitle || ''}</Text>
            <Text style={[styles.titleHeaderCurrency, {marginLeft: 8}]}>{subTitle || ''}</Text>
          </View>
          <HeaderRight navigation={navigation} navigationOptions={sceneOptions}/>
        </View>
      </Animated.View>
    </SafeAreaView>)
  }
}

export default CustomHeader;
