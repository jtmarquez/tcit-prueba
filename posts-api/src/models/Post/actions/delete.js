import { ModelError } from "../../../../libs/errors/modelError";
import { Post } from "../post.model";

// We are going to assume that it's a hard delete
const remove = async ({ id }) => {
    try {
        const destroyedRows = await Post.destroy({
            where: { id }
        });

        return destroyedRows
    } catch (error) {
        throw new ModelError("Error: Failed to delete post", error);
    }
}

export default remove;