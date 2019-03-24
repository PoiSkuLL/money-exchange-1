module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};

    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    else {
        let split = new Object();

        split.H = Math.floor(currency / 50);
        split.Q = Math.floor((currency - split.H * 50) / 25);
        split.D = Math.floor((currency - split.H * 50 - split.Q * 25) / 10);
        split.N = Math.floor((currency - split.H * 50 - split.Q * 25 - split.D * 10) / 5);
        split.P = Math.floor(currency % 5);

        for (key in split) {

            if (split[key] < 1) delete split[key];

        }
        return split;
    }
}