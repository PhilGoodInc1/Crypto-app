import styles from './Content.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import ChooseCoin from "./ChooseCoin/ChooseCoin";
import Coin from "./Coin/Coin";
import {Switch, Route} from 'react-router-dom';
import Page404 from "../404/NotFound";

export const Content: React.FC = () => {

    const tickers = useSelector((state: AppStateType) => state.prices.tickers);

    const createLogoSrc = (symbol: string) => {
        switch (symbol) {
            case 'BTCUSDT': {
                return 'bitcoin-btc'
            }
            case 'ETHUSDT': {
                return 'ethereum-eth'
            }
            case 'XRPUSDT': {
                return 'xrp-xrp'
            }
        }
        return ''
    };

    return <div className={styles.content_block}>
        <Switch>
            <Route exact path='/'
                   render={() => <ChooseCoin createLogoSrc={createLogoSrc} tickers={tickers}/>}/>
            <Route exact path='/404'
                   render={() => <Page404/>}/>
            <Route path='/:tickerUrl'
                   render={() => <Coin createLogoSrc={createLogoSrc}/>}/>

            <Route path='*'
                   render={() => <Page404/>}/>
        </Switch>

    </div>
};