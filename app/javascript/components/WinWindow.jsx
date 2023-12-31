import React, { useState } from 'react';

const WinWindow = ({ time }) => {
    const [name, setName] = useState('');
    const csrfToken = document.querySelector('[name="csrf-token"]').content;

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
            // Handle successful score save, maybe redirect or show a message
        })
        .catch(error => {
            console.error('Error saving score:', error);
        });
    };

    return (
        <div className="win-window">
            <h2>Congratulations!</h2>
            <p>Your time: {time} seconds</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <button type="submit">Submit Score</button>
            </form>
        </div>
    );
};

export default WinWindow;
