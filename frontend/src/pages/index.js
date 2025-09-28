import Image from 'next/image';

const events = [
  {
    date: "October 21th, 2025",
    events: [
      { time: "6:00 PM - 7:00 PM", title: "Opening Ceremony & Welcome", speaker: "Quantum Club at ASU", location: "T.B.D" },
      { time: "7:00 PM - 8:00 PM", title: "Trivia Night", speaker: "Quantum Club at ASU", location: "T.B.D" },
    ]
  },
  {
    date: "October 22th, 2025",
    events: [
      { time: "4:00 PM - 5:00 PM", title: "Qiskit Playground: Intro to Qiskit", speaker: "Quantum Club Organizers", location: "T.B.D" },
      { time: "5:00 PM - 5:30 PM", title: "Break and Snacks", speaker: "-", location: "T.B.D" },
      { time: "5:30 PM - 6:30 PM", title: "Quantum Machine Learning with Qiskit", speaker: "Vinayak Sharma", location: "BYAC 270" },
    ]
  },
  {
    date: "October 23th, 2025",
    events: [
      { time: "6:00 PM - 7:00 PM", title: "Keynote Speaker", speaker: "IBM Quantum Speaker", location: "T.B.D" },
    ]
  },
  {
    date: "October 24th, 2025",
    events: [
      { time: "1:00 PM - 3:00 PM", title: "Qiskit Office Hours", speaker: "Quantum Club Organizers", location: "T.B.D" },
      { time: "6:00 PM - 7:00 PM", title: "Distinguished Speakers Panel", speaker: "ASU Faculty", location: "T.B.D" },
    ]
  },
  {
    date: "October 25th, 2025",
    events: [
      { time: "10:00 AM", title: "Hackathon Begins", speaker: "-", location: "T.B.D" },
    ]
  },
  {
    date: "October 26th, 2025",
    events: [
      { time: "1:00 PM - 2:00 PM", title: "Hackathon Judging", speaker: "-", location: "T.B.D" },
      { time: "2:00 PM - 3:00 PM", title: "Closing Ceremony and Prizes", speaker: "Quantum Club Organizers", location: "T.B.D" },
    ]
  }
];

