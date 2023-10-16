import { ModelError } from "../../../../libs/errors/modelError";
import { Post } from "../post.model";

const create = async ({ name, description }) => {
    try {
        const post = await Post.create({ name, description }, { raw: true });

        return post;
    } catch (error) {
        throw new ModelError("Error: Failed to create post", error);
    }
}

export default create;