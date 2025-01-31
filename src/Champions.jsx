import React, {useState, useEffect} from 'react';
import {Link} from "react-router";

function Champions() {

    const [champions, setChampions] = useState([]);

    useEffect(() => {
        async function fetchChampion() {
            try {
                const response = await fetch('http://145.24.223.189:8000/champions', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                setChampions(data.items);
            } catch (error) {
                console.error('Fout bij het ophalen van de champion:', error);
            }
        }

        fetchChampion();
    }, []);

    const list = champions.map(champion => (
        <li
            key={champion.id}
            className="bg-gradient-to-br bg-gray-1000 shadow-lg rounded-lg p-6 border border-blue-200 hover:scale-105 transform transition-all duration-300"
        >
            <h3 className="text-2xl font-bold text-yellow-200 mb-4">{champion.name}</h3>
            <p className="text-white">
                <strong className="text-yellow-200">Role:</strong> {champion.role}
            </p>
            <p className="text-white">
                <strong className="text-yellow-200">Region:</strong> {champion.region}
            </p>
            <br></br>
            <Link to={`/champions/${champion.id}`} className="text-yellow-200"> Details </Link>
        </li>

    ));

    return (

        <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {list}
            </ul>
        </div>
    );

}

export default Champions;

