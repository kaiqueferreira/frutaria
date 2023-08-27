import {actionsTypes} from '../constants/frutas';

// STATE INICIAL DO REDUCER
const INITIAL_STATE = {
    frutas: [
        /*{id: 1, nome: 'Uva', quantidade: 20},
        {id: 1, nome: 'Maça', quantidade: 5},*/
    ]
};

// Reducer sempre precisa retornar um estado
const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //...
        case actionsTypes.ADICIONAR_FRUTA:
            // NAO PODEMOS ALTERAR O ESTADO PORQUE AINDA ESTMAOS COM REFERENCIA DO ESTADO ANTERIOR
            //state.frutas.push(ACTION.PAYLOAD)
            // PRECISAMOS RETONAR UM ESTADO NOVO
            // [...state.frutas, pegando o estado da lista 
            // {...action.paylod} inserindo a nova fruta na lista
            return {frutas: [ ...state.frutas, { ...action.paylod }] };
        case actionsTypes.REMOVER_FRUTA:
            return { frutas: state.frutas.filter(x => x.id !== action.paylod.id) }
        default:
            return state;    
    }
};

export {reducers};