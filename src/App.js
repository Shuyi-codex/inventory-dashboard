import Header from "./components/Header";
import Main from "./components/Main";


const productList = [
  {
    productName: "Wireless Mouse",
    quantity: 150,
    price: 25,
    category: "Electronic"
  },
  {
    productName: "Cotton T-Shirts",
    quantity: 200,
    price: 15,
    category: "Clothing"
  },
  {
    productName: "Organic Apples",
    quantity: 300,
    price: 1,
    category: "Food"
  },
  {
    productName: "Leather Wallets",
    quantity: 100,
    price: 40,
    category: "Accessories"
  },
  {
    productName: "Ceramic Mugs",
    quantity: 120,
    price: 8,
    category: "Home Goods"
  }
];

function App() {
  const productWithTotalValue = productList.map(product => ({...product, totalValue: product.price * product.quantity}));
  const totalInventory = productWithTotalValue.reduce((sum, product) => sum + product.totalValue, 0);

  console.log(totalInventory);
  return (
    <>
      <Header />
      <Main productList={productWithTotalValue} totalInventoryValue={totalInventory} />
    </>
  );
}

export default App;
