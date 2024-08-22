import { useRef } from "react";
import useFetch from "../use-fetch/index";
export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const topRef=useRef(null);
  const bottomRef=useRef(null);

  if(error){
    return <h1>Error occured ! Please try again...</h1>
  }

  if(pending){
    return <h1>Loading ! Please wait...</h1>
  }

  
  function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({behavior:"smooth"})
  }

  function handleScrollToTop(){
    topRef.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1>Scroll To Top And Bottom Feature</h1>
        <h3>This is the top section</h3>
        <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
        <div ref={topRef}></div>
        <ul style={{listStyle:"none"}}>
            {data&&data.products&&data.products.length?(data.products.map((item)=><li>{item.title}</li>)):null}
        </ul>
        <button onClick={handleScrollToTop}>Scroll To Top</button>
        <div ref={bottomRef}></div>
        <h3>This is the bottom of the page</h3>
    </div>
  )
}
