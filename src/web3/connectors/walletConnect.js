import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

import { URLS } from "./chains";

export const connector = initializeConnector(
    (actions) =>
        new WalletConnect({
            actions,
            options: {
                rpc: URLS,
            },
        })
);
