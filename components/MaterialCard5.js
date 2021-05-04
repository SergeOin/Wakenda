import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCard5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Rgpd.jpg")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <Text style={styles.projetGrpd}>Projet GRPD</Text>
        <Text style={styles.subtitleStyle}>80 %</Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.voirEnDetail}>Voir en détail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.supprimerLaTache}>Supprimer la tâche</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton3}>
          <Icon name="chevron-up" style={styles.iconStyle}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 210
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  projetGrpd: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  voirEnDetail: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  supprimerLaTache: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton3: {
    padding: 8,
    height: 36,
    position: "absolute",
    right: 8,
    bottom: 12
  },
  iconStyle: {
    fontSize: 24,
    color: "#000",
    opacity: 0.7
  }
});

export default MaterialCard5;