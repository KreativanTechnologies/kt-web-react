import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] =
    useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] =
    useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] =
    useState(false);

  const modalRef = useRef(null);
  const registrationModalRef = useRef(null);

  const navigate = useNavigate();

  const industries = [
    { name: "Tranning", link: "/Industry/Tranning" },
    { name: "E-commerce", link: "/Industry/ecommerce" },
    { name: "Education", link: "/Industry/education" },
    { name: "Fashion&Lifestyle", link: "/Industry/fashion&lifestyle" },
    { name: "Finance", link: "/Industry/finance" },
    { name: "Food&Beverage", link: "/Industry/food&beverage" },
    { name: "Healthcare", link: "/Industry/healthCare" },
    { name: "Hospitality&Tourism", link: "/Industry/hospitality&tourism" },
    { name: "Logistics", link: "/Industry/logistics" },
    { name: "Manufacturing", link: "/Industry/manufacturing" },
    { name: "Media&Entertainment", link: "/Industry/media&entertainment" },
    { name: "Real-Estate", link: "/Industry/realEstate" },
    { name: "Sports&Fitness", link: "/Industry/sports&fitness" },
    { name: "Technology&IT", link: "/Industry/technology&it" },
  ];

  const services = [
    { name: "Web Development", link: "/services/webdevelopment" },
    { name: "App Development", link: "/services/appdevelopment" },
    { name: "Digital Marketing", link: "/services/digital" },
    { name: "UI/UX Design", link: "/services/graphicdesgining" },
  ];

  const closeModal = () => {
    setIsContactModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (isContactModalOpen || isRegistrationModalOpen) {
      document.body.style.overflow = "hidden";
      setIsOpen(false);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isContactModalOpen, isRegistrationModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isContactModalOpen
      ) {
        closeModal();
      }

      if (
        registrationModalRef.current &&
        !registrationModalRef.current.contains(event.target) &&
        isRegistrationModalOpen
      ) {
        closeRegistrationModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContactModalOpen, isRegistrationModalOpen]);

  return (
    <div className="w-full fixed top-0 h-20 md:h-[5vw] font-bold backdrop-blur-sm z-[999] ">
      <div className="w-full h-full flex justify-between items-center">
        {/* Logo */}
        <div className="w-full h-full flex items-center md:justify-center justify-start pl-4 md:pl-0">
          <Link to="/" className="hover:cursor-pointer">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-40 md:w-[20vw]"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="w-full h-full hidden md:flex items-center justify-evenly text-[1.2vw] font-semibold">
          <Link to="/">
            <p className="hover:cursor-pointer hover:text-yellow-600">
              Home
            </p>
          </Link>

          <Link to="/aboutUs">
            <p className="hover:cursor-pointer hover:text-yellow-600">
              About
            </p>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className="flex items-center hover:cursor-pointer hover:text-yellow-600">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {isServicesDropdownOpen && (
              <div className="absolute left-0 -ml-[4vw] bg-transparent p-[1vw] w-[15vw] rounded-md">
                <div className="rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
                  <div className="grid grid-cols-1 font-normal p-[1vw] gap-[0.3vw]">
                    {services.map((service, index) => (
                      <Link to={service.link} key={index}>
                        <p className="block text-[1vw] hover:text-yellow-600">
                          {service.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsIndustryDropdownOpen(true)}
            onMouseLeave={() => setIsIndustryDropdownOpen(false)}
          >
            <button className="flex items-center hover:cursor-pointer hover:text-yellow-600">
              Industries
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {isIndustryDropdownOpen && (
              <div className="absolute left-0 -ml-[20vw] bg-transparent p-4 w-[40vw] rounded-md">
                <div className="rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
                  <div className="grid grid-cols-3 font-normal p-[1vw] gap-[0.3vw]">
                    {industries.map((industry, index) => (
                      <Link to={industry.link} key={index}>
                        <p className="block text-[1vw] hover:text-yellow-600">
                          {industry.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/Training">
            <p className="hover:cursor-pointer hover:text-yellow-600">
              Training
            </p>
          </Link>
        </div>

        {/* Desktop Buttons */}
     <div className="w-full h-full hidden md:flex items-center justify-center gap-2">
  <div className="flex gap-3">
    
    <Link
      to="/registration"
      title="Register"
      className="
      py-3 px-6 text-[1vw] rounded-full
      bg-gradient-to-r from-yellow-300 to-yellow-500
      text-black font-medium
      shadow-lg
      hover:from-yellow-400 hover:to-yellow-600
      hover:scale-105
      transition-all duration-300
      "
    >
      Register
    </Link>

    <button
      onClick={() => setIsContactModalOpen(true)}
      className="
      py-3 px-6 text-[1vw] rounded-full
      bg-gradient-to-r from-yellow-300 to-yellow-500
      text-black font-medium
      shadow-lg
      hover:from-yellow-400 hover:to-yellow-600
      hover:scale-105
      transition-all duration-300
      "
    >
      Contact Us
    </button>

  </div>
</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-yellow-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <Link to="/">
              <p className="hover:cursor-pointer hover:text-yellow-600">
                Home
              </p>
            </Link>

            <Link to="/aboutUs">
              <p className="hover:cursor-pointer hover:text-yellow-600">
                About
              </p>
            </Link>

            {/* Mobile Services */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className="flex items-center hover:cursor-pointer hover:text-yellow-600"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesDropdownOpen && (
                <div className="mt-2 grid grid-cols-2">
                  {services.map((service, index) => (
                    <Link to={service.link} key={index}>
                      <p className="block font-normal text-[4vw] hover:text-[#1ca4dc]">
                        {service.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Training */}
            <div className="relative">
              <button
                onClick={() => navigate("/Training")}
                className="flex items-center hover:cursor-pointer hover:text-[#1ca4dc]"
              >
                Training
              </button>
            </div>

            {/* Mobile Buttons */}
          <div className="flex items-center gap-2">
  
  <button
    onClick={() => navigate("/registration")}
    className="
    flex items-center justify-center gap-2
    py-2.5 px-4 w-auto
    text-xs font-semibold text-black
    rounded-full
    bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
    shadow-[0_0_20px_rgba(250,204,21,0.35)]
    hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]
    hover:scale-105
    transition-all duration-300
    "
  >
    <UserPlus className="h-4 w-4" />
    Register
  </button>

  <button
    onClick={() => setIsContactModalOpen(true)}
    className="
    flex items-center justify-center gap-2
    py-2.5 px-4 w-auto
    text-xs font-semibold text-black
    rounded-full
    bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
    shadow-[0_0_20px_rgba(250,204,21,0.35)]
    hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]
    hover:scale-105
    transition-all duration-300
    "
  >
    Contact Us
  </button>

</div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[1000]">
          <div
            className="w-[80%] md:w-[40vw] overflow-y-auto h-[90%] rounded-3xl"
            ref={modalRef}
          >
            <ContactPage
              showImage={false}
              Xmark={true}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {isRegistrationModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[1000]">
          <div
            className="w-[80%] md:w-[40vw] overflow-y-auto h-[90%] rounded-3xl"
            ref={registrationModalRef}
          >
            <RegistrationForm
              showImage={false}
              Xmark={true}
              closeModal={closeRegistrationModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;