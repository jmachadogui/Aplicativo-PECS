import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


const Estilos = {
    body:{
        backgroundColor: '#0097E6',
        flex: 1
      },
      header:{
        padding: 10,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      preview:{
        backgroundColor: 'white',
        height: 70
      },
      speakerIcon:{
        width:60,
        height:50
      },
      menu:{
        width:65,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      barras:{
        backgroundColor: 'white',
        height: 10,
      },
      areaPecs:{
        height: 220,
        backgroundColor: '#00A8FF',
        justifyContent: 'center',
        alignItems: 'center',
      },
      imgPecsAdicionar:{
        width: 140,
        height:186,
        shadowColor: 'black',
      },
      teclado:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingRight: 30,
        paddingLeft: 30,
        justifyContent: 'space-evenly',
        paddingTop: 10
      },
      scrollTeclado:{
       flex:1
      },
      imgPecs:{
        marginTop: 15,
        height: 125,
        width: 95
      },
      categorias:{
        height: 35,
        backgroundColor: '#DFE6E9'
      }
}
const {body, header, speakerIcon, menu, barras, preview, areaPecs,imgPecsAdicionar, teclado, scrollTeclado, imgPecs, categorias} = Estilos;
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
            };
        }
        alteraPec(local) {
            this.setState({enderecoImg: local});
        }
        render() {
            return (
            <View style={body}>
                 <View style={header}>
                    <TouchableOpacity>
                        <Image style={speakerIcon} source={require('./imgs/speaker-icon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={menu}>
                        <View style={barras}></View>
                        <View style={barras}></View>
                        <View style={barras}></View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={preview}></View>
                    <View style={areaPecs}> 
                        <Pecs endereco={this.state.enderecoImg} estiloPec = {imgPecsAdicionar} />
                    </View>
                    <View style={categorias}></View>
                    
                    <ScrollView style={scrollTeclado}>
                        <View style={teclado}>
                            <TouchableOpacity onPress={ ()=>{this.alteraPec(this.state.comer)}}>
                                <Pecs endereco={this.state.comer} estiloPec = {imgPecs}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ ()=>{this.alteraPec(this.state.correr)}}>
                                <Pecs endereco={this.state.correr} estiloPec = {imgPecs}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ ()=>{this.alteraPec(this.state.beber)}}>
                                <Pecs endereco={this.state.beber} estiloPec = {imgPecs}/>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    
            </View>
            );
        }
}
AppRegistry.registerComponent('prototipoV1', () => prototipoV1);
