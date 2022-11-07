import styles from '../css/Contas.module.css'
import MulherCartao from '../imagens/mulhercartao.png'
import HomemCartao from '../imagens/homemcartao2.png'

function Contas(){
    return(
        <section className={styles.corpo_conta}>
            <h1>Contas Loga</h1>
            <div className={styles.corrente}>
            <h2>Corrente</h2>
            <p>
            Cartão de crédito sem anuidade
            <br />
            <br />
            Créditos e financiamentos com taxas especiais
            <br />
            <br />
            Até 50% de Cashback em compras
            <br />
            <br />
            Crédito fácil
            </p>
            <img src={MulherCartao} alt="mulhercartao"></img> 
            </div>


            <div className={styles.poupanca}>
            <h2>Poupança</h2>
            <img src={HomemCartao} alt="homemcartao"></img>
            <p>
            Rendimento de 200% no CDI
            <br />
            <br />
            Resgate Fácil
            <br />
            <br />
            Risco baixo
            <br />
            <br />
            Isenta de Imposto de Renda e IOF
            </p>
             
            </div>
        </section>
    )
}
export default Contas