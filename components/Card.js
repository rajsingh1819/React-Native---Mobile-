import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import New from './new.png';
import { FontAwesome5 } from '@expo/vector-icons';


function Card(props) {
    // console.log(props.data);
    return (
        <ScrollView>
            <View style={styles.container1}>
                {props.data.map((item, index) => (
                    <TouchableOpacity key={index}>
                        {((index + 1) % 2 === 0) ? (
                            <View style={styles.imageContainer}>
                                <ImageBackground source={{ uri: item.mediaUrl }} style={styles.image}>
                                    <TouchableOpacity>
                                        <View style={styles.heartIcon} >
                                            <FontAwesome5 name="heart" size={30} color="black" />
                                        </View>
                                    </TouchableOpacity>
                                </ImageBackground>
                                <View style={styles.textStyle}>
                                    <Text style={styles.text1}>{item.category[0].name}</Text>
                                    <Text style={styles.text}>{item.description}</Text>
                                    <Text style={styles.text}>₹{item.variants[0].sellingPrice}/-</Text>
                                </View>
                            </View>
                        ) : (
                            <View style={styles.imageContainer}>
                                <ImageBackground source={{ uri: item.mediaUrl }} style={styles.image} >
                                    <TouchableOpacity>
                                        <View style={styles.heartIcon}>
                                            <FontAwesome5 name="heart" size={30} color="black" />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.overlayImage}>
                                        <Image source={New} style={styles.overlayImage1} />
                                    </View>
                                </ImageBackground>
                                <View style={styles.textStyle}>
                                    <Text style={styles.text1}>{item.category[0].name}</Text>
                                    <Text style={styles.text}>{item.description}</Text>
                                    <Text style={styles.text}>₹{item.variants[0].sellingPrice}/-</Text>
                                </View>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    imageContainer: {
        width: 170,
        height: 300,
        overflow: 'hidden',
        borderRadius: 5,
        margin: 5,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    overlayImage: {
        width: 100,
        height: 70,
        resizeMode: 'cover',
        position: 'absolute',
        left: 10,
        bottom: 0,
    },
    overlayImage1: {
        width: "50%",
        height: "40%",
        position: 'relative',

    },
    heartIcon: {
        position: 'absolute',
        right: 5,
        top: 3,

    },
    textStyle: {
        // backgroundColor: 'yellow'

    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        fontWeight: '400'


    }


});

export default Card;
