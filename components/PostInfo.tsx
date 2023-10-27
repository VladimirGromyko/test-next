import Heading from "./Heading";
import {FC} from "react";
import {postType} from "../types";

type postInfoPropsType = {
    post: postType
}
const PostInfo: FC<postInfoPropsType> = ({post}) => {
    const {body, id, title, userid} = post || {}

    if(!post) {
        return <Heading tag='h3' text='Empty contact' />
    }
    return (
        <>
            <strong><Heading tag='h1' text={title} /></strong>
            <div>
                <strong>{`Post ${id} : `}</strong>
                <p>{body}</p>
            </div>
        </>
    )
}
export default PostInfo
