
import Vuex from 'vuex'

const store =  new Vuex.Store({
    state:{
        count:0
    },
    getters:{
        getCount(){
            return this.state.count;
        }
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
})

export default store