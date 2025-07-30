function LowStockAlert({ productList }) {
  const lowStocks = productList.filter((product) => product.quantity < 200);
  const sortedLowStocks = lowStocks
    .slice()
    .sort((a, b) => a.quantity - b.quantity);

  return (
    <section className="alerts-section">
      <div className="table-header">
        <h2 className="section-title">Low Stock Alerts</h2>
      </div>

      <table className="alerts-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {sortedLowStocks.map((stock) => (
            <tr key={stock.productName}>
              <td>{stock.productName}</td>
              <td className="low-stock">{stock.quantity}</td>
              <td>
                <span className="category-tag">{stock.category}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default LowStockAlert;
