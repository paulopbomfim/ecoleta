import { Header } from '../../components/Header'

import styles from './style.module.scss';

export function PlaceList() {
  return (
    <div className={ styles.pageContainer }>
      <Header isHome={ false } linkPath="/"/>
      
      <section className={ styles.counterSection }>
        <p><strong>1 ponto</strong> encontrado</p>
      </section>

      <main className={ styles.mainContainer }>
        <div className={ styles.cardsContainer }>
          <div className={ styles.card }>
            <img src="https://source.unsplash.com/random/1920×1080" alt="" />
            <div className={ styles.cardTextContent }>
              <h2>Colectoria</h2>
              <h3>Resíduos Eletrônicos, Lâmpadas</h3>
              <p>Rio do Sul, Santa Catarina Guilherme Gemballa, Jardim América Nº 260</p>
            </div>
          </div>
          <div className={ styles.card }>
            <img src="https://source.unsplash.com/random/1920×1080" alt="" />
            <div className={ styles.cardTextContent }>
              <h2>Colectoria</h2>
              <h3>Resíduos Eletrônicos, Lâmpadas</h3>
              <p>Rio do Sul, Santa Catarina Guilherme Gemballa, Jardim América Nº 260</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