const partners = [
  { name: "IBM Quantum", logo: "/assets/images/IBMQuantumLogo.png" },
  { name: "Quantum Collaborative", logo: "/assets/images/QuantumCollaborative.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-[#8c1d40] text-white fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8 shadow-md">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">Quantum Club</span>
          <span className="text-xl font-bold">Qiskit Fall Fest 2025</span>
          <div className="hidden md:flex space-x-4 ml-8">
            <a href="#about" className="hover:underline">About</a>
            <a href="#schedule" className="hover:underline">Schedule</a>
            <a href="#partners" className="hover:underline">Partners</a>
          </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdeRI6uVXFMK0ejBdtdKrf2w-wyYaRnhR1d7BgMqCZiPN4ufA/viewform?usp=header" 
           className="bg-[#ffc627] text-black font-semibold px-4 py-2 rounded">
          Register
        </a>
      </nav>

     {/* Hero Section */}
<div className="pt-16 bg-gradient-to-b from-white via-gray-100 to-gray-200 py-24 text-center">
  {/* Top Images Row */}
  <div className="flex justify-center items-center mb-8 space-x-12">
    {/* Left Logo */}
    <div className="flex-shrink-0">
      <Image
        src="/images/LogoCircle.png"
        alt="Quantum Club @ ASU Logo"
        width={100}
        height={100}
        className="rounded-full"
      />
    </div>

    {/* Middle Image */}
    <div className="flex-shrink-0">
      <Image
        src="/images/image.png"
        alt="Hero Middle Image"
        width={140}
        height={140}
      />
    </div>

    {/* Right Logo */}
    <div className="flex-shrink-0">
      <Image
        src="/images/qiskitlogo.svg"
        alt="Qiskit Logo"
        width={100}
        height={100}
      />
    </div>
  </div>

  {/* Title */}
  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 flex justify-center items-center text-gray-900">
    Qiskit
    <span className="mx-4 inline-flex">
      <Image
        src="/images/stickers/Text_Fall Fest_01.png"
        alt="Fall Fest 2025"
        width={220}
        height={50}
      />
    </span>
    2025
  </h1>

  {/* Subtitle */}
  <p className="text-xl text-gray-900 max-w-2xl mx-auto mb-10">
    Join the Quantum Club @ ASU for a groundbreaking celebration of quantum computing | <b>Sponsored by IBM Quantum™</b>
  </p>

  {/* Register Button */}
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdeRI6uVXFMK0ejBdtdKrf2w-wyYaRnhR1d7BgMqCZiPN4ufA/viewform?usp=header"
    className="bg-[#8c1d40] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-md hover:scale-105 transition-transform"
  >
    Register Now
  </a>
</div>


{/* About Section */}
<section id="about" className="container mx-auto my-12 px-4 text-center">
  <div className="flex justify-center items-center mb-8">
    {/* Left overlapping images */}
    <div className="flex -space-x-4 rtl:space-x-reverse items-center">
      <Image
        src="/images/stickers/Badge_02.png"
        alt="Badge 02"
        width={50}
        height={50}
        className="rounded-full"
      />
      <Image
        src="/images/stickers/Cat_01.png"
        alt="Cat 01"
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>

    {/* Title with Fall Fest Image */}
    <h2 className="text-3xl text-black font-bold mx-6 flex justify-center items-center flex-wrap">
      About{" "}
      <span className="mx-2 inline-flex">
        <Image
          src="/images/stickers/Text_Fall Fest_01.png"
          alt="Fall Fest 2025"
          width={160}
          height={40}
        />
      </span>{" "}
      2025
    </h2>

    {/* Right overlapping images */}
    <div className="flex -space-x-4 rtl:space-x-reverse items-center">
      <Image
        src="/images/stickers/Atom_01.png"
        alt="Atom 01"
        width={50}
        height={50}
        className="rounded-full"
      />
      <Image
        src="/images/stickers/Timeline_03.png"
        alt="Timeline 03"
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  </div>

  <p className="text-lg max-w-3xl mx-auto mb-6 text-black">
    Hosted by the Quantum Club @ ASU, IBM Qiskit Fall Fest 2025 is a premier event bringing together students, researchers, and industry professionals to explore the cutting edge of quantum computing.
  </p>
  <p className="text-lg max-w-3xl mx-auto text-black">
    Whether you're a curious beginner or an advanced quantum explorer, join us for workshops, keynote speeches, hands-on labs, and networking opportunities with IBM experts and the ASU quantum community.
  </p>
</section>

      {/* Event Schedule */}
      <section id="schedule" className="container mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Event Schedule</h2>
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-gray-100">
                <th className="px-6 py-4 border border-gray-600">Date</th>
                <th className="px-6 py-4 border border-gray-600">Time</th>
                <th className="px-6 py-4 border border-gray-600">Event</th>
                <th className="px-6 py-4 border border-gray-600">Speaker/Host</th>
                <th className="px-6 py-4 border border-gray-600">Location</th>
              </tr>
            </thead>
            <tbody>
              {events.map((day, i) =>
                day.events.map((event, j) => (
                  <tr key={`${i}-${j}`} className="bg-white border border-gray-400 text-black hover:bg-gray-100 transition-colors">
                    {j === 0 && (
                      <td rowSpan={day.events.length} className="px-6 py-4 font-semibold">{day.date}</td>
                    )}
                    <td className="px-6 py-4">{event.time}</td>
                    <td className="px-6 py-4">{event.title}</td>
                    <td className="px-6 py-4">{event.speaker}</td>
                    <td className="px-6 py-4">{event.location}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Partners Section */}
<section id="partners" className="container mx-auto my-12 px-4">
  <h2 className="text-3xl font-bold text-center mb-4 text-black">Our Partners</h2>
  <p className="text-center mb-10 text-lg text-black">
    We're proud to collaborate with these incredible organizations:
  </p>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
    {/* IBM Quantum */}
    <div className="drop-shadow-md p-6 flex justify-center items-center bg-white rounded">
      <Image
        src="/images/IBMQuantumLogo.png"
        alt="IBM Quantum"
        width={150}
        height={75}
        objectFit="contain"
      />
    </div>

    {/* Quantum Collaborative */}
    <div className="drop-shadow-md p-6 flex justify-center items-center bg-white rounded">
      <Image
        src="/images/QuantumCollaborative.png"
        alt="Quantum Collaborative"
        width={150}
        height={75}
        objectFit="contain"
      />
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-6 text-center">
        <p>© 2025 Quantum Club at ASU. All rights reserved.</p>
      </footer>
    </div>
  )
}
