import { ModelError } from "../../../../libs/errors/modelError";
import { Post } from "../post.model";

const list = async () => {
    try {
        const posts = await Post.findAll({ raw: true });

        return posts;
    } catch (error) {
        throw new ModelError("Error: Failed to get posts", error);
    }
}

export default list;