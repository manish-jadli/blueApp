

import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native';

export default class Home extends React.Component {

  render(){
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>



        <ScrollView
          contentInsetAdjustmentBehavior="automatic">

          <View style={[styles.body,styles.scrollView, styles.pb100]}>

            <View style={[styles.helpContainer,styles.homebox,styles.bggreen]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Deposit')} style={[styles.paddingvertical]}>
            <Text style={styles.whiteText}>
              Deposit Amount
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.helpContainer,styles.homebox,styles.bgorange]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Withdrawn')}  style={[styles.paddingvertical]}>
            <Text style={styles.whiteText}>
              Withdrawn Amount
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.helpContainer, styles.homebox, styles.bggreen]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('TotalAmount')}  style={styles.paddingvertical}>
            <Text style={styles.whiteText}>
              Total Amount
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.helpContainer, styles.homebox, styles.bgorange]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Expenses')}  style={styles.paddingvertical}>
            <Text style={styles.whiteText}>
              Expenses
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.helpContainer, styles.homebox, styles.bggreen]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('OtherExpenses')}  style={styles.paddingvertical}>
            <Text style={styles.whiteText}>
              Others Expenses
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.helpContainer, styles.homebox, styles.bgorange]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Balance')}  style={styles.paddingvertical}>
            <Text style={styles.whiteText}>
              QR Scan
            </Text>
          </TouchableOpacity>
        </View>

          </View>
         
    
        </ScrollView>
        
        <View style={[styles.paddinglr,styles.footer]}>
            <Button style={[styles.f18,styles.footer]} title="LOGOUT" color="red" onPress={()=>this.props.navigation.navigate('Login')} />
          </View>

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
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor:'red',
    height:40
  },
  f18: {
    flex:1,
    color: '#fff',
    fontSize: 18
  },
  pb100:{
    paddingBottom:60
  }

});

