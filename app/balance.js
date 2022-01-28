

import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import { Button } from 'react-native';

export default class Balance extends React.Component {

  constructor(props){
    super(props);

    this.state={active:false}
  }

  render(){
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>

      <ScrollView
          contentInsetAdjustmentBehavior="automatic">

            

          <View style={[styles.body,styles.scrollView, styles.pb100]}>

          
            <View style={{margin:8,borderColor:"#ddd",borderWidth:1}}>

            <View style={{flexDirection:"row", backgroundColor:"gray",paddingLeft:5,paddingRight:5}}>
            <Text style={{width:"33.33%",textAlign:"left"}}>Debit</Text>
            <Text style={{width:"33.33%",textAlign:"center"}}>Credit</Text>
            <Text style={{width:"33.33%",textAlign:"right"}}>Balance</Text>
            </View>
           
           <View style={{flexDirection:"row",backgroundColor:"lightgray",paddingLeft:5,paddingRight:5}}>
           <Text style={{width:"33.33%",textAlign:"left"}}>800</Text>
            <Text style={{width:"33.33%",textAlign:"center"}}>200</Text>
            <Text style={{width:"33.33%",textAlign:"right"}}>1000</Text>
            </View>

            <View style={{flexDirection:"row",paddingLeft:5,paddingRight:5}}>
            <Text style={{width:"33.33%",textAlign:"left"}}>800</Text>
            <Text style={{width:"33.33%",textAlign:"center"}}>200</Text>
            <Text style={{width:"33.33%",textAlign:"right"}}>1000</Text>
            </View>

            <View style={{flexDirection:"row",backgroundColor:"lightgray",paddingLeft:5,paddingRight:5}}>
            <Text style={{width:"33.33%",textAlign:"left"}}>800</Text>
            <Text style={{width:"33.33%",textAlign:"center"}}>200</Text>
            <Text style={{width:"33.33%",textAlign:"right"}}>1000</Text>
            </View>

            <View style={{flexDirection:"row",paddingLeft:5,paddingRight:5}}>
            <Text style={{width:"33.33%",textAlign:"left"}}>800</Text>
            <Text style={{width:"33.33%",textAlign:"center"}}>200</Text>
            <Text style={{width:"33.33%",textAlign:"right"}}>1000</Text>
            </View>

            <View style={{flexDirection:"row",backgroundColor:"lightgray",paddingLeft:5,paddingRight:5}}>
            <Text style={{width:"33.33%",textAlign:"left"}}>800</Text>
            <Text style={{width:"33.33%",textAlign:"center"}}>200</Text>
            <Text style={{width:"33.33%",textAlign:"right"}}>1000</Text>
            </View>

            <View style={{flexDirection:"row",paddingLeft:5,paddingRight:5}}>
            <Text style={{width:"33.33%",textAlign:"left"}}>800</Text>
            <Text style={{width:"33.33%",textAlign:"center"}}>200</Text>
            <Text style={{width:"33.33%",textAlign:"right"}}>1000</Text>
            </View>

            </View>

            <View style={{margin:8}}>
            <Button title="Back" color="red" onPress={()=>this.props.navigation.navigate('Home')} />
            </View>

          </View>
         
    
        </ScrollView>

       
      </SafeAreaView>


    </Fragment>
  );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: "#f8f8f8",
  },
  body: {
    backgroundColor: "white",
  },
  row:{
    backgroundColor:"blue",
    color:"white",
    flexDirection:"row",
    justifyContent:"flex-start",
    width:"100%"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paddinglr:{
    paddingLeft:10,
    paddingRight:10,
  },
  homebox:{
    paddingTop:70,
    paddingBottom:70,
    flex:8,
    color:"white",
    textAlign:"center",
    alignItems:"center",
    alignContent:"center",
    borderRadius:4
  },
  bggreen:{
    backgroundColor:"green"
  },
  bgorange:{
    backgroundColor:"orange"
  },
  contentContainer: {
    paddingTop: 40,
    paddingBottom:40
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  paddingvertical: {
    paddingVertical: 15,
  },
  whiteText: {
    fontSize: 18,
    color: '#fff',
    fontWeight:"600"
  },


});

