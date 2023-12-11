import _ from "lodash";

const RANGE_WEEK = 7

export const emptyFunc = () => ({});

export const removeCommas = (str: any) =>
    _.replace(str, new RegExp(",", "g"), "");

export const reverseString = (str: any) =>
    removeCommas(_.toString(_.reverse(_.toArray(str))));

export const recursiveReverse = (input: any): string => {
    if (_.isArray(input))
        return _.toString(_.reverse(_.map(input, (v: any) => recursiveReverse(v))));
    if (_.isString()) return reverseString(input);
    return reverseString(`${input}`);
};

export const sixDigitsNumber = (value: string, length = 6): string => {
    let inputValue = value.toString();
    if (inputValue.length >= length) {
        return inputValue.substring(0, length);
    } else {
        const stringLength = length - inputValue.length;
        let newString = inputValue;
        for (let i = 0; i < stringLength; i++) {
            newString += "0";
        }
        return newString;
    }
};

export const formatNumber = (v = 0, size = 3, decimalLength = 6): string => {
    let str = `${v}`;
    if (!str) return "NaN";
    let substr = str.split(".");
    if (substr[1] === undefined) {
        let newString = "0";
        for (let i = 1; i < decimalLength; i++) {
            newString += "0";
        }
        substr.push(newString);
    } else {
        substr[1] = sixDigitsNumber(substr[1], decimalLength);
    }
    str = reverseString(substr[0]);
    const regex = `.{1,${size}}`;
    const arr = str.match(new RegExp(regex, "g"));
    return `${recursiveReverse(arr)}${substr[1] ? `.${substr[1]}` : ""}`;
};

export const stringTruncate = (str: string, length = 7): string => {
    if (str.length > 30) {
        return (
            str.substring(0, length) +
            "..." +
            str.substring(str.length - length, str.length)
        );
    }
    return str;
};

export const truncateToFixedDecimalPlaces = (
    num: number | string,
    decimalPlaces = 6
): number => {
    const regexString = "^-?\\d+(?:\\.\\d{0,dp})?";
    const regexToMatch = regexString.replace("dp", `${decimalPlaces}`);
    const regex = new RegExp(regexToMatch);
    const matched = num.toString().match(regex);
    if (matched) {
        return parseFloat(matched[0]);
    }
    return 0;
};

export const numberFormat = (number: any, decPlaces: number) => {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    const abbrev = ["K", "M", "M", "T"];

    // Go through the array backwards, so we do the largest first
    for (let i = abbrev.length - 1; i >= 0; i--) {
        // Convert array index to "1000", "1000000", etc
        const size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round((number * decPlaces) / size) / decPlaces;

            // Handle special case where we round up to the next abbreviation
            if (number == 1000 && i < abbrev.length - 1) {
                number = 1;
                i++;
            }

            // Add the letter for the abbreviation
            number += abbrev[i];

            break;
        }
    }

    return number;
};

