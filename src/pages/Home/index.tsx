import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="title">Desafio Github API</h2>
      <h3 className="subtitle">Bootcamp Spring React - DevSuperior</h3>
      <Link to="/githubsearch">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
