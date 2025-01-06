import { Header } from "./Header"
import backgroundMobile from "../assets/images/background-mobile.png"
import backgroundTablet from "../assets/images/background-tablet.png"
import backgroundDesktop from "../assets/images/background-desktop.png"


export const TicketGenerator = () => {
  return (
    <div>
      <img className="absolute -z-10 md:hidden" src={backgroundMobile} />
      <img className="absolute -z-10 hidden md:block lg:hidden" src={backgroundTablet} />
      <img className="absolute -z-10 hidden lg:block" src={backgroundDesktop} />
      <Header />
      {/* <!-- Form starts --> */}

      <section className="p-5">
        <p className="text-neutral_0 text-center text-[30px] font-extrabold">Your Journey to Coding Conf 2025 Starts Here!</p>
        <p className="text-neutral_300 text-center text-xl font-medium">Secure your spot at next year's biggest coding conference.</p>
      </section>

      Upload Avatar
      Drag and drop or click to upload
      Upload your photo (JPG or PNG, max size: 500KB).

      Full Name

      Email Address
      example@email.com

      GitHub Username
      @yourusername

      Generate My Ticket

      {/* <!-- Form ends --> */}

      {/* <!-- Generated tickets starts --> */}

      Congrats, ...! Your ticket is ready.

      We've emailed your ticket to ... and will send updates in the run up to the event.

      Coding Conf
      Jan 31, 2025 / Austin, TX

      {/* <!-- Generated tickets ends --> */}
    </div>
  )
}
