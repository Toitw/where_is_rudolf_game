import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RankingPage = () => {
    const [scores, setScores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/scores')
            .then(response => response.json())
            .then(data => setScores(data))
            .catch(error => console.error('Error fetching scores:', error));
    }, []);

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="ranking-page">
            <h1>Rankings</h1>
            <table className="ranking-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Time (seconds)</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{score.name}</td>
                            <td>{score.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleBack} className="back-button">Back</button>
        </div>
    );
};

export default RankingPage;

