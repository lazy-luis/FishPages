const Wallets = [
  "Binance Coin (BNB)",
  "BC vault",
  "Keepkey",
  "SecuX v20",
  "Jaxx liberty wallet",
  "Safepal wallet",
  "Bitbox wallet",
  "Cobo vault wallet",
  "Bread wallet",
  "Exodus wallet",
  "ICON wallet",
  "Blockchain",
  "Wallet connect",
  "Etoro",
  "Gate.io",
  "Coinmama",
  "Paybis",
  "Bitwala",
  "Trustee Wallet",
  "Defiant",
  "Guarda Wallet",
  "Jade Wallet",
  "O3Wallet",
  "HashKey Me",
  "PlasmaPay",
  "RWallet",
  "Tongue Wallet",
  "AToken Wallet",
  "KyberSwap",
  "Binance Chain",
  "Trezor Wallet",
  "Flare Wallet",
  "XinFin XDC Network",
  "Talken Wallet",
  "Aktionariat",
  "KEYRING PRO",
  "Ellipal",
  "Midas Wallet",
  "AT.Wallet",
  "Dok Wallet",
  "HaloDeFi Wallet",
  "Unstoppable Wallet",
  "PEAKDEFI Wallet",
  "Vision",
  "BitKeep",
  "ViaWallet",
  "SparkPoint",
  "Bridge Wallet",
  "EasyPocket",
  "Ownbit",
  "Spatium",
  "Torus",
  "Tokenary",
  "CYBAVO Wallet",
  "GridPlus",
  "Coinomi",
  "Nash",
  "ZelCore",
  "DCENT Wallet",
  "AlphaWallet",
  "Alice",
  "CoolWallet S",
  "Coin98",
  "Atomic",
  "TrustVault",
  "Loopring Wallet",
  "MYKEY",
  "Eidoo",
  "Huobi Wallet",
  "1inch Wallet",
  "Authereum",
  "Coinbase Wallet",
  "Ledger Live",
  "BitPay",
  "MathWallet",
  "TokenPocket",
  "ONTO",
  "imToken",
  "Pillar",
  "MyEtherWallet",
  "Crypto.com | DeFi Wallet",
  "Gnosis Safe Multisig",
  "MetaMask",
  "Argent",
  "Rainbow",
  "Trust Wallet",
  "Nuo",
  "DDEX",
  "Airswap",
  "PoolTogether",
  "0x",
  "Uniswap",
  "IDEX",
  "Maker",
  "dYdX",
  "Compound",
];

const listDApps = () => {
  Wallets.map((Wallet) => {
    const listDApps = document.getElementById("dAppsList");
    let newdApp = "";
    if (Wallet === "Crypto.com | DeFi Wallet") {
      newdApp =
        "<div class='DApp'>" +
        "<img src='./assets/CryptoCom.jpeg' />" +
        "<label>" +
        Wallet +
        "</label>" +
        "</div>";
    } else {
      newdApp =
        "<div class='DApp'>" +
        "<img src='./assets/" +
        Wallet +
        ".jpg' onerror='this.src=\"./assets/" +
        Wallet +
        ".png\"' />" +
        "<label>" +
        Wallet +
        "</label>" +
        "</div>";
    }

    listDApps.innerHTML += newdApp;
  });
};

window.onload = listDApps;
