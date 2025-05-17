import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const COR_PRIMARIA = "#4CAF50";

const Alterar = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [datanasc, setDatanasc] = useState("");

  const validarCampos = () => {
    // Validação básica dos campos obrigatórios
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert("Campos obrigatórios", "Preencha todos os campos marcados como obrigatórios");
      return false;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Email inválido", "Por favor, insira um email válido.");
      return false;
    }

    // Validação de senha atual
    if (senha.length < 6) {
      Alert.alert("Senha inválida", "A senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    // Validação opcional para telefone
    if (telefone && telefone.replace(/\D/g, '').length < 10) {
      Alert.alert("Telefone inválido", "Informe um número com DDD (ex: 11987654321)");
      return false;
    }

    return true;
  };

  const handleSalvarAlteracoes = () => {
    if (!validarCampos()) {
      return;
    }

    // Se todas as validações passarem
    Alert.alert(
      "Confirmação",
      "Dados atualizados com sucesso!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home", { nome })
        }
      ]
    );
  };

  const handleSair = () => {
    Alert.alert(
      "Sair",
      "Deseja realmente sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sair",
          onPress: () => navigation.navigate("Login")
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.profileImage}>
          <Image
            source={require("../../../../assets/img/iconperfil.jpg")}
            style={styles.image}
            resizeMode="cover"
            onError={() => console.log("Erro ao carregar imagem")}
          />
        </View>

        <View style={styles.areaForm}>
          <Text style={styles.textForm}>Nome completo *</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#999"
          />

          <Text style={styles.textForm}>Telefone</Text>
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />

          <Text style={styles.textForm}>Email *</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.textForm}>Senha atual *</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha atual"
            placeholderTextColor="#999"
            secureTextEntry
          />

          <Text style={styles.textForm}>Nova senha</Text>
          <TextInput
            style={styles.input}
            value={novaSenha}
            onChangeText={setNovaSenha}
            placeholder="Digite uma nova senha (opcional)"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSalvarAlteracoes}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            onPress={handleSair}
            activeOpacity={0.7}
          >
            <Text style={[styles.buttonText, styles.logoutText]}>Sair da Conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: COR_PRIMARIA,
    alignSelf: "center",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  areaForm: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textForm: {
    fontSize: 16,
    marginTop: 10,
    color: "#333",
    fontWeight: "500",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  buttonsContainer: {
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
    gap: 15,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: COR_PRIMARIA,
  },
  logoutButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: COR_PRIMARIA,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  logoutText: {
    color: COR_PRIMARIA,
  },
});

export default Alterar;