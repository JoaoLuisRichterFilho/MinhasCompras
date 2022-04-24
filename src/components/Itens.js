import React from "react";
import {View, StyleSheet} from 'react-native'

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

styles = StyleSheet.create({
    item: {

    },
    title: {
        
    }
})

export default Item