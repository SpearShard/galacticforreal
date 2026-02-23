// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { motion } from 'motion/react'
// import { Search, Filter, Upload, ShoppingCart, User, CheckCircle2, Download, ArrowRight, Star, Clock, Tag, Grid3X3, ListFilter } from 'lucide-react'

// export default function MarketplacePage() {
//   // State for user login status (simulated)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   // State for active tab in user account area
//   const [activeTab, setActiveTab] = useState('orders')
//   // State for active category filter
//   const [activeCategory, setActiveCategory] = useState('all')

//   // Sample design data
//   const designs = [
//     { id: 1, title: 'Modular Drone Frame', designer: 'AeroDesigns', price: 49.99, category: 'aerospace', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop' },
//     { id: 2, title: 'Medical Implant Prototype', designer: 'MedTech Solutions', price: 129.99, category: 'medical', image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b4b9?q=80&w=1600&auto=format&fit=crop' },
//     { id: 3, title: 'Automotive Intake Manifold', designer: 'TurboWorks', price: 79.99, category: 'automotive', image: 'https://images.unsplash.com/photo-1581093458791-9d8e8e0e5b2b?q=80&w=1600&auto=format&fit=crop' },
//     { id: 4, title: 'Ergonomic Phone Stand', designer: 'ConsumerCraft', price: 0, category: 'consumer', image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1600&auto=format&fit=crop', isFree: true },
//     { id: 5, title: 'Industrial Robotic Gripper', designer: 'RoboSystems', price: 149.99, category: 'industrial', image: 'https://images.unsplash.com/photo-1581093198932-27fd85e9ac1e?q=80&w=1600&auto=format&fit=crop' },
//     { id: 6, title: 'Architectural Model Kit', designer: 'UrbanDesigns', price: 39.99, category: 'architecture', image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop' },
//   ]

//   // Sample user orders data
//   const userOrders = [
//     { id: 'ORD-2023-001', date: '2023-12-15', product: 'Industrial Robotic Gripper', status: 'Completed', price: 149.99 },
//     { id: 'ORD-2023-002', date: '2024-01-20', product: 'Modular Drone Frame', status: 'In Production', price: 49.99 },
//     { id: 'ORD-2024-003', date: '2024-02-05', product: 'Custom Part Production', status: 'Processing', price: 299.99 },
//   ]

//   // Sample user designs data
//   const userDesigns = [
//     { id: 'DSG-001', title: 'Custom Keyboard Case', date: '2023-11-10', downloads: 128, price: 19.99 },
//     { id: 'DSG-002', title: 'Modular Storage System', date: '2024-01-05', downloads: 57, price: 0, isFree: true },
//   ]

//   // Filter designs by category
//   const filteredDesigns = activeCategory === 'all' 
//     ? designs 
//     : designs.filter(design => design.category === activeCategory)

//   return (
//     <main className="text-white">

//       {/* UPLOAD PART FOR PRODUCTION */}
//       <section id="production" className="relative py-20 md:py-28">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-[#130d0d] to-[#0f0b0b]" />
//           <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
//         </div>
//         <div className="container mx-auto px-8">
//           <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Upload Part for Production</motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//             {/* Left Column - Illustration */}
//             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative">
//               <div className="aspect-square rounded-xl overflow-hidden">
//                 <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://ik.imagekit.io/0s6dxbeae/pexels-photo-7480239.jpeg?updatedAt=1756057740972">
//                   <source src="https://videos.pexels.com/video-files/3731906/3731906-uhd_2560_1440_25fps.mp4" type="video/mp4" />
//                 </video>
//                 <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
//               </div>
//                 <div className="text-black  absolute -bottom-5 -right-5 bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-xl p-4 shadow-2xl max-w-xs">
//                 <h3 className="text-lg font-['scrib'] mb-2">Industrial-Grade Production</h3>
//                 <p className="font-['scrib'] text-sm text-[#B91C1C] ">Our advanced 3D printing facilities can produce your parts with precision and reliability at scale.</p>
//               </div>
//             </motion.div>

//             {/* Right Column - Upload Form */}
//             <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
//               <div className="bg-white/5 font-['scrib'] backdrop-blur-xl border border-red-500/20 rounded-xl p-6 shadow-2xl">
//                 <h3 className="text-xl font-['test'] mb-4">Request a Production Quote</h3>
//                 <p className="text-gray-300 mb-6">Upload your model and select specifications to receive a production quote.</p>

