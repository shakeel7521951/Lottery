import axios from 'axios';

const fetchLotteries = async () => {
    try {
        const response = await axios.get("https://lottery-three-ivory.vercel.app/get-lottery-data");
        return response.data;
    } catch (error) {
        throw error
    }
}

export default fetchLotteries;
