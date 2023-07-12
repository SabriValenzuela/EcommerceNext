import BarraNavegacion from "./componentes/barraNavegacion";
import { Card } from "./componentes/cardProductos";
import CarritoCompras from "./componentes/carritoCompras";
import { Navbar } from "./componentes/navbar/page";
import PiePagina from "./componentes/piePagina";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <BarraNavegacion />
        <CarritoCompras />
        {children}
        <PiePagina />
      </body>
    </html>
  );
}
