export const state = () => ({
    packages:[],
    size: 10,
    currentPage: 1,
    offset: 0,
    total: 0,
    pending: false,
})



export const getters = {
    packages: s => s.packages,
    total: s => s.total,
    size: s => s.size,
    pending: s => s.pending,
}

export const mutations = {
    SET_PACKAGES(state, data){
        state.packages = data.objects,
        state.total = data.total
    },
    SET_META_DATA(state, offset){
        state.offset = offset
    },
    SET_PENDING(state,status){
        state.pending = status
    }
}
  
export const actions = {
    async fetchPackages({commit},data = {}){
        commit('SET_PENDING',true)
        const response = await this.$axios.get(`/api/v1/search?text=${data.search}&size=${this.state.size}&from=${data.offset}`)
        commit('SET_PENDING',false)
        commit('SET_PACKAGES', response.data)
    }
}