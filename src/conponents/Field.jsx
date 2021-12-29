import React from "react";

const Field = ({fields}) => {
    return(
        <div className="field">
            {
                fields.map((row) => {
                    return row.map((column,index) => {
                        return <div className={`dots ${column}`} key={index}></div>
                    })
                })
            }
        </div>
    );
};

export default Field;