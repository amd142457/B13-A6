import React from "react";
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="#1877F2"
    viewBox="0 0 24 24"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Fotter = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content p-20">
        <nav>
          <h2 className="text-3xl font-bold text-white">DigiTools</h2>
          <p>
            Premium digital tools for creators,<br></br> professionals, and
            businesses. Work smarter
            <br /> with our suite of powerful tools .
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className=" flex gap-2.5">
            <a href="">
              <img src="/src/assets/new/Instagram.png" alt="" />
            </a>
            <a href="">
              <img src="/src/assets/new/Instagram.png" alt="" />
            </a>
            <a href="">
              <img src="/src/assets/new/Twitter.png" alt="" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Fotter;
