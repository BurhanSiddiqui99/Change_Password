import Auth from "./components/auth";
// import YourComponent from "./components/check";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
      {/* <YourComponent /> */}
    </div>
  );
}

export default App;
