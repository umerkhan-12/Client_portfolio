// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaArrowLeft,
//   FaArrowRight,
//   FaDatabase,
//   FaChartLine,
//   FaCogs,
//   FaBuilding,
// } from "react-icons/fa";

// const experiences = [
//   {
//     role: "Asset & Logistics Analytics Manager",
//     company: "Digital Ocean",
//     date: "May 2023 – Sep 2024",
//     details: [
//       "Reduced aged inventory by 35% across EU warehouses through analytics in SAP, Power BI & Excel.",
//       "Developed automated forecasting models to align demand planning and capacity utilization.",
//       "Designed interactive Tableau dashboards for real-time capacity and procurement strategy.",
//       "Improved vendor scorecards & SLA tracking, enhancing procurement decision-making.",
//     ],
//     tech: ["SAP", "Power BI", "Excel", "Tableau", "SQL"],
//     icon: <FaDatabase />,
//     color: "from-fuchsia-500 to-purple-500",
//   },
//   {
//     role: "Senior Analyst – Supply Chain & Data Analytics",
//     company: "Berlin Brands Group / Novatex / Leverify",
//     date: "Dec 2021 – Apr 2023",
//     details: [
//       "Consolidated multi-country operations data using SQL, Power BI & Tableau for unified KPIs.",
//       "Enhanced demand forecasting accuracy, reducing stockouts and improving allocation.",
//       "Integrated SAP MM/SD data into automated Excel tools, cutting manual reporting by 60%.",
//       "Built vendor performance dashboards to track reliability, order fulfillment & OTD rates.",
//     ],
//     tech: ["SQL", "Power BI", "Tableau", "SAP", "Excel"],
//     icon: <FaChartLine />,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     role: "Assistant Logistics & Fincon (Financial Controls)",
//     company: "OOCL",
//     date: "Mar 2018 – Nov 2021",
//     details: [
//       "Created cost models & dashboards to optimize freight efficiency and route performance.",
//       "Built Power BI dashboards for carrier performance & HS code compliance monitoring.",
//       "Automated customs audit tools, reducing audit cycles & improving clearance accuracy.",
//       "Collaborated with finance to align budgets, reconcile costs & improve reporting speed.",
//     ],
//     tech: ["Power BI", "SAP", "Excel", "Logistics Data"],
//     icon: <FaCogs />,
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     role: "Management Trainee – Finance & Fund Accounting",
//     company: "MCB Arif Habib",
//     date: "Nov 2015 – Feb 2018",
//     details: [
//       "Performed NAV calculations, reconciliations & variance analysis using Excel models.",
//       "Built automated financial templates to streamline reporting & compliance.",
//       "Assisted in portfolio performance tracking & benchmark comparison reporting.",
//       "Supported internal audits with data validation & ad-hoc reporting.",
//     ],
//     tech: ["Excel", "Fund Accounting", "Financial Analysis"],
//     icon: <FaBuilding />,
//     color: "from-orange-500 to-yellow-500",
//   },
// ];

// export default function ExperiencePage() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((i) => (i + 1) % experiences.length);
//   const prevSlide = () =>
//     setIndex((i) => (i - 1 + experiences.length) % experiences.length);

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 7000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">
//       {/* Heading */}
//       <h1 className="text-center mt-24 text-4xl sm:text-5xl font-bold text-gray-800">
//         My Professional Journey
//       </h1>
      

//       {/* Slider Container */}
//       <div className="relative w-full h-[70vh] mx-auto max-w-6xl mt-12">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.8 }}
//             className="absolute inset-0 flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden"
//           >
//             {/* Left panel: gradient + icon */}
//             <div
//               className={`md:w-1/3 flex items-center justify-center bg-gradient-to-r ${experiences[index].color}`}
//             >
//               <div className="text-white text-5xl sm:text-6xl p-6 bg-white/10 rounded-full shadow-lg">
//                 {experiences[index].icon}
//               </div>
//             </div>

//             {/* Right panel: details */}
//             <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
//               <h3 className="text-2xl sm:text-3xl font-semibold">
//                 {experiences[index].role}
//               </h3>
//               <p className="text-gray-500 mb-4 text-sm sm:text-base">
//                 {experiences[index].company} • {experiences[index].date}
//               </p>

//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base">
//                 {experiences[index].details.map((d, i) => (
//                   <li key={i}>{d}</li>
//                 ))}
//               </ul>

//               <div className="flex flex-wrap gap-2">
//                 {experiences[index].tech.map((t, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-xs sm:text-sm bg-fuchsia-100 text-fuchsia-700 rounded-full"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Arrows - show only on desktop */}
//         <button
//           onClick={prevSlide}
//           className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 text-3xl p-2 rounded-full bg-white/40 hover:bg-white/90 text-gray-700 shadow transition"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 text-3xl p-2 rounded-full bg-white/40 hover:bg-white/90 text-gray-700 shadow transition"
//         >
//           <FaArrowRight />
//         </button>

