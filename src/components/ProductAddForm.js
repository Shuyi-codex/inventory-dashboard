import { useState } from "react";

function ProductAddForm({productList, setStockList}) {
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      addNewProduct();
      setProductName("");
      setQuantity("");
      setPrice("");
      setCategory("")
    }

    const newProduct = {
      productName: productName,
      quantity: Number(quantity),
      price: Number(price),
      category: category,
    };


    function addNewProduct() {
      setStockList([...productList, newProduct]);
    }

    return (
      <section className="form-section">
        <h2 className="section-title">Add New Product</h2>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Price</label>
            <input
              type="number"
              step="0.01"
              className="form-input"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="accessories">Accessories</option>
              <option value="home-goods">Home Goods</option>
            </select>
          </div>
          <div>
            <button className="add-btn">Add Product</button>
          </div>
        </form>
        {/* <button className="add-btn">Add Product</button> */}
      </section>
    );
}

export default ProductAddForm;