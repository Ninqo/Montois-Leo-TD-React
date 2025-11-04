import { useState, useEffect } from 'react';
import SuperHeros from './SuperHeros.json';

function App() {
    const nom = "Toto";
    const [compteur, setCompteur] = useState(0);
    const [recherche, setRecherche] = useState("");

    // useEffect pour mettre à jour le titre de la page
    useEffect(() => {
        document.title = `Compteur : ${compteur}`;
    }, [compteur]);

    const incrementer = () => {
        setCompteur(compteur + 1);
    };

    const reinitialiser = () => {
        setCompteur(0);
    };

    // Filtrer les super-héros selon la recherche
    const herosFiltres = SuperHeros.filter((hero) =>
        hero.name.toLowerCase().includes(recherche.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Bonjour {nom}, je découvre React !</h1>

            <div style={{ marginTop: '30px' }}>
                <h2>Compteur : {compteur}</h2>
                <button
                    onClick={incrementer}
                    style={{
                        padding: '10px 20px',
                        marginRight: '10px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    +
                </button>
                <button
                    onClick={reinitialiser}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    Réinitialiser
                </button>
            </div>

            <div style={{ marginTop: '30px' }}>
                <h2>Super-Héros</h2>
                <p>Nombre total de super-héros : {SuperHeros.length}</p>

                {/* Champ de recherche */}
                <input
                    type="text"
                    placeholder="Rechercher un super-héros..."
                    value={recherche}
                    onChange={(e) => setRecherche(e.target.value)}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        width: '300px',
                        marginBottom: '20px',
                        border: '2px solid #ccc',
                        borderRadius: '5px'
                    }}
                />

                {/* Liste des super-héros filtrés */}
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {herosFiltres.map((hero) => (
                        <li
                            key={hero.id}
                            style={{
                                padding: '10px',
                                marginBottom: '5px',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '5px'
                            }}
                        >
                            {hero.name}
                        </li>
                    ))}
                </ul>

                {/* Message si aucun résultat */}
                {herosFiltres.length === 0 && (
                    <p style={{ color: 'red', fontStyle: 'italic' }}>
                        Aucun super-héros trouvé pour "{recherche}"
                    </p>
                )}

                <p style={{ marginTop: '20px', color: '#666' }}>
                    {herosFiltres.length} super-héros affiché(s)
                </p>
            </div>
        </div>
    );
}

export default App;