import Heading from "../components/Heading";
import {ComponentType, FC, useEffect} from "react";
import {useRouter} from "next/router";
import Head from 'next/head'
import s from '../styles/404.module.scss'

const Error: FC = () => {
    const router = useRouter()
    const h2: ComponentType = 'h2' as unknown as ComponentType
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])
    return (
        <div className={s.wrapper}>
            <Head>
                <title>Error</title>
            </Head>
            <div>
                <Heading text='404'/>
                <Heading tag={h2} text='Something is going wrong...'/>
            </div>
        </div>

    )
}
export default Error
