import styles from '../css/Header.module.css'
import Logo from '../imagens/logo.png'



function Header(){
    return(
        <header className={styles.content}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <nav className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>Contas</li>
                    <li>Investimentos</li>
                    <li>Empréstimos</li>
                    <li>Dúvidas</li>
                </ul>
            </nav>
            <div className={styles.login}>
                <button type="submit" className={styles.botao}> login/cadastro </button>
            </div>
        </header>
        
    )
}
export default Header