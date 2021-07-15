// State (ค่าตัวแปรที่เราเก็บไว้ใน store)
const state = {
    name: '',
    headerNumber: 0,
    patients: []
}


// Getters (function สำหรับเอา state ไปใช้)
const getters = {
    getName: (state) => {
        return state.name
    },
    getHeaderNumber: (state) => {
        return state.headerNumber
    },
    getPatients: (state) => {
        return state.patients
    }
}

// Action (function สำหรับเอาไว้ต่อกับ state)
const actions = {
    changeName: ({ commit }, data) => {
        commit('UPDATE_NAME', data)
    },
    updateHeaderNumber: ({ state, commit }, data) => {
        const result = state.headerNumber + data
        commit('UPDATE_HEADER_NUMBER', result)
    },
    addPatients: ({ state, commit }, data) => {
        const result = [...state.patients, data]
        commit('UPDATE_PATIENTS', result)
    },
    clearPatients: ({ commit }) => {
        commit('UPDATE_PATIENTS', [])
    }
}

// // Mutations (function ที่เอาไว้ update ค่าของ state)
const mutations = {
    UPDATE_HEADER_NUMBER: (state, data) => {
        state.headerNumber = data
    },
    UPDATE_PATIENTS: (state, data) => {
        state.patients = data
    },
    UPDATE_NAME: (state, data) => {
        state.name = data
    }
}

export { state, getters, actions, mutations }