import React, {useState} from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';


import logoSvg from '../../assets/logo.svg';

export default function Logon() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,email,whatsapp,city,uf
        };

        const response = await api.post('ongs', data);

        try {
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }
        catch {
            alert('Erro no cadastro. Tente novamente');
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoSvg} alt="Be The Hero"></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e ajude uma ong.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>

                    <input 
                    type="text" placeholder="Nome da Ong" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Whatsapp" 
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}/>

                    <div className="input-group">
                        <input type="text" placeholder="Cidade" 
                    value={city}
                    onChange={e => setCity(e.target.value)}/>
                        <input type="text" placeholder="Uf" style={{width: 80}} 
                    value={uf}
                    onChange={e => setUf(e.target.value)}/>
                    </div>

                    <button className="button" type="Submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}