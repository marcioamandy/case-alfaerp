import React from 'react';
// import { ReactComponent as ArrowIcon } from '../../assets/img/arrow.svg';
// import { ReactComponent as GamerImage } from '../../assets/img/gamer.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                O teste solicitado:
            </h1>
            <h3 className="home-text-subtitle">
                Usando uma linguagem de programação de sua preferência, consuma os dados deste serviço padrão OData executando as operações:
            </h3>
            <h2 className="home-text-subtitle2">
                Referência <b>OData</b> Services
            </h2>
            <ul className="home-text-2">
                <li>
                    Consultar nome e sobrenome das pessoas com nome de usuário que contenha Henry
                    <Link to="/records">
                        <div className="home-actions">
                            <button className="home-btn">
                                Consultar Nome e SobreNome
                            </button>
                            <div className="home-btn-icon">
                                {/* <ArrowIcon /> */}
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    Incluir uma pessoa
                    <Link to="/insert">
                        <div className="home-actions">
                            <button className="home-btn">
                                Insert
                            </button>
                            <div className="home-btn-icon">
                                {/* <ArrowIcon /> */}
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    Excluir a pessoa que você incluiu acima
                    <Link to="/delete">
                        <div className="home-actions">
                            <button className="home-btn">
                                Delete
                            </button>
                            <div className="home-btn-icon">
                                {/* <ArrowIcon /> */}
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    Consultar todos os aeroportos que o endereço da localização contenha a palavra 'District'
                    <Link to="/aeroporto">
                        <div className="home-actions">
                            <button className="home-btn">
                                Consulta Aeroportos
                            </button>
                            <div className="home-btn-icon">
                                {/* <ArrowIcon /> */}
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>

        </div>
        {/* <GamerImage className="home-image" /> */}
    </div >
);

export default Home;
