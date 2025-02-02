
import { Work_Sans, Trirong } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";


const trirong = Trirong({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-trirong",
});




const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
})


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${trirong.variable} antialiased`}
      >

        <Navbar />
        {children}

				<Footer />
			</body>
		</html>
	);
}
