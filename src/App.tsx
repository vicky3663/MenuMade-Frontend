import { useEffect, useState } from "react";


function App() { 
  const [message, setmessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
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
