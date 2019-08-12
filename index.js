import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';


import Estilos from "./src/estilos/style.js" ;
pressionou = () => {
    alert('pressionou né safado');
};
class Pecs extends Component{
    render() {
        const localImg = this.props.endereco;
        const estiloPec = this.props.estiloPec;
        return(
            <Image source = {localImg} style = {estiloPec} />
        );
}

}
export default class prototipoV1 extends Component {
        constructor (props) {
            super(props);
            this.state = { 
                enderecoImg: require('./imgs/adicionar.png'),
                comer: require('./imgs/pecs/acoes/comer.png'),
                correr: require('./imgs/pecs/acoes/correr.png'),
                beber: require('./imgs/pecs/acoes/beber.png'),
                banana: require('./imgs/pecs/frutas/banana.png'),
                melancia: require('./imgs/pecs/frutas/melancia.png'),
                pera: require('./imgs/pecs/frutas/pera.png'),
                boca: require('./imgs/pecs/partesCorpo/boca.png'),
                mao: require('./imgs/pecs/partesCorpo/mao.png'),
                olho: require('./imgs/pecs/partesCorpo/olho.png'),

                arrayEnderecos: []
            };
        }
        alteraPec(local) {
            this.setState({enderecoImg: local});
        }

        render() {
            return (
            <View style={Estilos.body}>
                 <View style={Estilos.header}>
                    <TouchableOpacity>
                        <Image style={Estilos.speakerIcon} source={require('./imgs/speaker-icon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={Estilos.menu}>
                          <View style={Estilos.barras}></View>
                          <View style={Estilos.barras}></View>
                          <View style={Estilos.barras}></View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={Estilos.preview}>
                
                </View>
                    <Text>aaa</Text>
                    <View style={Estilos.areaPecs}> 
                        <Pecs endereco={this.state.enderecoImg} estiloPec = {Estilos.imgPecsAdicionar} />
                    </View>
                    <View style={Estilos.categorias}></View>
                    
                    <ScrollView style={Estilos.scrollTeclado}>
                        <View style={Estilos.teclado}>
                            <TouchableOpacity onPress={ ()=>{this.alteraPec(this.state.comer)}}>
                                <Pecs endereco={this.state.comer} estiloPec = {Estilos.imgPecs}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ ()=>{this.alteraPec(this.state.correr)}}>
                                <Pecs endereco={this.state.correr} estiloPec = {Estilos.imgPecs}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ ()=>{this.alteraPec(this.state.beber)}}>
                                <Pecs endereco={this.state.beber} estiloPec = {Estilos.imgPecs}/>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    
            </View>
            );
        }
}
AppRegistry.registerComponent('prototipoV1', () => prototipoV1);
