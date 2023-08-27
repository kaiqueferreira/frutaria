// Function combineReducers
import { combineReducers } from 'redux';
import { reducers as frutaReducers} from './frutas.reducer';
// Caso tivessemos outros reducers
//import { reducers as vegetaisReducers} from './fruta.reducer.js'


const reducers = combineReducers ({
    frutaReducers
});

export { reducers };


