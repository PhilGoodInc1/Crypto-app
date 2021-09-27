import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {GetPriceResponseType, getCoinApi} from "../api/api";

export type CoinType = {
    symbol: string,
    price: string
}
let initialState = {
    coin: {
        symbol: null as null | string,
        price: null as null | string
    },
    tickers: ['BTCUSDT', 'ETHUSDT', 'XRPUSDT']
};

const priceReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "crypto/price/coin":
            return {
                ...state, coin: {
                    symbol: action.data.symbol,
                    price: action.data.price
                }
            };
        case "crypto/price/main":
            return {
                ...state, coin: {
                    symbol: null,
                    price: null
                }
            }
    }
    return state;
};
export const actions = {
    setCoinValues: (data: GetPriceResponseType) => ({
        type: 'crypto/price/coin',
        data: data
    } as const),

    getMainPage: () => ({
        type: 'crypto/price/main',
    } as const),

};

export const getCoinPage = (value: string): BaseThunkType<ActionsTypes> => {
    return async (dispatch) => {
        let data = await getCoinApi.getPrice(value);
        dispatch(actions.setCoinValues(data))
    }
};

export default priceReducer;


type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;