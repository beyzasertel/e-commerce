import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
