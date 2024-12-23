import { Header } from "./Header"

export const TicketGenerator = () => {
  return (
    <div>
      <Header />
      {/* <!-- Form starts --> */}

      Your Journey to Coding Conf 2025 Starts Here!

      Secure your spot at next year's biggest coding conference.

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
