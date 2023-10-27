import Heading from "./Heading";
import React, {ComponentType, FC} from "react";
import {PostType} from "../types";

type PostInfoPropsType = {
    post: PostType
}
const PostInfo: FC<PostInfoPropsType> = ({post}) => {
    const {body, id, title, userid} = post || {}
    const h1: ComponentType = 'h1' as unknown as ComponentType
    const h3: ComponentType = 'h3' as unknown as ComponentType

    if(!post) {
        return <Heading tag={h3} text='Empty contact' />
    }
    return (
        <>
            <strong><Heading tag={h1} text={title} /></strong>
            <div>
                <strong>{`Post ${id} : `}</strong>
                <p>{body}</p>
            </div>
        </>
    )
}
export default PostInfo
