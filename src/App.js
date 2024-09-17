import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList.js';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import UserDetails from './components/UserDetails.js';
import RootLayout from './components/RootLayout.js';
import UserPage from './pages/UserPage.js';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="/users/:id" element={<UserPage/>}/>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
