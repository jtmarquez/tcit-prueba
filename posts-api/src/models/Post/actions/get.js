import { ModelError } from "../../../../libs/errors/modelError";
import { Post } from "../post.model";

const get = async ({ id }) => {
    try {
        const post = await Post.findByPk(id, { raw: true });

        return post;
    } catch (error) {
        throw new ModelError("Error: Failed to find post", error)
    }
}

export default get;