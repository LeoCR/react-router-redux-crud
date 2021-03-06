import { SHOW_PRODUCT,SHOW_PRODUCTS ,DELETE_PRODUCT,ADD_PRODUCT,EDIT_PRODUCT} from '../actions/types';
//cada reducer tiene su propio state
const initialState={
    products:[]
}
export default function(state=initialState,action){//recibe el state pero retorna siempre el state
    switch(action.type){
            case SHOW_PRODUCTS:
                return{
                    ...state,
                    products:action.payload
                }
            case DELETE_PRODUCT:
                return{
                    ...state,
                    products:state.products.filter(product=>product.id!==action.payload)
                }
            case ADD_PRODUCT:
                return{
                    ...state,
                    products:[...state.products,action.payload]
                }
            case SHOW_PRODUCT:
                return{
                    ...state,
                    product:action.payload
                }
            case EDIT_PRODUCT:
                return{
                    ...state,
                    products:state.products.map(
                        product=>product.id===action.payload.id
                        ?(product=action.payload)
                        :product
                    )
                }
            default:
                return state;
    }
}