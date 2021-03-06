import React from 'react';
import {View, Text, StyleSheet, Button, Image, Dimensions, ScrollView} from  'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <ScrollView>
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                //source={require('../assets/success.png')}
                source={{uri:'https://n1.freetls.fastly.net/hubpage/dictionary-images/summit_3x.jpg'}}
                 style={styles.image}
                 />
            </View>
            <View style={styles.resultContainer}>
                <BodyText>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestartGame}>
                NEW GAME
            </MainButton>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        borderRadius: Dimensions.get('window').width * 0.5 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        margin: 10
    },
    highlight: {
        color: Colors.primary
    }
});

export default GameOverScreen