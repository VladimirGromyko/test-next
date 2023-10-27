import Heading from "./Heading";
import {ContactType} from "../types";
import {ComponentType, FC} from "react";

type ContactInfoPropsType = {
    contact: ContactType
}
const ContactInfo:FC<ContactInfoPropsType> = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}
    const h3: ComponentType = 'h3' as unknown as ComponentType

    if(!contact) {
        return <Heading tag={h3} text='Empty contact' />
    }
    return (
        <>
            <Heading tag={h3} text={name} />
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}
export default ContactInfo
