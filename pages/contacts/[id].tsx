import {GetServerSideProps} from 'next'
import ContactInfo from "../../components/ContactInfo";
import Head from "next/head";
import {FC} from "react";
import {contactType} from "../../types";

type ContactPropsType = {
    contact: contactType
}
export const getServerSideProps:GetServerSideProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { contact: data }
    }
}
const Contact: FC<ContactPropsType> = ({contact}) => {
  return (
      <>
          <Head>
              <title>Contact</title>
          </Head>
          <ContactInfo contact={contact}/>
      </>
  )
}
export default Contact
