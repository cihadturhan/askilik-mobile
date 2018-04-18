import React, { PureComponent } from "react"
import { TouchableOpacity, Image, Text } from "react-native"
import { connect } from "react-redux"
import { NavigationActions } from "react-navigation"
import PropTypes from "prop-types"
import styles from "./styles/ConceptItemStyle"
import { Images } from "../themes"


@connect((_) => ({}))
class ConceptItem extends PureComponent {
  navigate = () => {
    const { data, dispatch } = this.props
    const action = NavigationActions.navigate({ routeName: "ConceptDetailScreen", params: { conceptItem: data } })
    dispatch(action)
  }

  render() {
    const { data: { imageIndex, title, followers } } = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={this.navigate}>
        <Image source={Images[`image${imageIndex}`]} style={{ width: 120, height: 120, marginBottom: 12 }}/>
        <Text style={styles.titleStatus}>{title}</Text>
        <Text>{followers.toFixed(2)}k takipçi</Text>
      </TouchableOpacity>
    )
  }
}

ConceptItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default ConceptItem
