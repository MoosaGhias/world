import styles from '../../styles/Header.module.css';
import Link from 'next/link';


const Header = () => {
    return(
        <div className = {styles.header}>
            <Link href='/'>
                <p className= {styles.back}>Home</p>       
            </Link>
        </div>
    )
    
}

export default Header;