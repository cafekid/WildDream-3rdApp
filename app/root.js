/**
 * Created by eicyan on 2017/5/20.
 */
import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { Store } from './reducer/store';
import Navigation from './component/navigation';

class RNWildDreamApp extends Component {
    render() {
        return (
            <Provider store={ Store }>
                <Navigation/>
            </Provider>
        )
    }
}

export default RNWildDreamApp;

