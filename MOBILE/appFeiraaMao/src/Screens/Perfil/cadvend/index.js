import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Cadastro = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerPrincipal}>
          {/* Container Interno */}
          <View style={styles.containerInterno}>
            <Text style={styles.texto}> Para começar, faça o cadastro como feirante e preencha algumas informações necessárias</Text>
          </View>

        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Continuar")}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  containerPrincipal: {
    backgroundColor: '#dcdcdc',
    padding: 20,
    borderRadius: 10,
        flex: 1,
        padding: 16,
        justifyContent: 'space-between', // isso separa o conteúdo e o botão ao máximo
      
      
  },
  containerInterno: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  textoInformativo: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#8095',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Cadastro;
