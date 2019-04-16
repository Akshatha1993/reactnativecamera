import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Icon} from 'react-native-elements';
import TopNav from '../components/TopNav';

export default class Home extends Component{
    static navigationOptions = ({navigation}) =>{
        navigation.title = 'Home'
        return {
            header:<TopNav navigation={navigation} />
        }
    }
    render(){
        return(
            <View>
            <Text style={styles.welcome}>Home</Text>
            <Icon
            raised
            name='home'
            type='font-awesome'
            color='#f50'
            onPress={()=>this.props.navigation.navigate('Products')}
/>
            <Button title="Go Products"
            onPress={()=>this.props.navigation.navigate('Products')} />
            <Button style={styles.btn} title="Go cart"
            onPress={()=>this.props.navigation.navigate('Cart')} />
            <Button style={styles.btn} title="Go invoice"
            onPress={()=>this.props.navigation.navigate('Invoice')} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    btn:{
        justifyContent: 'space-between', 
        marginTop:20,
    }
  });