import { ControllerError } from '../../../libs/errors/controllerError';
import { HTTP_CODES } from '../../../libs/http/httpCodes';
import { remove, get } from '../../models/Post';

const deletePost = async (req) => {
    const id = req.params.id;

    if (!id) {
        throw new ControllerError("Error: missing id", HTTP_CODES.BAD_REQUEST);
    }

    const post = await get({ id });

    if (!post) {
        throw new ControllerError("Error: Post does not exist", HTTP_CODES.NOT_FOUND);
    }

    const affected = await remove({ id });

    if (!affected) {
        throw new ControllerError("Error: Post wasn't able to be deleted", HTTP_CODES.INTERNAL_ERROR)
    }

    return { data: post, responseCode: HTTP_CODES.OK }
}

export default deletePost