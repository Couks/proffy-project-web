import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/49662686?s=460&u=5ffe33ea838c31c657417b0005bae17453a0f840&v=4" alt="Matheus Castro" />
        <div>
          <strong>Matheus Castro 1</strong>
          <span>Arrasacú</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de comer o cu de quem ta lendo.
                <br></br>
        Apaixonado por tecnologia, tartarugas ninja, homem aranha, música, assuntos filosóficos, e falar merda.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatspp" />
                    Entrar em contato
        </button>
      </footer>
    </article>
  )
}


export default TeacherItem;