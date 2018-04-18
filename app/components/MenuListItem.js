import React from "react"
import { ListItem } from "react-native-elements"
import styles from "./styles/MenuListItemStyle"


const MenuListItem = props => {
  const { title, ...rest } = props
  return (<ListItem underlayColor="rgba(255, 255, 255, 0.3)"
                    avatarOverlayContainerStyle={{ backgroundColor: "transparent" }}
                    avatarContainerStyle={{ height: 25 }}
                    avatarStyle={{ width: 25, height: 25, resizeMode: "contain" }}
                    containerStyle={styles.listItem}
                    titleStyle={styles.subTitle}
                    hideChevron
                    title={title}
                    {...rest}
  />)
}

MenuListItem.propTypes = {
  ...ListItem.propTypes
}

export default MenuListItem
