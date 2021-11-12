import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Checkout ({ navigation }) {
    return(
        <SafeAreaView style={styles.mainForm}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>

                <Text style={{fontSize: 21, flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginRight: 60}}
                        onPress={() => navigation.navigate('Details')}>
                        <AntDesign name="left" size={21} color="black" />
                    </TouchableOpacity> Confirm Purchase
                </Text>
            </View>

            <View>
                <Text style={{ontSize: 16, marginTop: 10, fontWeight: '500'}}>Pay with your bank card: </Text>
                <Image 
                    source={require('./assets/card1.png')} 
                    style={{
                        width: '100%', 
                        height: 220, 
                        alignItems: 'center', 
                        borderRadius: 10,
                        }}>
                </Image>
            </View>

            <View>
                <Text style={{ fontSize: 16, fontWeight: '500'}}>Other payment method:</Text>
                <View style={styles.inputText1}>
                    <Text style={{fontSize: 18,}}>Card Number:</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{borderWidth: 1, borderColor: 'black'}}>
                            <AntDesign name="lock" size={24} color="black" style={{marginTop: 10,}}/>
                            <TextInput placeholder="Enter your card number" secureTextEntry={true} style={{padding: 15, borderBottomWidth: 2, borderBottomColor: 'black',  borderRadius: 5, width: '80%', marginTop: 10}}></TextInput>
                        </View>
                    </View>
                    
                </View>

            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create ({
    mainForm: {
      padding: 20,
      flex: 1, 
      backgroundColor: '#f5f3ed',
    },
    inputText1: {
        marginTop: 20,
    }
});