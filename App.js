import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Autonomia do Ganho de Combustível</Text>
      <View>
        <Text>Valor do litro</Text>
        <TextInput/>
      </View>
      <View>
        <Text>Quantidade Abastecida</Text>
        <TextInput/>
      </View>
      <View>
        <Text>Km Rodados</Text>
        <TextInput/>
      </View>
      <View>
        <Pressable>
          <Text>Calcular</Text>
        </Pressable>
      </View>
      <View>
        <Text>Resultado</Text>
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
  },
});
