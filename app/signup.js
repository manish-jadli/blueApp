import React from 'react';
import { StyleSheet, Button, View ,Text, Alert, TextInput, Image, ScrollView } from 'react-native';
 
 
export default class Signup extends React.Component {

    constructor(props){
        super(props);

        this.state={
            id:'',
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
            active:''
        }
    }

    submitSignup=()=>{
        if((this.state.username !== null && this.state.username !== '' && this.state.username !== undefined) &&
           (this.state.email !== null && this.state.email !== '' && this.state.email !== undefined) && 
           (this.state.password !== null && this.state.password !== '' && this.state.password !== undefined) &&
          (this.state.confirmPassword !== null && this.state.confirmPassword !== '' && this.state.confirmPassword !== undefined)){
          fetch(`https://angular2-9b951.firebaseio.com/signup.json`,{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({username:this.state.username,email:this.state.email,password:this.state.password,confirmPassword:this.state.confirmPassword})
          })
          .catch((error) => console.error(error))
          this.setState({
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        })
        Alert.alert('Success','You have submit form successfully.')
        this.props.navigation.navigate('Login');
      }else if((!this.state.username && !this.state.password && !this.state.email && !this.state.confirmPassword) || (!this.state.username || !this.state.email || !this.state.password || !this.state.confirmPassword)){
        Alert.alert('Failed','Please fill all the required fields.')
      }else{
        Alert.alert('Failed','Please fill all the required fields correctly.')
      }
    }

    onBack=()=>{
        Alert.alert('Login','You have redirect to login screen.');
        this.props.navigation.navigate('Login');
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
  placeholder="Enter Email"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
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
      <TextInput 
        textContentType={'password'} 
        secureTextEntry={true}
        placeholder="Enter Confirm Password"
        style={{height: 40, borderColor: '#ddd', color:'#333', borderWidth: 1, width:"100%"}}
        onChangeText={(confirmPassword) => this.setState({confirmPassword})}
        value={this.state.confirmPassword}
      />
      <Text></Text>
      <Button title="SIGNUP" color="green" onPress={this.submitSignup} />
      <Text></Text>
      <Button title="ON BACK" color="red" onPress={this.onBack} />
      <Text></Text>
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
