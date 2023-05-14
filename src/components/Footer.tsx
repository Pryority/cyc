import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-200 mt-16">
      <div className="container mx-auto w-full py-12 px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="widget">
            <h5 className="text-lg font-medium mb-4">Memberships</h5>
            <div className="title-block6"></div>
            <div className="text-sm mb-4">
              <p className="mb-2">
                To inquire about membership, email
                membership@collingwoodyachtclub.com
              </p>
            </div>
          </div>
          <div className="widget">
            <h5 className="text-lg font-medium mb-4">Collingwood Yacht Club</h5>
            <div className="title-block6"></div>
            <ul className="contact-widget text-sm mb-4">
              <li className="cw-address">P.O. Box 56 Collingwood ON L9Y 3Z4</li>
              <li className="cw-phone">
                705-444-3664<span></span>
              </li>
              <li className="cw-email">
                info@collingwoodyachtclub.com<span></span>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h5 className="text-lg font-medium mb-4">Menu</h5>
            <div className="title-block6"></div>
            <ul className="menu text-sm mb-4">
              <li className="menu-item">
                <a href="/mission-statement">Mission Statement</a>
              </li>
              <li className="menu-item">
                <a href="https://www.weather.gc.ca/marine/forecast_e.html?mapID=10&amp;siteID=05505#forecast">
                  Latest Weather Reports
                </a>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h5 className="text-lg font-medium mb-4">Follow Us</h5>
            <div className="title-block6"></div>
            <div className="flex items-center">
              <a
                href="https://www.facebook.com/collingwoodyachtclub/"
                target="_blank"
                className="mr-4"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col w-full md:flex-row items-center md:justify-center justify-between">
          <p className="text-sm">
            © 2023 Collingwood Yacht Club. All Rights Reserved
          </p>
          <div className="footer-social-icons-wrapper mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/collingwoodyachtclub/"
              target="_blank"
              className="mr-4"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
