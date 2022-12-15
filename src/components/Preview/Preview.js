const Preview = () => {
    return (
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner align-items-center justify-content-center ">
                <div className="carousel-item active" style={{
                     width: '100%',
                    height: '600px',
                    backgroundImage: "url('/image/1.jpg')",
                    backgroundSize: 'cover'
                }}>
                    <div className="carousel-caption">
                        <h3>ویلون</h3>
                        <p>We had such a great time in LA!</p>
                    </div>
                </div>
                <div className="carousel-item " style={{
                     width: '100%',
                    height: '600px',
                    backgroundImage: "url('/image/4.jpg')",
                    backgroundSize: '100% 100%'
                }}>
                    <div className="carousel-caption">
                        <h3>اورکس</h3>
                        <p>We had such a great time in LA!</p>
                    </div>
                </div>
                <div className="carousel-item " style={{
                     width: '100%',
                    height: '600px',
                    backgroundImage: "url('/image/5.jpg')",
                    backgroundSize: 'cover'
                }}>
                    <div className="carousel-caption text-dark bg-light opacity-75">
                        <h3>گیتار</h3>
                        <p>We had such a great time in LA!</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
};

export default Preview;


