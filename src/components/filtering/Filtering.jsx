import "./Filtering.css"
import { IoShareSocialOutline } from "react-icons/io5";

const Filtering = () => {


    

    return (
        <section>
                <div className="upperFilter">
                    <div className="searchFliter">
                        <span>Search</span>
                        <select name="" id="">
                            <option value="">Stories</option>
                            <option value="">All</option>
                            <option value="">Comments</option>
                            <option value="">Ask HN</option>
                            <option value="">Show HN</option>
                            <option value="">Launch HN</option>
                            <option value="">jobs</option>
                            <option value="">Polls</option>
                        </select>
                    </div>

                    <div className="searchFliter">
                        <span>by</span> 
                        <select name="" id="">
                            <option value="">Popularity</option>
                            <option value="">Date</option>
                        </select>
                    </div>


                    <div className="searchFliter">
                        <span>for</span>
                        <select name="" id="">
                            <option value="">All time</option>
                            <option value="">Last 24h</option>
                            <option value="">Past Week</option>
                            <option value="">Past Month</option>
                            <option value="">Past Year</option>
                            <option value="">Custom range</option>
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