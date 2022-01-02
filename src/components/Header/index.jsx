// import { useHistory } from 'react-router-dom';

import './styles.scss';

import logoImg from "../../assets/logo.svg";
import registerImg from "../../assets/register.svg";

export function Header({linkPath, text}) {
  // const history = useHistory();
  /*onClick={ history.push(linkPath) }*/
  return (
    <header className="header-container">
      <img src={ logoImg } alt="Ecoleta" />
      <div>
        <img src={ registerImg } alt="Ícone representando função de registrar" />
        <h3>
          {text}
        </h3>
      </div>
    </header>
  )
}
