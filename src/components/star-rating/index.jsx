//导入react-icons包
//npm i react-icons
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'

export default function StarRating({ noOfStars = 6 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //处理点击事件
  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex)
  }

  //处理悬浮事件
  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  //处理离开事件
  function handleMouseLeave() {
    setHover(rating)
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        //设置为从1开始迭代
        index += 1;
        return (
          <FaStar
            className={index<=(hover||rating)?"active":"inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
}
