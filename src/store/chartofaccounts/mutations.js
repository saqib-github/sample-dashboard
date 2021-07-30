export default {
    addData(state, payload){
        state.data.push(payload);
    },
    addType(state, payload){
        state.types.push(payload);
    },
    getAllData(state, payload){
        state.data = payload;
    }
};
