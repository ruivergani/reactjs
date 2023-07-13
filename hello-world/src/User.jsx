/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import UserContext from "./context/UserContext";

export default function User(){
    const {count} = useContext(UserContext);
    return(
        <>
            <div>{count}</div>
        </>
    );
}