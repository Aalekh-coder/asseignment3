import Header from "./header/Header"
import Footer from "./footer/Footer"
import Filtering from "./filtering/Filtering"
import Pagination from "./pagination/Pagination"
import Content from "./content/Content"
import { useEffect, useState } from "react"
import { frontPage, paginationPage, tagFilterPage } from "../api/GetApi"


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(null);
 
  
  const getPagination = async (pageNo) => {
    const res = await paginationPage(pageNo);
    setData(res.data.hits)
  }
  const addHandlePage = () => {
    setPage(page+1)
  }
  const subHandlePage = () => {
    if (page >= 2) {
      setPage(page-1)
    }
  }
  const currentPage = (currPage) => {
    setPage(Number(currPage.target.innerText));
  } 
  const getfrontPageData = async () => {
        const res = await frontPage();
        setData(res.data.hits)
  }
  

  // filtering 
  const handleSeachTag = async (value) => {
    const res = await tagFilterPage(value);
    setData(res.data.hits)

  }
  
  const handleByPopulity = (value) => {
    console.log(value)
  }

  const handleByLatest = (value) => {
    console.log(value)
  }

  // const getFiltering = async (filter) => {
  //   const res = await tagFilterPage(filter);
  //   console.log(res)
  // }


  useEffect(() => {
    getPagination(page)
    getfrontPageData()
    
  }, [page])
  

  return (
    <div>
      <Header />
      <Filtering filter={handleSeachTag} pop={handleByPopulity} date={handleByLatest}/>
      <Content data={data} />
      <Pagination addHandlePage={addHandlePage} subHandlePage={subHandlePage} currentPage={currentPage} />
      <Footer />
    </div>
  )
}

export default Dashboard