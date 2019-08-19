import React, { Component } from 'react';
import { View, Image, TouchableOpacity,} from 'react-native';


export default class Pecs extends Component{
	
	render(){
		return(
			<Image source={this.props.endereco} style={this.props.estiloPec}/>
		);
	}
}