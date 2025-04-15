import { useState, useEffect } from 'react';

export default function Progressbar({timer}) {
  const [progress, setProgress] = useState(timer);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prevProgress => prevProgress - 10);
      }, 10);
  
      return () => {
        clearInterval(interval);
      }
    }, []);

    return <progress value={progress} max={timer}/>
}