import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Destination, Home, Layout } from "./pages";
import Crews from "./pages/Crew";
import Tech from "./pages/Tech";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/destination/:moon' element={<Destination />} />
          <Route path='/crew/:name' element={<Crews />} />
          <Route path='/tech/:name' element={<Tech />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
