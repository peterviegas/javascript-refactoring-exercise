function processTransactions(transactions) {

    if (!transactions) {
        throw new Error("Undefined collection of transactions")
    }

    const txCount = transactions.reduce((txact, item) => { return txact[item] ? ++txact[item] : txact[item] = 1, txact }, {});

    const sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
        return txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)
    });

    return sortedKeys.map((key) => `${key} ${txCount[key]}`);
}

module.exports = processTransactions;