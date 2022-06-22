import {createStore, combineReducers} from 'redux';
import {drawerReducer} from './reducer'

const reducer = combineReducers({
    drawerReducer
})

const Store = createStore(reducer);

export default Store;