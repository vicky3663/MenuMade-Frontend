import { useEffect, useState } from "react";


function App() { 
  const apiUrl = import.meta.env.VITE_API_URL;

  const [message, setmessage] = useState('');
  useEffect(() => {
    fetch(`${apiUrl}/api/health`)
      .then(response => response.json())
      .then(data => setmessage(data.message))
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App
