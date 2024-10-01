import { MainLayoutProps } from "@/app/types/common";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
