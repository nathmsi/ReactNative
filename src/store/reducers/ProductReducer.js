
import {
    LOAD_NEW_PRODUCTS,
    PRODUCTS_LOADING,
    PRODUCTS_ERROR,
    MENU_CATEGORIES,
    LOAD_MORE_PRODUCTS,
    PRODUCTS_MORE_LOADING
} from '../actions/types'



const INITIAL_STATE = {
    products: [],
    categories: [],
    categorieSelected: '',
    loading: false,
    errorMessage: '',
};
 


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_NEW_PRODUCTS:
            return { ...state, products: action.payload.products , categorieSelected: action.payload.categorie, loading: false, errorMessage: '' }
        case PRODUCTS_LOADING:
            return { ...state, loading: true, errorMessage: '', products: []  }
        case PRODUCTS_ERROR:
            return { ...state, errorMessage: action.payload, loading: false , products: [] }
        case MENU_CATEGORIES:
            return { ...state, categories: action.payload,  errorMessage: '' }
        case PRODUCTS_MORE_LOADING:
            return { ...state, loading: true, errorMessage: '' }
        case LOAD_MORE_PRODUCTS:
            let newProducts = [...state.products,...action.payload]
            return { ...state  ,products: newProducts  ,loading: false  ,errorMessage: '' }
        default:
            return state;
    }
}