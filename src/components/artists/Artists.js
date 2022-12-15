import React from 'react';
import {Link} from "react-router-dom";

const Artists = ({profile}) => {
    return (
        <ul className={" d-flex p-2"}
            style={{flexWrap: "nowrap", overflowY: "hidden",listStyleType:"none"}}>
            {
                profile.map((item)=>{
                    return(
                        <li style={{minWidth: "300px"}} className={'m-2'}>
                            <div className="card " style={{display: ' inline-block', float: 'none', minWidth: '100px'}}>
                                <img className="card-img-top" style={{height: '50vh'}} src={item.image} alt="Card image"/>
                                <div className="card-img-overlay d-flex flex-column justify-content-end ">
                                    <h4 className="card-title bg-light text-dark opacity-50">{item.name}</h4>
                                    <p className="card-text  bg-light text-dark opacity-50">Some example text.</p>
                                    <Link to={'/artist'} state={item} className="btn btn-primary">موزیک ها</Link>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>

    );
};

export default Artists;