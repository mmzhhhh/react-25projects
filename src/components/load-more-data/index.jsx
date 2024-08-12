import { useEffect, useState } from "react";
import "./styles.css";
export default function LoadMoreData() {
  //数据源API：https://dummyjson.com/products?limit=20&skip=10
  //limit表示最多返回x个
  //skip表示跳过y个产品，从y+1开始返回产品

  //跟踪数据加载状态的布尔值
  const [loading, setLoading] = useState(false);
  //跟踪产品数组状态的数组
  const [products, setProducts] = useState([]);
  //跟踪已加载产品计数器状态的值
  const [count, setCount] = useState(0);
  // 跟踪按钮在刷新次数达到上限后的禁用状态
  const [disableButton, setDisableButton] = useState(false);

  //获取产品
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        //确保每次加载的新数据不会覆盖旧数据，而是被正确地追加到已有的数据中。
        setProducts(()=>[...products, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[count])

  useEffect(()=>{
    if(products&&products.length===100) setDisableButton(true)
  })
  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Load More Products
        </button>
        {disableButton?<p>You have reached to 100 products</p>:null}
      </div>
    </div>
  );
}
