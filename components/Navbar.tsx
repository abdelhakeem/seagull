import Image from 'next/image'
import NavbarLink from './NavbarLink'
import styles from '../styles/Navbar.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto py-8 flex flex-row justify-between">
        <Image src="/logo.png"
               alt="Seagull Logo"
               width={155}
               height={41} />
        <ul className={`text-white flex flex-row items-center ${styles.btns}`}>
          <li><NavbarLink text="Home" href="/" /></li>
          <li><NavbarLink text="Transaction Editor" href="/main" /></li>
          <li><WalletMultiButton className={styles.walletBtn} /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
