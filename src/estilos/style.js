import { StyleSheet } from 'react-native';
const Estilos = StyleSheet.create({
    body:{
        backgroundColor: 'white',
        flex: 1,
      },
      header:{
        padding: 10,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0097e6'
      },
      preview:{
        backgroundColor: 'white',
        borderBottomWidth: 3,
        borderColor: '#d5d6d8',
        height: 70
      },
      speakerIcon:{
        width:55,
        height:45
      },
      menu:{
        width:55,
        height: 40,
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      barras:{
        backgroundColor: 'white',
        height: 8,
        borderRadius: 10
      },
      areaPecs:{
        height: 220,
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
        marginTop: 5,
        margin:5,
        height: 125,
        width: 95
      },
      categorias:{
        height: 35,
        backgroundColor: '#dfe3e6'
      },
      pecsPreview:{
        height: 60,
        width: 45,
        margin: 5
      },
      btnApaga:{
        alignSelf:'flex-end',
        height: 25,
        width:'15%',
        alignItems:'center',
        borderWidth: 1,
        borderColor:'red',
        borderBottomStartRadius:10,
        backgroundColor: 'red',
      },
      btnTxt:{
        color:'white',
        fontWeight:'bold'
      }
});
export default Estilos;