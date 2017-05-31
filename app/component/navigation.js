/**
 * Created by eicyan on 2017/5/27.
 */
import React, { Component } from 'react';
import {
    View,
    NetInfo,
    Navigator
} from 'react-native';
import { connect } from 'react-redux';
import { ComponentStyles } from '../style';

class Navigation extends Component {
    render() {
        return (
            <View style={ ComponentStyles.container }>

            </View>
        );
    }
}

export default connect(state => ({
    user: state.user,
}), dispatch => ({
}), null, {
    withRef: true
})(Navigation);