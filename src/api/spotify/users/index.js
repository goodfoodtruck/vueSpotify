import request from "../request";
import auth from "../../auth";

export default {
    getUserProfile() {
        return request.get("me", {
            headers: {
                'Authorization': `Bearer ${auth.accessToken}`
            }
        });
    },

    getUserItems() {
        return request.get("me/top/artists?time_range=short_term", {
            headers: {
                'Authorization': `Bearer ${auth.accessToken}`
            }
        })
    }
};