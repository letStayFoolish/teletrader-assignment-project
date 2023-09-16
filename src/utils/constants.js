import icon from '../assets/Icons/icon-01.png'
import {AiFillGithub} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {GrLinkedin} from "react-icons/gr";


export const BASE_URL="https://api.bitfinex.com"
export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "favorites",
    title: "Favorites",
  },
];

export const currencyItems = [
  {
    // icon: icon,
    name: "BTCUSD",
    last: "32,866.00",
    change: "1,492.00",
    changePercent: "+0.04%",
    high: "33,639.00",
    low: "30,968.00"
  },
  {
    // icon: icon,
    name: "ETHUSD",
    last: "1,822.78239282",
    change: "50.54200365",
    changePercent: "+0.02%",
    high: "1,904.00",
    low: "1,753.30"
  },
  {
    // icon: icon,
    name: "BTCUSD",
    last: "32,866.00",
    change: "1,492.00",
    changePercent: "+0.04%",
    high: "33,639.00",
    low: "30,968.00"
  },
  {
    // icon: icon,
    name: "ETHUSD",
    last: "1,822.78239282",
    change: "50.54200365",
    changePercent: "+0.02%",
    high: "1,904.00",
    low: "1,753.30"
  },
]

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: <AiFillGithub />,
    link: "https://github.com/letStayFoolish",
  },
  {
    id: "social-media-2",
    icon: <MdEmail />,
    link: "mailto:nemanjakaraklajic90@gmail.com",
  },
  {
    id: "social-media-3",
    icon: <GrLinkedin />,
    link: "https://www.linkedin.com/in/nemanjakaraklajic30111990/",
  },
];
