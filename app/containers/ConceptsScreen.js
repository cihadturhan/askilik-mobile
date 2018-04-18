import React, { Component } from "react"
import { connect } from "react-redux"
import casual from "casual-browserify"

import CustomScrollAwareView from "../components/CustomScrollAwareView"
import styles from "./styles/ConceptsScreenStyle"
import Concept from "../components/Concept"
import { arrayOf } from "../utils/constants"

class ConceptsScreen extends Component {
  static navigationOptions = {
    title: "",
    hideBack: true
  }

  componentDidMount() {
    let open = false
    setInterval(() => {
      // this.props.navigation.navigate(open ? "DrawerClose" : "DrawerOpen")
      open = !open
    }, 5000)
  }

  state = {
    concepts: arrayOf(5 + Math.random() * 10, casual._concept)
  }

  render() {
    const { concepts } = this.state

    return (
      <CustomScrollAwareView style={styles.container}>
        {concepts.map(concept => <Concept key={concept.id} data={concept}/>)}
      </CustomScrollAwareView>
    )
  }
}

export default ConceptsScreen
