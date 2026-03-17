import { useState } from "react";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css";
import About from "./pages/About";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [bookingDetails, setBookingDetails] = useState({
    arrivalDate: today,
    departureDate: tomorrow,
    guests: 1,
    selectedRoom: null,
    nights: 1,
    totalCost: null,
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "booking", element: <Booking bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
