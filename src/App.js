import "./App.css";
import "./style/landingPage.css";
import NavigationBar from "./components/Navbar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Movies from "./components/Movies";

function App() {
  return (
    <div>
      <div className="bg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="movies">
        <Movies />
      </div>
    </div>
  );
}

export default App;
