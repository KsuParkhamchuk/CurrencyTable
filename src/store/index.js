import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		dataCurrency: []
    },
    
	mutations: {
		SAVE_CURRENCY: (state, payload) => {
            state.dataCurrency = payload;
        },

        ADD_NEW_CURRENCY:(state, newCurrencyObj) => {   
            state.dataCurrency.push(newCurrencyObj);
        },

        DELETE_CURRENCY: (state, index) =>{
            state.dataCurrency.splice(index, 1);
        },

        EDIT_CURRENCY: (state,editedCurrencyObj) => {
            Object.assign( state.dataCurrency[editedCurrencyObj.index], editedCurrencyObj.item);
        },
    },

    getters: {
            GET_ALL_CURRENCIES: (state) => {
                return state.dataCurrency;
            }
    }
	
})
