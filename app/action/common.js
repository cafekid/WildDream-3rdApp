/**
 * Created by eicyan on 2017/6/13.
 */
import { createAction } from 'redux-actions';
import _ from 'lodash';
import * as types from '../constant/actionTypes';

export const message = createAction(types.SHOW_MESSAGE, (text)=> {
    let id = _.uniqueId();
    return {
        id: id,
        text
    }
});
