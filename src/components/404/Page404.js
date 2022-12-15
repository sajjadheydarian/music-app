import React from 'react';
import {Link} from "react-router-dom";
import {useStyles} from "./Style";
import classNames from "classnames";


const Page404 = () => {
    const classes=useStyles()
    return (
        <div className={classNames(classes.root,"d-flex justify-content-center flex-column align-items-center")} >
            <h1>این ادرس پیدا نشد.خطای 404</h1>
            <Link to={'/'} >صفحه اصلی</Link>

        </div>
    );
};

export default Page404;