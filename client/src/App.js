import "./App.css";
import DestinationForm from "./components/DestinationForm";
import EntityCards from "./components/EntityCards";

function App() {
  return (
    <div className="container">
      <header></header>
      <main>
        <div className="row">
          <div className="col-md-3">
            <DestinationForm />
          </div>
          <div className="col-md-9">
            <EntityCards />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
