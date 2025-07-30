function Summary({ totalInventoryValue }) {

  return (
    <section className="summary-section">
      <h2 className="section-title">Summary</h2>
      <div className="summary-label">Total Inventory Value</div>
      <div className="summary-value">${totalInventoryValue}</div>
    </section>
  );
}

export default Summary;
