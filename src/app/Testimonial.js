"use client";
import {Box} from '@mui/material'

const Testimonial = () => {
    return (

        <section className="ftco-section testimony-section">
            <Box className="container">
                <Box className="row justify-content-center mb-5">
                    <Box className="col-md-7 text-center heading-section ftco-animate">
                        <span className="subheading">Testimonial</span>
                        <h2 className="mb-3">Happy Clients</h2>
                    </Box>
                </Box>
                <Box className="row ftco-animate">
                    <Box className="col-md-12">
                        <Box className="carousel-testimony owl-carousel ftco-owl">
                            <Box className="item">
                                <Box className="testimony-wrap text-center py-4 pb-5" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                                    <Box className="text pt-4">
                                        <>
                                        <Box className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Box>
                                        <Box className="name">Roger Scott</Box>
                                        <span className="position">Marketing Manager</span>
                                        </>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item">
                                <Box className="testimony-wrap text-center py-4 pb-5">
                                    <Box className="user-img mb-4" style={{ backgroundImage: 'url(images/person_2.jpg)' }}>
                                    </Box>
                                    <Box className="text pt-4">
                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Roger Scott</p>
                                        <span className="position">Interface Designer</span>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item">
                                <Box className="testimony-wrap text-center py-4 pb-5">
                                    <Box className="user-img mb-4" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                                    </Box>
                                    <Box className="text pt-4">
                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Roger Scott</p>
                                        <span className="position">UI Designer</span>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item">
                                <Box className="testimony-wrap text-center py-4 pb-5">
                                    <Box className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                    </Box>
                                    <Box className="text pt-4">
                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Roger Scott</p>
                                        <span className="position">Web Developer</span>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="item">
                                <Box className="testimony-wrap text-center py-4 pb-5">
                                    <Box className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                    </Box>
                                    <Box className="text pt-4">
                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Roger Scott</p>
                                        <span className="position">System Analyst</span>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}
export default Testimonial