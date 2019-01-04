import api from '../../api/imgur';

const state = {
    token: null,
};

const getters =  {
    isLoggedIn: state => !!state.token
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    },
    login: () => {
        api.login();
    }
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