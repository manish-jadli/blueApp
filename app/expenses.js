

import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';
import { Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default class Expenses extends React.Component {
    constructor(props){
        super(props);

        this.state={
            id:'',
            username:'',
            date:'',
            billDetail:'',
            accountType:'',
            bank:'',
            totalAmount:'',
            active:'',
            pause:false
            
        }
    }

    submitDeposit=()=>{
        if(this.state.username && this.state.date && this.state.billDetail && this.state.accountType && this.state.bank && this.state.totalAmount){
        
          fetch(`https://angular2-9b951.firebaseio.com/expenses.json`,{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(
              {username:this.state.username,
                date:this.state.date,
                billDetail:this.state.billDetail,
                accountType:this.state.accountType,
                bank:this.state.bank,
                totalAmount:this.state.totalAmount
              })
          })
          .catch((error) => console.error(error))
        
          this.setState({
          username:'',
            date:'',
            billDetail:'',
            accountType:'',
            bank:'',
            totalAmount:''
        })
        Alert.alert('Success','You have submit form successfully.')
        this.props.navigation.navigate('TotalAmount');
      }else if((!this.state.username && !this.state.date && !this.state.billDetail && !this.state.accountType && !this.state.bank && !this.state.totalAmount) || (!this.state.username || !this.state.date || !this.state.billDetail || !this.state.accountType || !this.state.bank || !this.state.totalAmount)){
        Alert.alert('Failed','Please fill all the required fields.')
      }else{
        Alert.alert('Failed','Please fill all the required fields correctly.')
      }
    }
      
      reset=()=>{
        if(this.state.username && this.state.date && this.state.billDetail && this.state.accountType && this.state.bank && this.state.totalAmount){
        this.setState({
          username:'',
            date:'',
            billDetail:'',
            accountType:'',
            bank:'',
            totalAmount:''
        })
        Alert.alert('Reset Success','You have reset form successfully.')
      }else if((!this.state.username && !this.state.date && !this.state.billDetail && !this.state.accountType && !this.state.bank && !this.state.totalAmount) || (!this.state.username || !this.state.date || !this.state.billDetail || !this.state.accountType || !this.state.bank || !this.state.totalAmount)){
        this.setState({
          username:'',
          date:'',
          billDetail:'',
          accountType:'',
          bank:'',
          totalAmount:''
      })
        Alert.alert('Already Reset','You have already reset.')
      }else{
        Alert.alert('Reset','You have reset form successfully.')
      }
    }



  render(){
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>


      <ScrollView
          contentInsetAdjustmentBehavior="automatic">

<View style={[styles.conatiner, styles.pt100,styles.paddinglr]}>
<Text></Text>
<TextInput
placeholder="Enter Username"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
<Text></Text>
<TextInput
placeholder="Enter Date"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(date) => this.setState({date})}
        value={this.state.date}
      />
<Text></Text>
<Picker
  selectedValue={this.state.accountType}
  style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
  onValueChange={(itemType, itemIndex) =>
    this.setState({accountType: itemType})
  }>
  <Picker.Item label="Select Account Type" value="Select Account Type" />
  <Picker.Item label="Saving" value="Saving" />
  <Picker.Item label="Current" value="Current" />
</Picker>
<Text></Text>
<Picker
  selectedValue={this.state.bank}
  style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({bank: itemValue})
  }>
  <Picker.Item label="Select Bank" value="Select Bank" />
  <Picker.Item label="State Bank of India" value="State Bank of India" />
  <Picker.Item label="Bank of Baroda" value="Bank of Baroda" />
  <Picker.Item label="India Overseas Bank" value="India Overseas Bank" />
  <Picker.Item label="Union Bank of India" value="Union Bank of India" />
  <Picker.Item label="Paytm Bank of India" value="Paytm Bank of India" />
  <Picker.Item label="Bank of India" value="Bank of India" />
  <Picker.Item label="Airtel Bank of India" value="Airtel Bank of India" />
  <Picker.Item label="Idea Payment Bank of India" value="Idea Payment Bank of India" />
</Picker>
      
      <Text></Text>
      <Picker
  selectedValue={this.state.billDetail}
  style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({billDetail: itemValue})
  }>
  <Picker.Item label="Select" value="Select" />
  <Picker.Item label="Electricity Bill" value="Electricity Bill" />
  <Picker.Item label="Water Bill" value="Water Bill" />
  <Picker.Item label="Gas Bill" value="Gas Bill" />
  <Picker.Item label="Mobile Recharge" value="Mobile Recharge" />
  <Picker.Item label="Data Card Recharge" value="Data Card Recharge" />
  <Picker.Item label="Rent Bill" value="Rent Bill" />
  <Picker.Item label="Other" value="Other" />
</Picker>
      <Text></Text>
      <TextInput
placeholder="Enter Amount Debit"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(totalAmount) => this.setState({totalAmount})}
        value={this.state.totalAmount}
      />
<Text></Text>
      <Button title="SUBMIT" color="green" onPress={this.submitDeposit} />
      <Text></Text>
      <Button title="RESET" color="red" onPress={this.reset} />
 
      </View>         
    
        </ScrollView>      
        {/* <Text></Text>
      <Button title="SOUND" color="#428bca" onPress={this.onSound} /> */}


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

