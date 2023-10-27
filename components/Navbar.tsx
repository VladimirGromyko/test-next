import s from "../styles/Navbar.module.scss"
import Link from 'next/link'
import {useRouter} from "next/router";
import Image from "next/image";
import {FC} from "react";

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
];
const Navbar: FC = () => {
    const {pathname} = useRouter()
    return (
        <nav className={s.nav}>
            <div className={s.logo}>
                <Image src='/logo.png' width={60} height={60} alt='webDev'/>
            </div>
            <div className={s.links}>
                {navigation.map(({id, title, path}) =>(
                    <Link key={id}
                          href={path}
                          className={pathname === path ? s.active : null}
                    >
                        {title}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
export default Navbar
