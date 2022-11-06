import React, { useState, useEffect } from "react";
import ProductGrid from "../../components/productgrid/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { listProducts,addProduct, deleteProduct } from "../../redux/action/productAction";
import Loader from "../../components/loader/Loader";
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPen,
    faTrash,
    faPlus,
    faMultiply,

} from "@fortawesome/free-solid-svg-icons";
import Alert from "../../components/alert/Alert";
const ShowProducts = () => {
  const [userData, setUserData] = useState([]);
  const [display,setDisplay]=useState(false)
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  const {load,err,success}=useSelector((state)=>state.addProduct)
  // console.log(products)
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch,success]);
  const handleSubmit=(e)=>{
    e.preventDefault()
    const data_obj=new FormData(e.currentTarget);
    const data={
      name:data_obj.get('name'),
      gridImage:data_obj.get('gridImage'),
      mainImage:data_obj.get('mainImage'),
      brand:data_obj.get('brand'),
      color:data_obj.get('color'),
      stock:data_obj.get('stock'),
      price:data_obj.get('price'),
    }
    dispatch(addProduct(data))
    // console.log("dispatch")
  }
  return (<>
  {load?<Loader/>:err?<Alert variant={error}/>:success?<Alert variant="Product Added"/>:""}
    {loading?<Loader/>:error?<Alert variant={error}/>:<>
    <form class={`row g-3 ${display?"d-block":'d-none'} w-50`} onSubmit={handleSubmit}>
    <h2>Add Product</h2>
  <div class="col-md-6">
    <input type="text" class="form-control" id="inputName" name="name" placeholder="Product name....."/>
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control" id="inputGridImage" name="gridImage" placeholder="Grid image url..."/>
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control" id="inputMainImage" name="mainImage" placeholder="Main image url....."/>
  </div>
  <div class="col-md-6">
  
    <input type="text" class="form-control" id="inputBrand" name="brand" placeholder="Brand name"/>
  </div>
  <div class="col-md-6">
  
    <input type="text" class="form-control" id="inputColor" name="color" placeholder="Color...."/>
  </div>
  <div class="col-md-6">
  
    <input type="text" class="form-control" id="inputStock" name='stock' placeholder="Quantitiy....."/>
  </div>
  <div class="col-md-6">
  
    <input type="text" class="form-control" id="inputPrice" name="price" placeholder="Price..."/>
  </div>
  <div class="col-md-6">
    <button type="submit" class="btn">Add</button>
  </div>
</form>
      <div class="content-2">
        <div class="recent-payments">
          <div class="title">
            <h2>Products</h2><button className="fs-6 ms-auto btn" onClick={()=>{setDisplay(!display)}}>{display?"Close":"New"}<FontAwesomeIcon icon={display?faMultiply:faPlus}/> </button>
          </div>
          <table class="table  align-middle border">
            <thead style={{backgroundColor:"#151515"}}>
              <tr className="text-light">
                <th scope="col">#</th>
                <th>Image</th>
                <th scope="col">Name</th>
                <th scope="col">Brand</th>
                <th scope="col">Color</th>
                <th scope="col">Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
            {products.map(({name,price,color,stock,brand,gridImage,_id},index)=>{
              return <><tr>
                <th scope="row">{index+1}</th>
                <td><img src={gridImage} width="80px" height="80px"/></td>
                <td>{name}</td>
                <td>{brand}</td>
                <td>{color}</td>
                <td>{stock}</td>
                <td>{price}</td>
                <td>{stock>0?"In Stock":"Out of Stock"}</td>
                <td><NavLink to={`/admin/editProduct/${_id}`} className="btn"><FontAwesomeIcon icon={faPen}/></NavLink><NavLink className="btn" onClick={()=>{dispatch(deleteProduct(_id))}}><FontAwesomeIcon icon={faTrash}/></NavLink></td>
              </tr></>})}
            </tbody>
          </table>
        </div>
      </div></>} </>);
};

export default ShowProducts;
