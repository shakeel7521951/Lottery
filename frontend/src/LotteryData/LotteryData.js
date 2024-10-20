import axios from 'axios';

const fetchLotteries = async () => {
    try {
        const response = await axios.get("http://localhost:6005/get-lottery-data");
        return response.data;
    } catch (error) {
        throw error
    }
}

export default fetchLotteries;