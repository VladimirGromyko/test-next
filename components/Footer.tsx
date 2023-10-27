import Heading from "./Heading";
import {ComponentType, FC} from "react";

const Footer: FC = () => {
    const h3: ComponentType = 'h3' as unknown as ComponentType
    return (
        <footer>
            <Heading tag={h3} text='Created by webDev'/>
        </footer>
    )
}
export default Footer
