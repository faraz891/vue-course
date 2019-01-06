import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token'),
};

const getters =  {
    isLoggedIn: state => !!state.token
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token')
    },
    login: () => {
        api.login();
    },
    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token)
        router.push('/');
    },
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

// http://localhost:8080/oauth/callback#
// access_token=cca1781719baa0e5c6e7681393ef4c519186159c
// &expires_in=315360000
// &token_type=bearer
// &refresh_token=af42401f95fd58c8cf6adc90eb4e2700546cfca8
// &account_username=
// &account_id=4900035