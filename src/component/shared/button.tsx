import React from "react";
import "./../../sass/shared/_button.scss";


export default function ButtonComponent(props: any){
    return(
        <React.Fragment>
            <button className="btn-cta">
                {props.label}
                <img src={props.icon} alt="Icon" />
            </button>
        </React.Fragment>

    )
}