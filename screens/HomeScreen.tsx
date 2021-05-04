import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Image, Text} from 'react-native';

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.rect12StackStack}>
        <View style={styles.rect12Stack}>
          <View style={styles.rect12}>
            <View style={styles.image2Row}>
              <Image
                source={require('../assets/images/instagram.png')}
                resizeMode="contain"
                style={styles.image2}
              />
              <Text style={styles.instagramPost}>Instagram Post</Text>
            </View>
            <View style={styles.progress2Row}>
              <Text style={styles.progress2}>Progress</Text>
              <Text style={styles.progress3}>43%</Text>
            </View>
            <View style={styles.rect16}>
              <View style={styles.rect15} />
            </View>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/logo-de-l'application-facebook.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.facebookPost}>Facebook Post</Text>
          </View>
          <View style={styles.progressRow}>
            <Text style={styles.progress}>Progress</Text>
            <Text style={styles.progress1}>67%</Text>
          </View>
          <View style={styles.rect8}>
            <View style={styles.rect9} />
          </View>
        </View>
        <View style={styles.rect} />
        <View style={styles.vueDensemble1Stack}>
          <Text style={styles.vueDensemble1}>
            Progression de vos tâches / Objectifs
          </Text>
          <Text style={styles.vueDensemble5}>Vue D&#39;ensemble</Text>
        </View>
      </View>
      <View style={styles.rect7Stack}>
        <View style={styles.rect7}>
          <Image
            source={require('../assets/images/Frame_3_(6).png')}
            resizeMode="contain"
            style={styles.image4}
          />
          <Text style={styles.besoinDaide}>Besoin d&#39;aide ?</Text>
          <Text style={styles.vueDensemble3}>
            Tester si votre emplois du {'\n'} temps est bien {'\n'} WHENEVER
          </Text>
          <View style={styles.rect14}>
            <Text style={styles.tester}>TESTER</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(43,76,117,1)',
  },
  rect12: {
    top: 209,
    left: 143,
    width: 147,
    height: 83,
    position: 'absolute',
    backgroundColor: 'rgba(43,76,117,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 15,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10,
  },
  image2: {
    width: 15,
    height: 15,
  },
  instagramPost: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginLeft: 13,
    marginTop: 1,
  },
  image2Row: {
    height: 15,
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 11,
    marginRight: 32,
  },
  progress2: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 6,
  },
  progress3: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 6,
    marginLeft: 72,
  },
  progress2Row: {
    height: 8,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 22,
  },
  rect16: {
    width: 115,
    height: 8,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 15,
    shadowOpacity: 0.44,
    shadowRadius: 5,
    marginTop: 1,
    marginLeft: 12,
  },
  rect15: {
    width: 53,
    height: 8,
    backgroundColor: 'rgba(240,26,115,1)',
    borderRadius: 100,
  },
  image3: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 255,
    width: 255,
  },
  rect12Stack: {
    top: 7,
    left: 32,
    width: 290,
    height: 292,
    position: 'absolute',
  },
  rect3: {
    top: 220,
    left: 0,
    width: 147,
    height: 83,
    position: 'absolute',
    backgroundColor: 'rgba(43,76,117,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 15,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10,
  },
  image: {
    width: 15,
    height: 15,
  },
  facebookPost: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    marginLeft: 10,
    marginTop: 1,
  },
  imageRow: {
    height: 15,
    flexDirection: 'row',
    marginTop: 13,
    marginLeft: 21,
    marginRight: 27,
  },
  progress: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 6,
  },
  progress1: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 6,
    marginLeft: 72,
  },
  progressRow: {
    height: 8,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 19,
    marginRight: 18,
  },
  rect8: {
    width: 115,
    height: 8,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 15,
    shadowOpacity: 0.44,
    shadowRadius: 5,
    marginTop: 1,
    marginLeft: 17,
  },
  rect9: {
    width: 84,
    height: 8,
    backgroundColor: 'rgba(240,26,115,1)',
    borderRadius: 100,
  },
  rect: {
    top: 78,
    left: 2,
    width: 311,
    height: 110,
    position: 'absolute',
    backgroundColor: 'rgba(43,76,117,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 15,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10,
  },
  vueDensemble1: {
    top: 19,
    left: 0,
    position: 'absolute',
    fontFamily: 'montserrat-regular',
    color: 'rgba(255,255,255,1)',
    lineHeight: 24,
    fontSize: 14,
  },
  vueDensemble5: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'montserrat-600',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  vueDensemble1Stack: {
    top: 0,
    left: 10,
    width: 274,
    height: 43,
    position: 'absolute',
  },
  rect12StackStack: {
    width: 322,
    height: 303,
    marginTop: 48,
    marginLeft: 24,
  },
  rect7: {
    top: 24,
    left: 0,
    width: 311,
    height: 253,
    position: 'absolute',
    backgroundColor: 'rgba(43,76,117,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 15,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 10,
  },
  besoinDaide: {
    fontFamily: 'montserrat-500',
    color: 'rgba(255,255,255,1)',
    lineHeight: 24,
    fontSize: 24,
    marginTop: 30,
    marginLeft: 24,
  },
  vueDensemble3: {
    fontFamily: 'montserrat-regular',
    color: 'rgba(255,255,255,1)',
    lineHeight: 24,
    fontSize: 15,
    marginTop: 15,
    marginLeft: 26,
  },
  rect14: {
    width: 200,
    height: 45,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 15,
    shadowOpacity: 0.54,
    shadowRadius: 5,
    marginTop: 29,
    marginLeft: 43,
  },
  tester: {
    fontFamily: 'montserrat-600',
    color: 'rgba(43,76,117,1)',
    lineHeight: 24,
    fontSize: 24,
    marginTop: 10,
    marginLeft: 53,
  },
  image4: {
    top: -25,
    left: 178,
    width: 277,
    height: 277,
    position: 'absolute',
  },
  rect7Stack: {
    width: 455,
    height: 277,
    marginTop: 11,
    marginLeft: 26,
  },
});

export default Untitled;
