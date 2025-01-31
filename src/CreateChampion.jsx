import { useState } from 'react';
import {useNavigate} from "react-router";

function CreateChampion({ onAddChampion }) {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        region: '',
        abilities: '',
        lore: '',
    });

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate(`/champions`)

        try {
            const response = await fetch('http://145.24.223.189:8000/champions/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (!response.ok) {
                throw new Error('Er is iets mis gegaan bij het toevoegen van de champion.');
            }

            const newChampion = await response.json();
            onAddChampion(newChampion);
            setFormData({   name: '', role: '', region: '', abilities: '', lore: '',});
        } catch (error) {
            console.error('Fout bij het verzenden van de champion:', error);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center py-10">
                <h1 className="text-4xl font-extrabold text-yellow-200 mb-8">
                    Toevoegen
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
                <div>
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="body" className="block text-gray-700 font-semibold mb-2">Role:</label>
                    <textarea
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">Region:</label>
                    <input
                        type="text"
                        id="region"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">Abilities:</label>
                    <input
                        type="text"
                        id="abilities"
                        name="abilities"
                        value={formData.abilities}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">Lore:</label>
                    <input
                        type="text"
                        id="lore"
                        name="lore"
                        value={formData.lore}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Toevoegen
                    </button>
                </div>
            </form>
        </>
    );
}

export default CreateChampion;