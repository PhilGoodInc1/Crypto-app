import styles from "./ChooseCoin.module.scss";
import {Link} from "react-router-dom";
import React from "react";
import {getCoinPage} from "../../../redux/price-reducer";
import {useDispatch} from "react-redux";


const ChooseCoin: React.FC<PropsType> = ({tickers, createLogoSrc}) => {

    const dispatch = useDispatch();

    const handleOnCoinClick = (ticker: string) => {
        dispatch(getCoinPage(ticker))
    };

    return <div className={styles.mainpage_block}>
        <h1>Choose your Coin</h1>
        <div className={styles.choice_block} onClick={(e) => handleOnCoinClick(
            ((e.target as HTMLElement).closest('a') as HTMLElement).innerText)}>
            {tickers.map((t) => {
                return <Link key={t} to={`/${t}`} className={styles.coin}  >
                    <img className={styles.currency_logo}
                         src={t === null ? "https://img.icons8.com/office/80/000000/hourglass-sand-top.png" :
                             `https://cryptologos.cc/logos/${createLogoSrc(t)}-logo.svg?v=013`}
                         alt={`${createLogoSrc(t)}logo`}/>
                    <h2>{t}</h2>
                </Link>
            })}</div>
    </div>
};

export default ChooseCoin;


type PropsType = {
    tickers: Array<string>,
    createLogoSrc: (t: string) => void
};