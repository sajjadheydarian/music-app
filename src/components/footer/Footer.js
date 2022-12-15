import React from 'react';
import {Email, Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@material-ui/icons";

const Footer = () => {
    return (
        <div className=" text-center text-white " style={{background: "#2F8F9D"}}>
            <div className="container p-4">
                <div className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                        <Facebook/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                        <Twitter/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                        <Email/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                        <Instagram/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                        <LinkedIn/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                        <GitHub/>
                    </a>
                </div>

                <div className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>برای دریافت اخبار موسیقی:</strong>
                                </p>
                            </div>

                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" className="form-control"/>
                                    <label className="form-label" htmlFor="form5Example21">آدرس ایمیل</label>
                                </div>
                            </div>

                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                    عضو شوید
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mb-4">
                    <p>
                        خود این شرکت یک شرکت بسیار موفق است. بین آنها فرق است، او به دنبال جلب رضایت است، زیرا گزینه
                        مناسب این است که چون او را مفسد بزرگ اینها می نامند، به دنبال لذتی برود.
                    </p>
                </div>

                <div className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h5 className="text-uppercase">Links</h5>

                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h5 className="text-uppercase">Links</h5>

                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h5 className="text-uppercase">Links</h5>

                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h5 className="text-uppercase">Links</h5>

                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;