import { FaLinkedin, FaYahoo, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" py-6 text-center  text-sm text-white bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <div className="flex justify-center gap-6 mb-3">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/uneeb-ahmed
"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-cyan-600 transition-colors text-xl"
        >
          <FaLinkedin />
        </a>

        {/* Yahoo Mail */}
        <a
          href="mailto:ahmed.uneeb@yahoo.com"
          className="text-gray-500 hover:text-cyan-600 transition-colors text-xl"
        >
          <FaYahoo />
        </a>

        {/* Phone */}
        <a
          href="tel:+14708413016"
          className="text-gray-500 hover:text-cyan-600 transition-colors text-xl"
        >
          <FaPhoneAlt />
        </a>
      </div>

      <p>© 2025 Uneeb Ahmed — Portfolio</p>
    </footer>
  );
}


