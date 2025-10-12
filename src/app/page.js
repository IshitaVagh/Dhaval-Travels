"use client";
import { useState } from 'react'
import axios from 'axios';
import Image from "next/image";
import Blog from "./Blog";
import Testimonial from './Testimonial'

export default function Home() {
  const [query, setQuery] = useState('')
  const [travelType, setTravelType] = useState('oneWay')
  const [suggestion, setSuggestion] = useState([])
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [airportJounryType, setAirportJounryType] = useState('toAirport')
  const handleChange = async (e) => {
    const value = e.target.value
    setQuery(value)
    if (value?.length > 3) {
      try {
        const response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${value}&apiKey=896d90cefb494325b9dd358ae81714e0`)
        setSuggestion(response.data.features)
      } catch (e) {
        console.log(e)
      }
    } else {
      setSuggestion([])
    }
  }
  const handleSelect = (place) => {
    setSelectedLocation({
      name: place.properties.formatted,
      lat: place.properties.lat,
      lon: place.properties.lon,
    })
    setQuery(place.properties.formatted)
    setSuggestion([])

  }
  return (
    <div className="font-sans">
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">Dhaval<span> Travels</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
              <li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>
              <li className="nav-item"><a href="car.html" className="nav-link">Our Car</a></li>
              <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-wrap" style={{ backgroundImage: "url('images/bg_1.jpg')" }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text justify-content-start align-items-center">
            <div className="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
              <div className="text">
                <h1 className="mb-4">Now <span>It's easy for you</span> <span>rent a car</span></h1>
                <p style={{ fontSize: "18px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                <a href="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="ion-ios-play"></span>
                  </div>
                  <div className="heading-title ml-5">
                    <span>Easy steps for renting a car</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col"></div>
            <div className="col-lg-4 col-md-6 mt-0 mt-md-5 d-flex">
              <form action="#" className="request-form ftco-animate" style={{width:'380px !important',minWidth:'380px !important'}}>
                <h2>Make your trip</h2>
                <div className="form-group">
                  <label className="label">Type of Trip</label>
                  <select className="form-control" onChange={(e) => setTravelType(e.target.value)} >
                    <option value={'oneWay'}> One way</option>
                    <option value={'roundTrip'}> Round Trip</option>
                    <option value={'airport'}> Airport</option>
                    <option value={'local'}> Local</option>
                    <option value={'getDriver'}> Get Driver</option>
                  </select>
                </div>
                {travelType === 'airport' &&
                  <div className="form-group">
                    <label className="label">Trip</label>
                    <select className="form-control" onChange={(e) => setAirportJounryType(e.target.value)}>
                      <option value={'fromAirport'}> Pickup from Airport</option>
                      <option value={'toAirport'}> Drop to Airport</option>
                    </select>
                  </div>
                }
                {airportJounryType !== 'fromAirport' &&
                  <div className="form-group">
                    <label className="label">Pick-up location</label>
                    <input type="text" className="form-control" value={query} onChange={handleChange} placeholder="City, Airport, Station, etc" />
                    {suggestion?.length > 0 && (
                      <ul>
                        {suggestion?.map(s => (
                          <li key={s.properties.place_id} onClick={() => handleSelect(s)}>
                            {s.properties.formatted}
                          </li>
                        ))}
                      </ul>)}
                  </div>
                }
                {travelType === 'airport' &&
                  <div className="form-group">
                    <label className="label">{airportJounryType === 'toAirport' ? 'Drop Airport' : 'Pick-up Airport'}</label>
                    <select className="form-control">
                      <option>
                        Sardar Vallabhbhai Patel International Airport,Ahmedabad.
                      </option>
                      <option>
                        Surat International Airport,Surat.
                      </option>
                      <option>
                        Vadodara Airport,Vadodara.
                      </option>
                      <option>
                        Chhatrapati Shivaji Maharaj International Airport,Mumbai.
                      </option>
                    </select>
                  </div>
                }
                {(travelType !== 'oneWay' && travelType !== 'local' && airportJounryType !== 'toAirport') &&
                  <div className="form-group">
                    <label className="label">Drop-off location</label>
                    <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                  </div>
                }
                <div className="d-flex">
                  <div className="form-group mr-2">
                    <label className="label">Pick-up date</label>
                    <input type="text" className="form-control" id="book_pick_date" placeholder="Date" />
                  </div>
                  {(travelType !== 'local' && travelType !== 'airport') &&
                    <div className="form-group ml-2">
                      <label className="label">Drop-off date</label>
                      <input type="text" className="form-control" id="book_off_date" placeholder="Date" />
                    </div>
                  }
                </div>
                <div className="form-group">
                  <label className="label">Pick-up time</label>
                  <input type="text" className="form-control" id="time_pick" placeholder="Time" />
                </div>
                <div className="form-group">
                  <input type="submit" value="Search Vehicle" className="btn btn-primary py-3 px-4" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1 ftco-animate mb-5">
                <form action="#" className="search-property-1">
                  <div className="row">
                    <div className="col-lg align-items-end">
                      <div className="form-group">
                        <label>Select Model</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                            <select name="" id="" className="form-control">
                              <option value="">Select Model</option>
                              <option value="">Model 1</option>
                              <option value="">Model 2</option>
                              <option value="">Model 3</option>
                              <option value="">Model 4</option>
                              <option value="">Model 5</option>
                              <option value="">Model 6</option>
                              <option value="">Model 7</option>
                              <option value="">Model 8</option>
                              <option value="">Model 9</option>
                              <option value="">Model 10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg align-items-end">
                      <div className="form-group">
                        <label>Select Brand</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                            <select name="" id="" className="form-control">
                              <option value="">Select Brand</option>
                              <option value="">Brand 1</option>
                              <option value="">Brand 2</option>
                              <option value="">Brand 3</option>
                              <option value="">Brand 4</option>
                              <option value="">Brand 5</option>
                              <option value="">Brand 6</option>
                              <option value="">Brand 7</option>
                              <option value="">Brand 8</option>
                              <option value="">Brand 9</option>
                              <option value="">Brand 10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg align-items-end">
                      <div className="form-group">
                        <label>Year Model</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                            <select name="" id="" className="form-control">
                              <option value="">Year Model</option>
                              <option value="">2019</option>
                              <option value="">2018</option>
                              <option value="">2017</option>
                              <option value="">2016</option>
                              <option value="">2015</option>
                              <option value="">2014</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg align-items-end">
                      <div className="form-group">
                        <label>Price Limit</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                            <select name="" id="" className="form-control">
                              <option value="">$1</option>
                              <option value="">$50</option>
                              <option value="">$100</option>
                              <option value="">$200</option>
                              <option value="">$300</option>
                              <option value="">$400</option>
                              <option value="">$500</option>
                              <option value="">$600</option>
                              <option value="">$700</option>
                              <option value="">$800</option>
                              <option value="">$900</option>
                              <option value="">$1000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg align-self-end">
                      <div className="form-group">
                        <div className="form-field">
                          <input type="submit" value="Search" className="form-control btn btn-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section services-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">Our Services</span>
              <h2 className="mb-2">Our Services</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon"><span className="flaticon-customer-support"></span></div>
                    <h3 className="heading mb-0 pl-3">24/7 Car Support</h3>
                  </div>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon"><span className="flaticon-route"></span></div>
                    <h3 className="heading mb-0 pl-3">Lots of location</h3>
                  </div>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon"><span className="flaticon-online-booking"></span></div>
                    <h3 className="heading mb-0 pl-3">Reservation</h3>
                  </div>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="media-body py-md-4">
                  <div className="d-flex mb-3 align-items-center">
                    <div className="icon"><span className="flaticon-rent"></span></div>
                    <h3 className="heading mb-0 pl-3">Rental Cars</h3>
                  </div>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container-fluid px-4">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">What we offer</span>
              <h2 className="mb-2">Choose Your Car</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="car-wrap ftco-animate">
                <div className="img d-flex align-items-end" style={{ backgroundImage: 'url(images/car-1.jpg)' }}>
                  <div className="price-wrap d-flex">
                    <span className="rate">$25</span>
                    <p className="from-day">
                      <span>From</span>
                      <span>/Day</span>
                    </p>
                  </div>
                </div>
                <div className="text p-4 text-center">
                  <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                  <span>Audi</span>
                  <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="car-wrap ftco-animate">
                <div className="img d-flex align-items-end" style={{ backgroundImage: 'url(images/car-2.jpg)' }}>
                  <div className="price-wrap d-flex">
                    <span className="rate">$25</span>
                    <p className="from-day">
                      <span>From</span>
                      <span>/Day</span>
                    </p>
                  </div>
                </div>
                <div className="text p-4 text-center">
                  <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                  <span>Ford</span>
                  <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="car-wrap ftco-animate">
                <div className="img d-flex align-items-end" style={{ backgroundImage: 'url(images/car-3.jpg)' }}>
                  <div className="price-wrap d-flex">
                    <span className="rate">$25</span>
                    <p className="from-day">
                      <span>From</span>
                      <span>/Day</span>
                    </p>
                  </div>
                </div>
                <div className="text p-4 text-center">
                  <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                  <span>Cheverolet</span>
                  <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="car-wrap ftco-animate">
                <div className="img d-flex align-items-end" style={{ backgroundImage: 'url(images/car-4.jpg)' }}>
                  <div className="price-wrap d-flex">
                    <span className="rate">$25</span>
                    <p className="from-day">
                      <span>From</span>
                      <span>/Day</span>
                    </p>
                  </div>
                </div>
                <div className="text p-4 text-center">
                  <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                  <span>Mercedes</span>
                  <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="car-wrap ftco-animate">
                <div className="img d-flex align-items-end" style={{ backgroundImage: 'url(images/car-5.jpg)' }}>
                  <div className="price-wrap d-flex">
                    <span className="rate">$25</span>
                    <p className="from-day">
                      <span>From</span>
                      <span>/Day</span>
                    </p>
                  </div>
                </div>
                <div className="text p-4 text-center">
                  <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                  <span>Audi</span>
                  <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="car-wrap ftco-animate">
                <div className="img d-flex align-items-end" style={{ backgroundImage: 'url(images/car-6.jpg)' }}>
                  <div className="price-wrap d-flex">
                    <span className="rate">$25</span>
                    <p className="from-day">
                      <span>From</span>
                      <span>/Day</span>
                    </p>
                  </div>
                </div>
                <div className="text p-4 text-center">
                  <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                  <span>Ford</span>
                  <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="car-wrap ftco-animate">
                <div className="img d-flex align-items-end" style={{ backgroundImage: 'url(images/car-7.jpg)' }}>
                  <div className="price-wrap d-flex">
                    <span className="rate">$25</span>
                    <p className="from-day">
                      <span>From</span>
                      <span>/Day</span>
                    </p>
                  </div>
                </div>
                <div className="text p-4 text-center">
                  <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                  <span>Cheverolet</span>
                  <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="car-wrap ftco-animate">
                <div className="img d-flex align-items-end" style={{ backgroundImage: 'url(images/car-8.jpg)' }}>
                  <div className="price-wrap d-flex">
                    <span className="rate">$25</span>
                    <p className="from-day">
                      <span>From</span>
                      <span>/Day</span>
                    </p>
                  </div>
                </div>
                <div className="text p-4 text-center">
                  <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                  <span>Mercedes</span>
                  <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section services-section img" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Work flow</span>
              <h2 className="mb-3">How it works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
                  <h3>Pick Destination</h3>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-select"></span></div>
                  <h3>Select Term</h3>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-rent"></span></div>
                  <h3>Choose A Car</h3>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-review"></span></div>
                  <h3>Enjoy The Ride</h3>
                  <p>A small river named Duden flows by their place and supplies it with you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
            </div>
            <div className="col-md-6 wrap-about py-md-5 ftco-animate">
              <div className="heading-section mb-5 pl-md-5">
                <span className="subheading">About us</span>
                <h2 className="mb-4">Choose A Perfect Car</h2>

                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                <p><a href="#" className="btn btn-primary">Search Vehicle</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog />

    </div>
  );
}
