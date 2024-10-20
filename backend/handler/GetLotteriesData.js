const Lotterie = require("../schema/Lotteries");

const getLotteryData = async (req, res) => {
    const data = await Lotterie.find();
    if (data.length > 0) {
        res.status(200).send({ data });
    } else {
        res.status(401).send({ message: "No item found!" })
    }
}

module.exports = getLotteryData;