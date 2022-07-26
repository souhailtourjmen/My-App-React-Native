
import React from 'react';
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import SearchBar from './Components/Search';
const image = require('./assets/bg.png');
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>

      <ScrollView style={styles.Block_img}>
        <View style={styles.imgs}>
          <Text>block image</Text>
        </View>
        <View style={styles.info}>
          <Text>block Info</Text>
        </View>
      </ScrollView>

      <ScrollView style={styles.Block_desc}>
        <View style={styles.desc}>
           <Text>block desc</Text>
          </View>
      </ScrollView>
      <View style={styles.footerBar}>
        <Text>block footerBar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    flexDirection:'column',
    backgroundColor:"#1A1A1A",
  },
  searchBar:{
    flex: 1,
    backgroundColor:"#333333",
  },
  Block_img:{
    flex: 4,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    marginRight:5,
    
  },
  info:{
    flex:2,
    marginTop:2,
    marginBottom:2,
    marginLeft:2,
    marginRight:2,
  },
  Block_desc:{
    flex:4,
    marginTop:2,
    marginBottom:2,
    marginLeft:2,
    marginRight:2,
  },
  footerBar:{
    flex:1,
    backgroundColor:"#333333",
  }
});
