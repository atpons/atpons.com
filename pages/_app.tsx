import '../styles/globals.css'
import Navbar from "../components/navbar";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="pb-6">
        <Component {...pageProps} />
      </main>
      <footer className="border-t border-gray-200 pt-6">
        <p className="text-center text-xs">Powered by Next.js</p>
      </footer>
    </div>
  )
}

export default MyApp
