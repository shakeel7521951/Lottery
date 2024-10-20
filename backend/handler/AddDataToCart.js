const Cart = require('../schema/cartSchema');
const Lotteries = require("../schema/Lotteries");

const addDataToCart = async (req, res) => {
  try {
    const { _id } = req.params; 
    const findItem = await Lotteries.findById(_id);

    if (findItem) {
      const findInCart = await Cart.findOne({ lotteryId: findItem._id });

      if (!findInCart) {
        const newCartItem = new Cart({
          lotteryId: findItem._id,
          id: findItem._id,
          image: findItem.image,
          countryName: findItem.countryName,
          pirce: findItem.pirce,
          closeTime: findItem.closeTime, 
          price_per_share: findItem.price_per_share 
        });

        await newCartItem.save();
        return res.status(200).json({ message: "Lottery item added to cart", item: newCartItem });
      } else {
        return res.status(400).json({ message: "Lottery item already in cart" });
      }
    } else {
      return res.status(404).json({ message: "Lottery item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = addDataToCart;
