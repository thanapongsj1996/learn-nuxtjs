const state = {
    jobs: null,
    isLoading: false
}

const getters = {
    getJobs: state => state.jobs,
    getLoading: state => state.isLoading
}

const actions = {
    async getJobsStore({ commit }) {
        const res = await this.$axios.$get(`${process.env.TUTOR_API}/student-job`)
        if (res.status_code === 200) {
            commit('UPDATE_JOBS', res.data.jobs)
        }
    },
    updateLoading({ commit }, data) {
        commit('UPDATE_LOADING', data)
    }
}

const mutations = {
    UPDATE_JOBS: (state, data) => {
        state.jobs = data
    },
    UPDATE_LOADING: (state, data) => {
        state.isLoading = data
    },
}

export { state, getters, actions, mutations }