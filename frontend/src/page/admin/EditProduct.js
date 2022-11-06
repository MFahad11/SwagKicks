import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails, updateProduct } from "../../redux/action/productAction";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
const EditProduct = () => {
    const dispatch=useDispatch()
    const [name,setName]=useState("")
    const [color,setColor]=useState("")
    const [stock,setStock]=useState("")
    const [price,setPrice]=useState("")
    const [brand,setBrand]=useState("")
    const [gridImage,setGridImage]=useState("")
    const [mainImage,setMainImage]=useState("")
    const {id}=useParams()
    const{loading,error,product}=useSelector(state=>state.productDetails)
    const{load,err,success}=useSelector(state=>state.updateProduct)
    // console.log(product)
    useEffect(()=>{
        dispatch(listProductDetails(id))
        setName(product.name)
        setStock(product.stock)
        setPrice(product.price)
        setBrand(product.brand)
        setColor(product.color)
        setGridImage(product.gridImage)
        setMainImage(product.mainImage)
        // console.log(product.name)
    },[dispatch,product._id])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data_obj=new FormData(e.currentTarget);
        const data={
            id:id,
          name:data_obj.get('name'),
          stock:data_obj.get('stock'),
          price:data_obj.get('price'),
          color:data_obj.get('color'),
          brand:data_obj.get('brand'),
          gridImage:data_obj.get('gridImage'),
          mainImage:data_obj.get('mainImage'),
    
        }
        dispatch(updateProduct(data))
    }
  return (<>{loading && <Loader/>}{error && <Alert variant={error}/>}
{product!=={}?<form class={`row g-3`} onSubmit={handleSubmit}>
    <h2>Edit Product</h2>
  <div class="col-md-6">
  <label for="inputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputName" name="name" value={name || " "} onChange={(e)=>{setName(e.currentTarget.value)}} placeholder="Product name....."/>
  </div>
  <div class="col-md-4">
  <label for="inputBrand" class="form-label">Brand</label>
    <input type="text" class="form-control" id="inputBrand" name="brand" value={brand || " "} onChange={(e)=>{setBrand(e.currentTarget.value)}} placeholder="Brand name"/>
  </div>

  <div class="col-md-4">
  <label for="inputColor" class="form-label">Color</label>
    <input type="text" class="form-control" id="inputColor" name="color" value={color || " "} onChange={(e)=>{setColor(e.currentTarget.value)}} placeholder="Color...."/>
  </div>
  <div class="col-md-3">
  <label for="inputStock" class="form-label">Stock</label>
    <input type="text" class="form-control" id="inputStock" name='stock' value={stock || " "} onChange={(e)=>{setStock(e.currentTarget.value)}} placeholder="Quantitiy....."/>
  </div>
  <div class="col-md-3">
  <label for="inputPrice" class="form-label">Price</label>
    <input type="text" class="form-control" id="inputPrice" name="price" value={price || " "} onChange={(e)=>{setPrice(e.currentTarget.value)}} placeholder="Price..."/>
  </div>
  <div class="col-md-12">
  <label for="inputGridImage" class="form-label">Grid image url</label>
    <input type="text" class="form-control" id="inputGridImage" name="gridImage" value={gridImage || " "} onChange={(e)=>{setGridImage(e.currentTarget.value)}} placeholder="Grid image url..."/>
  </div>
  <div class="col-md-12">
  <label for="inputmainImage" class="form-label">Main image url</label>
    <input type="text" class="form-control" id="inputMainImage" name="mainImage" value={mainImage || " "} onChange={(e)=>{setMainImage(e.currentTarget.value)}} placeholder="Main image url....."/>
  </div>
  <div class="col-md-12">
    <button type="submit" class="btn">Update</button>
  </div>
</form>:"hello"}</>
 ) 
}

export default EditProduct
