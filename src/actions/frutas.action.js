import { actionsTypes} from '../constants/frutas';


const actions = {

    // uma action por componente
    adicionar: fruta => ({
        // Padrao
        //type: 'ADICIONAR_FRUTA',
        //Reducer
        type: actionsTypes.ADICIONAR_FRUTA,
        payload: fruta,

    }),

    remover: fruta => ({
         // Padrao
        //type: 'REMOVER_FRUTA',
        //Reducer
        type: actionsTypes.REMOVER_FRUTA,
        payload: fruta,

    }),
}


export {actions};