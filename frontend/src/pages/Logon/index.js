import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoSvg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        const data = {
            id
        };


        try {
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }
        catch {
            alert('O Id informado não existe. Favor, realizar o cadastro para acessar o sistema.');
        }

    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoSvg} alt="Heroes"></img>

                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon</h1>
                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button type="Submite" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"></img>
        </div>
    )
}