export const getTokenImgFromDenom = (denom: string) => {
    switch (denom) {
        case "uxprt":
            return {
                denom: "XPRT",
                chain: "persistence",
                tokenImg: "/images/tokens/xprt.svg",
                minimalDenom: "uxprt",
                decimals: 6
            };
        case "uatom":
            return {
                denom: "ATOM",
                chain: "cosmos",
                tokenImg: "/images/tokens/atom.svg",
                minimalDenom: "uatom",
                decimals: 6
            };
        case "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA": // mainnet asset
            return {
                denom: "ATOM",
                chain: "persistence",
                tokenImg: "/images/tokens/atom.svg",
                minimalDenom: "uatom",
                decimals: 6
            };
        case "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9": // testnet asset
            return {
                denom: "ATOM",
                chain: "persistence",
                tokenImg: "/images/tokens/atom.svg",
                minimalDenom: "uatom",
                decimals: 6
            };
        case "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444":
            return {
                denom: "PSTAKE",
                chain: "persistence",
                tokenImg: "/images/tokens/pstake.png",
                minimalDenom: "pstake",
                decimals: 18
            };
        case "uosmo":
            return {
                denom: "OSMO",
                chain: "osmosis",
                tokenImg: "/images/tokens/osmo.svg",
                minimalDenom: "uosmo",
                decimals: 6
            };
        case "ibc/4A17832B26BF318D052563EFFE677C1DE11DF8CE104F00204860F3E3439818B2":
            return {
                denom: "ATOM",
                chain: "persistence",
                tokenImg: "/images/tokens/atom.svg",
                minimalDenom: "uatom",
                decimals: 6
            };
        case "ibc/5A41832B26BF318D052563EFFE677C1DE11DF8CE104F00204860F3E3439818B2":
            return {
                denom: "OSMO",
                chain: "persistence",
                tokenImg: "/images/tokens/osmo.svg",
                minimalDenom: "uosmo",
                decimals: 6
            };
        case "ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85":
            return {
                denom: "OSMO",
                chain: "persistence",
                tokenImg: "/images/tokens/osmo.svg",
                minimalDenom: "uosmo",
                decimals: 6
            };
        case "stk/uatom":
            return {
                denom: "stkATOM",
                chain: "persistence",
                tokenImg: "/images/tokens/stk_atom.svg",
                minimalDenom: "stk/uatom",
                decimals: 6
            };
        case "stk/uosmo":
            return {
                denom: "stkOSMO",
                chain: "persistence",
                tokenImg: "/images/tokens/stk_osmo.svg",
                minimalDenom: "stk/uosmo",
                decimals: 6
            };
        case "stk/uxprt":
            return {
                denom: "stkXPRT",
                chain: "persistence",
                tokenImg: "/images/tokens/stk_xprt.svg",
                minimalDenom: "stk/uxprt",
                decimals: 6
            };
        case "eth/ethereum":
            return {
                denom: "ETH",
                chain: "ethereum",
                tokenImg: "/images/tokens/eth.svg",
                minimalDenom: "eth",
                decimals: 18
            };
        case "stkETH/ethereum":
            return {
                denom: "stkETH",
                chain: "optimism",
                tokenImg: "/images/tokens/stk_eth.svg",
                minimalDenom: "stkETH",
                decimals: 18
            };
        case "eth/optimism":
            return {
                denom: "ETH",
                chain: "optimism",
                tokenImg: "/images/tokens/eth_optimism.svg",
                minimalDenom: "eth",
                decimals: 18
            };
        case "stkETH/optimism":
            return {
                denom: "stkETH",
                chain: "optimism",
                tokenImg: "/images/tokens/stketh_optimism.svg",
                minimalDenom: "stkETH",
                decimals: 18
            };
        case "eth/arbitrum":
            return {
                denom: "ETH",
                chain: "arbitrum",
                tokenImg: "/images/tokens/arbitrum.svg",
                minimalDenom: "eth",
                decimals: 18
            };
        case "stkETH/arbitrum":
            return {
                denom: "stkETH",
                chain: "arbitrum",
                tokenImg: "/images/tokens/stketh_arbitrum.svg",
                minimalDenom: "stkETH",
                decimals: 18
            };
        case "weth/ethereum":
            return {
                denom: "WETH",
                chain: "ethereum",
                tokenImg: "/images/tokens/eth.svg",
                minimalDenom: "weth",
                decimals: 18
            };
        case "weth/arbitrum":
            return {
                denom: "WETH",
                chain: "arbitrum",
                tokenImg: "/images/tokens/arbitrum.svg",
                minimalDenom: "weth",
                decimals: 18
            };
        case "weth/optimism":
            return {
                denom: "WETH",
                chain: "optimism",
                tokenImg: "/images/tokens/eth_optimism.svg",
                minimalDenom: "weth",
                decimals: 18
            };
        case "adydx":
            return {
                denom: "DYDX",
                chain: "persistence",
                tokenImg: "/images/tokens/dydx.svg",
                minimalDenom: "adydx",
                decimals: 18
            };
        case "stk/adydx":
            return {
                denom: "stkDYDX",
                chain: "persistence",
                tokenImg: "/images/tokens/stk_dydx.svg",
                minimalDenom: "stk/adydx",
                decimals: 18
            };
        case "atytx":
            return {
                denom: "TYTX",
                chain: "persistence",
                tokenImg: "/images/tokens/dydx.svg",
                minimalDenom: "atytx",
                decimals: 18
            };
        case "stk/atytx":
            return {
                denom: "stkTYTX",
                chain: "persistence",
                tokenImg: "/images/tokens/stk_dydx.svg",
                minimalDenom: "stk/atytx",
                decimals: 18
            };
        case "ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B": // testnet asset
            return {
                denom: "OSMO",
                chain: "persistence",
                tokenImg: "/images/tokens/osmo.svg",
                minimalDenom: "uosmo",
                decimals: 6
            };
        case "ibc/008E65368CDAC4AEDDAEB41FAD053F9B6B37BD8FA15AD9FC922497F3D8450363": // testnet asset
            return {
                denom: "TYTX",
                chain: "persistence",
                tokenImg: "/images/tokens/dydx.svg",
                minimalDenom: "atytx",
                decimals: 18
            };
        default:
            return {
                denom: "Unknown",
                chain: "persistence",
                tokenImg: "/images/tokens/ibc.svg",
                decimals: 0
            };
    }
};

export const minifiyTxnHash = (txnHash: string) => {
    if (txnHash)
        return txnHash.slice(0, 7) + "..." + txnHash.slice(txnHash.length - 4);
    return "";
};

export const getActiveSideBarItem = (route: string, path: string) => {
    if (route === "/defi") {
        return path.includes("/defi");
    } else if (route === "/bridge") {
        return path.includes("/bridge");
    }else if (route === "/dashboard") {
        return path.includes("/dashboard");
    } else if (route === "/assets") {
        return path.includes("/assets");
    } else {
        return !path.includes("/defi") && !path.includes("/bridge") && !path.includes("/dashboard") && !path.includes("/assets");
    }
};

export const getChainSpecificAssets = (list:any, network:string, chainId:string | number) => {
    let array:any = [];
    const copyList = [...list];
    copyList.forEach((asset) => {
        const re = { ...asset };
        re.network = network;
        re.chainID = chainId;
        re.chain = network;
        array.push(re);
    });
    return array;
};

export const getPercentChange = (data: any[]) => {
    if (data.length > RANGE_WEEK) {
        const firstData = data[0];
        const lastData = data[data.length - 1];
        const percentChange = ((lastData[1] - firstData[1]) * 100) / firstData[1];
        return percentChange;
    }
    return "0";
};


