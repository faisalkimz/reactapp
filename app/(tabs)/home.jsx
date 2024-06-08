import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class home extends Component {
  render() {
    return (
      <View>
        <Text style= {{
            fontSize: 30,
            fontFamily: "outfit"
        }
        }>home</Text>
      </View>
    )
  }
}