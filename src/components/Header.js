import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../Header.css';
// import { getMarketData } from './../api';  

const Header = () => {
    const [navClass, setNavClass] = useState('navbar navbar-default');
    const [menuVisible, setMenuVisible] = useState(false);
    const [marketData, setMarketData] = useState([]);

    const toggleMenu = () => {
        setMenuVisible((prevVisible) => !prevVisible);
        setNavClass((prevClass) =>
            prevClass.includes('active')
                ? 'navbar navbar-default'
                : 'navbar navbar-default active'
        );
    };
    
    // const cryptoData = [
    //     { name: 'Bitcoin', price: '$29,500', change: '-2.5%' },
    //     { name: 'Ethereum', price: '$1,750', change: '-1.8%' },
    //     { name: 'Ripple', price: '$0.55', change: '+3.2%' },
    //     { name: 'Litecoin', price: '$85.10', change: '-0.6%' },
    //   ];

      const cryptoData =[
        {
          "id": "bitcoin",
          "symbol": "btc",
          "name": "Bitcoin",
          "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
          "current_price": 59511,
          "market_cap": 1172934385865,
          "market_cap_rank": 1,
          "fully_diluted_valuation": 1247783385249,
          "total_volume": 18485037521,
          "high_24h": 59781,
          "low_24h": 57812,
          "price_change_24h": 177.61,
          "price_change_percentage_24h": 0.29935,
          "market_cap_change_24h": 1698122210,
          "market_cap_change_percentage_24h": 0.14499,
          "circulating_supply": 19740303,
          "total_supply": 21000000,
          "max_supply": 21000000,
          "ath": 73738,
          "ath_change_percentage": -19.40468,
          "ath_date": "2024-03-14T07:10:36.635Z",
          "atl": 67.81,
          "atl_change_percentage": 87542.2394,
          "atl_date": "2013-07-06T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:13.338Z",
          "price_change_percentage_24h_in_currency": 0.299349478804095
        },
        {
          "id": "ethereum",
          "symbol": "eth",
          "name": "Ethereum",
          "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
          "current_price": 2660.38,
          "market_cap": 319069419837,
          "market_cap_rank": 2,
          "fully_diluted_valuation": 319069419837,
          "total_volume": 12791659802,
          "high_24h": 2678.02,
          "low_24h": 2603.59,
          "price_change_24h": 10.56,
          "price_change_percentage_24h": 0.39868,
          "market_cap_change_24h": 827629380,
          "market_cap_change_percentage_24h": 0.26006,
          "circulating_supply": 120277040.252303,
          "total_supply": 120277040.252303,
          "max_supply": null,
          "ath": 4878.26,
          "ath_change_percentage": -45.59684,
          "ath_date": "2021-11-10T14:24:19.604Z",
          "atl": 0.432979,
          "atl_change_percentage": 612846.246,
          "atl_date": "2015-10-20T00:00:00.000Z",
          "roi": {
            "times": 58.7831817571155,
            "currency": "btc",
            "percentage": 5878.31817571155
          },
          "last_updated": "2024-08-15T15:21:13.551Z",
          "price_change_percentage_24h_in_currency": 0.398682687705021
        },
        {
          "id": "tether",
          "symbol": "usdt",
          "name": "Tether",
          "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
          "current_price": 1.001,
          "market_cap": 116594400747,
          "market_cap_rank": 3,
          "fully_diluted_valuation": 116594400747,
          "total_volume": 36101204745,
          "high_24h": 1.004,
          "low_24h": 0.996669,
          "price_change_24h": 0.00122532,
          "price_change_percentage_24h": 0.12251,
          "market_cap_change_24h": 404245845,
          "market_cap_change_percentage_24h": 0.34792,
          "circulating_supply": 116532189829.292,
          "total_supply": 116532189829.292,
          "max_supply": null,
          "ath": 1.32,
          "ath_change_percentage": -24.40635,
          "ath_date": "2018-07-24T00:00:00.000Z",
          "atl": 0.572521,
          "atl_change_percentage": 74.69684,
          "atl_date": "2015-03-02T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:13.374Z",
          "price_change_percentage_24h_in_currency": 0.122510340605948
        },
        {
          "id": "binancecoin",
          "symbol": "bnb",
          "name": "BNB",
          "image": "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
          "current_price": 529.09,
          "market_cap": 77169643347,
          "market_cap_rank": 4,
          "fully_diluted_valuation": 77169643347,
          "total_volume": 721796056,
          "high_24h": 529.97,
          "low_24h": 514.63,
          "price_change_24h": 7.01,
          "price_change_percentage_24h": 1.34347,
          "market_cap_change_24h": 1004900672,
          "market_cap_change_percentage_24h": 1.31938,
          "circulating_supply": 145887575.79,
          "total_supply": 145887575.79,
          "max_supply": 200000000,
          "ath": 717.48,
          "ath_change_percentage": -26.25638,
          "ath_date": "2024-06-06T14:10:59.816Z",
          "atl": 0.0398177,
          "atl_change_percentage": 1328686.84522,
          "atl_date": "2017-10-19T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:31.325Z",
          "price_change_percentage_24h_in_currency": 1.34347410503827
        },
        {
          "id": "solana",
          "symbol": "sol",
          "name": "Solana",
          "image": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
          "current_price": 145.13,
          "market_cap": 67516559908,
          "market_cap_rank": 5,
          "fully_diluted_valuation": 84209941428,
          "total_volume": 2731318869,
          "high_24h": 147.01,
          "low_24h": 141.42,
          "price_change_24h": -0.709943157523497,
          "price_change_percentage_24h": -0.4868,
          "market_cap_change_24h": -533807589.830093,
          "market_cap_change_percentage_24h": -0.78443,
          "circulating_supply": 466834446.950725,
          "total_supply": 582258656.068347,
          "max_supply": null,
          "ath": 259.96,
          "ath_change_percentage": -44.20916,
          "ath_date": "2021-11-06T21:54:35.825Z",
          "atl": 0.500801,
          "atl_change_percentage": 28860.28337,
          "atl_date": "2020-05-11T19:35:23.449Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:39.313Z",
          "price_change_percentage_24h_in_currency": -0.486804015064247
        },
        {
          "id": "usd-coin",
          "symbol": "usdc",
          "name": "USDC",
          "image": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
          "current_price": 1.002,
          "market_cap": 34530711832,
          "market_cap_rank": 6,
          "fully_diluted_valuation": 34542526013,
          "total_volume": 6273978088,
          "high_24h": 1.003,
          "low_24h": 0.991897,
          "price_change_24h": 0.00170139,
          "price_change_percentage_24h": 0.17017,
          "market_cap_change_24h": -56456799.3933334,
          "market_cap_change_percentage_24h": -0.16323,
          "circulating_supply": 34522792484.4363,
          "total_supply": 34534603956.3799,
          "max_supply": null,
          "ath": 1.17,
          "ath_change_percentage": -14.70974,
          "ath_date": "2019-05-08T00:40:28.300Z",
          "atl": 0.877647,
          "atl_change_percentage": 13.96434,
          "atl_date": "2023-03-11T08:02:13.981Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:14.082Z",
          "price_change_percentage_24h_in_currency": 0.17016898043891
        },
        {
          "id": "ripple",
          "symbol": "xrp",
          "name": "XRP",
          "image": "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
          "current_price": 0.569889,
          "market_cap": 31952128350,
          "market_cap_rank": 7,
          "fully_diluted_valuation": 56935180255,
          "total_volume": 1063474610,
          "high_24h": 0.575699,
          "low_24h": 0.563301,
          "price_change_24h": -0.00434767170660777,
          "price_change_percentage_24h": -0.75712,
          "market_cap_change_24h": -244195601.719231,
          "market_cap_change_percentage_24h": -0.75846,
          "circulating_supply": 56113081096,
          "total_supply": 99987342059,
          "max_supply": 100000000000,
          "ath": 3.4,
          "ath_change_percentage": -83.23091,
          "ath_date": "2018-01-07T00:00:00.000Z",
          "atl": 0.00268621,
          "atl_change_percentage": 21115.39054,
          "atl_date": "2014-05-22T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:21.077Z",
          "price_change_percentage_24h_in_currency": -0.757121610186213
        },
        {
          "id": "staked-ether",
          "symbol": "steth",
          "name": "Lido Staked Ether",
          "image": "https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
          "current_price": 2659.01,
          "market_cap": 25980571506,
          "market_cap_rank": 8,
          "fully_diluted_valuation": 25980571506,
          "total_volume": 52627721,
          "high_24h": 2679.79,
          "low_24h": 2606.99,
          "price_change_24h": 5.65,
          "price_change_percentage_24h": 0.21293,
          "market_cap_change_24h": 71625401,
          "market_cap_change_percentage_24h": 0.27645,
          "circulating_supply": 9798297.10295671,
          "total_supply": 9798297.10295671,
          "max_supply": null,
          "ath": 4829.57,
          "ath_change_percentage": -45.03913,
          "ath_date": "2021-11-10T14:40:47.256Z",
          "atl": 482.9,
          "atl_change_percentage": 449.67798,
          "atl_date": "2020-12-22T04:08:21.854Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:11.870Z",
          "price_change_percentage_24h_in_currency": 0.212933302280694
        },
        {
          "id": "the-open-network",
          "symbol": "ton",
          "name": "Toncoin",
          "image": "https://coin-images.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498",
          "current_price": 6.67,
          "market_cap": 16818895986,
          "market_cap_rank": 9,
          "fully_diluted_valuation": 34126969246,
          "total_volume": 575998886,
          "high_24h": 7.06,
          "low_24h": 6.52,
          "price_change_24h": -0.248894408079708,
          "price_change_percentage_24h": -3.5994,
          "market_cap_change_24h": -580815777.420853,
          "market_cap_change_percentage_24h": -3.33808,
          "circulating_supply": 2518628315.70198,
          "total_supply": 5110510888.70376,
          "max_supply": null,
          "ath": 8.25,
          "ath_change_percentage": -19.06067,
          "ath_date": "2024-06-15T00:36:51.509Z",
          "atl": 0.519364,
          "atl_change_percentage": 1186.26868,
          "atl_date": "2021-09-21T00:33:11.092Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:38.756Z",
          "price_change_percentage_24h_in_currency": -3.59940019920984
        },
        {
          "id": "dogecoin",
          "symbol": "doge",
          "name": "Dogecoin",
          "image": "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
          "current_price": 0.104067,
          "market_cap": 15133977661,
          "market_cap_rank": 10,
          "fully_diluted_valuation": 15139767495,
          "total_volume": 519056276,
          "high_24h": 0.104748,
          "low_24h": 0.101188,
          "price_change_24h": 0.00141421,
          "price_change_percentage_24h": 1.37766,
          "market_cap_change_24h": 199592563,
          "market_cap_change_percentage_24h": 1.33646,
          "circulating_supply": 145489016383.705,
          "total_supply": 145544676383.705,
          "max_supply": null,
          "ath": 0.731578,
          "ath_change_percentage": -85.77496,
          "ath_date": "2021-05-08T05:08:23.458Z",
          "atl": 0.0000869,
          "atl_change_percentage": 119650.07626,
          "atl_date": "2015-05-06T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:24.784Z",
          "price_change_percentage_24h_in_currency": 1.37765584770348
        },
        {
          "id": "cardano",
          "symbol": "ada",
          "name": "Cardano",
          "image": "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
          "current_price": 0.337787,
          "market_cap": 12021582854,
          "market_cap_rank": 11,
          "fully_diluted_valuation": 15190766148,
          "total_volume": 213125461,
          "high_24h": 0.341221,
          "low_24h": 0.332876,
          "price_change_24h": 0.00176521,
          "price_change_percentage_24h": 0.52533,
          "market_cap_change_24h": 66532933,
          "market_cap_change_percentage_24h": 0.55653,
          "circulating_supply": 35611846246.4807,
          "total_supply": 45000000000,
          "max_supply": 45000000000,
          "ath": 3.09,
          "ath_change_percentage": -89.05744,
          "ath_date": "2021-09-02T06:00:10.474Z",
          "atl": 0.01925275,
          "atl_change_percentage": 1654.48743,
          "atl_date": "2020-03-13T02:22:55.044Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:30.446Z",
          "price_change_percentage_24h_in_currency": 0.525325092281851
        },
        {
          "id": "tron",
          "symbol": "trx",
          "name": "TRON",
          "image": "https://coin-images.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
          "current_price": 0.131002,
          "market_cap": 11397070822,
          "market_cap_rank": 12,
          "fully_diluted_valuation": 11397082990,
          "total_volume": 346458070,
          "high_24h": 0.132245,
          "low_24h": 0.129638,
          "price_change_24h": 0.00104568,
          "price_change_percentage_24h": 0.80464,
          "market_cap_change_24h": 98986850,
          "market_cap_change_percentage_24h": 0.87614,
          "circulating_supply": 86967060403.6938,
          "total_supply": 86967153253.8666,
          "max_supply": null,
          "ath": 0.231673,
          "ath_change_percentage": -43.4538,
          "ath_date": "2018-01-05T00:00:00.000Z",
          "atl": 0.00180434,
          "atl_change_percentage": 7160.38394,
          "atl_date": "2017-11-12T00:00:00.000Z",
          "roi": {
            "times": 67.948489611468,
            "currency": "usd",
            "percentage": 6794.8489611468
          },
          "last_updated": "2024-08-15T15:20:17.284Z",
          "price_change_percentage_24h_in_currency": 0.804641109022712
        },
        {
          "id": "wrapped-steth",
          "symbol": "wsteth",
          "name": "Wrapped stETH",
          "image": "https://coin-images.coingecko.com/coins/images/18834/large/wstETH.png?1696518295",
          "current_price": 3119.67,
          "market_cap": 10825880195,
          "market_cap_rank": 13,
          "fully_diluted_valuation": 10825038005,
          "total_volume": 175999229,
          "high_24h": 3144.31,
          "low_24h": 3058.53,
          "price_change_24h": 2.05,
          "price_change_percentage_24h": 0.06587,
          "market_cap_change_24h": 84593633,
          "market_cap_change_percentage_24h": 0.78756,
          "circulating_supply": 3468094.02431723,
          "total_supply": 3467824.22685312,
          "max_supply": null,
          "ath": 7256.02,
          "ath_change_percentage": -56.95427,
          "ath_date": "2022-05-13T15:09:54.509Z",
          "atl": 558.54,
          "atl_change_percentage": 459.20907,
          "atl_date": "2022-05-13T01:36:45.053Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:07.920Z",
          "price_change_percentage_24h_in_currency": 0.0658717070302011
        },
        {
          "id": "wrapped-bitcoin",
          "symbol": "wbtc",
          "name": "Wrapped Bitcoin",
          "image": "https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857",
          "current_price": 59482,
          "market_cap": 9165287772,
          "market_cap_rank": 14,
          "fully_diluted_valuation": 9165287772,
          "total_volume": 232405960,
          "high_24h": 59675,
          "low_24h": 57884,
          "price_change_24h": 151.87,
          "price_change_percentage_24h": 0.25597,
          "market_cap_change_24h": 10201760,
          "market_cap_change_percentage_24h": 0.11143,
          "circulating_supply": 154252.49561866,
          "total_supply": 154252.49561866,
          "max_supply": 154252.49561866,
          "ath": 73505,
          "ath_change_percentage": -19.08473,
          "ath_date": "2024-03-14T07:10:23.403Z",
          "atl": 3139.17,
          "atl_change_percentage": 1794.67635,
          "atl_date": "2019-04-02T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:01.071Z",
          "price_change_percentage_24h_in_currency": 0.255966072211204
        },
        {
          "id": "avalanche-2",
          "symbol": "avax",
          "name": "Avalanche",
          "image": "https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
          "current_price": 20.87,
          "market_cap": 8246416783,
          "market_cap_rank": 15,
          "fully_diluted_valuation": 9275724617,
          "total_volume": 235703630,
          "high_24h": 21.38,
          "low_24h": 20.56,
          "price_change_24h": -0.277539047775839,
          "price_change_percentage_24h": -1.31213,
          "market_cap_change_24h": -115695231.049572,
          "market_cap_change_percentage_24h": -1.38356,
          "circulating_supply": 395344055.634942,
          "total_supply": 444690425.634942,
          "max_supply": 720000000,
          "ath": 144.96,
          "ath_change_percentage": -85.57358,
          "ath_date": "2021-11-21T14:18:56.538Z",
          "atl": 2.8,
          "atl_change_percentage": 646.59911,
          "atl_date": "2020-12-31T13:15:21.540Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:24.224Z",
          "price_change_percentage_24h_in_currency": -1.31212551970963
        },
        {
          "id": "shiba-inu",
          "symbol": "shib",
          "name": "Shiba Inu",
          "image": "https://coin-images.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
          "current_price": 0.0000137,
          "market_cap": 8063833850,
          "market_cap_rank": 16,
          "fully_diluted_valuation": 13684403221,
          "total_volume": 167230265,
          "high_24h": 0.00001376,
          "low_24h": 0.00001343,
          "price_change_24h": 8.6734e-8,
          "price_change_percentage_24h": 0.63702,
          "market_cap_change_24h": 53457229,
          "market_cap_change_percentage_24h": 0.66735,
          "circulating_supply": 589261465289188,
          "total_supply": 999982346341695,
          "max_supply": null,
          "ath": 0.00008616,
          "ath_change_percentage": -84.10771,
          "ath_date": "2021-10-28T03:54:55.568Z",
          "atl": 5.6366e-11,
          "atl_change_percentage": 24292052.75107,
          "atl_date": "2020-11-28T11:26:25.838Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:33.990Z",
          "price_change_percentage_24h_in_currency": 0.637017325987522
        },
        {
          "id": "weth",
          "symbol": "weth",
          "name": "WETH",
          "image": "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
          "current_price": 2653.53,
          "market_cap": 7605002890,
          "market_cap_rank": 17,
          "fully_diluted_valuation": 7605002890,
          "total_volume": 1217992039,
          "high_24h": 2677.81,
          "low_24h": 2605.85,
          "price_change_24h": 6.13,
          "price_change_percentage_24h": 0.23164,
          "market_cap_change_24h": 6985431,
          "market_cap_change_percentage_24h": 0.09194,
          "circulating_supply": 2866418.29993269,
          "total_supply": 2866418.29993269,
          "max_supply": null,
          "ath": 4799.89,
          "ath_change_percentage": -44.71693,
          "ath_date": "2021-11-09T00:00:00.000Z",
          "atl": 82.1,
          "atl_change_percentage": 3131.93398,
          "atl_date": "2018-12-15T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:31.794Z",
          "price_change_percentage_24h_in_currency": 0.231642263511091
        },
        {
          "id": "bitcoin-cash",
          "symbol": "bch",
          "name": "Bitcoin Cash",
          "image": "https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
          "current_price": 342.06,
          "market_cap": 6749829845,
          "market_cap_rank": 18,
          "fully_diluted_valuation": 7178037184,
          "total_volume": 158459778,
          "high_24h": 343.29,
          "low_24h": 332.42,
          "price_change_24h": 0.382002,
          "price_change_percentage_24h": 0.1118,
          "market_cap_change_24h": 5844628,
          "market_cap_change_percentage_24h": 0.08666,
          "circulating_supply": 19747240.5216508,
          "total_supply": 21000000,
          "max_supply": 21000000,
          "ath": 3785.82,
          "ath_change_percentage": -90.96471,
          "ath_date": "2017-12-20T00:00:00.000Z",
          "atl": 76.93,
          "atl_change_percentage": 344.60982,
          "atl_date": "2018-12-16T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:34.350Z",
          "price_change_percentage_24h_in_currency": 0.111801906347591
        },
        {
          "id": "chainlink",
          "symbol": "link",
          "name": "Chainlink",
          "image": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
          "current_price": 10.62,
          "market_cap": 6447094126,
          "market_cap_rank": 19,
          "fully_diluted_valuation": 10602029980,
          "total_volume": 218790517,
          "high_24h": 10.67,
          "low_24h": 10.28,
          "price_change_24h": 0.263446,
          "price_change_percentage_24h": 2.54328,
          "market_cap_change_24h": 158254604,
          "market_cap_change_percentage_24h": 2.51644,
          "circulating_supply": 608099971.308341,
          "total_supply": 1000000000,
          "max_supply": 1000000000,
          "ath": 52.7,
          "ath_change_percentage": -79.84308,
          "ath_date": "2021-05-10T00:13:57.214Z",
          "atl": 0.148183,
          "atl_change_percentage": 7068.16211,
          "atl_date": "2017-11-29T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:19.576Z",
          "price_change_percentage_24h_in_currency": 2.5432758735334
        },
        {
          "id": "polkadot",
          "symbol": "dot",
          "name": "Polkadot",
          "image": "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
          "current_price": 4.47,
          "market_cap": 6244228015,
          "market_cap_rank": 20,
          "fully_diluted_valuation": 6605199221,
          "total_volume": 120679504,
          "high_24h": 4.48,
          "low_24h": 4.34,
          "price_change_24h": 0.03318687,
          "price_change_percentage_24h": 0.74834,
          "market_cap_change_24h": 42386265,
          "market_cap_change_percentage_24h": 0.68345,
          "circulating_supply": 1400291312.21554,
          "total_supply": 1481240445.1209,
          "max_supply": null,
          "ath": 54.98,
          "ath_change_percentage": -91.88545,
          "ath_date": "2021-11-04T14:10:09.301Z",
          "atl": 2.7,
          "atl_change_percentage": 65.39497,
          "atl_date": "2020-08-20T05:48:11.359Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:54.056Z",
          "price_change_percentage_24h_in_currency": 0.748344793810911
        },
        {
          "id": "leo-token",
          "symbol": "leo",
          "name": "LEO Token",
          "image": "https://coin-images.coingecko.com/coins/images/8418/large/leo-token.png?1696508607",
          "current_price": 5.86,
          "market_cap": 5425090869,
          "market_cap_rank": 21,
          "fully_diluted_valuation": 5773919436,
          "total_volume": 619872,
          "high_24h": 5.91,
          "low_24h": 5.83,
          "price_change_24h": 0.01415759,
          "price_change_percentage_24h": 0.24206,
          "market_cap_change_24h": 21431721,
          "market_cap_change_percentage_24h": 0.39661,
          "circulating_supply": 925716732.9,
          "total_supply": 985239504,
          "max_supply": null,
          "ath": 8.14,
          "ath_change_percentage": -28.00144,
          "ath_date": "2022-02-08T17:40:10.285Z",
          "atl": 0.799859,
          "atl_change_percentage": 632.2952,
          "atl_date": "2019-12-24T15:14:35.376Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:59.462Z",
          "price_change_percentage_24h_in_currency": 0.24206301684655
        },
        {
          "id": "dai",
          "symbol": "dai",
          "name": "Dai",
          "image": "https://coin-images.coingecko.com/coins/images/9956/large/Badge_Dai.png?1696509996",
          "current_price": 1.001,
          "market_cap": 5233981718,
          "market_cap_rank": 22,
          "fully_diluted_valuation": 5233981718,
          "total_volume": 121685115,
          "high_24h": 1.002,
          "low_24h": 0.996263,
          "price_change_24h": 0.00117833,
          "price_change_percentage_24h": 0.11787,
          "market_cap_change_24h": 19878590,
          "market_cap_change_percentage_24h": 0.38125,
          "circulating_supply": 5233483814.69605,
          "total_supply": 5233483814.69605,
          "max_supply": null,
          "ath": 1.22,
          "ath_change_percentage": -17.99794,
          "ath_date": "2020-03-13T03:02:50.373Z",
          "atl": 0.88196,
          "atl_change_percentage": 13.3326,
          "atl_date": "2023-03-11T07:50:50.514Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:12.599Z",
          "price_change_percentage_24h_in_currency": 0.117873613874354
        },
        {
          "id": "litecoin",
          "symbol": "ltc",
          "name": "Litecoin",
          "image": "https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400",
          "current_price": 65.93,
          "market_cap": 4934988236,
          "market_cap_rank": 23,
          "fully_diluted_valuation": 5537154941,
          "total_volume": 376080173,
          "high_24h": 65.91,
          "low_24h": 63.45,
          "price_change_24h": 2.18,
          "price_change_percentage_24h": 3.42598,
          "market_cap_change_24h": 162900147,
          "market_cap_change_percentage_24h": 3.4136,
          "circulating_supply": 74864983.2334713,
          "total_supply": 84000000,
          "max_supply": 84000000,
          "ath": 410.26,
          "ath_change_percentage": -83.92913,
          "ath_date": "2021-05-10T03:13:07.904Z",
          "atl": 1.15,
          "atl_change_percentage": 5639.02192,
          "atl_date": "2015-01-14T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:22.282Z",
          "price_change_percentage_24h_in_currency": 3.42597668879191
        },
        {
          "id": "uniswap",
          "symbol": "uni",
          "name": "Uniswap",
          "image": "https://coin-images.coingecko.com/coins/images/12504/large/uniswap-logo.png?1720676669",
          "current_price": 6.39,
          "market_cap": 4806713933,
          "market_cap_rank": 24,
          "fully_diluted_valuation": 6376925570,
          "total_volume": 104551970,
          "high_24h": 6.44,
          "low_24h": 6.23,
          "price_change_24h": 0.087862,
          "price_change_percentage_24h": 1.39494,
          "market_cap_change_24h": 61209357,
          "market_cap_change_percentage_24h": 1.28984,
          "circulating_supply": 753766667,
          "total_supply": 1000000000,
          "max_supply": 1000000000,
          "ath": 44.92,
          "ath_change_percentage": -85.79689,
          "ath_date": "2021-05-03T05:25:04.822Z",
          "atl": 1.03,
          "atl_change_percentage": 519.29167,
          "atl_date": "2020-09-17T01:20:38.214Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:20.527Z",
          "price_change_percentage_24h_in_currency": 1.39494182348341
        },
        {
          "id": "near",
          "symbol": "near",
          "name": "NEAR Protocol",
          "image": "https://coin-images.coingecko.com/coins/images/10365/large/near.jpg?1696510367",
          "current_price": 4.19,
          "market_cap": 4621224157,
          "market_cap_rank": 25,
          "fully_diluted_valuation": 4938708479,
          "total_volume": 186167405,
          "high_24h": 4.25,
          "low_24h": 4.05,
          "price_change_24h": 0.01141212,
          "price_change_percentage_24h": 0.2731,
          "market_cap_change_24h": 6204494,
          "market_cap_change_percentage_24h": 0.13444,
          "circulating_supply": 1107181322.94878,
          "total_supply": 1183246170.6779,
          "max_supply": null,
          "ath": 20.44,
          "ath_change_percentage": -79.50793,
          "ath_date": "2022-01-16T22:09:45.873Z",
          "atl": 0.526762,
          "atl_change_percentage": 695.08202,
          "atl_date": "2020-11-04T16:09:15.137Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:08.183Z",
          "price_change_percentage_24h_in_currency": 0.273098704927113
        },
        {
          "id": "wrapped-eeth",
          "symbol": "weeth",
          "name": "Wrapped eETH",
          "image": "https://coin-images.coingecko.com/coins/images/33033/large/weETH.png?1701438396",
          "current_price": 2770.28,
          "market_cap": 4168764083,
          "market_cap_rank": 26,
          "fully_diluted_valuation": 4168764083,
          "total_volume": 172165117,
          "high_24h": 2799.09,
          "low_24h": 2721.68,
          "price_change_24h": 5.41,
          "price_change_percentage_24h": 0.19569,
          "market_cap_change_24h": 31557835,
          "market_cap_change_percentage_24h": 0.76278,
          "circulating_supply": 1503704.18776358,
          "total_supply": 1503704.18776358,
          "max_supply": null,
          "ath": 4196.87,
          "ath_change_percentage": -33.81517,
          "ath_date": "2024-03-13T08:29:59.938Z",
          "atl": 2231.18,
          "atl_change_percentage": 24.49458,
          "atl_date": "2024-01-08T03:35:28.624Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:41.050Z",
          "price_change_percentage_24h_in_currency": 0.19568729944158
        },
        {
          "id": "kaspa",
          "symbol": "kas",
          "name": "Kaspa",
          "image": "https://coin-images.coingecko.com/coins/images/25751/large/kaspa-icon-exchanges.png?1696524837",
          "current_price": 0.167993,
          "market_cap": 4100594975,
          "market_cap_rank": 27,
          "fully_diluted_valuation": 4100786153,
          "total_volume": 57595196,
          "high_24h": 0.169155,
          "low_24h": 0.164731,
          "price_change_24h": -0.000001369768313858,
          "price_change_percentage_24h": -0.00082,
          "market_cap_change_24h": -1356741.44458818,
          "market_cap_change_percentage_24h": -0.03308,
          "circulating_supply": 24452974031.6799,
          "total_supply": 24454114076.1367,
          "max_supply": 28704026601,
          "ath": 0.207411,
          "ath_change_percentage": -18.86033,
          "ath_date": "2024-08-01T00:40:47.164Z",
          "atl": 0.00017105,
          "atl_change_percentage": 98288.2021,
          "atl_date": "2022-05-26T14:42:59.316Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:53.193Z",
          "price_change_percentage_24h_in_currency": -0.000815367603095479
        },
        {
          "id": "matic-network",
          "symbol": "matic",
          "name": "Polygon",
          "image": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
          "current_price": 0.417552,
          "market_cap": 3873521354,
          "market_cap_rank": 28,
          "fully_diluted_valuation": 4172729616,
          "total_volume": 227036346,
          "high_24h": 0.430562,
          "low_24h": 0.411237,
          "price_change_24h": 0.00507644,
          "price_change_percentage_24h": 1.23073,
          "market_cap_change_24h": 46954150,
          "market_cap_change_percentage_24h": 1.22706,
          "circulating_supply": 9282943566.20399,
          "total_supply": 10000000000,
          "max_supply": 10000000000,
          "ath": 2.92,
          "ath_change_percentage": -85.6803,
          "ath_date": "2021-12-27T02:08:34.307Z",
          "atl": 0.00314376,
          "atl_change_percentage": 13183.46402,
          "atl_date": "2019-05-10T00:00:00.000Z",
          "roi": {
            "times": 157.764911083801,
            "currency": "usd",
            "percentage": 15776.4911083801
          },
          "last_updated": "2024-08-15T15:20:36.443Z",
          "price_change_percentage_24h_in_currency": 1.23072590505085
        },
        {
          "id": "internet-computer",
          "symbol": "icp",
          "name": "Internet Computer",
          "image": "https://coin-images.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1696514180",
          "current_price": 7.23,
          "market_cap": 3384240455,
          "market_cap_rank": 29,
          "fully_diluted_valuation": 3767413855,
          "total_volume": 66695005,
          "high_24h": 7.28,
          "low_24h": 7,
          "price_change_24h": 0.091642,
          "price_change_percentage_24h": 1.28415,
          "market_cap_change_24h": 39620372,
          "market_cap_change_percentage_24h": 1.1846,
          "circulating_supply": 468885807.711987,
          "total_supply": 521974402.138405,
          "max_supply": null,
          "ath": 700.65,
          "ath_change_percentage": -98.96654,
          "ath_date": "2021-05-10T16:05:53.653Z",
          "atl": 2.87,
          "atl_change_percentage": 152.73589,
          "atl_date": "2023-09-22T00:29:57.369Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:43.431Z",
          "price_change_percentage_24h_in_currency": 1.28414514073974
        },
        {
          "id": "pepe",
          "symbol": "pepe",
          "name": "Pepe",
          "image": "https://coin-images.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1696528776",
          "current_price": 0.00000799,
          "market_cap": 3357455158,
          "market_cap_rank": 30,
          "fully_diluted_valuation": 3357455158,
          "total_volume": 617452800,
          "high_24h": 0.00000813,
          "low_24h": 0.00000778,
          "price_change_24h": -3.546681652e-8,
          "price_change_percentage_24h": -0.44195,
          "market_cap_change_24h": -15136548.3903484,
          "market_cap_change_percentage_24h": -0.44881,
          "circulating_supply": 420690000000000,
          "total_supply": 420690000000000,
          "max_supply": 420690000000000,
          "ath": 0.00001717,
          "ath_change_percentage": -53.31399,
          "ath_date": "2024-05-27T08:30:07.709Z",
          "atl": 5.5142e-8,
          "atl_change_percentage": 14433.64359,
          "atl_date": "2023-04-18T02:14:41.591Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:25.049Z",
          "price_change_percentage_24h_in_currency": -0.441949977106872
        },
        {
          "id": "aptos",
          "symbol": "apt",
          "name": "Aptos",
          "image": "https://coin-images.coingecko.com/coins/images/26455/large/aptos_round.png?1696525528",
          "current_price": 6.44,
          "market_cap": 3100799636,
          "market_cap_rank": 31,
          "fully_diluted_valuation": 7131481367,
          "total_volume": 175610921,
          "high_24h": 6.75,
          "low_24h": 6.42,
          "price_change_24h": -0.248222136351198,
          "price_change_percentage_24h": -3.71172,
          "market_cap_change_24h": -127657219.502245,
          "market_cap_change_percentage_24h": -3.95412,
          "circulating_supply": 483082182.201113,
          "total_supply": 1111033276.86493,
          "max_supply": null,
          "ath": 19.92,
          "ath_change_percentage": -67.5883,
          "ath_date": "2023-01-26T14:25:17.390Z",
          "atl": 3.08,
          "atl_change_percentage": 109.64183,
          "atl_date": "2022-12-29T21:35:14.796Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:04.297Z",
          "price_change_percentage_24h_in_currency": -3.71172004399526
        },
        {
          "id": "ethena-usde",
          "symbol": "usde",
          "name": "Ethena USDe",
          "image": "https://coin-images.coingecko.com/coins/images/33613/large/USDE.png?1716355685",
          "current_price": 1,
          "market_cap": 3095356824,
          "market_cap_rank": 32,
          "fully_diluted_valuation": 3095356824,
          "total_volume": 81147541,
          "high_24h": 1.001,
          "low_24h": 0.99507,
          "price_change_24h": 0.00106144,
          "price_change_percentage_24h": 0.10623,
          "market_cap_change_24h": -14405971.8695169,
          "market_cap_change_percentage_24h": -0.46325,
          "circulating_supply": 3098686088.28781,
          "total_supply": 3098686088.28781,
          "max_supply": null,
          "ath": 1.032,
          "ath_change_percentage": -3.18884,
          "ath_date": "2023-12-20T15:38:34.596Z",
          "atl": 0.965354,
          "atl_change_percentage": 3.503,
          "atl_date": "2024-04-13T20:11:19.603Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:12.222Z",
          "price_change_percentage_24h_in_currency": 0.106232027349943
        },
        {
          "id": "stellar",
          "symbol": "xlm",
          "name": "Stellar",
          "image": "https://coin-images.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
          "current_price": 0.097603,
          "market_cap": 2871058638,
          "market_cap_rank": 33,
          "fully_diluted_valuation": 4873619973,
          "total_volume": 49280365,
          "high_24h": 0.09811,
          "low_24h": 0.096094,
          "price_change_24h": -0.000120200796475095,
          "price_change_percentage_24h": -0.123,
          "market_cap_change_24h": -4153815.60438681,
          "market_cap_change_percentage_24h": -0.14447,
          "circulating_supply": 29456146177.674,
          "total_supply": 50001786948.091,
          "max_supply": 50001786948.091,
          "ath": 0.875563,
          "ath_change_percentage": -88.85256,
          "ath_date": "2018-01-03T00:00:00.000Z",
          "atl": 0.00047612,
          "atl_change_percentage": 20399.48181,
          "atl_date": "2015-03-05T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:31.638Z",
          "price_change_percentage_24h_in_currency": -0.123001505167063
        },
        {
          "id": "ethereum-classic",
          "symbol": "etc",
          "name": "Ethereum Classic",
          "image": "https://coin-images.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1696501717",
          "current_price": 18.98,
          "market_cap": 2815240593,
          "market_cap_rank": 34,
          "fully_diluted_valuation": 3998734552,
          "total_volume": 79277163,
          "high_24h": 19.13,
          "low_24h": 18.57,
          "price_change_24h": 0.22482,
          "price_change_percentage_24h": 1.19866,
          "market_cap_change_24h": 32773143,
          "market_cap_change_percentage_24h": 1.17784,
          "circulating_supply": 148339727.321934,
          "total_supply": 210700000,
          "max_supply": 210700000,
          "ath": 167.09,
          "ath_change_percentage": -88.64154,
          "ath_date": "2021-05-06T18:34:22.133Z",
          "atl": 0.615038,
          "atl_change_percentage": 2985.71698,
          "atl_date": "2016-07-25T00:00:00.000Z",
          "roi": {
            "times": 41.1796081339264,
            "currency": "usd",
            "percentage": 4117.96081339264
          },
          "last_updated": "2024-08-15T15:20:38.123Z",
          "price_change_percentage_24h_in_currency": 1.19865543367742
        },
        {
          "id": "monero",
          "symbol": "xmr",
          "name": "Monero",
          "image": "https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460",
          "current_price": 150.96,
          "market_cap": 2783635407,
          "market_cap_rank": 35,
          "fully_diluted_valuation": null,
          "total_volume": 42765051,
          "high_24h": 153.21,
          "low_24h": 148.79,
          "price_change_24h": 1.45,
          "price_change_percentage_24h": 0.97087,
          "market_cap_change_24h": 25385539,
          "market_cap_change_percentage_24h": 0.92035,
          "circulating_supply": 18445342.6021475,
          "total_supply": 18444108,
          "max_supply": null,
          "ath": 542.33,
          "ath_change_percentage": -72.17305,
          "ath_date": "2018-01-09T00:00:00.000Z",
          "atl": 0.216177,
          "atl_change_percentage": 69709.87137,
          "atl_date": "2015-01-14T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:40.615Z",
          "price_change_percentage_24h_in_currency": 0.970870009019553
        },
        {
          "id": "crypto-com-chain",
          "symbol": "cro",
          "name": "Cronos",
          "image": "https://coin-images.coingecko.com/coins/images/7310/large/cro_token_logo.png?1696507599",
          "current_price": 0.090005,
          "market_cap": 2420084513,
          "market_cap_rank": 36,
          "fully_diluted_valuation": 2701792627,
          "total_volume": 7977148,
          "high_24h": 0.09085,
          "low_24h": 0.08853,
          "price_change_24h": 0.00013532,
          "price_change_percentage_24h": 0.15057,
          "market_cap_change_24h": -5417959.33933258,
          "market_cap_change_percentage_24h": -0.22337,
          "circulating_supply": 26871986644.2161,
          "total_supply": 30000000000,
          "max_supply": null,
          "ath": 0.965407,
          "ath_change_percentage": -90.67641,
          "ath_date": "2021-11-24T15:53:54.855Z",
          "atl": 0.0121196,
          "atl_change_percentage": 642.68674,
          "atl_date": "2019-02-08T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:40.151Z",
          "price_change_percentage_24h_in_currency": 0.150572367635656
        },
        {
          "id": "sui",
          "symbol": "sui",
          "name": "Sui",
          "image": "https://coin-images.coingecko.com/coins/images/26375/large/sui_asset.jpeg?1696525453",
          "current_price": 0.877686,
          "market_cap": 2269948483,
          "market_cap_rank": 37,
          "fully_diluted_valuation": 8743733345,
          "total_volume": 326274464,
          "high_24h": 0.937138,
          "low_24h": 0.875337,
          "price_change_24h": -0.0126949961669659,
          "price_change_percentage_24h": -1.42579,
          "market_cap_change_24h": -40825307.4637818,
          "market_cap_change_percentage_24h": -1.76674,
          "circulating_supply": 2596086126.65889,
          "total_supply": 10000000000,
          "max_supply": 10000000000,
          "ath": 2.17,
          "ath_change_percentage": -59.30126,
          "ath_date": "2024-03-27T17:46:02.608Z",
          "atl": 0.364846,
          "atl_change_percentage": 142.18327,
          "atl_date": "2023-10-19T10:40:30.078Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:51.962Z",
          "price_change_percentage_24h_in_currency": -1.42579357676469
        },
        {
          "id": "blockstack",
          "symbol": "stx",
          "name": "Stacks",
          "image": "https://coin-images.coingecko.com/coins/images/2069/large/Stacks_Logo_png.png?1709979332",
          "current_price": 1.49,
          "market_cap": 2193799154,
          "market_cap_rank": 38,
          "fully_diluted_valuation": 2691396092,
          "total_volume": 60488404,
          "high_24h": 1.53,
          "low_24h": 1.42,
          "price_change_24h": -0.00260581055272335,
          "price_change_percentage_24h": -0.1748,
          "market_cap_change_24h": -12625633.2374873,
          "market_cap_change_percentage_24h": -0.57222,
          "circulating_supply": 1481880304.97898,
          "total_supply": 1818000000,
          "max_supply": 1818000000,
          "ath": 3.86,
          "ath_change_percentage": -61.68445,
          "ath_date": "2024-04-01T12:34:58.342Z",
          "atl": 0.04559639,
          "atl_change_percentage": 3147.26624,
          "atl_date": "2020-03-13T02:29:26.415Z",
          "roi": {
            "times": 11.4014210997457,
            "currency": "usd",
            "percentage": 1140.14210997457
          },
          "last_updated": "2024-08-15T15:20:59.605Z",
          "price_change_percentage_24h_in_currency": -0.174795539639074
        },
        {
          "id": "okb",
          "symbol": "okb",
          "name": "OKB",
          "image": "https://coin-images.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1696505053",
          "current_price": 36.48,
          "market_cap": 2188945203,
          "market_cap_rank": 39,
          "fully_diluted_valuation": 8608307390,
          "total_volume": 4000567,
          "high_24h": 37,
          "low_24h": 36.08,
          "price_change_24h": -0.40060819963962,
          "price_change_percentage_24h": -1.08616,
          "market_cap_change_24h": -23009018.0804873,
          "market_cap_change_percentage_24h": -1.04021,
          "circulating_supply": 60000000,
          "total_supply": 235957685.3,
          "max_supply": 300000000,
          "ath": 73.8,
          "ath_change_percentage": -50.44089,
          "ath_date": "2024-03-14T00:30:12.502Z",
          "atl": 0.580608,
          "atl_change_percentage": 6199.6515,
          "atl_date": "2019-01-14T00:00:00.000Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:15.907Z",
          "price_change_percentage_24h_in_currency": -1.08615864429756
        },
        {
          "id": "first-digital-usd",
          "symbol": "fdusd",
          "name": "First Digital USD",
          "image": "https://coin-images.coingecko.com/coins/images/31079/large/firstfigital.jpeg?1696529912",
          "current_price": 1.002,
          "market_cap": 2181015918,
          "market_cap_rank": 40,
          "fully_diluted_valuation": 2181015918,
          "total_volume": 4869687044,
          "high_24h": 1.012,
          "low_24h": 0.989605,
          "price_change_24h": 0.00211511,
          "price_change_percentage_24h": 0.2115,
          "market_cap_change_24h": 157348569,
          "market_cap_change_percentage_24h": 7.77542,
          "circulating_supply": 2180508590.3,
          "total_supply": 2180508590.3,
          "max_supply": null,
          "ath": 1.089,
          "ath_change_percentage": -7.87223,
          "ath_date": "2024-05-20T19:42:15.377Z",
          "atl": 0.942129,
          "atl_change_percentage": 6.4462,
          "atl_date": "2023-08-17T21:55:41.478Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:12.460Z",
          "price_change_percentage_24h_in_currency": 0.211503185468681
        },
        {
          "id": "fetch-ai",
          "symbol": "fet",
          "name": "Artificial Superintelligence Alliance",
          "image": "https://coin-images.coingecko.com/coins/images/5681/large/ASI.png?1719827289",
          "current_price": 0.864488,
          "market_cap": 2177387136,
          "market_cap_rank": 41,
          "fully_diluted_valuation": 2271991828,
          "total_volume": 138393075,
          "high_24h": 0.90061,
          "low_24h": 0.83637,
          "price_change_24h": -0.0220400255586285,
          "price_change_percentage_24h": -2.48611,
          "market_cap_change_24h": -45713754.2882004,
          "market_cap_change_percentage_24h": -2.05631,
          "circulating_supply": 2521012371,
          "total_supply": 2630547141,
          "max_supply": 2630547141,
          "ath": 3.45,
          "ath_change_percentage": -74.95022,
          "ath_date": "2024-03-28T17:21:18.050Z",
          "atl": 0.00816959,
          "atl_change_percentage": 10491.18492,
          "atl_date": "2020-03-13T02:24:18.347Z",
          "roi": {
            "times": 8.97102389217417,
            "currency": "usd",
            "percentage": 897.102389217418
          },
          "last_updated": "2024-08-15T15:20:39.016Z",
          "price_change_percentage_24h_in_currency": -2.48610654205766
        },
        {
          "id": "filecoin",
          "symbol": "fil",
          "name": "Filecoin",
          "image": "https://coin-images.coingecko.com/coins/images/12817/large/filecoin.png?1696512609",
          "current_price": 3.65,
          "market_cap": 2104969322,
          "market_cap_rank": 42,
          "fully_diluted_valuation": 7143709607,
          "total_volume": 107187145,
          "high_24h": 3.67,
          "low_24h": 3.55,
          "price_change_24h": 0.051929,
          "price_change_percentage_24h": 1.44332,
          "market_cap_change_24h": 29493074,
          "market_cap_change_percentage_24h": 1.42103,
          "circulating_supply": 577547859,
          "total_supply": 1960044807,
          "max_supply": 1960044807,
          "ath": 236.84,
          "ath_change_percentage": -98.45723,
          "ath_date": "2021-04-01T13:29:41.564Z",
          "atl": 2.64,
          "atl_change_percentage": 38.35489,
          "atl_date": "2022-12-16T22:45:28.552Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:43.289Z",
          "price_change_percentage_24h_in_currency": 1.44331856504818
        },
        {
          "id": "mantle",
          "symbol": "mnt",
          "name": "Mantle",
          "image": "https://coin-images.coingecko.com/coins/images/30980/large/token-logo.png?1696529819",
          "current_price": 0.604081,
          "market_cap": 1964617333,
          "market_cap_rank": 43,
          "fully_diluted_valuation": 3740180476,
          "total_volume": 111949375,
          "high_24h": 0.62818,
          "low_24h": 0.59307,
          "price_change_24h": -0.0238682781740984,
          "price_change_percentage_24h": -3.80099,
          "market_cap_change_24h": -85566214.0145476,
          "market_cap_change_percentage_24h": -4.17359,
          "circulating_supply": 3266841707.83684,
          "total_supply": 6219316794.99,
          "max_supply": 6219316794.99,
          "ath": 1.54,
          "ath_change_percentage": -60.8248,
          "ath_date": "2024-04-08T09:45:25.482Z",
          "atl": 0.307978,
          "atl_change_percentage": 95.72661,
          "atl_date": "2023-10-18T02:50:46.942Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:59.109Z",
          "price_change_percentage_24h_in_currency": -3.80098525524056
        },
        {
          "id": "bittensor",
          "symbol": "tao",
          "name": "Bittensor",
          "image": "https://coin-images.coingecko.com/coins/images/28452/large/ARUsPeNQ_400x400.jpeg?1696527447",
          "current_price": 270.4,
          "market_cap": 1947145950,
          "market_cap_rank": 44,
          "fully_diluted_valuation": 5659359284,
          "total_volume": 64781351,
          "high_24h": 279.66,
          "low_24h": 266.39,
          "price_change_24h": -5.61335597653545,
          "price_change_percentage_24h": -2.03371,
          "market_cap_change_24h": -42146864.7609186,
          "market_cap_change_percentage_24h": -2.11869,
          "circulating_supply": 7225211,
          "total_supply": 21000000,
          "max_supply": 21000000,
          "ath": 757.6,
          "ath_change_percentage": -64.29357,
          "ath_date": "2024-03-07T18:45:36.466Z",
          "atl": 30.83,
          "atl_change_percentage": 777.43741,
          "atl_date": "2023-05-14T08:57:53.732Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:10.712Z",
          "price_change_percentage_24h_in_currency": -2.03370741629406
        },
        {
          "id": "hedera-hashgraph",
          "symbol": "hbar",
          "name": "Hedera",
          "image": "https://coin-images.coingecko.com/coins/images/3688/large/hbar.png?1696504364",
          "current_price": 0.053693,
          "market_cap": 1924814611,
          "market_cap_rank": 45,
          "fully_diluted_valuation": 2683406121,
          "total_volume": 44775459,
          "high_24h": 0.054387,
          "low_24h": 0.052595,
          "price_change_24h": -0.000353819958199969,
          "price_change_percentage_24h": -0.65466,
          "market_cap_change_24h": -11203262.9962833,
          "market_cap_change_percentage_24h": -0.57868,
          "circulating_supply": 35865137887.1357,
          "total_supply": 50000000000,
          "max_supply": 50000000000,
          "ath": 0.569229,
          "ath_change_percentage": -90.56749,
          "ath_date": "2021-09-15T10:40:28.318Z",
          "atl": 0.00986111,
          "atl_change_percentage": 444.48789,
          "atl_date": "2020-01-02T17:30:24.852Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:43.478Z",
          "price_change_percentage_24h_in_currency": -0.654659961284355
        },
        {
          "id": "maker",
          "symbol": "mkr",
          "name": "Maker",
          "image": "https://coin-images.coingecko.com/coins/images/1364/large/Mark_Maker.png?1696502423",
          "current_price": 2040.56,
          "market_cap": 1894339686,
          "market_cap_rank": 46,
          "fully_diluted_valuation": 1990589148,
          "total_volume": 75299363,
          "high_24h": 2076.27,
          "low_24h": 2020.26,
          "price_change_24h": -12.4521532002284,
          "price_change_percentage_24h": -0.60653,
          "market_cap_change_24h": -11656808.037565,
          "market_cap_change_percentage_24h": -0.61159,
          "circulating_supply": 930360.377639332,
          "total_supply": 977631.036950888,
          "max_supply": 1005577,
          "ath": 6292.31,
          "ath_change_percentage": -67.64092,
          "ath_date": "2021-05-03T21:54:29.333Z",
          "atl": 168.36,
          "atl_change_percentage": 1109.41123,
          "atl_date": "2020-03-16T20:52:36.527Z",
          "roi": null,
          "last_updated": "2024-08-15T15:21:00.608Z",
          "price_change_percentage_24h_in_currency": -0.606530040019559
        },
        {
          "id": "arbitrum",
          "symbol": "arb",
          "name": "Arbitrum",
          "image": "https://coin-images.coingecko.com/coins/images/16547/large/arb.jpg?1721358242",
          "current_price": 0.565233,
          "market_cap": 1884247253,
          "market_cap_rank": 47,
          "fully_diluted_valuation": 5642677689,
          "total_volume": 194342159,
          "high_24h": 0.572507,
          "low_24h": 0.552443,
          "price_change_24h": -0.000543671792341938,
          "price_change_percentage_24h": -0.09609,
          "market_cap_change_24h": -3923628.93183136,
          "market_cap_change_percentage_24h": -0.2078,
          "circulating_supply": 3339278542,
          "total_supply": 10000000000,
          "max_supply": 10000000000,
          "ath": 2.39,
          "ath_change_percentage": -76.34214,
          "ath_date": "2024-01-12T12:29:59.231Z",
          "atl": 0.431578,
          "atl_change_percentage": 31.02858,
          "atl_date": "2024-08-05T11:35:54.024Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:39.636Z",
          "price_change_percentage_24h_in_currency": -0.0960929734844509
        },
        {
          "id": "immutable-x",
          "symbol": "imx",
          "name": "Immutable",
          "image": "https://coin-images.coingecko.com/coins/images/17233/large/immutableX-symbol-BLK-RGB.png?1696516787",
          "current_price": 1.19,
          "market_cap": 1877629466,
          "market_cap_rank": 48,
          "fully_diluted_valuation": 2387588809,
          "total_volume": 38013585,
          "high_24h": 1.21,
          "low_24h": 1.16,
          "price_change_24h": -0.00272721091439543,
          "price_change_percentage_24h": -0.22778,
          "market_cap_change_24h": -4858284.11434841,
          "market_cap_change_percentage_24h": -0.25808,
          "circulating_supply": 1572824817.38981,
          "total_supply": 2000000000,
          "max_supply": 2000000000,
          "ath": 9.52,
          "ath_change_percentage": -87.36401,
          "ath_date": "2021-11-26T01:03:01.536Z",
          "atl": 0.378055,
          "atl_change_percentage": 218.19145,
          "atl_date": "2022-12-31T07:36:37.649Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:43.375Z",
          "price_change_percentage_24h_in_currency": -0.227777127155119
        },
        {
          "id": "vechain",
          "symbol": "vet",
          "name": "VeChain",
          "image": "https://coin-images.coingecko.com/coins/images/1167/large/VET_Token_Icon.png?1710013505",
          "current_price": 0.02293625,
          "market_cap": 1854858072,
          "market_cap_rank": 49,
          "fully_diluted_valuation": 1969376633,
          "total_volume": 16464147,
          "high_24h": 0.023176,
          "low_24h": 0.02255182,
          "price_change_24h": 0.00004777,
          "price_change_percentage_24h": 0.2087,
          "market_cap_change_24h": 2743061,
          "market_cap_change_percentage_24h": 0.1481,
          "circulating_supply": 80985041177,
          "total_supply": 85985041177,
          "max_supply": 86712634466,
          "ath": 0.280991,
          "ath_change_percentage": -91.83737,
          "ath_date": "2021-04-19T01:08:21.675Z",
          "atl": 0.00191713,
          "atl_change_percentage": 1096.38265,
          "atl_date": "2020-03-13T02:29:59.652Z",
          "roi": {
            "times": 2.02606958316795,
            "currency": "eth",
            "percentage": 202.606958316795
          },
          "last_updated": "2024-08-15T15:20:13.849Z",
          "price_change_percentage_24h_in_currency": 0.208696232392572
        },
        {
          "id": "render-token",
          "symbol": "render",
          "name": "Render",
          "image": "https://coin-images.coingecko.com/coins/images/11636/large/rndr.png?1696511529",
          "current_price": 4.69,
          "market_cap": 1838265640,
          "market_cap_rank": 50,
          "fully_diluted_valuation": 2492897738,
          "total_volume": 78216676,
          "high_24h": 4.87,
          "low_24h": 4.55,
          "price_change_24h": -0.078663668402255,
          "price_change_percentage_24h": -1.64892,
          "market_cap_change_24h": -31951959.9385264,
          "market_cap_change_percentage_24h": -1.70846,
          "circulating_supply": 392459381.455492,
          "total_supply": 532219654.735492,
          "max_supply": null,
          "ath": 13.53,
          "ath_change_percentage": -65.27975,
          "ath_date": "2024-03-17T16:30:24.636Z",
          "atl": 0.03665669,
          "atl_change_percentage": 12719.7036,
          "atl_date": "2020-06-16T13:22:25.900Z",
          "roi": null,
          "last_updated": "2024-08-15T15:20:36.650Z",
          "price_change_percentage_24h_in_currency": -1.64892201023997
        }
      ]
    useEffect(() => {
        const fetchMarketData = async () => {
           
            setMarketData(cryptoData);
        };
        fetchMarketData();
    }, []);


    // useEffect(() => {
    //     const fetchMarketData = async () => {
    //         const data = await getMarketData(); // Fetch market data
    //         setMarketData(data);
    //     };
    //     fetchMarketData();
    // }, []);

    return (
        <>
            <header className="header-one">
                {/* Start top bar */}
                <div className="topbar-area fix hidden-xs" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="topbar-left">
                                    <ul>
                                        <li style={{ color: "#000033", backgroundColor: "#f5d108" }}><Link to="#" style={{color:'#000033'}}><i className="fa fa-envelope"  style={{color:'#000033'}}/> info@digitalpayout.com</Link></li>
                                        <li style={{ color: "#000033", backgroundColor: "#f5d108" }}><Link to="/contact-us" style={{color:'#000033'}}><i className="fa fa-phone"  style={{color:'#000033'}}/> +234-6542-9805</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="topbar-right">
                                    <div className="top-social">
                                        <ul>
                                        <Link className="s-menu" to="/login">Sign In</Link>
                                        <Link className="btn btn-primary s-menu" to="/register" style={{ marginLeft: '15px' }}>
                                            Sign Up
                                        </Link>
                                            <li><Link href="#"><i className="fa fa-pinterest" /></Link></li>
                                            <li><Link href="#"><i className="fa fa-skype" /></Link></li>
                                            <li><Link href="#"><i className="fa fa-google" /></Link></li>
                                            <li><Link href="#"><i className="fa fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fa fa-facebook" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Scrolling Ticker for Crypto Prices */}
                    <div className="ticker-wrap">
                        <div className="ticker">
                            {marketData.map((coin) => (
                                <div className="ticker-item" key={coin.id}>
                                    <span>{coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price.toFixed(2)} </span>
                                    <span style={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End top bar */}
                {/* header-area start */}
                <div id="sticker" className="header-area hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="row">
                                    {/* logo start */}
                                    <div className="col-md-3 col-sm-3">
                                        <div className="logo">
                                            <Link className="navbar-brand page-scroll white-logo" href="index.html">
                                                <img src="./images/dlogo.png" alt="" width={80} height={80} />
                                            </Link>
                                            <Link className="navbar-brand page-scroll black-logo" to="/">
                                                <img src="./images/dlogo.png" alt="" width={80} height={80} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-9">
                                        <div className="header-right-link">
                                            <Link className="s-menu" to="http://localhost:3001/login">Wallet</Link>
                                            {/* <Link className="s-menu" to="/login">Account</Link> */}
                                        </div>
                                        {/* mainmenu start */}
                                        <nav className={navClass}>
                                            <div className="collapse navbar-collapse" id="navbar-example">
                                                <div className="main-menu">
                                                    <ul className="nav navbar-nav navbar-right">
                                                        <li><Link className="pages" to="/">Home</Link></li>
                                                        <li><Link to="/about">About us</Link></li>
                                                        <li><Link to="/investment">Investment</Link></li>
                                                        <li><Link className="pages" to="/blog">Blog</Link></li>
                                                        <li><Link to="/contact-us">contacts</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                        {/* mainmenu end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-area end */}
                {/* mobile-menu-area start */}
                <div className={`mobile-menu-area hidden-lg hidden-md hidden-sm ${menuVisible ? 'active' : 'hidden'}`} style={{ color: "#fff", backgroundColor: "#000033" }}>
                    <div className="container" style={{ color: "#fff", backgroundColor: "#000033" }}>
                        <div className="row" style={{ color: "#fff", backgroundColor: "#000033" }}>
                            <div className="col-md-12" style={{ color: "#fff", backgroundColor: "#000033" }}>
                                <div className="mobile-menu" style={{ color: "#fff", backgroundColor: "#000033" }}>
                                    <div className="logo">
                                        <Link to="/">
                                        <img src="./images/dlogo.png" alt="" width={400} height={200} />
                                        </Link>
                                    </div>
                                    <nav id="dropdown" style={{ color: "#fff", backgroundColor: "#000033" }}>
                                        <ul>
                                            <li><Link className="pages" to="/">Home</Link></li>
                                            <li><Link to="/about">About us</Link></li>
                                            <li><Link to="/investment">Investment</Link></li>
                                            <li><Link className="pages" to="/blog">Blog</Link></li>
                                            <li><Link to="/contact-us">contacts</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Scrolling Ticker for Crypto Prices in Mobile View */}
                    <div className="ticker-wrap-mobile">
                        <div className="ticker">
                            {marketData.map((coin) => (
                                <div className="ticker-item" key={coin.id}>
                                    <span>{coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price.toFixed(2)} </span>
                                    <span style={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* mobile-menu-area end */}
                <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation"  style={{ margin: '30', justifySelf:'center', float:'left' }}>
                <Link className="s-menu" to="/login" style={{ marginLeft: '15px', color:'yellow', border:"2px solid #f5d108",  }}>Sign In</Link>
                <Link className="btn btn-primary s-menu" to="/register" style={{ marginLeft: '15px', color:'yellow', border:"2px solid #f5d108",  }}>
                    Sign Up
                </Link>
              </button>
            </header>
            <div className  style={{ color: "#fff", border:"2px solid #000033", backgroundColor: "#000033", padding:50, }}>
               
            </div>
        </>
    );
};

export default Header;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './../Header.css';
// import { getMarketData } from './../api';  // Import the API function

// const Header = () => {
//     const [navClass, setNavClass] = useState('navbar navbar-default');
//     const [menuVisible, setMenuVisible] = useState(false);
//     const [marketData, setMarketData] = useState([]);

//     const toggleMenu = () => {
//         setMenuVisible((prevVisible) => !prevVisible);
//         setNavClass((prevClass) =>
//             prevClass.includes('active')
//                 ? 'navbar navbar-default'
//                 : 'navbar navbar-default active'
//         );
//     };

//     useEffect(() => {
//         const fetchMarketData = async () => {
//             const data = await getMarketData(); // Fetch market data
//             setMarketData(data);
//         };
//         fetchMarketData();
//     }, []);

//     return (
//         <>
//             <header className="header-one">
//                 {/* Start top bar */}
//                 <div className="topbar-area fix hidden-xs" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-6 col-sm-6">
//                                 <div className="topbar-left">
//                                     <ul>
//                                         <li><Link href="#"><i className="fa fa-envelope" /> info@digitalpayout.com</Link></li>
//                                         <li><Link to="/contact-us"><i className="fa fa-phone" /> +234-6542-9805</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-md-6 col-sm-6">
//                                 <div className="topbar-right">
//                                     <div className="top-social">
//                                         <ul>
//                                             <li><Link href="#"><i className="fa fa-pinterest" /></Link></li>
//                                             <li><Link href="#"><i className="fa fa-skype" /></Link></li>
//                                             <li><Link href="#"><i className="fa fa-google" /></Link></li>
//                                             <li><Link href="#"><i className="fa fa-twitter" /></Link></li>
//                                             <li><Link href="#"><i className="fa fa-facebook" /></Link></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Scrolling Ticker for Crypto Prices */}
//                     <div className="ticker-wrap">
//                         <div className="ticker">
//                             {marketData.map((coin) => (
//                                 <div className="ticker-item" key={coin.id}>
//                                     <span>{coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price.toFixed(2)} </span>
//                                     <span style={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
//                                         {coin.price_change_percentage_24h.toFixed(2)}%
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 {/* End top bar */}
//                 {/* header-area start */}
//                 <div id="sticker" className="header-area hidden-xs">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-12 col-sm-12">
//                                 <div className="row">
//                                     {/* logo start */}
//                                     <div className="col-md-3 col-sm-3">
//                                         <div className="logo">
//                                             <Link className="navbar-brand page-scroll white-logo" href="index.html">
//                                                 <img src="./images/instruction-4.png" alt="" />
//                                             </Link>
//                                             <Link className="navbar-brand page-scroll black-logo" to="/">
//                                                 <img src="./images/instruction-4.png" alt="" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-9 col-sm-9">
//                                         <div className="header-right-link">
//                                             <Link className="s-menu" to="/login">Account</Link>
//                                         </div>
//                                         {/* mainmenu start */}
//                                         <nav className={navClass}>
//                                             <div className="collapse navbar-collapse" id="navbar-example">
//                                                 <div className="main-menu">
//                                                     <ul className="nav navbar-nav navbar-right">
//                                                         <li><Link className="pages" to="/">Home</Link></li>
//                                                         <li><Link to="/about">About us</Link></li>
//                                                         <li><Link to="/investment">Investment</Link></li>
//                                                         <li><Link className="pages" to="/blog">Blog</Link></li>
//                                                         <li><Link to="/contact-us">contacts</Link></li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </nav>
//                                         {/* mainmenu end */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* header-area end */}
//                 {/* mobile-menu-area start */}
//                 <div className={`mobile-menu-area hidden-lg hidden-md hidden-sm ${menuVisible ? 'active' : 'hidden'}`} style={{ color: "#fff", backgroundColor: "#000033" }}>
//                     <div className="container" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                         <div className="row" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                             <div className="col-md-12" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                                 <div className="mobile-menu" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                                     <div className="logo">
//                                         <Link href="index.html">
//                                             <img src="./images/instruction-4.png" alt="" />
//                                         </Link>
//                                     </div>
//                                     <nav id="dropdown" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                                         <ul>
//                                             <li><Link className="pages" to="/">Home</Link></li>
//                                             <li><Link to="/about">About us</Link></li>
//                                             <li><Link to="/investment">Investment</Link></li>
//                                             <li><Link className="pages" to="/blog">Blog</Link></li>
//                                             <li><Link to="/contact-us">contacts</Link></li>
//                                         </ul>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* mobile-menu-area end */}
//                 <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
//                     <span className="sr-only">Toggle navigation</span>
//                     <span className="icon-bar" />
//                     <span className="icon-bar" />
//                     <span className="icon-bar" />
//                 </button>
//             </header>
//         </>
//     );
// };

// export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [navClass, setNavClass] = useState('navbar navbar-default');
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible((prevVisible) => !prevVisible);
//     setNavClass((prevClass) =>
//       prevClass.includes('active')
//         ? 'navbar navbar-default'
//         : 'navbar navbar-default active'
//     );
//   };

//   // Dummy cryptocurrency data
//   const cryptoData = [
//     { name: 'Bitcoin', price: '$29,500', change: '-2.5%' },
//     { name: 'Ethereum', price: '$1,750', change: '-1.8%' },
//     { name: 'Ripple', price: '$0.55', change: '+3.2%' },
//     { name: 'Litecoin', price: '$85.10', change: '-0.6%' },
//   ];

//   return (
//     <>
//       <header className="header-one">
//         {/* Start top bar */}
//         <div
//           className="topbar-area fix hidden-xs"
//           style={{ color: "#fff", backgroundColor: "#000033" }}
//         >
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4 col-sm-4">
//                 <div className="topbar-left text-white">
//                   <ul>
//                     <span >
//                       <Link to="#" className='text-white' style={{color:'#fff'}}>
//                         <i className="fa fa-envelope text-white" /> info@digitalpayout.com
//                       </Link>
//                     </span>
//                     <span style={{margin:5}}>
//                       <Link to="/contact-us"  style={{margin:5, color:'#fff'}}>
//                         <i className="fa fa-phone" /> +234-6542-9805
//                       </Link>
//                     </span>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-md-8 col-sm-8">
//                 <div className="topbar-right">
//                   <div className="crypto-ticker">
//                     <marquee>
//                       {cryptoData.map((crypto, index) => (
//                         <span key={index} style={{ marginRight: '30px' }}>
//                           <strong>{crypto.name}</strong>: {crypto.price} (
//                           {crypto.change})
//                         </span>
//                       ))}
//                     </marquee>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End top bar */}

//         {/* header-area start */}
//         <div id="sticker" className="header-area hidden-xs">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-sm-12">
//                 <div className="row">
//                   {/* logo start */}
//                   <div className="col-md-3 col-sm-3">
//                     <div className="logo">
//                       <Link className="navbar-brand page-scroll white-logo" to="/">
//                         <img src="./images/instruction-4.png" alt="" />
//                       </Link>
//                       <Link className="navbar-brand page-scroll black-logo" to="/">
//                         <img src="./images/instruction-4.png" alt="" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="col-md-9 col-sm-9">
//                     <div className="header-right-link">
//                       <Link className="s-menu" to="/login">Account</Link>
//                     </div>
//                     {/* mainmenu start */}
//                     <nav className={navClass}>
//                       <div className="collapse navbar-collapse" id="navbar-example">
//                         <div className="main-menu">
//                           <ul className="nav navbar-nav navbar-right">
//                             <li>
//                               <Link className="pages" to="/">Home</Link>
//                             </li>
//                             <li>
//                               <Link to="/about">About us</Link>
//                             </li>
//                             <li>
//                               <Link to="/investment">Investment</Link>
//                             </li>
//                             <li>
//                               <Link className="pages" to="/blog">Blog</Link>
//                             </li>
//                             <li>
//                               <Link to="/contact-us">Contacts</Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </nav>
//                     {/* mainmenu end */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* header-area end */}

//         {/* mobile-menu-area start */}
//         <div
//           className={`mobile-menu-area hidden-lg hidden-md hidden-sm ${menuVisible ? 'active' : 'hidden'}`}
//           style={{ color: "#fff", backgroundColor: "#000033" }}
//         >
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="mobile-menu">
//                   <div className="logo">
//                     <Link to="/">
//                       <img src="./images/instruction-4.png" alt="" />
//                     </Link>
//                   </div>
//                   <nav id="dropdown">
//                     <ul>
//                       <li>
//                         <Link className="pages" to="/">Home</Link>
//                       </li>
//                       <li>
//                         <Link to="/about">About us</Link>
//                       </li>
//                       <li>
//                         <Link to="/investment">Investment</Link>
//                       </li>
//                       <li>
//                         <Link className="pages" to="/blog">Blog</Link>
//                       </li>
//                       <li>
//                         <Link to="/contact-us">Contacts</Link>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* mobile-menu-area end */}

//         <button
//           className="navbar-toggle"
//           onClick={toggleMenu}
//           aria-label="Toggle navigation"
//         >
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar" />
//           <span className="icon-bar" />
//           <span className="icon-bar" />
//         </button>
//       </header>
//     </>
//   );
// }

// export default Header;



// import React, { useState } from 'react';
// // import './App.css';
// import './../Header.css';
// import { Link } from 'react-router-dom';



// const Header = () => {
//     const [navClass, setNavClass] = useState('navbar navbar-default');
//     const [menuVisible, setMenuVisible] = useState(false);
  
//     const toggleMenu = () => {
//       setMenuVisible((prevVisible) => !prevVisible);
//       setNavClass((prevClass) =>
//         prevClass.includes('active')
//           ? 'navbar navbar-default'
//           : 'navbar navbar-default active'
//       );
//     };
  
//   return (
//    <>
//       {/* <div id="preloader" /> */}
//           <header className="header-one">
//             {/* Start top bar */}
//             <div className="topbar-area fix hidden-xs" style={{ color: "#fff", backgroundColor: "#000033" }}>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-6 col-sm-6">
//                     <div className="topbar-left">
//                       <ul>
//                         <li><Link href="#"><i className="fa fa-envelope" /> info@digitalpayout.com</Link></li>
//                         <li><Link to="/contact-us"><i className="fa fa-phone" /> +234-6542-9805</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="col-md-6 col-sm-6">
//                     <div className="topbar-right">
//                       <div className="top-social">
//                         <ul>
//                           <li><Link href="#"><i className="fa fa-pinterest" /></Link></li>
//                           <li><Link href="#"><i className="fa fa-skype" /></Link></li>
//                           <li><Link href="#"><i className="fa fa-google" /></Link></li>
//                           <li><Link href="#"><i className="fa fa-twitter" /></Link></li>
//                           <li><Link href="#"><i className="fa fa-facebook" /></Link></li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* End top bar */}
//             {/* header-area start */}
//             <div id="sticker" className="header-area hidden-xs">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-12 col-sm-12">
//                     <div className="row">
//                       {/* logo start */}
//                       <div className="col-md-3 col-sm-3">
//                         <div className="logo">
//                           <Link className="navbar-brand page-scroll white-logo" href="index.html">
//                             <img src="./images/instruction-4.png" alt="" />
//                           </Link>
//                           <Link className="navbar-brand page-scroll black-logo" to="/">
//                             <img src="./images/instruction-4.png" alt="" />
//                           </Link>
//                         </div>
//                       </div>
//                       <div className="col-md-9 col-sm-9">
//                         <div className="header-right-link">
//                           <Link className="s-menu" to="/login">Account</Link>
//                         </div>
//                         {/* mainmenu start */}
//                         <nav className={navClass}>
//                           <div className="collapse navbar-collapse" id="navbar-example">
//                             <div className="main-menu">
//                               <ul className="nav navbar-nav navbar-right">
//                                 <li><Link className="pages" to="/">Home</Link></li>
//                                 <li><Link to="/about">About us</Link></li>
//                                 <li><Link to="/investment">Investment</Link></li>
//                                 {/* <li> */}
//                                   {/* <Link className="pages" href="#">Account</Link>
//                                   <ul className="sub-menu"> */}
//                                     {/* <li><Link href="team.html">team</Link></li> */}
//                                     {/* <li><Link href="faq.html">FAQ</Link></li> */}
//                                     {/* <li><Link href="review.html">Reviews</Link></li> */}
//                                     {/* <li><Link href="login.html">Login</Link></li>
//                                     <li><Link href="signup.html">Register</Link></li>
//                                   </ul>
//                                 </li> */}
//                                 <li>
//                                   <Link className="pages" to="/blog">Blog</Link>
//                                   {/* <ul className="sub-menu">
//                                     <li><Link href="blog.html">Blog grid</Link></li>
//                                     <li><Link href="blog-sidebar.html">Blog Sidebar</Link></li>
//                                     <li><Link href="blog-details.html">Blog Details</Link></li>
//                                   </ul> */}
//                                 </li>
//                                 <li><Link to="/contact-us">contacts</Link></li>
//                               </ul>
//                             </div>
//                           </div>
//                         </nav>
//                         {/* mainmenu end */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* header-area end */}
//             {/* mobile-menu-area start */}
//             <div className={`mobile-menu-area hidden-lg hidden-md hidden-sm ${menuVisible ? 'active' : 'hidden'}`} style={{ color: "#fff", backgroundColor: "#000033" }}>
//               <div className="container" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                 <div className="row" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                   <div className="col-md-12" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                     <div className="mobile-menu" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                       <div className="logo">
//                         <Link href="index.html">
//                           <img src="./images/instruction-4.png" alt="" />
//                         </Link>
//                       </div>
//                       <nav id="dropdown" style={{ color: "#fff", backgroundColor: "#000033" }}>
//                         <ul>
//                           <li><Link className="pages" to="/">Home</Link></li>
//                           <li><Link to="/about">About us</Link></li>
//                           <li><Link to="/investment">Investment</Link></li>
//                           {/* <li>
//                             <Link className="pages" to="#">Pages</Link>
//                             <ul className="sub-menu">
//                               <li><Link href="team.html">Account</Link></li> */}
//                               {/* <li><Link href="faq.html">FAQ</Link></li> */}
//                               {/* <li><Link href="review.html">Reviews</Link></li> */}
//                               {/* <li><Link href="login.html">Login</Link></li>
//                               <li><Link href="signup.html">Register</Link></li>
//                             </ul>
//                           </li> */}
//                           <li>
//                             <Link className="pages" to="/blog">Blog</Link>
//                             {/* <ul className="sub-menu">
//                               <li><a href="blog.html">Blog grid</a></li>
//                               <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
//                               <li><a href="blog-details.html">Blog Details</a></li>
//                             </ul> */}
//                           </li>
//                           <li><Link to="/contact-us">contacts</Link></li>
//                         </ul>
//                       </nav>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* mobile-menu-area end */}
//             <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
//               <span className="sr-only">Toggle navigation</span>
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//             </button>
//           </header>
//    </>
      
//   )
// }

// export default Header