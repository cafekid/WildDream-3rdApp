/**
 * Created by eicyan on 2017/5/27.
 */
import * as types from '../constant/actionTypes';
let initialState = {
    DisplayName: 'WildDream'
};

export default function (state = initialState, action) {

    //const { payload, meta = {}, type, error } = action;
    //const { sequence = {}, category, id, url } = meta;
    //if (sequence.type === 'start' || error) {
    //    return state;
    //}
    //switch (type) {
    //    case types.FETCH_USER_INFO:
    //        return {
    //            ...state,
    //            ...payload
    //        };
    //    case types.FETCH_USER_ASSET:
    //        return {
    //            ...state,
    //            [category]: payload
    //        };
    //    case types.FETCH_USER_ASSET_WITHPAGE:
    //        return {
    //            ...state,
    //            [category]: state[category].concat(payload)
    //        };
        //case types.REMOVE_POST:
        //    return removePost(state, category, id, url)
        //default:
            return state;
    //}
}

