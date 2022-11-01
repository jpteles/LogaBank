import styles from '../css/Rodape.module.css'
import Logo from '../imagens/logo.png'
import Linha from '../imagens/linha.png'
import Linkedin from '../imagens/LinkedIn Circled.png'
import Github from '../imagens/GitHub.png'

function Rodape(){
    return(
        <footer className={styles.corpo_rodape}>
          <section className={styles.logo_rodape}>
              <img src={Logo} alt="logo" />
          </section>
          <section className={styles.linha}>
                <img src={Linha} alt="logo" />
          </section>
          <section className={styles.suporte}>
            <h6>Suporte</h6>
            <p>Ouvidoria: 5456-7654</p>
            <br />
            <p>logabank@ouvidoria.com</p>
          </section>
          <section className={styles.social}>
            <h6>Social</h6>
              <a href='https://www.linkedin.com/in/jo%C3%A3o-paulo-teles-25621922b/'><img src={Linkedin} alt="logo" /></a>
              <a href='https://github.com/jpteles/LogaBank'><img src={Github} alt="logo" /></a>
          </section>
        </footer>

    )
}
export default Rodape