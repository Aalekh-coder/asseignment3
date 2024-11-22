// import "./Content.css"

// const Content = ({data}) => {
//   return (
//     <div className="content">
//       {data?.map((i) => (
//         <div className="content-box" key={i.objectID}>
//           {i.title}
//           <a href={i.url}>({i.url})</a>
//           <div className="tag">{i._tags.map((t) => <span key={t}>{t} | {" "}</span>)}</div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Content



import "./Content.css";

const Content = ({ data }) => {
  return (
    <div className="content">
      {data?.map((i) => (
        <div className="content-box" key={i.objectID}>
          {/* Use dangerouslySetInnerHTML to render highlighted titles and URLs */}
          <div dangerouslySetInnerHTML={{ __html: i.title || "" }}></div>
          <a href={i.url} dangerouslySetInnerHTML={{ __html: i.url || "" }}></a>
          <div className="tag">
            {i._tags.map((t) => (
              <span key={t}>{t} | </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
