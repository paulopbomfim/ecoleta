import { Header } from "../../components/Header";

import searchImg from "../../assets/search.svg";
import peopleImg from "../../assets/people.svg";

import styles from "./styles.module.scss";

export function Home() {
  return (
    <div className={ styles.homepageContainer }>
      <Header linkPath={"/"}  isHome={ true }/>
      <main className ={ styles.mainContainer }>
        <div>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <button>
            <img src={ searchImg } alt="Ícone de pesquisar" />
            <strong>Pesquisar pontos de coleta</strong>
          </button>
        </div>
        <img className={ styles.illustration } src={ peopleImg } alt="Pessoas reciclando lixo" />
      </main>
    </div>
  )
}
