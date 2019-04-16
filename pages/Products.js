import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import TopNav from '../components/TopNav';

export default class Home extends Component{
    static navigationOptions = ({navigation}) =>{
        navigation.title = 'Products'
        return {
            header:<TopNav navigation={navigation} />
        }
    }
    render(){
        return(
            <View>
            <Card
  title='HELLO WORLD'
  image={require('../assets/images/1.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
img:{
    width:100,
    height:300
}
})