//         {/* Dots Navigation */}
//         <div className="absolute bottom-4 flex gap-3 left-1/2 -translate-x-1/2">
//           {experiences.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-3 h-3 rounded-full ${
//                 i === index ? "bg-fuchsia-500" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaArrowLeft,
//   FaArrowRight,
//   FaDatabase,
//   FaChartLine,
//   FaCogs,
//   FaBuilding,
// } from "react-icons/fa";

// const experiences = [
//   {
//     role: "Asset & Logistics Analytics Manager",
//     company: "Digital Ocean",
//     date: "May 2023 – Sep 2024",
//     details: [
//       "Reduced aged inventory by 35% across EU warehouses through analytics in SAP, Power BI & Excel.",
//       "Developed automated forecasting models to align demand planning and capacity utilization.",
//       "Designed interactive Tableau dashboards for real-time capacity and procurement strategy.",
//       "Improved vendor scorecards & SLA tracking, enhancing procurement decision-making.",
//     ],
//     tech: ["SAP", "Power BI", "Excel", "Tableau", "SQL"],
//     icon: <FaDatabase />,
//     color: "from-fuchsia-500 to-purple-500",
//   },
//   {
//     role: "Senior Analyst – Supply Chain & Data Analytics",
//     company: "Berlin Brands Group / Novatex / Leverify",
//     date: "Dec 2021 – Apr 2023",
//     details: [
//       "Consolidated multi-country operations data using SQL, Power BI & Tableau for unified KPIs.",
//       "Enhanced demand forecasting accuracy, reducing stockouts and improving allocation.",
//       "Integrated SAP MM/SD data into automated Excel tools, cutting manual reporting by 60%.",
//       "Built vendor performance dashboards to track reliability, order fulfillment & OTD rates.",
//     ],
//     tech: ["SQL", "Power BI", "Tableau", "SAP", "Excel"],
//     icon: <FaChartLine />,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     role: "Assistant Logistics & Fincon (Financial Controls)",
//     company: "OOCL",
//     date: "Mar 2018 – Nov 2021",
//     details: [
//       "Created cost models & dashboards to optimize freight efficiency and route performance.",
//       "Built Power BI dashboards for carrier performance & HS code compliance monitoring.",
//       "Automated customs audit tools, reducing audit cycles & improving clearance accuracy.",
//       "Collaborated with finance to align budgets, reconcile costs & improve reporting speed.",
//     ],
//     tech: ["Power BI", "SAP", "Excel", "Logistics Data"],
//     icon: <FaCogs />,
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     role: "Management Trainee – Finance & Fund Accounting",
//     company: "MCB Arif Habib",
//     date: "Nov 2015 – Feb 2018",
//     details: [
//       "Performed NAV calculations, reconciliations & variance analysis using Excel models.",
//       "Built automated financial templates to streamline reporting & compliance.",
//       "Assisted in portfolio performance tracking & benchmark comparison reporting.",
//       "Supported internal audits with data validation & ad-hoc reporting.",
//     ],
//     tech: ["Excel", "Fund Accounting", "Financial Analysis"],
//     icon: <FaBuilding />,
//     color: "from-orange-500 to-yellow-500",
//   },
// ];

// export default function ExperiencePage() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((i) => (i + 1) % experiences.length);
//   const prevSlide = () =>
//     setIndex((i) => (i - 1 + experiences.length) % experiences.length);

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 7000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">
//       {/* Heading */}
//       <h1 className="text-center mt-24 text-4xl sm:text-5xl font-bold text-gray-800">
//         My Professional Journey
//       </h1>

//       {/* Slider Container */}
//       <div className="relative w-full h-[70vh] mx-auto max-w-6xl mt-12">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.8 }}
//             className="absolute inset-0 flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden"
//           >
//             {/* Left panel: gradient + icon */}
//             <div
//               className={`md:w-1/3 flex items-center justify-center bg-gradient-to-r ${experiences[index].color}`}
//             >
//               <div className="text-white text-5xl sm:text-6xl p-6 bg-white/10 rounded-full shadow-lg">
//                 {experiences[index].icon}
//               </div>
//             </div>

//             {/* Right panel: details */}
//             <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
//               <h3 className="text-2xl sm:text-3xl font-semibold">
//                 {experiences[index].role}
//               </h3>
//               <p className="text-gray-500 mb-4 text-sm sm:text-base">
//                 {experiences[index].company} • {experiences[index].date}
//               </p>

//               <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base">
//                 {experiences[index].details.map((d, i) => (
//                   <li key={i}>{d}</li>
//                 ))}
//               </ul>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {experiences[index].tech.map((t, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-xs sm:text-sm bg-fuchsia-100 text-fuchsia-700 rounded-full"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Download Resume Button */}
//               <motion.a
//                 href="/resume.pdf" // Place your PDF in public folder
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`inline-block px-6 py-3 rounded-full text-white font-semibold shadow-lg bg-gradient-to-r ${experiences[index].color} hover:opacity-90 transition`}
//               >
//                 📄 Download Resume
//               </motion.a>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Arrows - show only on desktop */}
//         <button
//           onClick={prevSlide}
//           className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 text-3xl p-2 rounded-full bg-white/40 hover:bg-white/90 text-gray-700 shadow transition"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 text-3xl p-2 rounded-full bg-white/40 hover:bg-white/90 text-gray-700 shadow transition"
//         >
//           <FaArrowRight />
//         </button>

