import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 pb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">About Landlux Realty</h4>
            <p className="text-sm">
              Landlux Realty specializes in providing premium land real estate
              solutions to our clients. With a focus on integrity and
              professionalism, we strive to exceed expectations and deliver
              exceptional service tailored to individual needs.
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 Landlux Street, Cityville, Country</p>
            <p className="text-sm">Email: info@landluxrealty.com</p>
            <p className="text-sm">Phone: +123-456-7890</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
              <ul className="flex justify-center space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-gray-900 py-8 rounded-b-lg">
        <div className="flex justify-center">
          <p className="text-sm">
            &copy; 2024 Landlux Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
