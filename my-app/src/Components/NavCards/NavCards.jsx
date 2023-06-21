import "./NavCards.css"
import pic from "./logo.png"


function NavCards() {
    return (
        <div className="cardContainer">
            <div className="card1">
                <div className="card-header"><h3> Face </h3> </div>
                <img src = {pic} className="card-image"></img>
            </div>

            <div className="card1">
                <div className="card-header"><h3> Lips </h3> </div>
                <img src = {pic} className="card-image"></img>
            </div>

            <div className="card1">
                <div className="card-header"><h3> Eyes </h3> </div>
                <img src = {pic} className="card-image"></img>
            </div>
        </div>
    );
}

export default NavCards