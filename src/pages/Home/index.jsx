import { useState } from "react";
import Modal from "react-modal";

import { Header } from "../../components/Header";

import searchImg from "../../assets/search.svg";
import peopleImg from "../../assets/people.svg";

import styles from "./styles.module.scss";

Modal.setAppElement('#root');

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(14, 10, 20, 0.9)',
    },
    content: {
      background: 'none',
      border: 'none',
      top: '34%',
      left: '39%',
      right: '39%',
      bottom: '33%',
    }
  }

  function handleOpenModal() {
    setIsModalOpen(true)
  };

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <div className={ styles.homepageContainer }>
      <Header linkPath={"/"}  isHome={ true }/>
      <main className ={ styles.mainContainer }>
        <div>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <button onClick={ () => handleOpenModal() }>
            <img src={ searchImg } alt="Ícone de pesquisar" />
            <strong>Pesquisar pontos de coleta</strong>
          </button>
        </div>
        <img className={ styles.illustration } src={ peopleImg } alt="Pessoas reciclando lixo" />
      </main>
      <Modal
        isOpen={ isModalOpen }
        onRequestClose={ () => handleCloseModal() }
        style={ modalStyle }
      >
        <div className={ styles.modalContainer }>
          <h2>Pontos de coleta</h2>
          <input type="text" placeholder="Digite a cidade"/>
          <input type="text" placeholder="Digite o estado"/>
          <button>Buscar</button>
        </div>
      </Modal>
    </div>
  )
};
