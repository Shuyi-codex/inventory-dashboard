import ProductAddForm from "./ProductAddForm";
import ProductTable from "./ProductTable";
import Summary from "./Summary";
import LowStockAlert from "./LowStockAlert";

function Main({ productList, totalInventoryValue, setStockList }) {
  return (
    <main className="main-content">
      <h1 className="page-title">Inventory Dashboard</h1>

      <ProductAddForm productList={productList} setStockList={setStockList}/>

      <ProductTable productList={productList} />

      <Summary totalInventoryValue={totalInventoryValue} />

      <LowStockAlert productList={productList} />
    </main>
  );
}

export default Main;
