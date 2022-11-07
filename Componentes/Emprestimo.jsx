import styles from '../css/Emprestimo.module.css'
import HomemDinheiro from '../imagens/image 9.png'


function Emprestimento(){
    return(
        <section className={styles.corpo_emprestimo}>
            <h1>Empréstimento Loga</h1>
            <div className={styles.emprestimo}>
                <p>- Dinheiro rápido e fácil,
                mesmo se estiver com restrição no nome.
                <br /><br />
                - Até 45 dias
                para pagar a primeira parcela.
                <br /><br />
                - Contratação online!
                </p>
                <img src={HomemDinheiro} alt="vasco"></img>
            </div>
            <button type="submit" className={styles.botao}>Saiba Mais</button>
        </section>

    )
}
export default Emprestimento