import "./Pagination.css"
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri"

const Pagination = ({addHandlePage,subHandlePage,currentPage}) => {

  const pageNo =[1,2,3,4,5,6,7,8,9]


  return (
    <div className="container">
      <div className="boxes">

        <div className="box" onClick={()=>subHandlePage()}>
          <RiArrowLeftDoubleLine />
        </div>

        {pageNo.map((page) => (
          <div className="box" id="coloredBox" key={page} onClick={(page)=>currentPage(page)}>{page}</div>
      ))}
       
       
        <div className="box" onClick={()=>addHandlePage()}>
          <RiArrowRightDoubleLine />
        </div>
      </div>
    </div>
  )
}

export default Pagination