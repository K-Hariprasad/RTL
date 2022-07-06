import "./App.css";
import { OrderContextProvider } from "./context/orderContext";
import OrderEntry from "./pages/entry/OrderEntry";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <OrderContextProvider>
          <OrderEntry />
        </OrderContextProvider>
      </div>
    </div>
  );
}

export default App;
