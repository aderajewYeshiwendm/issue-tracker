import Link from "next/link";
import ProductList from "./components/productList";
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href={"/users"}>users</Link>
      <ProductList />

    </main>
    
  );
}
