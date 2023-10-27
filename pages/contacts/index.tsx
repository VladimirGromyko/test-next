import {GetStaticProps} from "next";
import Heading from "../../components/Heading";
import Link from "next/link";
import Head from "next/head";
import s from '../../styles/Posts.module.scss'

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: { contacts: data }
    }
}

const Contacts = ({ contacts }) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text='Contacts list:'/>
            <ul className={s.posts}>
                {contacts && contacts.map(({id, name}) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Contacts
