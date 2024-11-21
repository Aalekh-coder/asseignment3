// import "./Content.css"
// import { frontPage } from "../../api/GetApi"
// import { useEffect, useState } from "react"
// const Content = () => {
//   const [data, setData] = useState([]);
//   const getfrontPageData = async () => {
//     const res = await frontPage();
//     setData(res.data.hits)
//   }
//   useEffect(() => {
//     getfrontPageData();
//   }, [])
//   return (

//     <div className="content">
//       {data.map((i) => (
//         <div className="content-box" key={i.objectID}>
//           {i.title}
//           <a href="">({i.url})</a>
//           <div className="tag">{i._tags.map((t) => <span key={t}>{t} | {" "}</span>)}</div>
//         </div>
//       ))}

//     </div>
//   )
// }
// export default Content




import "./Content.css"

const Content = ({data}) => {
  




  return (

    <div className="content">
      {data?.map((i) => (
        <div className="content-box" key={i.objectID}>
          {i.title}
          <a href={i.url}>({i.url})</a>
          <div className="tag">{i._tags.map((t) => <span key={t}>{t} | {" "}</span>)}</div>
        </div>
      ))}

    </div>
  )
}

export default Content