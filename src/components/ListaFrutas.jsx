import React from "react";
import AdicionarFruta from './AdicionarFruta';
import Fruta from './Fruta';
import { useSelector } from "react-redux";

const ListaFrutas = () => {
    /*const frutas = [
        {id:1, nome: 'Abacaxi', quantidade: 5},
        {id:2, nome: 'Maça', quantidade: 12}
    ]*/

    const frutas = useSelector(state => state.frutaReducers.frutas)

    return (
        <>
           <h1>Lista de Frutas</h1>
           <AdicionarFruta/>

           {frutas.map(fruta => (
            <Fruta key={fruta.id} fruta={fruta} />
           ))}
        </>
    );
};

export default ListaFrutas;

