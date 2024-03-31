import Navigation from "@/app/(app)/Navigation";

const AppLayout = ({ children }) => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation/>

      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
