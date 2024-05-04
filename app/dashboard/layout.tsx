import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="md:w-64 fixed hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
