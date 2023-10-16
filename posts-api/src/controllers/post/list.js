import { HTTP_CODES } from "../../../libs/http/httpCodes";
import { list } from "../../models/Post";

const listPosts = async () => {
    const posts = await list();

    return { data: posts, responseCode: HTTP_CODES.OK };
}

export default listPosts;