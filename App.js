import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useCallback, useState } from 'react';

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
    <View style={styles.container}>
      <Text style={styles.titulo}>Autonomia do Ganho de Combustível</Text>
      <View>
        <Text style={styles.valores}>Valor do litro</Text>
        <TextInput value={litro} onChangeText={setLitro} style={styles.caixa}/>
      </View>
      <View>
        <Text style={styles.valores}>Quantidade Abastecida</Text>
        <TextInput value={quantabastecida} onChangeText={setQuantabastecida} style={styles.caixa}/>
      </View>
      <View>
        <Text style={styles.valores}>Km Rodados</Text>
        <TextInput value={kmrodados} onChangeText={setKmrodados} style={styles.caixa}/>
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
    </View>
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
    color:"#665c49",
  },
  valores:{
    fontSize:20,
    textAlign:'left',
    color:"#665c49",
  },
  caixa:{
    borderWidth:1,
    borderRadius:15,
    borderColor:"#a69785",
  },
  calcul:{
    fontSize:20,
    textAlign:'center',
    backgroundColor:"#807462",
    width:150,
    height:30,
    borderRadius:30,
    color:"white",
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
  },
  caixresult:{
    borderWidth:2,
    borderColor:'#665c49',
  }
});
