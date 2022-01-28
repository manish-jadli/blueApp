import React, {useEffect} from 'react';
import { StyleSheet, Button, View ,Text, Alert, TextInput, Image, ScrollView} from 'react-native';
 
 
export default class Login extends React.Component {

    constructor(props){
        super(props);

        this.state={
            id:'',
            username:'',
            password:'',
            active:''
        }
    }

    submitLogin=()=>{
        if((this.state.username !== null && this.state.username !== '' && this.state.username !== undefined) &&
         (this.state.password !== null && this.state.password !== '' && this.state.password !== undefined)){
          fetch(`https://angular2-9b951.firebaseio.com/login.json`,{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({username:this.state.username,password:this.state.password})
      })
      .catch((error) => console.error(error))
        this.setState({
            username:'',
            password:''
        })
        Alert.alert('Success','You have submit form successfully.')
        this.props.navigation.navigate('Home');
      }else if((!this.state.username && !this.state.password) || (!this.state.username || !this.state.password)){
        Alert.alert('Failed','Please fill all the required fields.')
      }else{
        Alert.alert('Failed','Please fill all the required fields correctly.')
      }
    }
      
      resetLogin=()=>{
        if(this.state.username && this.state.password){
        this.setState({
            username:'',
            password:''
        })
        Alert.alert('Reset Success','You have reset form successfully.')
      }else if((!this.state.username && !this.state.password) || (!this.state.username || !this.state.password)){
        this.setState({
          username:'',
          password:''
      })
        Alert.alert('Already Reset','You have already reset.')
      }else{
        Alert.alert('Reset','You have reset form successfully.')
      }
    }
    
    signup=()=>{
        Alert.alert('Signup','You have redirect to signup screen.');
        this.props.navigation.navigate('Signup');
    }
    
   
  
    onBuyNow=(item)=>{
      console.log(item);
      Alert.alert('Showing selected data', 'You have selected data showing', [  
        {  
            text: 'Cancel',  
            onPress: () => console.log('Cancel Pressed'),  
            style: 'cancel',  
        },  
        {text: 'OK', onPress: () => console.log(item)},  
    ]  );
  
    }
  
    
  
    onUpdateNow=(id,name,weight,price,description)=>{
      fetch(`https://hotelapi-8715a-default-rtdb.firebaseio.com/products/${id}.json`, {
        method: 'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id,name,weight,price,description})
      })
      .catch((error) => console.error(error))
    }
  
    onDeleteNow=(id)=>{
      fetch(`https://hotelapi-8715a-default-rtdb.firebaseio.com/products/${id}.json`, {
        method: 'DELETE'
      })
      .catch((error) => console.error(error))
    }
   

  render() {
   

    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic">
      <View style={[styles.conatiner, styles.pt100,styles.paddinglr]}>
    <Image
          style={styles.stretch}
          source={require('../images/icon.png')}
        />
        <Text></Text>
<TextInput
placeholder="Enter Username"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
<Text></Text>
<TextInput
  textContentType={'password'} 
  secureTextEntry={true}
  placeholder="Enter Password"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />
      <Text></Text>
      <Button title="LOGIN" color="green" onPress={this.submitLogin} />
      <Text></Text>
      <Button title="SIGNUP" color="green" onPress={this.signup} />
      <Text></Text>
      <Button title="RESET" color="red" onPress={this.resetLogin} />
      </View>
      </ScrollView>
    );
  }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      paddinglr:{
        paddingLeft:10,
        paddingRight:10,
      }
      ,pt100:{
    paddingTop:100
  },
  stretch:{
    width: "100%",
    height: 150
  },
});
