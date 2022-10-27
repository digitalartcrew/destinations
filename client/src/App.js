import "./App.css";
import DestinationForm from "./components/DestinationForm";
import EntityCards from "./components/EntityCards";

function App() {
  return (
    <div className="container">
      <header>
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid text-center py-5">
            <h1>Vacations Destination Wish List</h1>
            <p>
              Found exciting places to visition on your next vacation? Use the
              form below to add them to your wishlist
            </p>
          </div>
        </div>
      </header>
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
