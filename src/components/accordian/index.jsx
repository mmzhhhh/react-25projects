//single selection 单选项
//multiple selection 多选项

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  //获取内容
  const [selected, setSelected] = useState(null);
  //转换单、多重选项
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  //存储多重选项
  const [multiple, setMultiple] = useState([]);

  //处理单项选项
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  //处理多项选项
  function handleMultiSelection(getCurrentId) {
    console.log(getCurrentId);
    //复制原有的多项数组
    let cpyMutiple = [...multiple];
    //寻找点击的选项id
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    //无就添加，有就删除
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    //替换原数组
    setMultiple(cpyMutiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>Not data Found!</div>
        )}
      </div>
    </div>
  );
}
