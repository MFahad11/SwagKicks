import productModel from "../models/product.js";
class productController{
    static products= async(req,res)=>{
        const data=await productModel.find()
        // console.log(data)
        res.send(data)
    }
    static product= async(req,res)=>{
        const product=await productModel.findById(req.params.id)
        res.send(product)
    }
    static addProduct= async(req,res)=>{
        // console.log(req.body)
        const{name,mainImage,gridImage,brand,color,stock,price}=req.body.data
        
        const product=await productModel.findOne({name:name})
        if(product){
            
            res.send({"status":"failed","message":"already exist"})
        }
        else{
                    try {
                        const doc=new productModel({
                            name:name,
                            mainImage:mainImage,
                            gridImage:gridImage,
                            brand:brand,
                            color:color,
                            stock:stock,
                            price:price
                        })
                        await doc.save()
                        const saved_product=await productModel.findOne({name:name})
                        res.send(saved_product)
                    } catch (error) {res.send(error);console.log(error)}
        }
    }
    static updateProduct=async(req,res)=>{
        const {data}=req.body
        try {
            const product=await productModel.findOne({_id:data.id})
            product.name=data.name,
            product.brand=data.brand,
            product.color=data.color,
            product.stock=data.stock,
            product.price=data.price,
            product.gridImage=data.gridImage,
            product.mainImage=data.mainImage
            await product.save()
            res.send("Updated")
        } catch (error) {
                res.send(error)            
        }
    }
    static deleteProduct=async(req,res)=>{
        const id=req.body.id
        try {
            await productModel.findOneAndDelete({_id:id})
            res.send("Product deleted")
        } catch (error) {
            res.send(error)
        }
    }
}
export default productController