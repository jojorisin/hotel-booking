import { useState } from 'react';
import './Home.css';
import DatePickerComponent from './DatePickerComponent'


function Home({ setPage, setBookingDetails }) {

    return (
        <>

            <main>
                <section className="hero-section">
                    <h1>Welcome to another world</h1>
                    <DatePickerComponent setPage={setPage} setBookingDetails={setBookingDetails} />
                </section></main></>


    );

}

export default Home;