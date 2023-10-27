import React, {ComponentType, FC} from "react";

type headingInfoPropsType = {
    tag?: ComponentType
    text: string
}
const Heading:FC<headingInfoPropsType> = ({tag, text}) => {
    const Tag = tag || 'h1'
    return <Tag>{text}</Tag>

}
export default Heading
