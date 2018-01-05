const _package = require("./package.json");
const MAX_OPENING = _package.openings;

let openings = [];
for (let i = 1; i <= MAX_OPENING; i++) {
    openings.push(require(`./openings/opening${i}.json`));
}

function check(num) {
    num = parseInt(num);
    if (num < 1 || num > MAX_OPENING) {
        throw new Error('opening num out of range');
    }
    return num;
}

module.exports = {
    get: function (num) {
        num = check(num);
        return openings[num - 1];
    },
    random: function (num) {
        num = check(num);
        let data = [];
        for (let i = 0; i < MAX_OPENING; i++) {
            data.push(i);
        }
        for (let i = 0; i < MAX_OPENING; i++) {
            let j = Math.floor(Math.random() * MAX_OPENING);
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        let result = [];
        for (let i = 0; i < num; i++) {
            result.push({
                id: data[i] + 1,
                data: openings[data[i]]
            });
        }
        return result;
    }
};
