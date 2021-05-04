import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CupertinoHeaderWithLargeTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.vosObjectifs}>
          Vos Objectifs
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 8,
    paddingLeft: 8
  },
  textWrapper: {
    height: 96,
    paddingLeft: 5,
    justifyContent: "center"
  },
  vosObjectifs: {
    fontSize: 34,
    lineHeight: 40,
    color: "#000"
  }
});

export default CupertinoHeaderWithLargeTitle;
