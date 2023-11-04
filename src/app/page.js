import { Header } from "@/app/components/Header";
import Footer from "./components/Footer";
import Inicio from "./inicio/page";

export default function Home() {
  return (
    <>
      <Header isAuthenticated={false} />
      <Inicio/>
      <Footer/>
    </>
  );
}