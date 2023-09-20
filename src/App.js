import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from "./pages/register";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