//         {/* Dots Navigation */}
//         <div className="absolute bottom-4 flex gap-3 left-1/2 -translate-x-1/2">
//           {experiences.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-3 h-3 rounded-full ${
//                 i === index ? "bg-fuchsia-500" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaBuilding,
} from "react-icons/fa";

const experiences = [
  {
    role: "Asset & Logistics Analytics Manager",
    company: "Digital Ocean",
    date: "May 2023 – Sep 2024",
    details: [
      "Reduced aged inventory by 35% across EU warehouses through analytics in SAP, Power BI & Excel.",
      "Developed automated forecasting models to align demand planning and capacity utilization.",
      "Designed interactive Tableau dashboards for real-time capacity and procurement strategy.",
      "Improved vendor scorecards & SLA tracking, enhancing procurement decision-making.",
    ],
    tech: ["SAP", "Power BI", "Excel", "Tableau", "SQL"],
    icon: <FaDatabase />,
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    role: "Senior Analyst – Supply Chain & Data Analytics",
    company: "Berlin Brands Group / Novatex / Leverify",
    date: "Dec 2021 – Apr 2023",
    details: [
      "Consolidated multi-country operations data using SQL, Power BI & Tableau for unified KPIs.",
      "Enhanced demand forecasting accuracy, reducing stockouts and improving allocation.",
      "Integrated SAP MM/SD data into automated Excel tools, cutting manual reporting by 60%.",
      "Built vendor performance dashboards to track reliability, order fulfillment & OTD rates.",
    ],
    tech: ["SQL", "Power BI", "Tableau", "SAP", "Excel"],
    icon: <FaChartLine />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    role: "Assistant Logistics & Fincon (Financial Controls)",
    company: "OOCL",
    date: "Mar 2018 – Nov 2021",
    details: [
      "Created cost models & dashboards to optimize freight efficiency and route performance.",
      "Built Power BI dashboards for carrier performance & HS code compliance monitoring.",
      "Automated customs audit tools, reducing audit cycles & improving clearance accuracy.",
      "Collaborated with finance to align budgets, reconcile costs & improve reporting speed.",
    ],
    tech: ["Power BI", "SAP", "Excel", "Logistics Data"],
    icon: <FaCogs />,
    color: "from-green-500 to-emerald-500",
  },
  {
    role: "Management Trainee – Finance & Fund Accounting",
    company: "MCB Arif Habib",
    date: "Nov 2015 – Feb 2018",
    details: [
      "Performed NAV calculations, reconciliations & variance analysis using Excel models.",
      "Built automated financial templates to streamline reporting & compliance.",
      "Assisted in portfolio performance tracking & benchmark comparison reporting.",
      "Supported internal audits with data validation & ad-hoc reporting.",
    ],
    tech: ["Excel", "Fund Accounting", "Financial Analysis"],
    icon: <FaBuilding />,
    color: "from-orange-500 to-yellow-500",
  },
];

export default function ExperiencePage() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % experiences.length);
  const prevSlide = () =>
    setIndex((i) => (i - 1 + experiences.length) % experiences.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white">
      {/* Heading */}
      <h1 className="text-center mt-24 text-4xl sm:text-5xl font-bold text-gray-800">
        My Professional Journey
      </h1>

      {/* Slider Container */}
      <div className="relative w-full h-[75vh] mx-auto max-w-6xl mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden"
          >
            {/* Left panel: gradient + icon */}
            <div
              className={`md:w-1/3 flex items-center justify-center bg-gradient-to-r ${experiences[index].color}`}
            >
              <div className="text-white text-5xl sm:text-6xl p-6 bg-white/10 rounded-full shadow-lg">
                {experiences[index].icon}
              </div>
            </div>

            {/* Right panel: details */}
            <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center pb-20 md:pb-10">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                {experiences[index].role}
              </h3>
              <p className="text-gray-500 mb-4 text-sm sm:text-base">
                {experiences[index].company} • {experiences[index].date}
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base">
                {experiences[index].details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {experiences[index].tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs sm:text-sm bg-fuchsia-100 text-fuchsia-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block px-6 py-3 rounded-full text-white font-semibold shadow-lg bg-gradient-to-r ${experiences[index].color} hover:opacity-90 transition`}
              >
                📄 Download Resume
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows - show only on desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 text-3xl p-2 rounded-full bg-white/40 hover:bg-white/90 text-gray-700 shadow transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 text-3xl p-2 rounded-full bg-white/40 hover:bg-white/90 text-gray-700 shadow transition"
        >
          <FaArrowRight />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-3 md:bottom-4 flex gap-3 left-1/2 -translate-x-1/2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-fuchsia-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
