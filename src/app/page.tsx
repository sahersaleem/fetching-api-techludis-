import Books_section from "@/components/Books_section";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <div>
      <Navbar/>
       <Hero/>
       <Books_section/>
       <Footer/>
   </div>
  );
}
