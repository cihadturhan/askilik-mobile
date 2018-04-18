import React from "react"
import { View, Text, ScrollView } from "react-native"
import PropTypes from "prop-types"
import styles from "./styles/ConceptStyle"
import ConceptItem from "./ConceptItem"

const Concept = props => {
  const {data: {items, title, subtitle}} = props

  return (
    <View style={styles.container}>
      <Text style={styles.title2}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>

      <ScrollView contentContainerStyle={{ paddingTop: 16, paddingBottom: 56 }} horizontal overScrollMode="always">
        <View style={{ flexDirection: "row" }}>
          {items.map(data => <ConceptItem key={data.id} data={data}/>)}
        </View>
      </ScrollView>
    </View>
  )
}

Concept.propTypes = {
  data: PropTypes.object.isRequired
}

export default Concept
