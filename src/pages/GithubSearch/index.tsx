import UserInfo from '../../components/UserInfo';
import './styles.css';

import { useState } from 'react';
import axios from 'axios';
import UserInfoLoader from '../../components/UserInfoLoader';

type FormData = {
  user: string;
};

type UserProfile = {
  avatar_url: string;
  url: string;
  name: string;
  location: string;
  followers: number;
};

const GithubSearch = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setUserProfile(response.data);
        console.log(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setUserProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="github-search-container">
      <div className="container search-container bg-secondary">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {userProfile && (
        <div className="container result-container">
          {isLoading ? (
            <UserInfoLoader />
          ) : (
            <div className="user-avatar">
              <img src={userProfile.avatar_url} alt="Avatar do Usuário" />
            </div>
          )}

          {isLoading ? (
            <UserInfoLoader />
          ) : (
            <UserInfo
              url={userProfile.url}
              name={userProfile.name}
              location={userProfile.location}
              followers={userProfile.followers}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default GithubSearch;
