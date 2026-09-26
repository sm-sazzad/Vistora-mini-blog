import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Category from "@/Components/Category";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Banner />
        <Category />
      </main>

      <Footer />
    </>
  );
};

export default Home;
