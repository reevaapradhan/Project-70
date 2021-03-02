import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <View>
                <Header
                    centerComponent={{
                        text: 'Write Story'
                    }} />

                <Text>Story Title:</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={text => {
                        this.setState({ text: text });
                    }}
                    value={this.state.text} />

                <Text>Author:</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={text => {
                        this.setState({ text: text });
                    }}
                    value={this.state.text} />

                <Text>Write your story:</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={text => {
                        this.setState({ text: text });
                    }}
                    value={this.state.text} />
                <TouchableOpacity
                style={styles.submitButton}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    submitButton: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        borderWidth:4
    }
  });