import { ControllerError } from "../../../libs/errors/controllerError";
import { HTTP_CODES } from "../../../libs/http/httpCodes";
import { create } from "../../models/Post";

const createPost = async (req) => {
    const { name, description } = req.body;

    if (!name || !description) {
        throw new ControllerError("Error: Missing params", HTTP_CODES.BAD_REQUEST);
    }

    const post = await create({ name, description });

    if (!post) {
        throw new ControllerError("Error: An error ocurred while creating the post", HTTP_CODES.INTERNAL_ERROR);
    }

    return { data: post, responseCode: HTTP_CODES.CREATED };
}

export default createPost;