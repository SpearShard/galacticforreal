import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Galactic 3D - Professional 3D Printing Services',
  description: 'Professional 3D printing services for all your needs. High-precision prints, custom designs, and rapid prototyping.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
