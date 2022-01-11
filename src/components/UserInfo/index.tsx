import './styles.css';

type UserInfoProps = {
  url: string;
  name: string;
  location: string;
  followers: number;
};

const UserInfo = ({ url, name, location, followers }: UserInfoProps) => {
  return (
    <div className="userinfo-container">
      <h3 className="userinfo-title">Informações</h3>
      <div className="infocard">
        <span className="value">Perfil: </span>
        <a href={url}>{url}</a>
      </div>
      <div className="infocard">
        <span className="value">Seguidores: </span>
        {followers}
      </div>
      <div className="infocard">
        <span className="value">Localidade: </span>
        {location}
      </div>
      <div className="infocard">
        <span className="value">Nome: </span>
        {name}
      </div>
    </div>
  );
};

export default UserInfo;
