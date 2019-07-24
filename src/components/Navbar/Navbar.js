import React from "react";
import "./style.css";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Clicky Game <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        {/* <NavMessage score={props.score} topScore={props.topScore} /> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Score: {props.score} | Top Score: {props.topScore} </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
