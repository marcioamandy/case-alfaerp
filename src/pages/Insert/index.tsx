import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './styles.css';
import { RecordPessoa } from './types';
// import Filters from '../../components/Filters';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))';

const Records = () => {
    const [recordsResponse, setRecordsResponse] = useState<RecordPessoa>();
    const [userName, setUserName] = useState('Henry');

    useEffect(() => {
        Axios.get(`${BASE_URL}/People?$select=FirstName, LastName&$filter=contains(UserName, '${userName}')`)
            .then(response => setRecordsResponse(response.data));
    }, [userName]);

    const handlePageChange = (nome: string) => {
        setUserName(nome);
    }

    return (
        <div className="page-container">
            {/* <Filters link="/charts" linkText="VER GRÀFICOS" /> */}
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
            <Link to="/records">
                <div className="home-actions">
                    <button className="home-btn">
                        Consulta Nome e Sobrenome
                    </button>
                    <div className="home-btn-icon">
                        {/* <ArrowIcon /> */}
                    </div>
                </div>
            </Link>
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
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>SOBRENOME</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{recordsResponse?.FirstName}</td>
                        <td>{recordsResponse?.LastName}</td>
                    </tr>
                </tbody>
            </table>
            {/* <Pagination
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordsResponse?.totalPages}
            /> */}
        </div>
    );
}

export default Records;
