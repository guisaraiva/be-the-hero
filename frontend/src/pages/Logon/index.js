//importação de arquivos e pacotes.
import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import heroesimg from '../../assets/heroes.png';
import logonimage  from '../../assets/logo.svg';

//Function de login da aplicação.
export default function Logon(){
    
    //Declaração de variáveis.
    const [id, setId] = useState('');
    const history = useHistory();
    
    async function handleLogin(e){
        e.preventDefault();
        //Tratament de exceção.
        try{
            const response = await  api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
            console.log(response.data.name);

        }
        catch (err){
            alert('Falha no login. Tente novamente.')
        }
    }
    return ( 
       //Bloco HTML com as respectivas tags.
       <div className="logon-container">
            <section className="form">
                <img src = {logonimage} alt = "Logo Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input  
                        placeholder="Sua Identificação"
                        value={id}
                        onChange={ e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className = "back-link" to="/register">
                        <FiLogIn size={16} color = "#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src ={heroesimg} alt ="Heroes" />
        </div>
    );
}