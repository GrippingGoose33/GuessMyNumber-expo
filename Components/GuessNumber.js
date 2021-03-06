import React, {useState} from 'react';
import { StyleSheet, View, Button, Text, TextInput} from 'react-native';
import List from './List';

function mapItems(items){
    return items.map((value, i) => ({kay:i.toString(), value}));
}

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random() * (max - min) + min);
}

function calculateText(number, random) {
    const soClose = 5;
    const diff = Math.abs(random - number);

    if (diff < soClose){
        
        if (number < random) {
            return "Estas muy cerca! Tu numero es un poco bajo"
        }
        else {
            return "Estas muy cerca! Tu numero es un poco alto"
        }
    }
    else {
        if (number < random) {
            return "Tu numero es muy bajo"
        }
        else {
            return "Tu numero es muy alto"
        }
    }
}

const random = generateRandomNumber(100);


function GuessNumber(props) {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [guessList, setGuessList] = useState([]);
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(0);
    
    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnPress = () =>{
        const num =parseInt(number);
        const numRand = parseInt(random);
        const text = calculateText(num, numRand);

        if (num === numRand) {
            setWin(true);
        }

        setNumber("");
        setMessage(text);
        setGuessList([
            num,
            ...guessList
        ]);
        setCount(count + 1);

    }

    return (
        <View style={styles.game}>
            <TextInput 
                style={styles.input}
                autoFocus
                placeholder="Guess My Number"
                onChangeText = {handleOnChange}
                defaultValue = {number}
            />

            <Button
                title="Probar"
                onPress={handleOnPress}
            />
            {
                win?
                    <Text>
                        Felicidades, lo has adivinado en {count} intentos
                    </Text>
                    :
                    <Text>{message}</Text>
            }

            <List data={mapItems(guessList)}/>
        </View>
    );
}

export default GuessNumber;

const styles = StyleSheet.create({
    game: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        width: 400
    },

    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10
    }
})