import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        Title: String,
        Link:  String,
        Category: String,
        Image:  String,
        ImageP:  String,
        Price:  Number,
        CInStock: Number,
        Brand:  String,
        Rate:  Number,
        NbrView :  Number,
        Ingredients:  {
            type: String,
            max: 2000,
          },
        Description:  {
            type: String,
            max: 2000,
          },
    },
    {timestamps:true}
)

 const   Product = mongoose.model('Weed', productSchema);
 export default Product;