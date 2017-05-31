/**
 * Created by eicyan on 2017/5/31.
 */
import * as View from '../view';

export default ViewPage = {
    startup: ()=>{
        return {
            component: View.Startup,
            name: 'startup'
        }
    },
    login: ()=>{
        return {
            component: View.Login,
            name: 'login'
        }
    },
    home: ()=>{
        return {
            component: View.Home,
            name: 'home'
        }
    }
}