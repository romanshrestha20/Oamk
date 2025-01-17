import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {
        alertVisible 
        &&
        <Alert onClose={() => setAlertVisibility(false)}>
          hello Beautiful <span>World</span>!
        </Alert>
      }
      <Button onClick={() => setAlertVisibility(true)}>Go To Hell!!!</Button>
    </div>
  );
};

export default App;
