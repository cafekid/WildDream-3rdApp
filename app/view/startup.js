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
import TimerMixin from 'react-timer-mixin';
import * as Animatable from 'react-native-animatable';
import * as ConfigAction from '../action/config';
import * as UserAction from '../action/user';
import Config, { storageKey } from '../config';
import ViewPage from '../component/view';

class StartupPage extends Component {

    constructor (props) {
        super(props);

    }

    componentWillUnmount() {
        this.timer && TimerMixin.clearTimeout(this.timer);
    }

    checkUserToken(){
        console.log('checkUserToken');
        this.props.configAction.getConfig({
            key: storageKey.USER_TOKEN,
            resolved: (data)=>{
                console.log('resolved');
                if(data && data.access_token && data.username && data.password){
                    this.refreshUserToken(data);
                }else{
                    this.onCheckUserTokenRejected();
                }
            },
            rejected: (data)=>{
                console.log('rejected');
                this.onCheckUserTokenRejected();
            }
        });
    }

    onCheckUserTokenRejected(){
        console.log('onCheckUserTokenRejected');
        NetInfo.fetch().then((netinfo=> {
            if(netinfo.toUpperCase() != 'NONE'){
                this.showLoginModal();
            }
        }));
    }

    refreshUserToken(tokenData){
        console.log('refreshUserToken');
        //const { userAction, router } = this.props;
        //userAction.login({
        //    username: tokenData.username,
        //    password: tokenData.password,
        //    resolved: (data)=>{
        //        data.username = tokenData.username;
        //        data.password = tokenData.password;
        //        this.handleLoginResolved(data);
        //    },
        //    rejected: (data)=>{
        //        this.showLoginModal();
        //    }
        //});
    }

    showLoginModal(){
        //this.setState({
        //    modalBackdropVisiable: true
        //});
        this.timer = TimerMixin.setTimeout(() => {
            this.props.router.resetTo(ViewPage.login());
        }, 500);
    }

    onPageContentShow(){
        console.log('onPageContentShow');
        this.timer = TimerMixin.setTimeout(() => {
            this.checkUserToken();
        }, 300);
    }

    renderContent(){
        console.log('renderContent');
        return (
            <Animatable.View
                onAnimationEnd = {()=>this.onPageContentShow() }
                animation="fadeInDown">
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
            </Animatable.View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderContent() }
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

export default connect((state, props) => ({
    config: state.config
}), dispatch => ({
    configAction : bindActionCreators(ConfigAction, dispatch),
    userAction : bindActionCreators(UserAction, dispatch)
}), null, {
    withRef: true
})(StartupPage);