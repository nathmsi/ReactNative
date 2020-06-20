import yelp from '../../api/yelp';

import {
    LOAD_NEW_PRODUCTS,
    PRODUCTS_LOADING,
    PRODUCTS_ERROR,
    LOAD_MORE_PRODUCTS,
    PRODUCTS_MORE_LOADING
} from './types'




export const getProductsByCategorie = ({ categorie }) => {
    return async (dispatch) => {
        dispatch({
            type: PRODUCTS_LOADING,
        });
        //console.log(categorie);
        try {
            const path = '/products/categorie/' + categorie + '/' + 'none';
            const response = await yelp.get(path);
            //console.log(response.data);
            //console.log('response data ',response.data.length)
            if (response.data) {
                dispatch({
                    type: LOAD_NEW_PRODUCTS,
                    payload: {
                        products: response.data,
                        categorie: categorie
                    }
                });
            }
        }
        catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCTS_ERROR,
                payload: 'problem to load product'
            });
        }
    }
}

export const getProductsHome = () => {
    return async (dispatch) => {
        dispatch({
            type: PRODUCTS_LOADING,
        });
        try {
            const response = await yelp.get('/Products/list/pagination/none');
            //console.log(response.data);
            if (response.data) {
                dispatch({
                    type: LOAD_NEW_PRODUCTS,
                    payload: {
                        products: response.data,
                        categorie: ''
                    }
                });
            }
        }
        catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCTS_ERROR,
                payload: 'problem to load product'
            });
        }
    }
}





export const getMoreProduct = () => {
    return async (dispatch,getState) => {
        const categorieSelected = getState().product.categorieSelected;
        const products = getState().product.products;
        const lastID = products.length > 0 ? products[products.length - 1].id : 'none';
        //console.log(categorieSelected,lastID);
        dispatch({
            type: PRODUCTS_MORE_LOADING,
        });

        try {
            let path = '/Products/list/pagination/' + lastID;
            if (categorieSelected) {
                path = '/products/categorie/' + categorieSelected + '/' + lastID;
            }
            const response = await yelp.get(path);
            //console.log(response.data);

            if(response.data){
                dispatch({
                    type: LOAD_MORE_PRODUCTS,
                    payload: response.data? response.data : []
                });
            }else{
                dispatch({
                    type: PRODUCTS_ERROR,
                    payload: ''
                });
            }

            

        }
        catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCTS_ERROR,
                payload: 'problem to load more product'
            });
        }
    }
}


