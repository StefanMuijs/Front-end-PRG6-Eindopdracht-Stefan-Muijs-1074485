import {Link, useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";

function Champion(){
    const params = useParams();
    const id = params.id;
    const [champion, setChampion] = useState([]);
    const navigate = useNavigate()
    const images = ["/lol.jpg", "/lol2.jpg", "/lol3.webp", "/lol4.jpg"];
    const [randomImage, setRandomImage] = useState("");

    useEffect(() => {
        async function fetchChampions() {
            try {
                const response = await fetch(`http://145.24.223.189:8000/champions/${id}`,{
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                setChampion(data);
                const randomIndex = Math.floor(Math.random() * images.length);
                setRandomImage(images[randomIndex]);
            } catch (error) {
                console.error('Fout bij het ophalen van de champion:', error);
            }
        }
        fetchChampions();
    }, []);


        async function deleteChampion(id) {
            try {
                const response = await fetch(`http://145.24.223.189:8000/champions/${id}`,{
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                response.json();
                navigate('/champions');
            } catch (error) {
                console.error('Fout bij het ophalen van de champion:', error);
            }
        }


        const handleDelete = () => {
            deleteChampion(champion.id);
        }


        return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="text-center bg-gray-800 p-10 rounded-lg shadow-lg">
                <img src={randomImage} alt="Champion" className="mb-5 h-80 object-cover rounded-lg mx-auto"/>
                <h3 className="text-2xl font-bold text-yellow-200 mb-4">{champion.name}</h3>
                <p className="text-white">
                    <strong className="text-yellow-200">Role:</strong> {champion.role}
                </p>
                <p className="text-white">
                    <strong className="text-yellow-200">Region:</strong> {champion.region}
                </p>
                <p className="text-white">
                    <strong className="text-yellow-200">Abilities:</strong> {champion.abilities}
                </p>
                <p className="text-white">
                    <strong className="text-yellow-200">Lore:</strong> {champion.lore}
                </p>
                <br/>
                <Link to={`/champions/${champion.id}/edit`} className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 mb-8">Edit</Link>
                <br></br>
                <button
                    onClick={handleDelete}
                    className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition duration-300 mt-5"
                >
                    Delete
                </button>
            </div>
        </div>
        );

}

export default Champion;