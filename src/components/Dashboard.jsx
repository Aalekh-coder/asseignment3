// import Header from "./header/Header"
// import Footer from "./footer/Footer"
// import Filtering from "./filtering/Filtering"
// import Pagination from "./pagination/Pagination"
// import Content from "./content/Content"
// import { useEffect, useState } from "react"
// import { frontPage, paginationPage, tagFilterPage,searchPage } from "../api/GetApi"


// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(null);
//   const [searchInput, setSearchInput] = useState("");
 
  
//   const getPagination = async (pageNo) => {
//     const res = await paginationPage(pageNo);
//     setData(res.data.hits)
//   }
//   const addHandlePage = () => {
//     setPage(page+1)
//   }
//   const subHandlePage = () => {
//     if (page >= 2) {
//       setPage(page-1)
//     }
//   }
//   const currentPage = (currPage) => {
//     setPage(Number(currPage.target.innerText));
//   }
//   const getfrontPageData = async () => {
//         const res = await frontPage();
//         setData(res.data.hits)
//   }
  

//   // filtering
//   const handleSeachTag = async (value) => {
//     const res = await tagFilterPage(value);
//     setData(res.data.hits)
//   }

//   // search page
//   const handleSearchPage = async(input) => {
//     const res = await searchPage(input)
//     setData(res.data.hits)
//   }
  
  


//   useEffect(() => {
//     getPagination(page)
//     getfrontPageData();
//     handleSearchPage(searchInput);
    
//   }, [page,searchInput])
  

//   return (
//     <div>
//       <Header searchInput={searchInput} setSearchInput={setSearchInput} />
//       <Filtering filter={handleSeachTag}/>
//       <Content data={data} />
//       <Pagination addHandlePage={addHandlePage} subHandlePage={subHandlePage} currentPage={currentPage} />
//       <Footer />
//     </div>
//   )
// }

// export default Dashboard














import Header from "./header/Header";
import Footer from "./footer/Footer";
import Filtering from "./filtering/Filtering";
import Pagination from "./pagination/Pagination";
import Content from "./content/Content";
import { useEffect, useState } from "react";
import { frontPage, paginationPage, tagFilterPage, searchPage } from "../api/GetApi";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [highlightedData, setHighlightedData] = useState([]); // To store highlighted content

  // Fetch data based on pagination
  const getPagination = async (pageNo) => {
    try {
      const res = await paginationPage(pageNo);
      setData(res.data.hits);
    } catch (error) {
      console.error("Error fetching paginated data:", error);
    }
  };

  // Fetch front page data
  const getFrontPageData = async () => {
    try {
      const res = await frontPage();
      setData(res.data.hits);
    } catch (error) {
      console.error("Error fetching front page data:", error);
    }
  };

  // Filter data by tag
  const handleSearchTag = async (value) => {
    try {
      const res = await tagFilterPage(value);
      setData(res.data.hits);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  // Search data
  const handleSearchPage = async (input) => {
    if (!input) {
      // Reset to front page data if search is empty
      getFrontPageData();
      return;
    }

    try {
      const res = await searchPage(input);
      setData(res.data.hits);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  // Highlighting function
  const highlightSearchTerm = (data, term) => {
    if (!term) return data;

    return data.map((item) => {
      const regex = new RegExp(`(${term})`, "gi"); // Case-insensitive regex for matching the term
      return {
        ...item,
        title: item.title ? item.title.replace(regex, "<mark>$1</mark>") : "",
        url: item.url ? item.url.replace(regex, "<mark>$1</mark>") : "",
        author: item.author ? item.author.replace(regex, "<mark>$1</mark>") : "",
      };
    });
  };

  // Pagination controls
  const addHandlePage = () => setPage((prev) => prev + 1);
  const subHandlePage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));
  const currentPage = (currPage) => setPage(Number(currPage.target.innerText));

  // Update data with highlighting whenever searchInput or data changes
  useEffect(() => {
    const highlighted = highlightSearchTerm(data, searchInput);
    setHighlightedData(highlighted);
  }, [data, searchInput]);

  // Fetch data on page or searchInput change
  useEffect(() => {
    if (searchInput) {
      handleSearchPage(searchInput);
    } else if (page) {
      getPagination(page);
    }
  }, [page, searchInput]);

  return (
    <div>
      {/* Pass searchInput and setSearchInput to Header */}
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Filtering filter={handleSearchTag} />
      {/* Pass highlighted data instead of raw data */}
      <Content data={highlightedData} />
      <Pagination
        addHandlePage={addHandlePage}
        subHandlePage={subHandlePage}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
};

export default Dashboard;
