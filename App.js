import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, ImageBackground } from 'react-native';
import { useCallback, useState } from 'react';

import fundo from './assets/fundo.png';

export default function App() {
  const [litro, setLitro] = useState('');
  const [quantabastecida, setQuantabastecida] = useState('');
  const [kmrodados, setKmrodados] = useState('');
  const [resultado, setResultado] = useState('');

  const calculo = () => {
    let intLitro = parseInt(litro);
    let intQuantabastecida = parseInt(quantabastecida);
    let intKmrodados = parseInt(kmrodados)
    let resultado = ((intLitro * intQuantabastecida) / intKmrodados);
    setResultado(resultado);
  };

  const limparDados = () => {
    setLitro('');
    setQuantabastecida('');
    setKmrodados('');
    setResultado('');
  };

  return (
  <ImageBackground  source={fundo} resizeMode="cover" style={styles.container}>
      <Text style={styles.titulo}>Autonomia do Ganho de Combustível</Text>
      <View>
        <Text style={styles.valores}>Valor do litro</Text>
        <TextInput value={litro} onChangeText={setLitro} style={styles.caixa} placeholder='Insira o Valor do Litro' keyboardType="number-pad"/>
      </View>
      <View>
        <Text style={styles.valores}>Quantidade Abastecida</Text>
        <TextInput value={quantabastecida} onChangeText={setQuantabastecida} style={styles.caixa} placeholder='Insira a Quantidade Abastecida' keyboardType="number-pad"/>
      </View>
      <View>
        <Text style={styles.valores}>Km Rodados</Text>
        <TextInput value={kmrodados} onChangeText={setKmrodados} style={styles.caixa} placeholder='Insira os Km Rodados' keyboardType="number-pad"/>
      </View>
      <View>
        <Text>{" "}</Text>
        <Pressable onPress={() => calculo()}>
          <Text style={styles.calcul}>Calcular</Text>
        </Pressable>
      </View>
      <View>
        <Text>{" "}</Text>
        <Pressable onPress={() => limparDados()}>
          <Text style={styles.calcul}>Limpar Dados</Text>
        </Pressable>
      </View>
      <View>
      <Text>{" "}</Text>
        <Text style={styles.caixresult}>{resultado}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#e8fdff",
  },
  titulo: {
    fontSize:25,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    textAlign:'center',
    paddingBottom:20,
    color:"#042EA2",
    fontWeight:"bold"
  },
  valores:{
    fontSize:20,
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    color:"#042EA2",
    fontWeight:"bold",
  },
  caixa:{
    borderWidth:1,
    borderRadius:15,
    width:250,
    height:50,
    borderColor:"#042EA2",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
  },
  calcul:{
    fontSize:20,
    textAlign:'center',
    backgroundColor:"#042EA2",
    width:200,
    height:40,
    borderRadius:30,
    color:"white",
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
    alignSelf:"center",
    borderColor:"#042EA2",
    borderWidth:1,
    fontWeight:"bold",
    paddingTop:5,
  },
  caixresult:{
    borderWidth:2,
    borderColor:'#042EA2',
    color:"#042EA2",
    width:50,
    height:30,
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
    alignSelf:"center",
    paddingTop:5,
  }
});
