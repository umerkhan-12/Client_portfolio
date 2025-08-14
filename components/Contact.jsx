// 'use client'
// import { useRef, useState } from 'react'
// import emailjs from 'emailjs-com'
// export default function Contact(){
//   const form = useRef(null)
//   const [sent, setSent] = useState(false)

//   const sendEmail = async (e) => {
//     e.preventDefault()
//     try{
//       // You should replace the serviceID, templateID, userID with your EmailJS values
//       await emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       setSent(true)
//     }catch(err){
//       console.error(err)
//       alert('Could not send message — configure EmailJS keys in Contact component.')
//     }
//   }

//   return (
//     <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
//       <h2 className="text-2xl font-semibold">Contact</h2>
//       <p className="mt-2 text-gray-600">Interested in working together? Send a message or email me at <a className="underline" href="mailto:ahmed.uneeb@yahoo.com">ahmed.uneeb@yahoo.com</a></p>

//       <form ref={form} onSubmit={sendEmail} className="mt-4 grid gap-3">
//         <input name="user_name" required placeholder="Your name" className="p-3 border rounded" />
//         <input name="user_email" required placeholder="Your email" className="p-3 border rounded" />
//         <textarea name="message" required placeholder="Message" className="p-3 border rounded h-28" />
//         <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
//         {sent && <div className="text-green-600">Message sent — thank you!</div>}
//       </form>
//     </section>
//   )
// }
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import Image from 'next/image'

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-gradient-to-r from-fuchsia-50 via-white to-purple-50 text-center relative overflow-hidden"
    >
      {/* Illustration */}
      <div className="relative w-full flex justify-center mb-10">
        <Image
          src="/images/chatting.png" // <-- Undraw image here
          alt="Let's Talk"
          width={350}
          height={350}
          className="drop-shadow-lg"
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6 relative z-10"
      >
        Let’s Talk About Your Next Big Idea
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto text-lg text-gray-600 mb-8 relative z-10"
      >
        Have a project in mind? I’m here to help bring your vision to life.
        Let’s connect and start building something impactful together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="relative z-10"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-lg font-medium rounded-full shadow-lg transition"
        >
          Get in Touch
          <HiArrowRight className="text-xl" />
        </Link>
      </motion.div>
    </section>
  )
}


