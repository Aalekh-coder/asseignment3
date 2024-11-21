import { CiSearch } from "react-icons/ci"
import "./Header.css"
import { useState } from "react";
// import { searchPage } from "../../api/GetApi";
const Header = () => {
  // const [data, setData] = useState([]);
  const [input, setInput] = useState("")

  // const getfrontPageData = async (input) => {
  //   const res = await searchPage(input);
  //   setData(res.data.hits[0])
  // }
  // console.log(data)
  // useEffect(() => {
  //   getfrontPageData();
  // }, [])

  const savedUsername = localStorage.getItem("username");

  return (
    <header>
      <div className="logoBlack">
        <span>
          <img src="https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png" className="logo" alt="logo" />
        </span>
        {
          savedUsername ? <span className="logoText">{savedUsername}</span>  : <span className="logoText">
          Search <br />
          Hacker News
        </span>
        }
       
      </div>

      <div className="searchbar">
        <CiSearch className="search-icon" />
        <input type="text" placeholder="Search stories by title, url or author" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <div className="poweredBy">
          <span>Search by</span>
          <a href="https://www.algolia.com/developers/?utm_source=hackernews&utm_medium=referral" title="Realtime Search Engine" target="_blank">
          <img src="https://hn.algolia.com/public/38a9c67b12016b52267071c530ff2e78.svg" width={100}/>
          </a>
        </div>

      </div>


      <div className="setting">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      </div>
    </header>
  )
}

export default Header