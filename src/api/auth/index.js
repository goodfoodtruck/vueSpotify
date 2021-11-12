const TOKEN = process.env.APP_ID

const getUrlParameter = (sParam) => {
    let sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
        sParameterName,
        i;
    let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
    sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

let accessToken = getUrlParameter('access_token');
export default {

    getAuth() {

        let client_id = TOKEN;
        let redirect_uri = encodeURIComponent('http://localhost:8080/');

        const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=user-top-read&response_type=token&redirect_uri=${redirect_uri}`;

        if (accessToken == null || accessToken == "" || accessToken == undefined) {
            window.location.replace(redirect);
        }

    }, accessToken
}