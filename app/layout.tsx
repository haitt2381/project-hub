import { ReactChildren } from "@/common.types";
import '@/app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Project hub',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <main>
        { children }
      </main>
      <Footer/>
      </body>
    </html>
  )
}
