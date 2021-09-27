import styles from "./Coin.module.scss";
import React, {useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom';
import {getCoinPage} from "../../../redux/price-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


const Coin: React.FC<PropsType> = ({createLogoSrc}) => {

    const tickers = useSelector((state: AppStateType) => state.prices.tickers);
    const coin = useSelector((state: AppStateType) => state.prices.coin);
    const dispatch = useDispatch();
    let {tickerUrl} = useParams<{ tickerUrl: string }>();
    let history = useHistory();

    useEffect(() => {
        if (tickers.includes(tickerUrl)) dispatch(getCoinPage(tickerUrl));
        else history.push('/404')
    }, [tickerUrl]);

    return <div>
        <div className={styles.title_block}>
            <div><img className={styles.currency_logo}
                      src={coin.symbol === null ? "https://img.icons8.com/office/80/000000/hourglass-sand-top.png" :
                          `https://cryptologos.cc/logos/${createLogoSrc(coin.symbol as string)}-logo.svg?v=013`}
                      alt="coinlogo"/>
            </div>
            <div className={styles.currency_name}><h1>{coin.symbol}</h1></div>
        </div>
        <div className={styles.currency_price}>
            <h2>{coin.price}</h2>
        </div>
    </div>
};

export default Coin;

type PropsType = {
    createLogoSrc: (t: string) => void
}