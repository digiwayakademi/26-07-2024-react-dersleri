import "./ProductForm.css";
import { useState } from "react";


const ProductForm = (props) => {

    // const [productTitle, setProductTitle] = useState("");
    // const [productPrice, setProductPrice] = useState("");
    // const [imageUrl, setImageUrl] = useState("");
    const [productData, setProductData] = useState({
        productTitle: "",
        productPrice: "",
        imageUrl: ""
    });

    

    const titleChangeHandler = (event) => {
        //setProductTitle(event.target.value);   "1.yol"  
        // setProductData({                        
        //     ...productData,
        //     productTitle: event.target.value
        // })                                    "2.yol"  
        //"3.yol  | 2. yolun güncel hali previous state diye konu başlığı olarak geçer."
        setProductData((prevState)=> {
            return {...prevState, productTitle: event.target.value}
        })
    };

    const priceChangeHandler = (event) => {
        //setProductPrice(event.target.value);   
        //    setProductData({
        //         ...productData,
        //         productPrice: event.target.value
        //    })
        setProductData((prevState)=> {
            return {...prevState, productPrice: event.target.value}
        })
    };

    const imageChangeHandler = (event) => {
        //setImageUrl(event.target.value);   
        // setProductData({
        //     ...productData,
        //     imageUrl: event.target.value
        // })   
        setProductData((prevState)=> {
            return {...prevState, imageUrl: event.target.value}
        })     
    };

    const submitHandler = (event) => {
        event.preventDefault();        
        const newProductData = {
           id: props.products.length + 1, 
           productTitle: productData.productTitle,
           productPrice: productData.productPrice,
           imageUrl: productData.imageUrl           
        };

       // props.setProducts((prevState) => [newProductData,...prevState]);
       //props.setProducts([newProductData,...props.products]);   
       props.onSaveProduct(newProductData);   

        console.log(newProductData);
        
        setProductData({
            productPrice: "",
            productTitle: "",
            imageUrl: ""
        })
    

    }

     
   // console.log(productData);

    return (
        <form className="product-form" onSubmit={submitHandler}>
           <div className="product-form-input">
                <label>Ürün Adı: {productData.productTitle} </label>
                <input type="text" placeholder="Ürün Adı Giriniz..." value={productData.productTitle} onChange={titleChangeHandler} />
           </div>
           <div className="product-form-input">
                <label>Ürün Fiyatı: {productData.productPrice} </label>
                <input type="number" placeholder="Ürün Fiyatı Giriniz..." value={productData.productPrice} onChange={priceChangeHandler} />
           </div>
           <div className="product-form-input">
                <label>Ürün Görseli: {productData.imageUrl}</label>
                <input type="text" placeholder="Ürün Görseli Giriniz..." value={productData.imageUrl} onChange={imageChangeHandler}/>
           </div>
           <button className="product-form-button">Ürün Ekle</button>
           <button onClick={() => props.setIsOpen(false)} className="product-form-button" type="button">Vazgeç</button>
        </form>
    );
};

export default ProductForm;