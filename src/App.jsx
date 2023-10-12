import { useEffect, useState } from "react";
import Routes from "./routes/Routes"

function App() {
  const [isLoading, setIsLoading] = useState(true);

    // Simula una carga de datos (reemplaza esto con tu lógica real)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); // Cambia a false cuando la carga esté completa
        }, 2000); // Simula una carga de 2 segundos
    }, []);

    return (
      <>
        <Routes/>
      </>
    )
}

export default App
