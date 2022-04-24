 import React, { Component } from 'react';

 import { 
     StyleSheet, 
     SafeAreaView, 
     View, 
     Image, 
     ScrollView, 
     Text, 
     TouchableOpacity,
     Alert
} from 'react-native';

 import * as Icons from 'react-native-feather';
 import AsyncStorage from '@react-native-async-storage/async-storage';

 import ModalLogin from './modal/ModalLogin';
 import ModalNewUser from './modal/ModalNewUser';
import { json } from 'express';
 
 class Login  extends Component {
 
   state = {
     modalLoginVisible: false,
     modalNewUserVisible: false,
     passIcon: "EyeOff",
     user: "joao_richter",
     pass: "12345",
     confirmpass:"",
     logado: false,
   }
 
   render() {

    //  const uniqueId = require("react-native-unique-id");
     const props = this.props;
    //  console.log(props.navigation)
     
     async function newUser( user, pass, confirmpass ) {

        if(!user) {
            console.warn('O nome de usuário deve ser preenchido!')
            return false
         }
         if(!pass) {
            console.warn('A senha deve ser preenchida!')
            return false
         }
         if(!confirmpass) {
            console.warn('A confirmação da senha deve ser preenchida!')
            return false
         }

         if(pass !== confirmpass) {
            console.warn('A senha não confere senha de confirmação!')
            return false
         }

        try {
          
        //   uniqueId().then(id => console.log(id));

          const objStore = {
            user: String(user),
            pass: String(pass),
          }

          const jsonValue = JSON.stringify(objStore);
          await AsyncStorage.setItem(objStore.user, jsonValue);
          Alert.alert("Informações salvas!");
          console.log('Informações salvas!');
        } catch (e) {
          console.error('Falha ao gravar os dados: '+e)
        }
    }

     async function login(user, pass, newRoute) {
        try {
            // console.log(user);
            const jsonValue = await AsyncStorage.getItem(user)
            // console.log(jsonValue);
            const jObject = jsonValue != null ? JSON.parse(jsonValue) : null;
            if(jObject) {
                if(jObject.user === user && jObject.pass === pass) {
                    props.navigation.navigate('Home');
                    console.log('login OK')
                }else {
                    console.warn('login FAIL');
                    return false;
                }
               
            }
        } catch(e) {
            console.warn("Erro! Por favor, tente novamente.")
            console.log(e)
            return false;
        }
        
     }
 
     const { modalLoginVisible } = this.state;
     const { modalNewUserVisible } = this.state;
     const { user } = this.state;
     const { pass } = this.state;
     const { confirmpass } = this.state;
     const { passIcon } = this.state;
 
     return (
         <SafeAreaView style={styles.container}>
             <ScrollView
                 contentInsetAdjustmentBehavior="automatic"
                 style={styles.backgroundStyle}>
                 <View style={styles.brandContainer}>
                    <Image
                        style={styles.brandImg}
                        source={require('../assets/img/cart.png')}
                    />
                    <Text style={styles.brandText}>
                        Minhas Compras
                    </Text>
                 </View>
                 <View style={styles.presentationContainer}>
                 <Text style={styles.questionText}>
                     O que você deseja fazer?
                 </Text>
                 <TouchableOpacity onPress={ () => this.setState({modalLoginVisible: true}) }
                   style={styles.btnLogin}>
                     <Icons.LogIn height={24} width={24} style={styles.loginIcon}/>
                     <Text style={styles.loginText}>Efetuar o Log-In</Text>
                 </TouchableOpacity>
                 <Text style={styles.questionText}>
                     ou
                 </Text>
                 <TouchableOpacity onPress={ () => this.setState({modalNewUserVisible: true}) }
                    style={styles.btnNewUser}>
                     <Icons.UserPlus height={24} width={24} style={styles.newUserIcon}/>
                     <Text style={styles.newUserText}>Criar nova conta</Text>
                 </TouchableOpacity>
                 </View>
                 
                <ModalLogin 
                    modalVisible={modalLoginVisible} 
                    closeModal={ () => this.setState({modalLoginVisible: false}) }
                    userChangeText={text => this.setState({user: text})}
                    passChangeText={text => this.setState({pass: text})}
                    login={ () => login(user, pass, "Home") }
                />
                <ModalNewUser
                    modalVisible={modalNewUserVisible} 
                    closeModal={ () => this.setState({modalNewUserVisible: false}) }
                    userChangeText={text => this.setState({user: text})}
                    passChangeText={text => this.setState({pass: text})}
                    passIcon={passIcon}
                    confirmPassChangeText={text => this.setState({confirmpass: text})}
                    newUser={ () => newUser(user, pass, confirmpass) }
                />

             </ScrollView>            
            
         </SafeAreaView>
     )
 
   }
 
 }
 
 const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#eaeaea',
       padding: 0,
   },
   backgroundStyle: {
       flex: 1,
   },
   brandContainer: {
       flex:1,
       justifyContent: 'flex-start',
       alignItems: 'center',
       flexDirection: 'column',
       backgroundColor: '#555',
       paddingVertical: 30,
   },
   brandText: {
       flex: 1,
       fontSize: 25,
       fontWeight: 'bold',
       color: '#FFF',
       marginBottom: 25,
   },
   brandImg: {
       flex:1,
       resizeMode: 'center',
       width: '100%',
       height: 150,
       marginHorizontal: 30,
       marginVertical:20,
   },
 
   //presentationContainer #########################################
 
   presentationContainer: {
       flex: 1,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       paddingTop: 30,
   },
 
   questionText: {
       flex: 1,
       padding: 20,
       fontSize: 17,
       color: '#000',
   },
 
   //Action buttons ######################################
   btnNewUser: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       paddingVertical: 10,
       paddingHorizontal: 15,
       marginTop: 5,
       backgroundColor: '#B74343',
       borderRadius: 5,
       borderWidth: .8,
       borderColor: '#fff',
   },
   newUserIcon: {
       flex: 1,
       color: '#FFF',
   },
   newUserText: {
       fontSize: 17,
       color: '#FFF',
       marginLeft: 10,
   },
 
   btnLogin: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       paddingVertical: 10,
       paddingHorizontal: 15,
       marginTop: 20,
       backgroundColor: '#17BF6C',
       borderRadius: 5,
       borderWidth: .8,
       borderColor: '#fff',
   },
   loginIcon: {
       flex: 1,
       color: '#FFF',
   },
   loginText: {
       fontSize: 17,
       color: '#FFF',
       marginLeft: 10,
   },
   
 });
 
 export default Login;
 