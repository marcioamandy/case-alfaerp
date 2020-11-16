import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './styles.css';
import { RecordAirport } from './types';
import { Link } from 'react-router-dom';
// import Filters from '../../components/Filters';

const BASE_URL = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))';

const Records = () => {
    const [recordsResponse, setRecordsResponse] = useState<RecordAirport>();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        Axios.get(`${BASE_URL}/Airports?$filter=contains(Location/Address, 'District')`)
            .then(response => setRecordsResponse(response.data));
    }, [userName]);

    const handlePageChange = (nome: string) => {
        setUserName(nome);
    }

    return (
        <div className="page-container">
            {/* <Filters link="/charts" linkText="VER GRÀFICOS" /> */}
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
                        <th>ICAOCODE</th>
                        <th>IATACODE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{recordsResponse?.Name}</td>
                        <td>{recordsResponse?.IcaoCode}</td>
                        <td>{recordsResponse?.IataCode}</td>
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
