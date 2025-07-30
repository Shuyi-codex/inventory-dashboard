function ProductTable({ productList }) {

  return (
    <section className="table-section">
      <div className="table-header">
        <h2 className="section-title">Product List</h2>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Value</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.productName}>
              <td>{product.productName}</td>
              <td className="quantity">{product.quantity}</td>
              <td className="price">{product.price}</td>
              <td className="total-value">
                {product.totalValue}
              </td>
              <td>
                <span className="category-tag">{product.category}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ProductTable;
