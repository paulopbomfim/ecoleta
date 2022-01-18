// import { useHistory } from 'react-router-dom';

import logoImg from "../../assets/logo.svg";
import registerImg from "../../assets/register.svg";
import returnImg from "../../assets/return.svg";

import styles from './styles.module.scss';

export function Header({linkPath, isHome}) {
  // const history = useHistory();
  /*onClick={ history.push(linkPath) }*/
  return (
    <header className={ styles.container }>
      <img src={ logoImg } alt="Ecoleta" />
      {
        isHome
          ? (
            <div>
              <img src={ registerImg } alt="Ícone representando função de registrar" />
              <h3>Cadastre um ponto de coleta</h3>
            </div>
          )
          : (
            <div>
              <img src={ returnImg } alt="Ícone representando função de voltar pro início" />
              <h3>Voltar para página inicial</h3>
            </div>
          )
      }
    </header>
  )
}