//                 <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//                   <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-primary/50 transition cursor-pointer">
//                     <Upload className="w-8 h-8 mx-auto mb-2 text-gray-300" />
//                     <p className="text-gray-300 mb-1">Upload your 3D model</p>
//                     <p className="text-xs text-gray-400">Supports STL, OBJ, STEP (Max 100MB)</p>
//                     <input type="file" className="hidden" />
//                     <button className="mt-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm transition">Browse Files</button>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm text-gray-300 block mb-1">Material</label>
//                       <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" required>
//                         <option value="">Select material</option>
//                         <option>PLA</option>
//                         <option>ABS</option>
//                         <option>PETG</option>
//                         <option>Nylon</option>
//                         <option>TPU</option>
//                         <option>Resin (Standard)</option>
//                         <option>Resin (Engineering)</option>
//                         <option>Metal (Aluminum)</option>
//                         <option>Metal (Steel)</option>
//                         <option>Metal (Titanium)</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="text-sm text-gray-300 block mb-1">Finish</label>
//                       <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" required>
//                         <option value="">Select finish</option>
//                         <option>As Printed</option>
//                         <option>Sanded</option>
//                         <option>Polished</option>
//                         <option>Painted</option>
//                         <option>Anodized</option>
//                         <option>Plated</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-sm text-gray-300 block mb-1">Quantity</label>
//                       <input type="number" min="1" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="1" required />
//                     </div>
//                     <div>
//                       <label className="text-sm text-gray-300 block mb-1">Priority</label>
//                       <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" required>
//                         <option value="">Select priority</option>
//                         <option>Standard (7-10 days)</option>
//                         <option>Express (3-5 days)</option>
//                         <option>Rush (24-48 hours)</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-sm text-gray-300 block mb-1">Special Instructions (Optional)</label>
//                     <textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary h-20" placeholder="Any specific requirements or notes..."></textarea>
//                   </div>

//                   <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-monumentExtended px-4 py-3 rounded-md transition">Request Quote</button>
//                 </form>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>


//     </main>
//   )
// }

















'use client'

import { useState, useEffect } from 'react'
import STLViewer from '../components/STLViewer'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Search, Filter, Upload, ShoppingCart, User, CheckCircle2, Download, ArrowRight, Star, Clock, Tag, Grid3X3, ListFilter } from 'lucide-react'

