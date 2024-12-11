import React from "react";
import "./Products.css";
import Product from "./Product/Product";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="A36 Gaming Headset with Microphone for Pc, Xbox One Series X/s, Ps4, Ps5, Switch, Stereo Wired Noise Cancelling Over-Ear Headphones with Mic for Computer, Laptop, Mac, Nintendo, Gamer (Blue)"
          image="https://m.media-amazon.com/images/I/61lUzRBFprL._AC_UY218_.jpg"
          rating={4.5}
          price="21.99"
        />
        <Product
          id="2"
          title="HyperX Alloy Origins Core Mechanical Gaming Keyboard PBT Keycaps Tenkeyless TKL Blue Switch Clicky LED RGB Backlight Playstation Xbox Licensed for PC, PS5, PS4, Xbox Series X|S, Xbox One, Desk Setup"
          image="https://m.media-amazon.com/images/I/71GhkxT0dML._AC_UY218_.jpg"
          rating={4.3}
          price="43.99"
        />
        <Product
          id="3"
          title="Xbox Series X 1TB SSD Console - Includes Xbox Wireless Controller - Up to 120 frames per second - 16GB RAM 1TB SSD - Experience True 4K Gaming - Xbox Velocity Architecture"
          image="https://m.media-amazon.com/images/I/616klipzdtL._AC_UY218_.jpg"
          rating={5}
          price="479.99"
        />
        <Product
          id="4"
          title="ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16GB DDR5, 1TB PCIe Gen4 SSD, Wi-Fi 6E, Windows 11, G614JV-AS74"
          image="https://m.media-amazon.com/images/I/81GrCeuCzxL._AC_UY218_.jpg"
          rating={3.8}
          price="1281.99"
        />
      </div>
      <div className="products_row">
      <Product
          id="5"
          title="Xbox Elite Series 2 Core Wireless Gaming Controller – White – Xbox Series X|S, Xbox One, Windows PC, Android, and iOS"
          image="https://m.media-amazon.com/images/I/61tncw0i36L._AC_UY218_.jpg"
          rating={3}
          price="98.99"
        />
        <Product
          id="6"
          title="Head Strap Compatible with Oculus Quest 2,Meta Quest 2 Accessories Adjustable Elite Strap Replacement for Enhanced Comfort Support and Gaming Immersion in VR (Without Battery)"
          image="https://m.media-amazon.com/images/I/61DIzX6jpKL._AC_UY218_.jpg"
          rating={4.7}
          price="19.15"
        />
      </div>
      <div className="products_row">
      <Product
          id="7"
          title="MSI Katana 15 15.6” 165Hz QHD Gaming Laptop: Intel Core i7-13620H, NVIDIA Geforce RTX 4070, 16GB DDR5, 1TB NVMe SSD, Cooler Boost 5, Win 11: Black B13VGK-2000US"
          image="https://m.media-amazon.com/images/I/81-3FfpcwML._AC_UY218_.jpg"
          rating={4.5}
          price="1249.99"
        />
      </div>
      <div className="products_row">
      <Product
          id="8"
          title="AULA F75 75% Wireless Mechanical Keyboard,Gasket Hot Swappable Custom Keyboard,Pre-lubed Greywood Switch RGB Backlit Gaming Keyboard,2.4GHz/Type-C/BT5.0 Mechanical Keyboard (Salt White Blue)"
          image="https://m.media-amazon.com/images/I/61r4lrp65bL._AC_UL320_.jpg"
          rating={4.5}
          price="78.99"
        />
        <Product
          id="9"
          title="Anda Seat Kaiser 3 Large Gaming Chair for Adults - Ergonomic Black Leather Gaming Chairs with Lumbar Support, Comfortable Neck Support Office Chair"
          image="https://m.media-amazon.com/images/I/71Pxt9QBHYL._AC_SX679_.jpg"
          rating={3.3}
          price="429"
        />
        <Product
          id="10"
          title="7 Inch Ironman MK46 Action Figure (1/10 Scale) with Lots of Accessories,Exquisite Painting Collectible Toy"
          image="https://m.media-amazon.com/images/I/71PaIrmwgfL._AC_SX679_.jpg"
          rating={3}
          price="44.88"
        />
      </div>
    </>
  );
};

export default Products;
