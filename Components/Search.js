import React from 'react';
import { StyleSheet,Image ,Text, View } from 'react-native';
class Search extends React.Component {
    render() {
        return (
            <View style={styles.search}>
                <View style={styles.title}>
                    <Image  
                    style={styles.stretch}
                    source={require('../assets/y.jpg')} 
                    />
                    <Text style={styles.text} >
                        Myhotel
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    search:{
        flex:1,
        flexDirection:'row',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent:"flex-start",
    },
    stretch:{ 
        flex: 1,  
        width:50,
        height:50
    },
    text:{
        flex: 3, 
    }
})
export default Search 