import "../../public/assets/css/style.css";
import { Poppins } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Owent Ovandy Portofolio",
  description: "Personal Portfolio website",
  icons: {
    icon: "assets/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </html>
  );
}