export default function MarketplacePage() {

  const [file, setFile] = useState(null)

  const [loading, setLoading] = useState(false)
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null)

  useEffect(() => {
  return () => {
    if (uploadedFileUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(uploadedFileUrl)
    }
  }
}, [uploadedFileUrl])



  const handleSubmit = async (e) => {
  e.preventDefault()

  if (!file) {
    alert("Please select a file first")
    return
  }

  setLoading(true)

  const formData = new FormData(e.target)

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData
  })

  const data = await res.json()

  alert(data.message)

  // ✅ SET STL PREVIEW URL HERE
  if (data.fileUrl) {
    setUploadedFileUrl(data.fileUrl)
  }

  // reset UI
  setFile(null)
  e.target.reset()
  setLoading(false)
}





  const [activeCategory, setActiveCategory] = useState('all')

  // Sample design data
  const designs = [
    { id: 1, title: 'Modular Drone Frame', designer: 'AeroDesigns', price: 49.99, category: 'aerospace', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Medical Implant Prototype', designer: 'MedTech Solutions', price: 129.99, category: 'medical', image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b4b9?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Automotive Intake Manifold', designer: 'TurboWorks', price: 79.99, category: 'automotive', image: 'https://images.unsplash.com/photo-1581093458791-9d8e8e0e5b2b?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Ergonomic Phone Stand', designer: 'ConsumerCraft', price: 0, category: 'consumer', image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1600&auto=format&fit=crop', isFree: true },
    { id: 5, title: 'Industrial Robotic Gripper', designer: 'RoboSystems', price: 149.99, category: 'industrial', image: 'https://images.unsplash.com/photo-1581093198932-27fd85e9ac1e?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'Architectural Model Kit', designer: 'UrbanDesigns', price: 39.99, category: 'architecture', image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop' },
  ]

  // Sample user orders data
  const userOrders = [
    { id: 'ORD-2023-001', date: '2023-12-15', product: 'Industrial Robotic Gripper', status: 'Completed', price: 149.99 },
    { id: 'ORD-2023-002', date: '2024-01-20', product: 'Modular Drone Frame', status: 'In Production', price: 49.99 },
    { id: 'ORD-2024-003', date: '2024-02-05', product: 'Custom Part Production', status: 'Processing', price: 299.99 },
  ]

  // Sample user designs data
  const userDesigns = [
    { id: 'DSG-001', title: 'Custom Keyboard Case', date: '2023-11-10', downloads: 128, price: 19.99 },
    { id: 'DSG-002', title: 'Modular Storage System', date: '2024-01-05', downloads: 57, price: 0, isFree: true },
  ]

  // Filter designs by category
  const filteredDesigns = activeCategory === 'all'
    ? designs
    : designs.filter(design => design.category === activeCategory)

  return (
    <main className="text-white">

      {/* UPLOAD PART FOR PRODUCTION */}
      <section id="production" className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#130d0d] to-[#0f0b0b]" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Upload Part for Production</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Illustration */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://ik.imagekit.io/0s6dxbeae/pexels-photo-7480239.jpeg?updatedAt=1756057740972">
                  <source src="https://videos.pexels.com/video-files/3731906/3731906-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
              </div>
              <div className="text-black  absolute -bottom-5 -right-5 bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-xl p-4 shadow-2xl max-w-xs">
                <h3 className="text-lg font-['scrib'] mb-2">Industrial-Grade Production</h3>
                <p className="font-['scrib'] text-sm text-[#B91C1C] ">Our advanced 3D printing facilities can produce your parts with precision and reliability at scale.</p>
              </div>
            </motion.div>

            {/* Right Column - Upload Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className="bg-white/5 font-['scrib'] backdrop-blur-xl border border-red-500/20 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-['test'] mb-4">Request a Production Quote</h3>
                <p className="text-gray-300 mb-6">Upload your model and select specifications to receive a production quote.</p>

                <form
                  onSubmit={handleSubmit}

                  className="space-y-4"
                  encType="multipart/form-data"
                >



                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-primary/50 transition cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-gray-300 mb-1">Upload your 3D model</p>
                    <p className="text-xs text-gray-400">Supports STL, OBJ, STEP (Max 100MB)</p>
                    <input
                      type="file"
                      name="file"
                      id="fileUpload"
                      className="hidden"
                      accept=".stl,.obj,.step,.fbx,.gltf"
                      onChange={(e) => {
  const selectedFile = e.target.files[0]
  setFile(selectedFile)

  if (selectedFile) {
    const localUrl = URL.createObjectURL(selectedFile)
    setUploadedFileUrl(localUrl)
  }
}}

                    />



                    <label
                      htmlFor="fileUpload"
                      className="inline-block mt-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm transition cursor-pointer"
                    >
                      Browse Files
                    </label>
                    {file && (
                      <p className="text-green-400 text-sm mt-2">
                        Selected: {file.name}
                      </p>
                    )}


                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Material</label>
                      <select
                        name="material"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >

                        <option value="">Select material</option>
                        <option>PLA</option>
                        <option>ABS</option>
                        <option>PETG</option>
                        <option>Nylon</option>
                        <option>TPU</option>
                        <option>Resin (Standard)</option>
                        <option>Resin (Engineering)</option>
                        <option>Metal (Aluminum)</option>
                        <option>Metal (Steel)</option>
                        <option>Metal (Titanium)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Finish</label>
                      <select
                        name="finish"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >

                        <option value="">Select finish</option>
                        <option>As Printed</option>
                        <option>Sanded</option>
                        <option>Polished</option>
                        <option>Painted</option>
                        <option>Anodized</option>
                        <option>Plated</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Quantity</label>
                      <input
                        name="quantity"
                        type="number"
                        min="1"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="1"
                        required
                      />

                    </div>
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Priority</label>
                      <select
                        name="priority"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >

                        <option value="">Select priority</option>
                        <option>Standard (7-10 days)</option>
                        <option>Express (3-5 days)</option>
                        <option>Rush (24-48 hours)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 block mb-1">Special Instructions (Optional)</label>
                    <textarea
                      name="instruction"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary h-20"
                      placeholder="Any specific requirements or notes..."
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-secondary text-white font-monumentExtended px-4 py-3 rounded-md transition disabled:opacity-50"
                  >
                    {loading ? "Uploading..." : "Request Quote"}
                  </button>

                </form>
              </div>




            </motion.div>
          </div>
              {uploadedFileUrl && (
  <div className="mt-10 -ml-[5vw] w-[97vw]">
    <h3 className="text-xl mb-4">3D Model Preview</h3>
    <STLViewer fileUrl={uploadedFileUrl} />
  </div>
)}
        </div>
      </section>


    </main>
  )
}



