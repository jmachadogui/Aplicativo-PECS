import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Estilos from "./src/estilos/style.js" ;
import Pecs from "./src/Pecs.js";

export default class prototipoV1 extends Component {
        constructor (props) {
            super(props);
            this.state = { 
                enderecoImg: require('./imgs/adicionar.png'),
                arrayPecs:[
                    {id:'00', endereco: require(../imgs/pecs/acoes/comer.png)},
                    {id:'01', endereco: require(../imgs/pecs/acoes/beber.png)},
                    {id:'02', endereco: require(../imgs/pecs/acoes/dormir.png)},
                    {id:'03', endereco: require(../imgs/pecs/acoes/correr.png)},
                    {id:'04', endereco: require(../imgs/pecs/acoes/abraçar.png)},
                    {id:'05', endereco: require(../imgs/pecs/acoes/beijar.png)},
                    {id:'06', endereco: require(../imgs/pecs/acoes/euQuero.png)},
                ]
            };
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
                    <View style={Estilos.areaPecs}> 
                        <Pecs endereco={this.state.enderecoImg} estiloPec = {Estilos.imgPecsAdicionar} />
                    </View>
                    <View style={Estilos.categorias}></View>
                    
                   <FlatList 
                    numCollumms={3}
                    data={this.state.arrayPecs}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>{
                        return(
                            <Pecs endereco={item.endereco}/>
                        );
                    }}
                   />
                    
            </View>
            );
        }
}
AppRegistry.registerComponent('prototipoV1', () => prototipoV1);
