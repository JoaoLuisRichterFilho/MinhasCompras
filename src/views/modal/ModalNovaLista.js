import React from 'react'
import {View, Modal, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import * as Icons from 'react-native-feather';

const ModalNovaLista = (props) => {
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
                <Icons.PlusSquare height={24} width={24} style={styles.headerIcon}/>
                <Text style={styles.modalHeaderText}>Crie uma lista</Text>
              </View>
              <View style={styles.modalBody}>

                <Text style={styles.label}>
                    <Icons.List color={'#333'} height={16} width={16}/> Nome da nova lista
                </Text>
                <View style={styles.nomeListaView}>
                    <TextInput 
                      nativeID="inputNomeLista" 
                      autoFocus={false} 
                      style={styles.input}
                      onChangeText={props.nomeListaChangeText}
                    >
                    </TextInput>
                </View>

              </View>
              <View style={styles.modalFooter}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={props.closeModal}
                  >
                    <Icons.X height={24} width={24} style={styles.closeIcon}/>
                    <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonSubmit]}
                    onPress={props.novaLista}
                  >
                    <Icons.Send height={24} width={24} style={styles.salvarListaIcon}/>
                    <Text style={styles.textStyle}>Salvar</Text>
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
    // marginTop: 22,
    backgroundColor: '#555'
  },
  modalView: {
    flex: 1,
    flexDirection: 'column',
    height: '60%',
    marginHorizontal: 20,
    marginVertical: '5%',
    backgroundColor: "white",
    padding: 0,
  },
  modalHeader: {
    flex: 5,
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
    flex: 5,
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
  closeIcon: {
    fontWeight: 'bold',
    color: "#fff",
    marginRight: 5,
  },
  salvarListaIcon: {
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
  nomeListaView: {
      flex:1,
      flexDirection: 'row',
      marginBottom: 20,
  }
});

export default ModalNovaLista;