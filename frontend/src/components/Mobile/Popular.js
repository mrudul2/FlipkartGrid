import { React, useEffect, useState } from "react";

import MobileCardTemp from "./MobileCardTemp";

import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";

import Slider from "react-slick";
import url_proxy from "../../api/api";

export default function PopularSlider() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(true);

  const jsonRes = [
    {
      brand: "Vivo",
      colour: "Blue",
      flipkart_no_rating: "8,649 Ratings",
      flipkart_price: "16,290",
      flipkart_star_rating: "4.4",
      flipkart_url:
        "https://www.flipkart.com/vivo-y31-ocean-blue-128-gb/p/itm4d669e9668d87?pid=MOBFZA9XW49YV62E&lid=LSTMOBFZA9XW49YV62EC4K5BD&marketplace=FLIPKART&q=Vivo+Y31+Blue+8+256GB&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=dca33672-f1d2-4334-947d-3d7c52644cba.MOBFZA9XW49YV62E.SEARCH&ppt=None&ppn=None&ssid=agzlow2u0g0000001682742819962&qH=53db961720b55b6c",
      img_url: "https://m.media-amazon.com/images/I/61SqqzpSWTL._AC_UY218_.jpg",
      model_name: "Vivo Y31",
      price: "1,19,999",
      star_rating: "4.4 out of 5 stars",
      storage_cap: ["8+256GB"],
      title:
        "Vivo Y31 (Racing Black, 6GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
      url: "https://www.amazon.in/Vivo-Y31-Storage-Additional-Exchange/dp/B08LRDHLQM/ref=sr_1_168?keywords=Today+Mobile+Offer&qid=1682742627&sr=8-168",
      _id: "644c9eab4bb7683f62ba0c79",
    },
    {
      brand: "Vivo",
      colour: "Drizzling Gold",
      flipkart_no_rating: "2,133 Ratings",
      flipkart_price: "10,499",
      flipkart_star_rating: "4.2",
      flipkart_url:
        "https://www.flipkart.com/vivo-y16-drizzling-gold-64-gb/p/itm72f3a9786718b?pid=MOBGHV2FREZH4NHQ&lid=LSTMOBGHV2FREZH4NHQ9NGASN&marketplace=FLIPKART&q=Vivo+Y16+Drizzling+Gold+3GB+RAM+64GB+Storage&store=tyy%2F4io&spotlightTagId=FkPickId_tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=5f0408ed-ffff-468e-a27b-b14871205840.MOBGHV2FREZH4NHQ.SEARCH&ppt=None&ppn=None&ssid=xfkzrgm21s0000001682742697705&qH=74f2f0c58e710d6c",
      img_url: "https://m.media-amazon.com/images/I/61TLDQrtEOL._AC_UY218_.jpg",
      model_name: "Vivo Y16",
      price: "10,499",
      star_rating: "4.2 out of 5 stars.",
      storage_cap: ["3GB RAM", "64GB Storage"],
      title:
        "Vivo Y16 (Drizzling Gold, 3GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
      url: "https://www.amazon.in/Vivo-Drizzling-Storage-Additional-Exchange/dp/B07WGNVP3S/ref=sr_1_51?keywords=Today+Mobile+Offer&qid=1682742619&sr=8-51",
      _id: "644c9eab4bb7683f62ba0c0b",
    },
    {
      brand: "Vivo",
      colour: "Frost Blue",
      flipkart_no_rating: null,
      flipkart_price: null,
      flipkart_star_rating: null,
      flipkart_url: null,
      img_url: "https://m.media-amazon.com/images/I/61vBPptSghL._AC_UY218_.jpg",
      model_name: "Vivo Y16",
      price: "10,499",
      star_rating: "4.0 out of 5 stars",
      storage_cap: ["8GB RAM", "128GB Storage"],
      title:
        "Vivo Y16 (Stellar Black, 3GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
      url: "https://www.amazon.in/Vivo-Stellar-Storage-Additional-Exchange/dp/B07WHRXQPP/ref=sr_1_14?keywords=Today+Mobile+Offer&qid=1682742613&sr=8-14",
      _id: "644c9eab4bb7683f62ba0be8",
    },
    {
      brand: "Vivo",
      colour: "Stellar Black",
      flipkart_no_rating: "2,133 Ratings",
      flipkart_price: "10,999",
      flipkart_star_rating: "4.2",
      flipkart_url:
        "https://www.flipkart.com/vivo-y16-steller-black-64-gb/p/itm72f3a9786718b?pid=MOBGHV2FHM9BVYCF&lid=LSTMOBGHV2FHM9BVYCFEOBBNQ&marketplace=FLIPKART&q=Vivo+Y16+Stellar+Black+3GB+RAM+64GB+Storage&store=tyy%2F4io&spotlightTagId=FkPickId_tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=da85b8e4-8fee-4380-8c1d-7b0212d72774.MOBGHV2FHM9BVYCF.SEARCH&ppt=None&ppn=None&ssid=0rfyc2241c0000001682742689112&qH=0b97ecfba71fcc14",
      img_url: "https://m.media-amazon.com/images/I/61vBPptSghL._AC_UY218_.jpg",
      model_name: "Vivo Y16",
      price: "10,499",
      star_rating: "3.7 out of 5 stars",
      storage_cap: ["3GB RAM", "64GB Storage"],
      title:
        "Vivo Y16 (Stellar Black, 3GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
      url: "https://www.amazon.in/Vivo-Stellar-Storage-Additional-Exchange/dp/B07WHRXQPP/ref=sr_1_41?keywords=Today+Mobile+Offer&qid=1682742618&sr=8-41",
      _id: "644c9eab4bb7683f62ba0c02",
    },
    {
      brand: "Vivo",
      colour: "Mystic Blue",
      flipkart_no_rating: "1,268 Ratings",
      flipkart_price: "11,370",
      flipkart_star_rating: "4.2",
      flipkart_url:
        "https://www.flipkart.com/vivo-y15c-mystic-blue-64-gb/p/itma66de6d33d999?pid=MOBGFX3UQJSBHRNE&lid=LSTMOBGFX3UQJSBHRNE41PVVD&marketplace=FLIPKART&q=Vivo+Y15C+Mystic+Blue+3GB+RAM+64GB+Storage&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=af1e0564-91ea-4412-bdd1-6b4e3448e114.MOBGFX3UQJSBHRNE.SEARCH&ppt=None&ppn=None&ssid=83470j06680000001682742936254&qH=fab3a351db28f2c2",
      img_url: "https://m.media-amazon.com/images/I/61VlRcJuUTL._AC_UY218_.jpg",
      model_name: "Vivo Y15C",
      price: "10,499",
      star_rating: "3.7 out of 5 stars",
      storage_cap: ["3GB RAM", "64GB Storage"],
      title:
        "Vivo Y15C (Mystic Blue, 3GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
      url: "https://www.amazon.in/Vivo-Mystic-Storage-Additional-Exchange/dp/B07WFNZX33/ref=sr_1_291?keywords=Today+Mobile+Offer&qid=1682742637&sr=8-291",
      _id: "644c9eab4bb7683f62ba0ceb",
    },
    {
      brand: "Vivo",
      colour: "Drizzling Gold",
      flipkart_no_rating: "1,855 Ratings",
      flipkart_price: "12,599",
      flipkart_star_rating: "4.3",
      flipkart_url:
        "https://www.flipkart.com/vivo-y16-gold-64-gb/p/itm046b70ada90e1?pid=MOBGPFFBN5FG9V2U&lid=LSTMOBGPFFBN5FG9V2UP0ZJQH&marketplace=FLIPKART&q=Vivo+Y16+Drizzling+Gold+4GB+RAM+64GB+Storage&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=f2494571-018e-4b2f-9b79-09845e0816d8.MOBGPFFBN5FG9V2U.SEARCH&ppt=None&ppn=None&ssid=u7a9g1msvk0000001682742687386&qH=77494f1760da7542",
      img_url: "https://m.media-amazon.com/images/I/61TLDQrtEOL._AC_UY218_.jpg",
      model_name: "Vivo Y16",
      price: "12,499",
      star_rating: "4.0 out of 5 stars",
      storage_cap: ["4GB RAM", "64GB Storage"],
      title:
        "Vivo Y16 (Drizzling Gold, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
      url: "https://www.amazon.in/Vivo-Drizzling-Storage-Additional-Exchange/dp/B07WHQ4S68/ref=sr_1_40?keywords=Today+Mobile+Offer&qid=1682742618&sr=8-40",
      _id: "644c9eab4bb7683f62ba0c01",
    },
    {
      brand: "POCO",
      colour: "Cool Blue",
      flipkart_no_rating: "1,66,763 Ratings",
      flipkart_price: "16,499",
      flipkart_star_rating: "4.3",
      flipkart_url:
        "https://www.flipkart.com/poco-m4-pro-cool-blue-128-gb/p/itm98e13f0c82b82?pid=MOBGBTHFBKGG6AVB&lid=LSTMOBGBTHFBKGG6AVBZXCSFJ&marketplace=FLIPKART&q=POCO+M4+Pro+Cool+Blue+6GB+RAM+128GB+Storage&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=74f7c84f-f8f5-49b8-8704-075fd33adf42.MOBGBTHFBKGG6AVB.SEARCH&ppt=None&ppn=None&ssid=1v6095c8ls0000001682742796676&qH=01157f0d26044f06",
      img_url: "https://m.media-amazon.com/images/I/61qNXIWNoVL._AC_UY218_.jpg",
      model_name: "POCO M4 Pro",
      price: "13,990",
      star_rating: "4.1 out of 5 stars.",
      storage_cap: ["6GB RAM 128GB Storage"],
      title: "POCO M4 Pro (Cool Blue, 6GB RAM 128GB Storage)",
      url: "https://www.amazon.in/POCO-Cool-Blue-128GB-Storage/dp/B0B6CCGXT7/ref=sr_1_146?keywords=Today+Mobile+Offer&qid=1682742626&sr=8-146",
      _id: "644c9eab4bb7683f62ba0c64",
    },
    {
      brand: "Vivo",
      colour: "Mystic Black",
      flipkart_no_rating: "34,936 Ratings",
      flipkart_price: "18,950",
      flipkart_star_rating: "4.4",
      flipkart_url:
        "https://www.flipkart.com/vivo-s1-pro-mystic-black-128-gb/p/itm60bf6c78dfe9a?pid=MOBFNENDVWSUPNHH&lid=LSTMOBFNENDVWSUPNHHMS00SN&marketplace=FLIPKART&q=Vivo+S1+Pro+Mystic+Black+8GB+RAM+128GB+Storage&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=9c8e3abf-36f1-443d-8abe-a7dfb48f8f03.MOBFNENDVWSUPNHH.SEARCH&ppt=None&ppn=None&ssid=8qptdb4lxc0000001682742905318&qH=90d4394a9b88e130",
      img_url: "https://m.media-amazon.com/images/I/51sTYdFWcZL._AC_UY218_.jpg",
      model_name: "Vivo S1 Pro",
      price: "14,990",
      star_rating: "3.1 out of 5 stars",
      storage_cap: ["8GB RAM", "128GB Storage"],
      title:
        "(Renewed) Vivo S1 Pro (Mystic Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
      url: "https://www.amazon.in/Renewed-Vivo-Storage-Additional-Exchange/dp/B08BWX1X55/ref=sr_1_257?keywords=Today+Mobile+Offer&qid=1682742635&sr=8-257",
      _id: "644c9eab4bb7683f62ba0ccc",
    },
    {
      brand: "Vivo",
      colour: "Hyper Blue",
      flipkart_no_rating: "485 Ratings",
      flipkart_price: "12,999",
      flipkart_star_rating: "4.3",
      flipkart_url:
        "https://www.flipkart.com/vivo-y02-orchid-blue-32-gb/p/itmc6d50d3417469?pid=MOBGKFRJ4HFUY5GH&lid=LSTMOBGKFRJ4HFUY5GHZFUOCM&marketplace=FLIPKART&q=Vivo+Y02+Hyper+Blue+4GB+RAM+64GB+Storage&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=491c9a35-edd1-4beb-bbc9-d14dbc8c12c8.MOBGKFRJ4HFUY5GH.SEARCH&ppt=None&ppn=None&ssid=qw7cik8z400000001682742760733&qH=111920f335e449ce",
      img_url: "https://m.media-amazon.com/images/I/714ob55p5IL._AC_UY218_.jpg",
      model_name: "Vivo Y02",
      price: "14,999",
      star_rating: "3.8 out of 5 stars",
      storage_cap: ["4GB RAM+64GB Storage"],
      title:
        "Vivo Y02 (Orchid Blue, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers",
      url: "https://www.amazon.in/Vivo-Orchid-Storage-Additional-Exchange/dp/B07WJV4JT6/ref=sr_1_110?keywords=Today+Mobile+Offer&qid=1682742622&sr=8-110",
      _id: "644c9eab4bb7683f62ba0c43",
    },
    {
      brand: "POCO",
      colour: "Astral Black",
      flipkart_no_rating: "4,756 Ratings",
      flipkart_price: "24,999",
      flipkart_star_rating: "4.3",
      flipkart_url:
        "https://www.flipkart.com/poco-x5-pro-5g-astral-black-256-gb/p/itm6bf766212d183?pid=MOBGMDKQJ9WVEFYK&lid=LSTMOBGMDKQJ9WVEFYKZEUY55&marketplace=FLIPKART&q=POCO+X5+Pro+5G+Astral+Black+256+GB&store=tyy%2F4io&srno=s_1_1&otracker=search&fm=organic&iid=373cd49e-232e-4f7e-8671-e28195c141b1.MOBGMDKQJ9WVEFYK.SEARCH&ppt=None&ppn=None&ssid=rdf53pjmrk0000001682742777697&qH=8db0b5fa61e5aa93",
      img_url: "https://m.media-amazon.com/images/I/61ZKK4UTtaL._AC_UY218_.jpg",
      model_name: "POCO X5 Pro 5G",
      price: "15,249",
      star_rating: "4.1 out of 5 stars",
      storage_cap: ["256 GB"],
      title: "POCO X5 Pro 5G (Astral Black, 256 GB) (8 GB RAM)",
      url: "https://www.amazon.in/POCO-Pro-Astral-Black-256/dp/B0BYSY2HD1/ref=sr_1_127?keywords=Today+Mobile+Offer&qid=1682742624&sr=8-127",
      _id: "644c9eab4bb7683f62ba0c53",
    },
  ];

  useEffect(() => {
    setProduct(jsonRes);
    setIsLoading(false);
    setOpen(!open);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="m-4">
      <h1 className="text-2xl">Top 10 Popular</h1>
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
          <div className="px-5">
            <h5 class="truncate capitalize text-xl font-semibold tracking-tight text-white dark:text-white hover:text-red-600">
              Loading...
            </h5>
          </div>
        </Backdrop>
      ) : (
        <Slider {...settings} className=" -mb-16 m-8 ">
          {product &&
            product.map((mobile) => {
              const { _id } = mobile;
              return (
                <div className="px-2">
                  <MobileCardTemp {...mobile} key={_id} />
                </div>
              );
            })}
        </Slider>
      )}
    </div>
  );
}
