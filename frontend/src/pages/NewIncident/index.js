import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';


import './styles.css';
import logoSvg from '../../assets/logo.svg';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();
        const ongId = localStorage.getItem('ongId');

        const data = {
            title, description, value
        };

        try {
             await api.post('incidents',data, {
                headers: {
                    Authorization: ongId
                }
            });
            
            history.push('/profile');
        }
        catch {
            alert('Erro no cadastro de caso. Tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoSvg} alt="Heroes"></img>
                    <p>Cadastrar novo caso</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
            </Link>
                </section>
                <form onSubmit={handleNewIncident}>

                    <input
                        type="text"
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        type="text"
                        placeholder="Descrição do caso"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                    <input
                        type="text"
                        placeholder="Valor em reais. Ex.: 120,00"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="Submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}