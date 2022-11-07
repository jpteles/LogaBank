import styles from '../css/Duvidas.module.css'

function Duvidas(){
    return(
        <section className={styles.corpo_duvidas}>
            <h1>Duvidas?</h1>
            <form className={styles.formulario} method="post" action="enviaEmail.php">
        <h1 className={styles.title}><i class="icon icon-mail-1"></i> Fale Conosco</h1>
         <label className={styles.label}>
             <span>Nome</span>
             <input type="text" name="nome" className={styles.campo} placeholder="Digite seu nome" required=""/>
         </label>
         <label className={styles.label}>
             <span>E-mail</span>
             <input type="email" name="email" className={styles.campo} placeholder="Digite seu e-mail" required="" />
         </label>
         <label className={styles.label}>
             <span>Assunto</span>
             <input type="text" name="assunto" className={styles.campo} placeholder="Digite um assunto" required=""/>   
         </label>
         <label className={styles.naoexibir}>
             <span>Não preencher:</span><br />
             <input type="text" name="url" value="" />
         </label> 
         <label className={styles.label}>
             <span>Mensagem</span>
             <textarea name="mensagem" className={styles.campo} placeholder="Deixe sua mensagem" required=""></textarea>
         </label>
         <label className={styles.label}> 
             <input type="hidden" name="acao" value="enviar" /> 
             <button type="submit" className={styles.botao}> Enviar </button>
         </label>
     </form>
        </section>

    )
}
export default Duvidas