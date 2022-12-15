import Home from "./components/home/Home";
import React from "react";
import FullPage from "./components/fullPage/fullPage";
import Layout from "./components/layout/Layout";
import {HashRouter, Route,Routes} from "react-router-dom";
import Page404 from "./components/404/Page404";
import ProfileArtist from "./components/ProfileArtist/ProfileArtist";

function App() {
    return (
        <div>
            <HashRouter >
                <Layout>
                    <Routes>
                        <Route exact path={"/posts"} element={<FullPage/>}/>
                        <Route exact path={"/artist"} element={<ProfileArtist/>}/>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route path={"*"}  element={<Page404/>}/>
                    </Routes>
                </Layout>
            </HashRouter>
        </div>
    )
};

export default App;
