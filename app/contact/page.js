// 'use client';
// import { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');
    
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success('Message sent successfully!');
//         setIsSubmitted(true);
//         setFormData({ name: '', email: '', message: '' });
//         setStatus('');
//       } else {
//         toast.error(`Error: ${data.error}`);
//         setStatus('');
//       }
//     } catch (err) {
//       toast.error('Failed to send. Please try again.');
//       setStatus('');
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-50 via-white to-purple-50 px-6">
//       <Toaster position="top-center" reverseOrder={false} />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
//       >
//         {/* Heading */}
//         <h1 className="text-3xl font-bold mb-2 text-center">Get in Touch</h1>
//         <p className="text-gray-600 text-center mb-6">
//           Whether you have a question, want to collaborate, or simply say hello — I’d love to hear from you.
//         </p>

//         {/* Quick Contact Info */}
//         <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-6 text-center">
//           <a href="mailto:ahmed.uneeb@yahoo.com" className="flex items-center gap-2 text-violet-600 hover:underline">
//             <FaEnvelope /> ahmed.uneeb@yahoo.com
//           </a>
//           <a href="tel:+14708413016" className="flex items-center gap-2 text-violet-600 hover:underline">
//             <FaPhoneAlt /> (+1) 470-841-3016
//           </a>
//         </div>

//         {/* Contact Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="4"
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             disabled={status === 'Sending...'}
//             className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 rounded-md transition"
//           >
//             {status === 'Sending...' ? 'Sending...' : 'Send Message'}
//           </button>
//         </form>
//       </motion.div>

//       {/* Thank You Modal */}
//       <AnimatePresence>
//         {isSubmitted && (
//           <motion.div
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center"
//             >
//               <h2 className="text-2xl font-bold mb-3">Thank You!</h2>
//               <p className="text-gray-600 mb-4">
//                 Your message has been sent successfully. I’ll get back to you soon.
//               </p>
//               <button
//                 onClick={() => setIsSubmitted(false)}
//                 className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
'use client';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Message sent successfully!');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setStatus('');
      } else {
        toast.error(`Error: ${data.error}`);
        setStatus('');
      }
    } catch (err) {
      toast.error('Failed to send. Please try again.');
      setStatus('');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-6 relative overflow-hidden">
      
      <Toaster position="top-center" reverseOrder={false} />

      {/* Glow Background Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 
        p-8 rounded-2xl shadow-2xl max-w-lg w-full text-gray-200"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2 text-center text-white">Get in Touch</h1>
        <p className="text-gray-400 text-center mb-6">
          Let’s connect! Whether you want to collaborate, discuss data-driven strategies, 
          or just say hello — I’d love to hear from you.
        </p>

        {/* Quick Contact Info */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-6 text-center">
          <a href="mailto:ahmed.uneeb@yahoo.com" className="flex items-center gap-2 text-cyan-400 hover:underline">
            <FaEnvelope /> ahmed.uneeb@yahoo.com
          </a>
          <a href="tel:+14708413016" className="flex items-center gap-2 text-cyan-400 hover:underline">
            <FaPhoneAlt /> (+1) 470-841-3016
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-white/20 bg-white/10 rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-white/20 bg-white/10 rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-white/20 bg-white/10 rounded-md px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
            required
          ></textarea>

          <button
            type="submit"
            disabled={status === 'Sending...'}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 rounded-md transition"
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      {/* Thank You Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 
              p-6 rounded-2xl shadow-xl max-w-sm text-center text-gray-200"
            >
              <h2 className="text-2xl font-bold mb-3 text-white">Thank You!</h2>
              <p className="text-gray-300 mb-4">
                Your message has been sent successfully. I’ll get back to you soon.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
