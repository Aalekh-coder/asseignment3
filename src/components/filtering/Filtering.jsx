import "./Filtering.css"
import { IoShareSocialOutline } from "react-icons/io5";

const Filtering = ({ filter, pop,
    date }) => {



    return (
        <section>
            <div className="upperFilter">
                <div className="searchFliter">
                    <span>Search</span>
                    <select onChange={(e) => filter(e.target.value)}>
                        <option value="story" className="option">Stories</option>
                        <option value="comment" className="option">Comments</option>
                        <option value="ask_hn" className="option">Ask HN</option>
                        <option value="show_hn" className="option">Show HN</option>
                        <option value="job" className="option">Jobs</option>
                        <option value="poll" className="option">Poll</option>

                    </select>
                </div>



                <div className="searchFliter">
                    <span>by</span>
                    <select onChange={(e) => pop(e.target.value)}>
                        <option value="Popularity">Popularity</option>
                        <option value="Date">Date</option>
                    </select>
                </div>


                <div className="searchFliter">
                    <span>for</span>
                    <select onChange={(e)=>date(e.target.value)}>
                        <option value="All time">All time</option>
                        <option value="Last 24h">Last 24h</option>
                        <option value="Past Week">Past Week</option>
                        <option value="Past Month">Past Month</option>
                        <option value="Past Year">Past Year</option>
                        <option value="Custom range">Custom range</option>
                    </select>
                </div>

            </div>

            <div className="resultshatre">
                <div>38,576,525 results (0.001 second)</div>
                <div className="icons"><IoShareSocialOutline size={17} /></div>
            </div>
        </section>
    )
}

export default Filtering