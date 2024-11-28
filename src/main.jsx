import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Ficha from './Ficha.jsx';

const routes = {"/": <App />, "/ficha": <Ficha/>, "": <App />}
createRoot(document.getElementById('root')).render(routes[window.location.pathname]);
