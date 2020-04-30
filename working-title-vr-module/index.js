import React from 'react';
import {
    AppRegistry,
    NativeModules,
    StyleSheet,
    Text,
    View,
    VrButton
} from 'react-360';

export default class Clipboard extends React.Component {
    render() {
        return (
            <View style={styles.clipboardPanel}>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>Here is where I may display VR context info</Text>
                </View>
            </View>
        );
    }
};

export class ButtonToSafety extends React.Component {
    render() {
        return (
            <View style={styles.panel}>
                <View style={styles.greetingBox}>
                    <VrButton onClick={() => NativeModules.LinkingManager.openURL('http://localhost:3001/')} >
                        <Text style={styles.greeting}>Go Back to 2D Site</Text>
                    </VrButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clipboardPanel: {
        width: 300,
        height: 400,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});

AppRegistry.registerComponent('Clipboard', () => Clipboard);
AppRegistry.registerComponent('ButtonToSafety', () => ButtonToSafety);