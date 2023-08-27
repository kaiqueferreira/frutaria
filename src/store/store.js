// Repositorio que contem os estados de todos os reducers
import {createStore} from 'redux';
import { reducers } from '../reducers';


// Passando os todos os reducers
const store = createStore(
    reducers,
    // ativando plugin redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store};