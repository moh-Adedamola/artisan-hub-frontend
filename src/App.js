import {useRoutes} from "react-router-dom";
import {ROUTE} from "./routes/routes";

function App() {
  return (
      useRoutes(ROUTE)
  );
}

export default App;
