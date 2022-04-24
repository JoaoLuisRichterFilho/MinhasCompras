import React from "react";
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Swipeable } from "react-native-gesture-handler";

import * as Icons from 'react-native-feather';

const Listas = ({ title, delLista, accessLista }) => {

    return (

        <Swipeable style={styles.swipe}
            renderRightActions={ () => (
                <View style={styles.actionRight}>
                    <View style={styles.btnDelView}>
                        <TouchableOpacity 
                            onPress={delLista}
                            style={styles.deleteButton}
                        >
                            <Icons.Trash height={24} width={24} style={styles.deleteIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        >
            <View style={styles.item}>
                <TouchableOpacity 
                    onPress={accessLista}
                    style={styles.accessListaButton}
                >
                    <Icons.Database height={24} width={24} style={styles.accessIcon}/>
                    <Text style={styles.nameLista}>{title}</Text>
                </TouchableOpacity>
            </View>
        </Swipeable>

    )
}

const styles = StyleSheet.create({
    swipe: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        // backgroundColor: '#ff0000'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        // height: 25,
        // backgroundColor: '#000000',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        alignContent: 'center',
        paddingBottom: 20,
    },
    nameLista: {
        fontFamily: 'Helvetica',
        fontSize: 24,
        color: '#000',
        backgroundColor: '#fff',
    },
    actionRight: {
        // flex: 1, 
        backgroundColor: '#fafa'
    },
    actionRightText: {
        color: '#fff',
    },
    btnDelView: {
        flex: 1,
        flexDirection: 'row',
        width: 70,
        justifyContent: "center",
        alignItems: 'center',
    },
    deleteButton: {
        // flex: 1,
    },
    deleteIcon: {
        color: "#fff",
    }
})

export default Listas;