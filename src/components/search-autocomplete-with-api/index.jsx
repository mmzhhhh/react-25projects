import { useEffect, useState } from "react";
import Suggestions from "./suggesstions";

export default function SearchAutoComplete() {
  // API链接，用于获取用户数据
  const API_URL = "https://dummyjson.com/users";

  // 存储用户数据的状态
  const [users, setUsers] = useState([]);

  // 加载状态的钩子，用于显示加载中提示
  const [loading, setLoading] = useState(false);

  // 错误状态的钩子，用于处理并显示错误信息
  const [error, setError] = useState(null);

  // 存储搜索框输入的状态
  const [searchParam, setSearchParam] = useState("");

  // 控制搜索结果下拉框的显示与隐藏
  const [showDropdown, setShowDropdown] = useState(false);

  // 存储过滤后的用户结果
  const [filteredUsers, setFilteredUsers] = useState([]);

  // 处理搜索框输入的变化
  function handleChange(event) {
    // 将用户输入的值转换为小写并更新搜索参数状态
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    // 如果输入长度大于0，进行用户数据的过滤
    if (query.length > 0) {
      const filteredData =
        users.length > 0
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

      // 更新过滤后的用户数据和下拉框显示状态
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      // 如果输入为空，隐藏下拉框
      setShowDropdown(false);
    }
  }

  // 处理用户点击搜索建议的事件
  function handleClick(event) {
    // 隐藏下拉框
    setShowDropdown(false);
    // 更新搜索框的值为用户点击的建议
    setSearchParam(event.target.innerText);
    // 清空过滤后的用户数据
    setFilteredUsers([]);
  }

  // 异步获取用户数据的函数
  async function fetchListOfUsers() {
    try {
      setLoading(true); // 启动加载状态
      const response = await fetch(API_URL); // 发送请求获取用户数据
      const data = await response.json(); // 将响应数据解析为JSON格式
      console.log(data);

      // 如果数据有效，更新用户状态并关闭加载状态
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null); // 清空错误状态
      }
    } catch (error) {
      // 如果请求出错，记录错误并关闭加载状态
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  // 在组件挂载时获取用户数据
  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        // 如果数据正在加载，显示加载提示
        <h1>Loading Data! Please wait</h1>
      ) : (
        // 显示搜索输入框并绑定事件处理函数
        <input
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="Search Users here"
          onChange={handleChange}
        />
      )}
      {/* 根据状态显示搜索建议下拉框 */}
      {showDropdown && (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
}
