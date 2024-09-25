import NotiIcon from "assets/png/ic_bell.png";
import CartIcon from "assets/png/ic_cart_bag.png";
import OrderIcon from "assets/png/ic_order_history.png";
import WalletIcon from "assets/png/ic_wallet.png";
import LocationIcon from "assets/png/ic_location.png";
import ContactIcon from "assets/png/ic_contactus.png";
import SupportIcon from "assets/png/ic_support.png";
import LogoutIcon from "assets/png/ic_logout.png";
export const ROOT = "/";
export const ROUTE_LOGIN = "/login";
export const ROUTE_SIGNUP = "/signup";
export const ROUTE_ABOUT_US = "/about-us";
export const ROUTE_COMPETITIONS = "/competitions";
export const ROUTE_FACILITIES = "/facilities";
export const ROUTE_REPRESENTATIVE = "/representative";
export const ROUTE_ACADEMY = "/academy";
export const ROUTE_PARTICIPATIONS = "/participations";


export const TEMPLATE_ROUTE_COMPETITION1 = "/competition1";

export const TEMPLATE_ROUTE_REGISTER1 = "/register1";
export const TEMPLATE_ROUTE_REGISTER2 = "/register2";

export const ROUTE_ADVERTISE = "/advertise";
export const ROUTE_ADVERTISE_CPC = "/advertise-cpc";
export const ROUTE_ADVERTISE_CPI = "/advertise-cpi";
export const ROUTE_ADVERTISE_CPL = "/advertise-cpl";
export const ROUTE_LEGAL = "/legal";
export const ROUTE_CONTACT_US = "/contact-us";
export const ROUTE_OTP = "/otp-verify";




export const NAV_MENU_IMTES = [
  { route: ROOT, title: "Home", active: true },
  { route: ROUTE_COMPETITIONS, title: "COMPETITIONS", active: false },
  { route: ROUTE_FACILITIES, title: "FACILITIES", active: false },
  { route: ROUTE_REPRESENTATIVE, title: "REPRESENTATIVE", active: false },
  { route: ROUTE_ACADEMY, title: "ACADEMY", active: false },
];
export const FOOTER_SITEMAP_IMTES = [
  { route: "", title: "COMPETITIONS", main: true },
  { route: ROUTE_ABOUT_US, title: "CBC", main: false },
  { route: ROUTE_LEGAL, title: "CBA", main: false },
  { route: ROUTE_CONTACT_US, title: "CB UNITED", main: false },
  { route: ROUTE_ADVERTISE, title: "CBL", main: false },
  { route: ROUTE_LOGIN, title: "JCBL", main: false },
  { route: ROUTE_SIGNUP, title: "HIGH SCHOOL LEAGUE", main: false },
];
export const FOOTER_QUICK_IMTES = [
  { route: "", title: "FACILITIES", main: true },
  { route: ROUTE_ABOUT_US, title: "CBC", main: false },
  { route: ROUTE_LEGAL, title: "CENTRE 2", main: false },
  { route: ROUTE_CONTACT_US, title: "CENTRE 3", main: false },
  { route: ROUTE_CONTACT_US, title: "CENTRE 4", main: false },
];
export const FOOTER_CONTACTUS_IMTES = [
  { route: "", title: "REPRESENTATIVE", main: true },
  { route: ROUTE_ABOUT_US, title: "TEAM 1", main: false },
  { route: ROUTE_ABOUT_US, title: "TEAM 2", main: false },
  { route: ROUTE_ABOUT_US, title: "TEAM 3", main: false },
  { route: ROUTE_ABOUT_US, title: "TEAM 4", main: false },
];
export const FOOTER_ASSOCIATION_IMTES = [
  { route: "", title: "REPRESENTATIVE", main: true },
  { route: ROUTE_ABOUT_US, title: "TEAM 1", main: false },
  { route: ROUTE_ABOUT_US, title: "TEAM 2", main: false },
  { route: ROUTE_ABOUT_US, title: "TEAM 3", main: false },
  { route: ROUTE_ABOUT_US, title: "TEAM 4", main: false },
];