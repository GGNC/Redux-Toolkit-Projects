import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices/carListSlice";

function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state)=>{
        return state.carList.searchTerm;
    });
    const handkeSearchTermChange = (event)=>{
        dispatch(changeSearchTerm(event.target.value));
    }
    return(
        <div className="list-header">
            <h3 className="title is-3"></h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input className="input" value={searchTerm} onChange={handkeSearchTermChange}/>
            </div>
        </div>
    )
}
export default CarSearch;