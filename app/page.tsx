import Hero from "@/components/Hero";
import Aboutme from "@/components/global/AboutMe";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import  Skills  from "@/components/global/Skills";

export default function Home() {
  return (
   <main  className=" bg-zinc-900 ">
    <div className=" bg-zinc-900 " >
      <Hero />
      <div className=" h-[100vh]">
      <Header />
      <Skills />
      <Aboutme />
      <Footer/>

      </div>
    </div>
   </main>
  );
}
