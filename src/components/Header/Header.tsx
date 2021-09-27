import styles from './Header.module.scss';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions, getCoinPage} from "../../redux/price-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Link} from "react-router-dom";


export let Header: React.FC = () => {
    const tickers = useSelector((state: AppStateType) => state.prices.tickers);
    const [localTicker, setLocalTicker] = useState(null as null | string);
    const dispatch = useDispatch();

    const onMenuTickerClickHandle = (ticker: string) => {
        if (ticker) {
            setLocalTicker(ticker);
            dispatch(getCoinPage(ticker))
        }
    };

    const onLogoClickHandler = () => {
        setLocalTicker(null);
        dispatch(actions.getMainPage())
    };


    return <header className={styles.header}>
        <Link to={'/'}>
            <img onClick={() => onLogoClickHandler()} className={styles.logo}
                 src="https://cryptologos.cc/logos/lisk-lsk-logo.svg?v=013" alt="logo"/>
        </Link>
        <div className={styles.currency_block} onClick={(e) => onMenuTickerClickHandle(
            (e.target as HTMLButtonElement).innerText)}>
            {tickers.map((t) => {

                return <Link to={`/${t}`} key = {t}
                             className={localTicker === t ? styles.currency_child + " " + styles.selected : styles.currency_child}
                >{t}
                </Link>
            })
            }
        </div>
    </header>
};



