import styles from '../css/Investimentos.module.css'
import Moeda from '../imagens/bitcoin.png'
import Tesouro from '../imagens/tesouro.png'
import Acoes from '../imagens/image 8.png'
import Fundos from '../imagens/image 6.png'



function Investimentos(){
    return(
        <section className={styles.corpo_investimento}>
            <h1>Investimentos Loga</h1>
            <div className={styles.container}>
                <div id={styles.bitcoin}>
                <h1>Bitcoin</h1>
                <p>Bitcoin é uma criptomoeda livre e descentralizada, um dinheiro eletrônico para transações financeiras ponto a ponto.</p>
                <img src={Moeda} alt="moeda" />
                </div>
            </div>
            <div className={styles.container}>
            <div id={styles.tesouro}>
                <h1>Tesouro Direto</h1>
                <p>O Tesouro Direto é o mais popular dos investimentos em renda fixa. Essa aplicação surgiu através de um programa criado pelo Governo Federal a fim de captar dinheiro para financiar as suas despesas.</p>
                <img src={Tesouro} alt="moeda" />
                </div>
            </div>
            <div className={styles.container}>
            <div id={styles.acoes}>
                <h1>Ações</h1>
                <p>As ações são um dos tipos de investimentos de renda variável. Ao aplicar nessa modalidade você estará comprando frações de uma empresa, se tornando sócio da mesma.</p>
                <img src={Acoes} alt="moeda" />
                </div>
            </div>
            <div className={styles.container}>
            <div id={styles.fundos}>
                <h1>Fundos imobiliários</h1>
                <p>Os fundos imobiliários (FIIs) são aplicações financeiras de renda variável. Assim como os fundos de investimento, são compostos pela união do capital de várias pessoas. Estas possuem um objetivo em comum: a aplicação no setor imobiliário.</p>
                <img src={Fundos} alt="moeda" />
                </div>
            </div>
            <button type="submit" className={styles.botao}>Saiba Mais</button>
        </section>
    )
}
export default Investimentos