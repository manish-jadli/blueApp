

    import React, {Fragment,useState} from 'react';

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
import {Picker} from '@react-native-picker/picker';

import { Button } from 'react-native';
//import DatePicker from 'react-native-datepicker';


 class  Deposit extends React.Component {
    
  constructor(props){
    super(props);
    this.state={
      id:'',
      username:'',
      date:'',
      accountType:'',
      bank:'',
      totalAmount:'',
      active:'',
      pause:false,
      depositAmount:[
        {id:1,username:'Manish Jadli',date:'12-07-2019',accountType:'Saving',bank:'Bank of Baroda',deposit:100,totalAmount:1000,amount:1000},
        {id:2,username:'Manish Jadli',date:'12-07-2019',accountType:'Saving',bank:'Bank of Baroda',deposit:100,totalAmount:1000,amount:1000},
        {id:3,username:'Manish Jadli',date:'12-07-2019',accountType:'Saving',bank:'Bank of Baroda',deposit:100,totalAmount:1000,amount:1000},
        {id:4,username:'Manish Jadli',date:'12-07-2019',accountType:'Saving',bank:'Bank of Baroda',deposit:100,totalAmount:1000,amount:1000},
        {id:5,username:'Manish Jadli',date:'12-07-2019',accountType:'Saving',bank:'Bank of Baroda',deposit:100,totalAmount:1000,amount:1000},
        {id:6,username:'Manish Jadli',date:'12-07-2019',accountType:'Saving',bank:'Bank of Baroda',deposit:100,totalAmount:1000,amount:1000}
      ]
      
  }
  }

       
    submitDeposit=()=>{
        if(this.state.username && this.state.date && this.state.accountType && this.state.bank && this.state.totalAmount){
          
          fetch(`https://angular2-9b951.firebaseio.com/deposit.json`,{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(
              {username:this.state.username,
                date:this.state.date,
                accountType:this.state.accountType,
                bank:this.state.bank,
                totalAmount:this.state.totalAmount
              })
          })
          .catch((error) => console.error(error))

          this.setState({
          username:'',
            date:'',
            accountType:'',
            bank:'',
            totalAmount:''
        })
        Alert.alert('Success','You have submit form successfully.')
        this.props.navigation.navigate('TotalAmount');
      }else if((!this.state.username && !this.state.date && !this.state.accountType && !this.state.bank && !this.state.totalAmount) || (!this.state.username || !this.state.date || !this.state.accountType || !this.state.bank || !this.state.totalAmount)){
        Alert.alert('Failed','Please fill all the required fields.')
      }else{
        Alert.alert('Failed','Please fill all the required fields correctly.')
      }
    }
      
      reset=()=>{
        if(this.state.username && this.state.accountType && this.state.bank && this.state.totalAmount){
        this.setState({
          username:'',
            date:'',
            accountType:'',
            bank:'',
            totalAmount:''
        })
        Alert.alert('Reset Success','You have reset form successfully.')
      }else if((!this.state.username && this.state.date && !this.state.accountType && !this.state.bank && !this.state.totalAmount) || (!this.state.username || !this.state.date || !this.state.accountType || !this.state.bank || !this.state.totalAmount)){
        this.setState({
          username:'',
          date:'',
          accountType:'',
          bank:'',
          totalAmount:''
      })
        Alert.alert('Already Reset','You have already reset.')
      }else{
        Alert.alert('Reset','You have reset form successfully.')
      }
    }
    render() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>


      <ScrollView
          contentInsetAdjustmentBehavior="automatic">

<View style={[styles.conatiner, styles.pt100,styles.paddinglr, styles.marginBottomFifteen]}>
<View style={styles.marginBottomFifteen}>
<Text></Text>
<TextInput
placeholder="Enter Username"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
      </View>
<View style={styles.marginBottomFifteen}>
<TextInput
placeholder="Enter Date"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(date) => this.setState({date})}
        value={this.state.date}
      />
      </View>
       
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
      <View style={styles.marginBottomFifteen}>
      <TextInput
placeholder="Enter Amount Credit"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(totalAmount) => this.setState({totalAmount})}
        value={this.state.totalAmount}
      />
</View>
<View style={styles.marginBottomFifteen}>
      <Button title="SUBMIT" color="green" onPress={this.submitDeposit} />
      </View>
      <View style={styles.marginBottomFifteen}>
      <Button title="RESET" color="red" onPress={this.reset} />
      </View>
<Text></Text>
      </View>         
    
           
        
      <View style={styles.marginBottomFifteen}>
      <View style={[styles.conatiner, styles.pt100,styles.paddinglr]}>
      <View style={{flexDirection:"row",backgroundColor:"#c1c1c1",paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}}>
      <Text style={{width:"20%"}}>Date</Text>
      <Text style={{width:"20%"}}>Bank</Text>
      <Text style={{width:"20%"}}>Deposit</Text>
      <Text style={{width:"20%"}}>Total</Text>
      <Text style={{width:"20%"}}>Amount</Text>
      </View>

      <View style={{flexDirection:"row",backgroundColor:"lightgray",paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}}>
      <Text style={{width:"20%"}}>12-07-2019</Text>
      <Text style={{width:"20%"}}>State Bank of India</Text>
      <Text style={{width:"20%"}}>500</Text>
      <Text style={{width:"20%"}}>1500</Text>
      <Text style={{width:"20%"}}>2000</Text>
      </View>

      <View style={{flexDirection:"row",backgroundColor:"white",paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}}>
      <Text style={{width:"20%"}}>12-07-2019</Text>
      <Text style={{width:"20%"}}>State Bank of India</Text>
      <Text style={{width:"20%"}}>600</Text>
      <Text style={{width:"20%"}}>900</Text>
      <Text style={{width:"20%"}}>1500</Text>
      </View>

      <View style={{flexDirection:"row",backgroundColor:"lightgray",paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}}>
      <Text style={{width:"20%"}}>12-07-2019</Text>
      <Text style={{width:"20%"}}>State Bank of India</Text>
      <Text style={{width:"20%"}}>500</Text>
      <Text style={{width:"20%"}}>400</Text>
      <Text style={{width:"20%"}}>900</Text>
      </View>

      <View style={{flexDirection:"row",backgroundColor:"white",paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}}>
      <Text style={{width:"20%"}}>12-07-2019</Text>
      <Text style={{width:"20%"}}>State Bank of India</Text>
      <Text style={{width:"20%"}}>400</Text>
      <Text style={{width:"20%"}}>100</Text>
      <Text style={{width:"20%"}}>500</Text>
      </View>

      <View style={{flexDirection:"row",backgroundColor:"lightgray",paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}}>
      <Text style={{width:"20%"}}>12-07-2019</Text>
      <Text style={{width:"20%"}}>State Bank of India</Text>
      <Text style={{width:"20%"}}>100</Text>
      <Text style={{width:"20%"}}>0</Text>
      <Text style={{width:"20%"}}>100</Text>
      </View>

      </View>
      </View>

      </ScrollView> 
      </SafeAreaView>


    </Fragment>
  );
};
}
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
m5:{
  margin:5
},
marginBottomFifteen:{
  marginBottom:15
}

});

export default Deposit;