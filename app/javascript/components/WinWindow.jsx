import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WinWindow = ({ time, playAgain }) => {
    const [name, setName] = useState('');
    const [scoreSaved, setScoreSaved] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const csrfToken = document.querySelector('[name="csrf-token"]').content;

    const navigate = useNavigate();

    const goToRanking = () => {
        navigate('/api/scores');
    };

    const handleClose = () => {
        setIsVisible(false);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken,
            },
            body: JSON.stringify({ score: { name, time } }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Score saved:', data);
            setScoreSaved(true);
        })
        .catch(error => {
            console.error('Error saving score:', error);
        });
    };

    return isVisible ? (
        <div className="win-window">
            <button id="close-btn" onClick={handleClose}>X</button>
            <h2>Congratulations!</h2>
            <p>Your time: {time} seconds</p>
            {!scoreSaved ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <button type="submit">Submit Score</button>
                </form>
            ) : (
                <>
                    {/* Replace this with your new component */}
                    <div>New Component</div>
                    <button id="btn-green" onClick={playAgain}>Play Again</button>
                    <button id="btn-blue" onClick={goToRanking}>Rankings</button>
                </>
            )}
        </div>
    ) : null;
};

export default WinWindow;
