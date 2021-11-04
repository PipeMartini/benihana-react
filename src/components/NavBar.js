import App from '../App';
import './styles/NavBar.css';
import './CartWidget';
import { Link } from "react-router-dom";
export const Navbar = () => {
    const styles = { backgroundColor: 'black' }
    const menu = {backgroundColor: 'darkgrey'}
    return (
        <body style={styles}>
        <div className="container">
            <ul style={menu} className="menu">
                <Link to={`/`}>
                    <li><a href="#">Inicio</a></li>
                </Link>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <Link to={`/`}>
                    <a className="marca">Benihana</a>
                </Link>
            </ul>
        </div>
        </body>
    );
}
export default App