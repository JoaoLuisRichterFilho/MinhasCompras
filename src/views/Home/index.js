import React, { Component } from 'react';

import { 
    StyleSheet, 
    SafeAreaView, 
    View, 
    Image, 
    ScrollView, 
    Text, 
    TouchableOpacity,
    Alert,
    FlatList
} from 'react-native';

import * as Icons from 'react-native-feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { json } from 'express';

import ModalNovaLista from '../modal/ModalNovaLista';
import Listas from '../../components/Listas'
import styles from './styles'
import { concat } from 'react-native-reanimated';

class Home extends Component {


  state = {
    modalNovaListaVisible: false,
    newListaName: "",
    listas: []
  }

  async getListas() {
      
    try {
        
        const jsonValue = await AsyncStorage.getItem("listasCompra")
        // console.log(jsonValue);
        const objStore = jsonValue != null ? JSON.parse(jsonValue) : null;

        let listasAux = []

        if(objStore) {
            objStore.forEach( (item, key) => {
                if(item)
                    listasAux.push(item)

                    // console.log(item);
                if(key + 1 === objStore.length)
                    this.setState({"listas":listasAux})
            })
        }
        
        // }
        // Alert.alert("Lista carregada!")
        // console.log(objStore)
        // function atualizaLista(obj) {
        //     objStore = obj
        // }

        // await atualizaLista(jObject) 

        // this.state.listas = objStore;

        // console.log(objStore)
        
    } catch(e) {
        console.warn("Erro ao carregar as suas listas de compras!"+e)
    }
  }

  componentDidMount() {
    this.getListas();
    // 
   
  }


  async novaLista( nome ) {

        if(!nome) {
            console.warn('O nome da lista deve ser preenchido!')
            return false
        }

        const listaId = Date.now();

        const objStore = []

        if(this.state.listas && this.state.listas.length > 0) {
            this.state.listas.forEach(element => {
                objStore.push(element);
            });
        }  
        objStore.push(
            {
                listaId: String(listaId),
                nome: String(nome),
            }
        );
        
        try {

            // this.setState(this.state);

            const jsonValue = JSON.stringify(objStore);
            await AsyncStorage.setItem('listasCompra', jsonValue);
            this.setState({"listas":objStore})
            console.log(this.state.listas);
            Alert.alert("Informações Salvas!")
            // console.log('Informações salvas!');
        } catch (e) {
            console.error('Falha ao gravar os dados: '+e)
        }

    }

    async delLista( id ) {

        if(!id) {
            console.warn('Não foi possível excluir a lista')
            return false
        }

        let objStore = [...this.state.listas]

        let flagDel = false

        if(objStore && objStore.length > 0) {

            console.log(objStore)
        
            objStore.forEach( (element, key) => {
                
                if(element.listaId === id) {
                    
                    flagDel = delete objStore[key]
                    // console.log('entrou aqui')

                } 
            });
        }  

        console.log(flagDel)

        let objStore2 = []

        if(flagDel) {
            try {
                const jsonValue = JSON.stringify(objStore)
                await AsyncStorage.setItem('listasCompra', jsonValue);
                if(objStore && objStore.length > 0) {
                    objStore.forEach( (element, key) => {
                        objStore2.push(element);

                        if(key + 1 === objStore.length){
                            this.setState({"listas":objStore2})
                            Alert.alert("Lista excluída!")
                        }

                    });
                }
                
                
                // console.log('Informações salvas!');
            } catch (e) {
                console.error('Falha ao gravar os dados: '+e)
            }
        }
        
        

    }

  render() {

   //  const uniqueId = require("react-native-unique-id");

    const { modalNovaListaVisible } = this.state;
    const { newListaName } = this.state;

    // console.log(this.state.listas)

    const renderItem = ({ item }) => {
        return (
            <Listas delLista={() => this.delLista(item.listaId)} title={item.nome} />
        )
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.brandContainer}>
                <Image
                    style={styles.brandImg}
                    source={require('../../assets/img/cart.png')}
                />
                <Text style={styles.brandText}>
                    Minhas Compras
                </Text>
            </View>
            <View style={styles.listasContainer}>
        
                <View style={styles.listasTitleView}>
                    <Icons.List height={35} width={25} style={styles.listasTitleIcon}/>
                    <Text style={styles.listasTitleText}>Listas</Text>
                </View>

                <View style={
                    {
                        flex: 6, 
                        flexDirection: 'row',  
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }>
                
                    <FlatList ItemSeparatorComponent={
                            Platform.OS !== 'android' && (({ highlighted }) => (
                                <View
                                    style={[
                                        style.separator,
                                        highlighted && { marginLeft: 0 }
                                    ]}
                                />
                            ))
                        }
                        style={styles.flatList}
                        data={this.state.listas}
                        renderItem={renderItem}
                        keyExtractor={item => item.listaId}
                    /> 
                </View>
            
            </View>
            
            <ModalNovaLista
                modalVisible={modalNovaListaVisible} 
                closeModal={ () => this.setState({modalNovaListaVisible: false}) }
                nomeListaChangeText={text => this.setState({newListaName: text})}
                novaLista={ 
                    () => this.novaLista(newListaName) 
                }
            />

            <TouchableOpacity onPress={ () => this.setState({modalNovaListaVisible: true}) }
                style={styles.btnNovaLista}>
                <Icons.Plus height={20} width={20} style={styles.novaListaIcon}/>
            </TouchableOpacity>           
        
        </SafeAreaView>
    )

  }

}

export default Home;
