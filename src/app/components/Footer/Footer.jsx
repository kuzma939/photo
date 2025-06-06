
import { FaFacebook, FaInstagram,  FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "../../Functions/useLanguage"; 

export default function Footer() {
  const {  translateList } = useLanguage(); 
  
  const menuItems = translateList("home", "Footer");
  return (
    <footer className="bg-black text-white section-container">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold mb-8 text-left px-4 sm:px-6">PICK BAEST MOMENTS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-gray-300">
          <div className="border-b sm:border-b-0 md:border-r border-gray-300 px-4 sm:px-6 py-6">
            <p className="text-sm mb-2">
              <a href="tel:+34654909621" className="hover:underline">
              +34 65 490 96 21
              </a>
            </p>
            <p className="text-sm">
              <a href="latoreatelier01@gmail.com" className="hover:underline">
              photographbusiness01@gmail.com
              </a>
            </p>
          </div>
          <div className="border-b sm:border-b-0 md:border-r border-gray-300 px-4 sm:px-6 py-6">
          <p className="text-sm">
              {menuItems[0]}<br />
              {menuItems[1]} &quot;{menuItems[2]}&quot;
          </p>

          </div>
          <div className="flex justify-start sm:justify-end md:justify-center items-center space-x-4 px-4 sm:px-6 py-6">
            <a href="https://www.facebook.com/share/1ASGefof2k/" target="_blank" rel="noopener noreferrer"  aria-label="Share on Facebook" >
              <FaFacebook className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/pic_best_moments" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Instagram">
              <FaInstagram className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
          
           <a href="https://telegram.me/PBMBarcelona" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram">
              <FaTelegramPlane className="w-6 h-6 text-white hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
