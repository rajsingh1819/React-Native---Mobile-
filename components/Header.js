import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.Box1}>
                    <TouchableOpacity >
                        <AntDesign name="arrowleft" size={30} color="black" style={{ fontWeight: 200 }} />

                    </TouchableOpacity>

                    <Text style={styles.text1}>Women</Text>
                </View>

                <View style={styles.Box2}>
                    <TouchableOpacity>
                        <MaterialIcons name="search" size={35} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome5 name="heart" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons name="handbag" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Header


const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        width: "100%",
        height: '8%',
        elevation: 1,
        backgroundColor: 'white'




    },

    container2: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "100%",
        display: 'flex',
        padding: 10,
    },
    Box1: {
        flexDirection: 'row',
        width: "50%",
        alignItems: 'center',

    },
    text1: {
        fontSize: 20,
        marginLeft: 9,
        fontWeight: 'bold'
    },
    Box2: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '50%',

    }
})