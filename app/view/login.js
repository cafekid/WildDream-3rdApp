/**
 * Created by eicyan on 2017/5/31.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import * as ConfigAction from '../action/config';
import * as UserAction from '../action/user';

class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You need login!
                </Text>
            </View>
        )
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

export default connect((state, props) => ({

}), dispatch => ({
    userAction : bindActionCreators(UserAction, dispatch),
    configAction : bindActionCreators(ConfigAction, dispatch)
}), null, {
    withRef: true
})(LoginPage);