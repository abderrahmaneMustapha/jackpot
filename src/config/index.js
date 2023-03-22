const backendUrl =
    process.env.REACT_APP_BACKEND_URL ||
    "https://stage.whgstage.com/front-end-test/";
const navigationList = [
    { name: "Top Games", key: "top" },
    { name: "New Games", key: "new" },
    { name: "Slots", key: "slots" },
    { name: "Jackpots", key: "jackpots" },
    { name: "Live", key: "live" },
    { name: "BlackJack", key: "blackjack" },
    { name: "Roulette", key: "roulette" },
    { name: "Poker", key: "poker" },
    { name: "Other", key: "other" },
];
const othersList = ["ball", "virtual", "fun"];

export { backendUrl, navigationList, othersList };

export default Object.freeze({
    backendUrl,
    navigationList,
    othersList,
});
