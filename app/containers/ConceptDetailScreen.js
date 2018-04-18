import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import CustomScrollAwareView from "../components/CustomScrollAwareView"
import styles from "./styles/ConceptDetailScreenStyle"
import FeedItem from "../components/FeedItem"

@connect((_) => ({}))
class ConceptDetailScreen extends Component {
  static navigationOptions = {
    title: ""
  }

  render() {
    const {
      navigation: {
        state: {
          params: {
            conceptItem: { title, followers, feeds }
          }
        }
      }
    } = this.props

    return (
      <CustomScrollAwareView style={styles.container}>
        <View>
          <Text style={styles.title1}>{title}</Text>
          <Text style={styles.subtitle}>{followers.toFixed(2)}k takipci</Text>
          { feeds.map(feed => <FeedItem key={feed.id} data={feed}/>)}
        </View>
      </CustomScrollAwareView>
    )
  }
}

export default ConceptDetailScreen
