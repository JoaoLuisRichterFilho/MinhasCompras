import React from 'react'
import {View, Modal, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import * as Icons from 'react-native-feather';

const ModalNewUser = (props) => {
  return ( 
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={props.closeModal}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Icons.UserPlus height={24} width={24} style={styles.headerIcon}/>
                <Text style={styles.modalHeaderText}>Crie uma conta</Text>
              </View>
              <View style={styles.modalBody}>

                <Text style={styles.label}>
                    <Icons.User color={'#333'} height={16} width={16}/> Usuário
                </Text>
                <View style={styles.userView}>
                    <TextInput 
                      nativeID="inputUser" 
                      autoFocus={false} 
                      style={styles.input}
                      onChangeText={props.userChangeText}
                    >

                    </TextInput>
                </View>

                <Text style={styles.label}>
                    <Icons.Lock color={'#333'} height={16} width={16}/> Nova senha
                </Text>
                <View style={styles.passView}>
                    
                    <TextInput 
                      nativeID="inputNewPass" 
                      secureTextEntry={true} 
                      style={styles.input}
                      onChangeText={props.passChangeText}
                    >
                    
                    </TextInput>
                    <Icons.EyeOff height={24} width={24} style={styles.passViewIcon}/>
                </View>

                <Text style={styles.label}>
                    <Icons.Lock color={'#333'} height={16} width={16}/> Confirme a senha
                </Text>
                <View style={styles.passView}>
                    
                    <TextInput 
                      nativeID="inputConfirmPass" 
                      secureTextEntry={true} 
                      style={styles.input}
                      onChangeText={props.confirmPassChangeText}
                    >

                    
                    </TextInput>
                    <Icons.EyeOff height={24} width={24} style={styles.passViewIcon}/>
                </View>
              </View>
              <View style={styles.modalFooter}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={props.closeModal}
                  >
                    <Icons.X height={24} width={24} style={styles.closeLoginIcon}/>
                    <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonSubmit]}
                    onPress={props.newUser}
                  >
                    <Icons.Send height={24} width={24} style={styles.okLoginIcon}/>
                    <Text style={styles.textStyle}>Enviar</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </Modal>
  </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: '#555555'
  },
  modalView: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: '5%',
    backgroundColor: "white",
    padding: 0,
  },
  modalHeader: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#B74343",
  },
  headerIcon: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 10,

  },
  modalBody: {
    flex: 9,
    justifyContent: 'center',
    padding: 15,
  },
  modalFooter: {
    flex: 2,
    flexDirection: 'row',
  },
  button: {
    // borderRadius: 2,
    padding: 5,
    // elevation: 2
  },
  buttonClose: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#D81A1A",
  },
  closeLoginIcon: {
    fontWeight: 'bold',
    color: "#fff",
    marginRight: 5,
  },
  okLoginIcon: {
    fontWeight: 'bold',
    color: "#fff",
    marginRight: 5,
  },
  buttonSubmit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#15C658",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalHeaderText: {
    // marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 15,
    color: "white",
    textAlign: "center"
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 0,
    paddingBottom: 0,
  },
  input: {
    flex: 9,
    fontSize: 15,
    paddingTop:2,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#2296F3',
  },
  passViewIcon: {
      flex: 4,
      marginLeft: 20,
      color: '#000',
      marginBottom: 10,
  },
  passView: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  userView: {
      flex:1,
      flexDirection: 'row',
      marginBottom: 20,
  }
});

export default ModalNewUser;