import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles/CustomButtonStyle';

const CustomButton = props => {
  const { type, ...restProps } = props;

  const titleCaseType = type.substr(0, 1).toUpperCase() + type.substr(1);

  const buttonProps = {
    containerViewStyle: [styles.container],
    buttonStyle: [styles.button, styles[`button${titleCaseType}`]],
    textStyle: styles[`button${titleCaseType}Text`]
  };

  return (
    <Button {...buttonProps} {...restProps}/>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'outline'])
};

CustomButton.defaultProps = {
  type: 'outline'
};

export default CustomButton;
