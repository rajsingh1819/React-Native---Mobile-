import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import Header from './Header';
import Card from "./Card"
import sort from "./sort.png"
import filter from "./filter.png"



function Product() {
    const [product, setProduct] = useState([]);

    const getData = async () => {
        const url = "https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setProduct(result.object);

        }

    }

    useEffect(() => {
        getData();


    }, [])


    return (
        <View style={styles.container}>
            {/* Header Component */}
            <StatusBar style={{ backgroundColor: 'white' }} />

            <Header />
            {/* Component */}
            <View style={styles.container2}>
                <Text style={styles.text1}>{product.length > 0 ? `${product.length}/100 Products` : "Loading..."}</Text>
                <View style={styles.Box1}>

                    <TouchableOpacity>
                        <View style={styles.innerBox}>
                            <Image source={sort} style={styles.img1} />

                            <Text style={styles.text2}>Sort</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity >
                        <View style={styles.innerBox}>
                            <Image source={filter} style={styles.img2} />
                            <Text style={styles.text2}>Filter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Card Component */}
            <Card data={product} />




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'white',

    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

        alignItems: 'center',
        marginTop: 3,


    },
    Box1: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        width: '40%',




    },
    innerBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text1: {
        color: "#93A2B7",
        fontSize: 14,

    },
    img1: {
        height: 20,
        width: 20

    },
    img2: {
        height: 20,
        width: 20,


    },
    text2: {
        fontSize: 14,
        color: '#4A5564',
        marginLeft: 7
    }

})

export default Product