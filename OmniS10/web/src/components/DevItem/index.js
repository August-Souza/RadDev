import React from "react";

import "./styles.css";

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div class="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/diego3g${dev.github_username}`}>
        Acessar perfil no GitHub
      </a>
    </li>
  );
}

export default DevItem;
