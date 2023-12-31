import React from 'react';
import './WinWindow.css'; 

const WinWindow = ({ time }) => {
  // Placeholder ranking data
  const rankingData = [
    { position: 1, time: '00:30', name: 'Player 1' },
    { position: 2, time: '00:35', name: 'Player 2' },
    // ... more data
  ];

  return (
    <div className="win-window">
      <h1>Congratulations!</h1>
      <p>Total Time: {totalTime}</p>

      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Time</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {rankingData.map((row) => (
            <tr key={row.position}>
              <td>{row.position}</td>
              <td>{row.time}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => { /* Play Again logic */ }}>Play Again</button>
      <button onClick={() => { /* Highscore logic */ }}>Highscore</button>
    </div>
  );
};

export default WinWindow;