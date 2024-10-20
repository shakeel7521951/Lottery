const lotteries = require('../schema/Lotteries');
const lotteryData = require('../../frontend/src/LotteryOffice/CountryTickets');

const lotteryHandler = async (req, res) => {
    try {
        for (const lottery of lotteryData) {
            const existingLottery = await lotteries.findOne({ id: lottery.id });
            
            if (!existingLottery) {
                await lotteries.create(lottery);
            }
        }
        
        res.status(200).json({ message: 'Data inserted without duplication' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};

module.exports = lotteryHandler;
