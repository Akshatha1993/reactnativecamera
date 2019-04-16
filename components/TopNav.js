import React, {Component} from 'react';
import {Icon, Header} from 'react-native-elements';
import {Text, View} from 'react-native';

export default class TopNav extends Component{
    render(){
        return(
<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: this.props.navigation.title, style: { color: '#fff' } }}
  rightComponent={{ icon: 'cart-plus', type:'font-awesome', color: '#fff' }}
/>
        );
    }
}