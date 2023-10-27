import s from "../styles/Home.module.scss"
import Head from 'next/head'
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import {GetStaticProps} from 'next'
import {socialsType} from "../types";
import {FC} from "react";

type homePropsType = {
    socials: [socialsType]
}
export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials/`)
    const data = await response.json()
    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { socials: data }
    }
}

const Home: FC<homePropsType> = ({socials}) => {
  return (
      <div className={s.wrapper}>
          <Head>
              <title>Home</title>
          </Head>
          <Heading text='Next.js Application'/>
          <Socials socials={socials}/>
      </div>

  )
}
export default Home
