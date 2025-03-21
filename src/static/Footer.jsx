import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="w-full">
            <div className="w-full flex items-center gap-2">
            <span className="bg-white rounded-full p-1 ">
                    <img src={logo} alt=""  className="size-10 object-contain"/>
                </span>
            <h2 className="text-3xl font-bold text-primary">  MedArk</h2>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Bridging the gap between hospitals and top-tier medical professionals.
            </p>
            <p className="mt-3 text-gray-400">
              <strong>Address:</strong> 123 Healthcare St, New York, USA
            </p>
            <p className="text-gray-400">
              <strong>Email:</strong> contact@mediark.com
            </p>
            <p className="text-gray-400">
              <strong>Call:</strong> +1 234 567 890
            </p>
          </div>

          {/* For Hospitals */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">For Hospitals</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Post Job Openings</li>
              <li className="hover:text-white transition">Browse Medical Staff</li>
              <li className="hover:text-white transition">Manage Applications</li>
              <li className="hover:text-white transition">Hospital Dashboard</li>
              <li className="hover:text-white transition">Subscription Plans</li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">For Professionals</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Find Jobs</li>
              <li className="hover:text-white transition">Upload Resume</li>
              <li className="hover:text-white transition">Job Alerts</li>
              <li className="hover:text-white transition">Career Resources</li>
              <li className="hover:text-white transition">Profile Management</li>
            </ul>
          </div>

          {/* Quick Links & Socials */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">FAQs</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <FaFacebookF size={20} className="text-gray-400 hover:text-white cursor-pointer transition" />
              <FaTwitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition" />
              <FaInstagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition" />
              <FaYoutube size={20} className="text-gray-400 hover:text-white cursor-pointer transition" />
              <FaLinkedin size={20} className="text-gray-400 hover:text-white cursor-pointer transition" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MedArk. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
