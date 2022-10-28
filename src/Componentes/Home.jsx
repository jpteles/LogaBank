// import {Link} from 'react-router-dom'
import styles from '../css/Home.module.css'
import Cartao from '../imagens/cartão.png'

function Home(){
    return(
        <section className={styles.corpo_home}>
            <div className={styles.loga}>
            <h1>LogaBank</h1>
            <p>Com muita tecnologia, o LogaBank é ideial para você realizar suas transferencia, seus investimentos e Impréstimos com segurança.
            <br /><br />
            #VemPraLoga
            </p>
            </div>
            <div className={styles.imagem_lado}>
            <img src={Cartao} alt="cartao" className={styles.cartao} />
            <p>Garanta já seu cartão!</p>
            <button type="submit" className={styles.botao}>Pedir meu cartão de crédito</button>
            </div>
            
            
        </section>
    )
}
export default Home