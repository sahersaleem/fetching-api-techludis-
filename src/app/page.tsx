import Books_section from "@/components/widget/Books_section";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/widget/Hero";
import Navbar from "@/components/shared/Navbar";
import Categories from "@/components/widget/Categories";


export default function Home() {
  return (
   <div>
      <Navbar/>
       <Hero/>
       <Books_section/>
       <Categories/>
       <Footer/>
   </div>
  );
}
