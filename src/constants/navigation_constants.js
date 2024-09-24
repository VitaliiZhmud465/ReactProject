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
export const ROUTE_COMPETITIONS = "/advertise";
export const ROUTE_FACILITIES = "/advertise-cpc";
export const ROUTE_REPRESENTATIVE = "/advertise-cpi";
export const ROUTE_ACADEMY = "/advertise-cpl";
export const TEMPLATE_ROUTE_COMPETITION1 = "/competition1";
export const TEMPLATE_ROUTE_COMPETITION2 = "/competition2";
export const ROUTE_ADVERTISE = "/advertise";
export const ROUTE_ADVERTISE_CPC = "/advertise-cpc";
export const ROUTE_ADVERTISE_CPI = "/advertise-cpi";
export const ROUTE_ADVERTISE_CPL = "/advertise-cpl";
export const ROUTE_LEGAL = "/legal";
export const ROUTE_CONTACT_US = "/contact-us";
export const ROUTE_OTP = "/otp-verify";

export const ROUTE_SHOP = "/shop";
export const ROUTE_STORE = "/store";
export const ROUTE_FAVOURITE = "/favourite";
export const ROUTE_PROFILE = "/profile";
export const ROUTE_NOTIFICATION = "/notification";
export const ROUTE_MY_CART = "cart";
export const ROUTE_ORDER_HISTORY = "order";
export const ROUTE_MY_WALLET = "wallet";
export const ROUTE_MY_LOCATION = "location";
export const ROUTE_SUPPORT = "support";


export const NAV_MENU_IMTES = [
  { route: ROOT, title: "Home", active: true },
  { route: ROUTE_ABOUT_US, title: "About Us", active: false },
  { route: ROUTE_COMPETITIONS, title: "COMPETITIONS", active: false },
  { route: ROUTE_FACILITIES, title: "FACILITIES", active: false },
  { route: ROUTE_REPRESENTATIVE, title: "REPRESENTATIVE", active: false },
  { route: ROUTE_ACADEMY, title: "ACADEMY", active: false },
];
export const NAV_MAIN_MENU_IMTES = [
  { route: ROUTE_SHOP, title: "Shop", active: true },
  { route: ROUTE_STORE, title: "Stores", active: false },
  { route: ROUTE_FAVOURITE, title: "My Favourites", active: false },
  { route: ROUTE_PROFILE, title: "My Profile", active: false },
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
export const MENU_ITEMS = [
  {
    route: ROUTE_ORDER_HISTORY,
    icon: <img src={OrderIcon} className="menu-item-icon" />,
    title: "Order History",
  },
  {
    route: ROUTE_MY_WALLET,
    icon: <img src={WalletIcon} className="menu-item-icon" />,
    title: "My Wallet",
  },
  {
    route: ROUTE_MY_LOCATION,
    icon: <img src={LocationIcon} className="menu-item-icon" />,
    title: "My Location",
  },
  {
    route: ROUTE_CONTACT_US,
    icon: <img src={ContactIcon} className="menu-item-icon" />,
    title: "Contact Us",
  },
  {
    route: ROUTE_SUPPORT,
    icon: <img src={SupportIcon} className="menu-item-icon" />,
    title: "Support",
  },
];