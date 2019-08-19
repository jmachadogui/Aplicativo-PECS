import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Estilos from "./src/estilos/style.js" ;
import Pecs from "./src/Pecs.js";

export default class prototipoV1 extends Component {
        constructor (props) {
            super(props);
            this.state = { 
                pecAddImg: require('./imgs/adicionar.png'),
                arrayAcoes: [
                    {id: "00", endereco: require('./imgs/pecs/acoes/correr.png'), valor: "Correr"},
                    {id: "01", endereco: require('./imgs/pecs/acoes/comer.png'), valor: "Comer"},
                    {id: "02", endereco: require('./imgs/pecs/acoes/Dormir.png'), valor: "Dormir"},
                    {id: "03", endereco: require('./imgs/pecs/acoes/euEstou.png'), valor: "Eu estou"},
                    {id: "04", endereco: require('./imgs/pecs/acoes/beijar.png'), valor: "Beijar"},
                    {id: "05", endereco: require('./imgs/pecs/acoes/chorar.png'), valor: "Chorar"},
                ]
            };
        }
       
        mudaPec(valor, endereco){
            this.setState({pecAddImg: endereco});
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
                        <Pecs endereco={this.state.pecAddImg} estiloPec = {Estilos.imgPecsAdicionar} />
                    </View>
                    <View style={Estilos.categorias}></View>
                    <FlatList 
                        data={this.state.arrayAcoes}
                        keyExtractor={item=> item.id}
                        numColumns={3}
                        contentContainerStyle={{alignItems:'center',}}
                        renderItem ={ ({item}) =>{
                            return(
                                <TouchableOpacity
                                    onPress={ ()=>{this.mudaPec(item.valor, item.endereco)} } 
                                >
                                    <Image source={item.endereco} style={Estilos.imgPecs}/>
                                </TouchableOpacity>
                            );
                        }}
                    />
                 
                    
            </View>
            );
        }
}
AppRegistry.registerComponent('prototipoV1', () => prototipoV1);
