import {get, post} from './'

export const api_login = (function (params) {
    return post('/api/user/login', params);
});

export const api_news_list = (function (params) {
    return get('/api/news', params);
});
