
import {
    FaFacebook,
    FaFacebookMessenger,
    FaMailBulk,
    FaLinkedinIn,
    FaWhatsapp,
    FaTwitter,
    FaReddit,
    FaTelegram,
    FaGetPocket,
    FaYahoo,
    FaSkype,
  } from "react-icons/fa";
  export const sites=[
    { name: "whatsapp", selected: true, tag: <FaWhatsapp /> },
    { name: "twitter", selected: false, tag: <FaTwitter /> },
    { name: "linkedin", selected: false, tag: <FaLinkedinIn /> },
    { name: "facebook", selected: false, tag: <FaFacebook /> },
    { name: "reddit", selected: false, tag: <FaReddit /> },
    { name: "telegram", selected: false, tag: <FaTelegram /> },
    { name: "pocket", selected: false, tag: <FaGetPocket /> },
    { name: "google_gmail", selected: false, tag: <FaMailBulk /> },
    {
      name: "facebook_messenger",
      selected: false,
      tag: <FaFacebookMessenger />,
    },
    { name: "yahoo_mail", selected: false, tag: <FaYahoo /> },
    { name: "skype", selected: false, tag: <FaSkype /> },
  ];