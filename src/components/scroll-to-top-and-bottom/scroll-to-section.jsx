import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First card",
      style: {
        width: "100%",
        height: "600px",
        margin: "20px",
        background: "red",
      },
    },
    {
      label: "Second card",
      style: {
        width: "100%",
        height: "600px",
        margin: "20px",
        background: "green",
      },
    },
    {
      label: "Third card",
      style: {
        width: "100%",
        height: "600px",
        margin: "20px",
        background: "yellow",
      },
    },
    {
      label: "Fourth card",
      style: {
        width: "100%",
        height: "600px",
        margin: "20px",
        background: "purple",
      },
    },
    {
      label: "Firth card",
      style: {
        width: "100%",
        height: "600px",
        margin: "20px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection(){
    let pos=ref.current.getBoundingClientRect().top;
    window.scrollTo({
        top:pos,
        behavior:'smooth'
    })
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((item, index) => (
        <div style={item.style} ref={index===3?ref:null}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}
