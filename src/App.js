import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, 
  Text, useColorScheme, View, Image, 
  Alert, TouchableOpacity, Linking} from 'react-native';
import foto from './assets/foto.jpeg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/card/index';

const App = () => {

  return(
    <>
      <View style={style.page}> 
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>Djonny Nogueira Rosa</Text>
          <Text style={style.funcao}>Desenvolvedor Front-End</Text>
          
          <View style={style.redes_sociais}>
            {/* usando Linking */}
            <TouchableOpacity onPress={() => {
              Linking.openURL('https://github.com/djonnynogueira') }}>
              <Icon name="github" size={30} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/djonnynogueira/') }}>
              <Icon name="linkedin" size={30} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Linking.openURL('https://instagram.com/djonnrn') }}>
              <Icon name="instagram" size={30} /> 
            </TouchableOpacity>
          </View>
        </View>

        {/* //usando componentes */}
        <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>Sistemas de Informação</Text>
        </Card>

        <Card titulo="Experiência Profissional">
          <Text style={style.card_content_text}>JCA</Text>
          <Text style={style.card_content_text}>SENAC</Text>
        </Card>      
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color:'#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    marginTop: 20
    },
    card_content_text: {
      color: '#939393',
      marginBottom: 1
    }
})

export default App;
