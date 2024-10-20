const Cart = require('../schema/CartSchema');
const mongoose = require('mongoose');

const deleteCartItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid cart item ID" });
    }

    try {
        const deletedItem = await Cart.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        return res.status(200).json({ message: "Cart item deleted successfully" });
    } catch (error) {
        console.error("Error deleting cart item:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = deleteCartItem;
