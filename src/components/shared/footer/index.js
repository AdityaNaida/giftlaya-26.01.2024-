import { space } from "postcss/lib/list";
import Logo from "../logo";
import FooterCopyRight from "../footer-copyright";

const decorationThemes = [
  "New Year Decoration",
  "Kids Birthday Decoration",
  "Birthday Decoration",
  "Premium Decorations",
  "Love Theme Decorations",
  "Ring Setup Decoration",
];
const otherDecorationThemes = [
  "Xmas Decoration",
  "Bride To Be Decoration",
  "Festival Decoration",
  "Baby Shower Decorations",
  "Office Decorations",
  "Anniversary Decoration",
];

const socialMediaLinks = [
  {
    icon: "/images/social-media/facebook.svg",
    link: "https://www.facebook.com/balloondekor",
  },
  {
    icon: "/images/social-media/instagram.svg",
    link: "https://www.instagram.com/balloondekor/",
  },
  {
    icon: "/images/social-media/x.svg",
    link: "https://twitter.com/balloondekor",
  },
  {
    icon: "/images/social-media/linkedin.svg",
    link: "https://www.linkedin.com/company/balloondekor/",
  },
  {
    icon: "/images/social-media/youtube.svg",
    link: "https://www.youtube.com/channel/UCy2j3h5q7FZ1x1Q4g9s4z4Q",
  },
  {
    icon: "/images/social-media/pinterest.svg",
    link: "https://in.pinterest.com/balloondekor/",
  },
];

const paymentMethods = [
  {
    icon: "/images/payment-methods/visa.svg",
  },
  {
    icon: "/images/payment-methods/mastercard.svg",
  },
  {
    icon: "/images/payment-methods/american-express.svg",
  },
  {
    icon: "/images/payment-methods/upi.svg",
  },
];

const Footer = () => {
  return (
    <>
      <footer className=" border-t border-b py-10">
        <div className="container-main  md:flex-row flex-wrap flex-col flex gap-14">
          <div className="flex-1 min-w-64">
            <Logo />
            <p className="text-medium text-gray-700">
              BalloonDekor is a contemporary brand crafted exclusively for your
              delight and celebration.
            </p>
          </div>
          <div className="flex-1 min-w-64">
            <h2 className="border-b-2 pb-1 border-medium-purple w-fit text-xl font-semibold">
              Decorations
            </h2>
            <ul className="mt-4 space-y-2 min-w-64">
              {decorationThemes.map((theme, index) => {
                return (
                  <li key={index} className="py-1">
                    <a
                      href="#"
                      className="text-medium group  flex items-center  text-gray-700"
                    >
                      <span className="group-hover:underline">{theme}</span>
                      <i class="bx bx-chevron-right transition-transform  group-hover:transform-gpu group-hover:translate-x-2" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 min-w-64">
            <h2 className="border-b-2 pb-1 border-medium-purple w-fit text-xl font-semibold">
              Other Decorations
            </h2>
            <ul className="mt-4 space-y-2">
              {otherDecorationThemes.map((theme, index) => {
                return (
                  <li key={index} className="py-1">
                    <a
                      href="#"
                      className="text-medium group  flex items-center  text-gray-700"
                    >
                      <span className="group-hover:underline">{theme}</span>
                      <i class="bx bx-chevron-right transition-transform  group-hover:transform-gpu group-hover:translate-x-2" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 md:px-8 min-w-64">
            <div className="mb-8">
              <h2 className="text-center font-medium mb-2 text-gray-700">
                Follow us
              </h2>
              <div className="flex justify-center flex-wrap">
                {socialMediaLinks.map((socialMedia, index) => {
                  return (
                    <a
                      key={index}
                      href={socialMedia.link}
                      className="inline-block mr-4"
                    >
                      <img src={socialMedia.icon} className="w-8" alt="" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-center font-medium mb-2 text-gray-700">
                Payment Methods
              </h2>
              <div className="flex items-center justify-center">
                {paymentMethods.map((paymentMethod, index) => {
                  return (
                    <span key={index} className="inline-block mr-4">
                      <img src={paymentMethod.icon} className="w-8" alt="" />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyRight />
    </>
  )
};

export default Footer;
