import { useEffect, useState } from "react";
import User from "./user";
import './styles.css'
export default function GithubProfileFinder() {
  const [username, setUserName] = useState("mmzhhhh");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('')
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  function handleSubmit() {
    fetchGithubUserData();
  }

  if(loading){
    return <h1>Loading data ! Please wait</h1>
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Serach</button>
      </div>
      {userData !== null ? <User user={userData}/> : null}
    </div>
  );
}
