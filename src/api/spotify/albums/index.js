import request from "../request";
import auth from "../../auth";

export default {
    getAlbums(id) {
        return request.get(`artists/${id}/albums?include_groups=album&market=FR`, {
            headers: {
                'Authorization': `Bearer ${auth.accessToken}`
            }
        });
    }
};