

const AddProduct = (props) => {
  return (
      <button onClick={()=> props.setIsOpen(true)}>Yeni Ürün Ekle</button>
  )
}

export default AddProduct