import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, FlatList,PanResponder} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Tts from 'react-native-tts';
import DoubleClick from 'react-native-double-tap';
import Estilos from "./src/estilos/style.js" ;
import Pecs from "./src/Pecs.js";
{Tts.setDefaultLanguage('pt-BR')};
export default class prototipoV1 extends Component {
        constructor (props) {
            super(props);
            this.state = { 
                pecAtual: require('./imgs/adicionar.png'),
                pecAtualMarginLeft:'35%',
                pecAtualMarginRight: 0,
                background: null,
                arrayAcoes: [
                    {id: "00", endereco: require('./imgs/pecs/acoes/beber.png'), valor: "Beber"},
                    {id: "01", endereco: require('./imgs/pecs/acoes/comer.png'), valor: "Comer"},
                    {id: "02", endereco: require('./imgs/pecs/acoes/euQuero.png'), valor: "Eu quero"},
                    {id: "03", endereco: require('./imgs/pecs/acoes/euEstou.png'), valor: "Eu estou"},
                    {id: "04", endereco: require('./imgs/pecs/acoes/beijar.png'), valor: "Beijar"},
                    {id: "05", endereco: require('./imgs/pecs/acoes/chorar.png'), valor: "Chorar"},
                    {id: "06", endereco: require('./imgs/pecs/alimentos/cafe.png'), valor: "Café"},
                    {id: "07", endereco: require('./imgs/pecs/alimentos/biscoito.png'), valor: "Biscoito"},
                    {id: "08", endereco: require('./imgs/pecs/alimentos/bolo.png'), valor: "Bolo"},
                    {id: "09", endereco: require('./imgs/pecs/estados/feliz.png'), valor: "Feliz"},
                    {id: "10", endereco: require('./imgs/pecs/estados/triste.png'), valor: "Triste"},
                    {id: "11", endereco: require('./imgs/pecs/estados/faminto.png'), valor: "Faminto"},
                ],
                historico:[],
                indexAtual: 0,
                btnApagar: false,
                frase: []
            };
            this._panResponder = PanResponder.create(
                {
                    onStartShouldSetPanResponder:(evt, gesturesState)=>true,
                    onPanResponderMove:(evt,gesturesState)=>{
                        if(this.state.historico.length>0){
                            this.setState({pecAtualMarginLeft: gesturesState.moveX})
                        }
                    },
                    onPanResponderRelease:(evt,gesturesState)=>{
                        if(gesturesState.moveX<85){
                            var index = this.state.indexAtual;
                            var arrayPecs = [...this.state.historico];
                            if(index!=0){
                                var pecAnterior = arrayPecs[--index];
                                this.setState({pecAtual: pecAnterior.endereco, indexAtual: index});
                                this.setState({pecAtualMarginLeft:'35%'})   
                            } else this.setState({pecAtualMarginLeft:'35%'})   
                        }
                        if(gesturesState.moveX>235){
                            var index = this.state.indexAtual;
                            var arrayPecs = [...this.state.historico];
                            if(index<arrayPecs.length-1){
                                var pecSeguinte = arrayPecs[++index];
                                this.setState({pecAtual: pecSeguinte.endereco, indexAtual: index});
                                this.setState({pecAtualMarginLeft:'35%'})   
                            } else this.setState({pecAtualMarginLeft:'35%'})   
                        }
                        if(gesturesState.moveX<=235 && gesturesState.moveX>=85)
                        this.setState({pecAtualMarginLeft:'35%'})   
                    }
                }
            )
        }
        mudaPec(pec){
            this.setState({pecAtual: pec.endereco});
            const lista = this.state.historico.concat(pec);
            const frase = this.state.frase.concat(pec.valor)
            this.setState({historico: lista, frase:frase});
            this.setState({indexAtual: this.state.historico.length});
            if(this.state.historico.length >= 0){
                this.setState({btnApagar: true});
            }
        }

        apagaPec(pec){
            const lista = this.state.historico;
            const index = this.state.historico.indexOf(pec);
            if (lista.length == 1){
               this.setState({historico:[]});
               this.setState({pecAtual: require('./imgs/adicionar.png')});
               this.setState({btnApagar: false})
            }
           else{
             lista.splice(index, 1);
             let indexAtual = lista.length-1;
             let pecAtual = lista[indexAtual];
            this.setState({pecAtual: pecAtual.endereco});
           }
            this.apagaFrase();
        }
        apagaFrase(){
            var fraseApagada = [...this.state.frase];
            const indexFrase = this.state.frase.length - 1;
            fraseApagada.splice(indexFrase, 1);
            this.setState({frase:fraseApagada});
        }
        montaFrase(fraseArray){
            frase = fraseArray.join(' ');
            return frase;
        }
        on_pecPreviewClick(pec){
            let index = this.state.historico.indexOf(pec);
            this.setState({pecAtual: pec.endereco, indexAtual: index});
          //  alert(this.state.indexAtual);
        }
        onSwipeLeft(index){
            var arrayPecs = [...this.state.historico];
            if(index!=0){
                var pecAnterior = arrayPecs[--index];
                this.setState({pecAtual: pecAnterior.endereco, indexAtual: index});
            }
        }
        onSwipeRight(index){
            var arrayPecs = [...this.state.historico];
            if(index<arrayPecs.length-1){
                var pecSeguinte = arrayPecs[++index];
                this.setState({pecAtual: pecSeguinte.endereco, indexAtual: index});
            }
        }
       
        render() {
            const pecAtual = this.state.pecAtual;
            const indexAtual = this.state.indexAtual;
            const config = {
                velocityThreshold: 0.5,
                directionalOffsetThreshold: 80,
                gestureIsClickThreshold: 20
              };
            return (
            <View style={Estilos.body}>
                 <View style={Estilos.header}>
                    <TouchableOpacity onPress={()=>{Tts.speak( this.montaFrase(this.state.frase))}}>
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
                    <FlatList
                        horizontal = {true}
                        data={this.state.historico}
                        keyExtractor={item=>item.id}
                        renderItem = { ({item}) =>{
                            return(
                                <DoubleClick
                                singleTap={ ()=>{this.on_pecPreviewClick(item)} }
                                doubleTap={ ()=>{this.apagaPec(item)} }
                                >
                                    <Image source={item.endereco} style={Estilos.pecsPreview}/>
                                </DoubleClick>
                            );
                        }}
                    />
                </View>
                {
                    this.state.btnApagar ?( <TouchableOpacity onPress={()=>{this.apagaPec()}}>
                        <View style={Estilos.btnApaga}>
                            <Text style={Estilos.btnTxt}> X </Text>
                        </View>
                    </TouchableOpacity>):null}
                  
                       <View  style={Estilos.areaPecs, {backgroundColor:this.state.background}} >
                          <View style={{marginLeft: this.state.pecAtualMarginLeft}}  {...this._panResponder.panHandlers}>
                             <Pecs endereco={this.state.pecAtual} 
                                estiloPec = {Estilos.imgPecsAdicionar} 
                                />
                            </View>
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
                                    onPress={ ()=>{this.mudaPec(item)} } 
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
