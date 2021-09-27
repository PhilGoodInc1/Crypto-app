import axios from "axios";

export let instance = axios.create({
    baseURL: 'https://api1.binance.com/api/v3/',
});


export const getCoinApi = {
    getPrice(value:string) {
        return instance.get<GetPriceResponseType>(`ticker/price?symbol=${value}`).then(response => response.data);
    }
};

export type GetPriceResponseType = {
    symbol: string
    price: string
}