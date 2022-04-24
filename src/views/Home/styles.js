import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: '#eaeaea',
        padding: 0,
    },
    brandContainer: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#555',
        paddingTop: 25,
    },
    brandText: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 0,
    },
    brandImg: {
        flex:1,
        resizeMode: 'center',
        width: '100%',
        marginHorizontal: 30,
        marginVertical:20,
    },
  
    //listasContainer #########################################
  
    listasContainer: {
        flex: 3,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        backgroundColor: '#fafa'
    },

    flatList: {
        flex: 1,
        backgroundColor: "#ff0000"
    },
  
    //Action buttons ######################################
    btnNovaLista: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#B74343',
        borderRadius: 25,
        borderWidth: .8,
        borderColor: '#fff',
    },
    novaListaIcon: {
        flex: 1,
        color: '#FFF',
    },
  
    listasTitleView: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      paddingTop: 10,
      backgroundColor: '#815BF0',
      borderTopWidth: 0,
      // borderTopColor: '#555555',
      borderBottomWidth: 1,
      borderBottomColor: '#342181',
    },
    listasTitleIcon: {
      color: '#fff',
      marginRight: 5,
    },
    
    listasTitleText: {
        fontSize: 20,
        color: '#fff',
    },
  
    separator: {
        flex: 1,
        backgroundColor: '#bbb',
        height: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    }
    
  });

  export default styles;