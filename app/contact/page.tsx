"use client"

import { useState } from "react"
import { BsWhatsapp, BsEnvelope, BsGeoAlt } from "react-icons/bs"
import { FaRegCopy } from "react-icons/fa"

const ContactForm = () => {
  const [notification, setNotification] = useState('')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setNotification('Tersalin ke clipboard!')
    setTimeout(() => setNotification(''), 3000)
  }

  return (
    <div className="pt-24 px-4 mb-8 mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Hubungi Kami</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Manual Contact Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Kontak Langsung</h3>
          <p className="text-lg mb-8">
            Ide-ide Anda sangat berarti bagi kami. Ceritakan kebutuhan Anda, diskusikan (gratis), 
            dan lihat bagaimana kami bisa mewujudkannya!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <BsWhatsapp className="text-emerald-800 text-xl" />
              </div>
              <div>
                <p className="font-medium">WhatsApp</p>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://wa.me/6289611905599" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-800 hover:underline"
                  >
                    +62 896-1190-5599
                  </a>
                  <button 
                    onClick={() => copyToClipboard('+6289611905599')}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaRegCopy />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BsEnvelope className="text-blue-800 text-xl" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <div className="flex items-center gap-2">
                  <span>admin@vartz.web.id</span>
                  <button 
                    onClick={() => copyToClipboard('admin@vartz.web.id')}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaRegCopy />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <BsGeoAlt className="text-amber-800 text-xl" />
              </div>
              <div>
                <p className="font-medium">Lokasi</p>
                <div className="flex items-center gap-2">
                  <span>Jl. Gatot Subroto No.105, Kemlayan, Kec. Serengan, Kota Surakarta, Jawa Tengah 57111, Indonesia</span>
                  <button 
                    onClick={() => copyToClipboard('Jakarta, Indonesia')}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaRegCopy />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
          <form action="https://formsubmit.co/admin@vartz.web.id" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Perusahaan
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Pesan Anda + No Handphone (Opsional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-800 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors opacity-70"
              onClick={() => setNotification("Inquery terkirim. Terimakasih dan mohon tunggu balasan email dari kami.")}
            >
            Kirim Pesan
            </button>
            
            {notification && (
              <div className={`p-3 rounded-md text-center ${notification.includes('Gagal') ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>
                {notification}
              </div>
            )}
            <input type="hidden" name="_captcha" value="false"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
