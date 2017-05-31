/**
 * Created by eicyan on 2017/5/31.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    NetInfo,
    Platform,
    StyleSheet,
    BackAndroid,
    TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class StartupPage extends Component {

    constructor (props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello World!~~
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


export default StartupPage;
//export default connect((state, props) => ({
//    config: state.config
//}), dispatch => ({
//    configAction : bindActionCreators(ConfigAction, dispatch),
//    userAction : bindActionCreators(UserAction, dispatch)
//}), null, {
//    withRef: true
//})(StartupPage);