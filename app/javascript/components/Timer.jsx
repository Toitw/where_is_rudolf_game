import React, { useEffect } from 'react';

// ... existing imports ...

const Timer = ({ time, setTime, gameOver }) => {
    useEffect(() => {
        if (!gameOver) {
            const interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [gameOver, setTime]);

    return <div className="timer">Timer: {time} seconds</div>;
};

export default Timer;

