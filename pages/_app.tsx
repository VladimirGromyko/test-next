import '../styles/globals.css'
import Layout from "../components/Layout";
import Image from "next/image";
import nature from '@/public/nature.png'
import Head from "next/head";
import {AppProps} from 'next/app'
import {FC} from "react";

const App: FC<AppProps> =({ Component, pageProps }) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        {/*<Image src={nature}*/}
        {/*       width={1900}*/}
        {/*       height={300}*/}
        {/*       alt='preview'*/}
        {/*       placeholder='blur'*/}
        {/*/>*/}
    </Layout>
)
export default App
