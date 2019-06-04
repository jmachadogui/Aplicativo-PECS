//Imports
import React from 'react';
import {Text, AppRegistry, View, Image, TouchableOpacity, ScrollView} from 'react-native';
//Formatações
const Estilos ={
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
};
//Funções
pecsAdcionar=()=>{
  alert('Parabéns, conseguiu apertar uma tecla! Pa Ra Béns');
}
//Criar o componente
const {body, header, speakerIcon, menu, barras, preview, areaPecs,imgPecsAdicionar, teclado, scrollTeclado, imgPecs, categorias} = Estilos;
const App = () => {
  return(
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
            <TouchableOpacity onPress={pecsAdcionar}>
             <Image style={imgPecsAdicionar} source={require('./imgs/adicionar.png')}/>
            </TouchableOpacity>
          </View>
          <View style={categorias}></View>
        
          <ScrollView style={scrollTeclado}>
              <View style={teclado}>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/comer.png')}/>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/correr.png')}/>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/Dormir.png')}/>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/comer.png')}/>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/correr.png')}/>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/Dormir.png')}/>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/comer.png')}/>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/correr.png')}/>
                <Image style={imgPecs} source={require('./imgs/pecs/acoes/Dormir.png')}/>
              </View>
          </ScrollView>
         
      </View>
        //
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('prototipoV1', ()=>App);
