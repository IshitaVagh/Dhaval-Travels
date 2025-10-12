"use client";
const Blog = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <span className="subheading">Blog</span>
                        <h2>Recent Blog</h2>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_1.jpg')" }}>
                            </a>
                            <div className="text pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">July. 24, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry justify-content-end">
                            <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_2.jpg')" }}>
                            </a>
                            <div className="text pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">July. 24, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                        <div className="blog-entry">
                            <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_3.jpg')" }}>
                            </a>
                            <div className="text pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">July. 24, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Blog