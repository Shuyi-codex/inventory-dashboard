function ProductAddForm() {
    return (
      <section className="form-section">
        <h2 className="section-title">Add New Product</h2>
        <form className="form-grid">
          <div className="form-group">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter product name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter quantity"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Price</label>
            <input
              type="number"
              step="0.01"
              className="form-input"
              placeholder="Enter price"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select className="form-select">
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