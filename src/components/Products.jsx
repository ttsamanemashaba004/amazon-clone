import Product from "./Product";
import "./Products.css";

function Products() {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16GB DDR5, 1TB PCIe Gen4 SSD, Wi-Fi 6E, Windows 11, G614JV-AS74"
          image="https://m.media-amazon.com/images/I/81GrCeuCzxL._AC_UY218_.jpg"
          rating="4"
          price="1200"
        />
        <Product
          id="1"
          title="CLX Set Gaming PC - Intel Core i9 12900KF 3.2GHz, GeForce RTX 4060 Ti, 1TB NVMe M.2 SSD, 4TB HDD, 32GB DDR4 RGB Memory, 240mm AIO, Windows 11 Home, Black"
          image="https://m.media-amazon.com/images/I/71A8cat9MuL._AC_UY218_.jpg"
          rating="5"
          price="1699"
        />
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Sony INZONE M10S 27” OLED QHD (2560x1440) 480Hz 0.03ms GTG NVIDIA G-SYNC Compatible Gaming Monitor DisplayHDR 400, Anti-Glare, DisplayPort 2.1 (UHBR10), VRR HDMI 2.1, USB, Tilt/Swivel/Height"
          image="https://m.media-amazon.com/images/I/61VHpKpFp0L._AC_UY218_.jpg"
          rating="4.5"
          price="899"
        />
        <Product
          id="1"
          title="Xbox One S 1TB Console - Fortnite Bundle (Discontinued) (Renewed)"
          image="https://m.media-amazon.com/images/I/61afS07533L._AC_UY218_.jpg"
          rating="4.1"
          price="369.99"
        />
        <Product
          id="1"
          title="WD 20TB Elements Desktop External Hard Drive, USB 3.0 drive for plug-and-play storage - WDBWLG0200HBK-NESN"
          image="https://m.media-amazon.com/images/I/71MDGnNGWYL._AC_UY218_.jpg"
          rating="4.5"
          price="317"
        />
      </div>
      <div className="products_row">
        <Product
          id="1"
          title="Womier S-K80 75% Keyboard with Color Multimedia Display Mechanical Gaming Keyboard, Wired Hot Swappable Keyboard, Gasket Mount RGB Custom Keyboard, Pre-lubed Stabilizer for Mac/Win, Black"
          image="https://m.media-amazon.com/images/I/71duf0rTDqL._AC_UY218_.jpg"
          rating="4.6"
          price="69.99"
        />
      </div>
    </>
  );
}

export default Products;
