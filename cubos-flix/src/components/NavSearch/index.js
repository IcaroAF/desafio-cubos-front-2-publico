import "./style.css";
import logo from "../../assets/images/logo.svg";
import searchicon from "../../assets/images/search-icon.svg";
import profileAvatar from "../../assets/images/avatar.png";

function NavSearch({ setFilterMovie, handleFilterMovie }) {
  return (
    <div className="navsearch">
      <img src={logo} alt="" className="site-logo" />
      <div className="form-area">
        <input
          type="text"
          placeholder="Pesquise Filmes"
          onChange={(e) => setFilterMovie(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleFilterMovie()}
        />
        <button onClick={handleFilterMovie}>
          <img src={searchicon} alt="search-icon" className="submit-button" />
        </button>
      </div>
      <div className="welcome-area">
        <p>Bem Vindo, Icaro</p>
        <img
          src={profileAvatar}
          alt="profile-avatar-img"
          className="profile-avatar"
        />
      </div>
    </div>
  );
}

export default NavSearch;
