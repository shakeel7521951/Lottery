const Cart = require('../schema/cartSchema');

const CartData = async (req, res) => {
    try {
        const cartItems = await Cart.find(); 

        return res.status(200).json(cartItems); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = CartData;
