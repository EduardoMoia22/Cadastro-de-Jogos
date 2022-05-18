import React, { useState, useEffect } from "react"
import axios from "axios";

import Card from "../../Components/Card";
import "./style.css"

export default function Home(){
    const [values, setValues] = useState();
    const [listGames, setListGames] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButton = () => {
        axios.post("http://localhost:3001/register", {
            nome: values.nome,
            estilo: values.estilo
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/getCards').then((response) =>{
            setListGames(response.data);
        })
    }, []);
    
    return (
        <div className="container">
            <h1>Cadastro de jogos</h1>

            <input type="text" name="nome" placeholder="Nome do jogo" onChange={handleChangeValues}/>

            <input type="text" name="estilo" placeholder="Estilo de jogo" onChange={handleChangeValues}/>

            <button onClick={handleClickButton}>Cadastrar</button>

            <div className="card-wrapper">
                {typeof listGames !== "undefined" && 
                    listGames.map((value) => {
                        return(
                            <Card key={value.id} name={value.gam_nome} style={value.gam_estilo}/>
                        );
                })}
            </div>
        </div>  
            
    )
}