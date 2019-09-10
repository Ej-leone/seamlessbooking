import colors from "../styles/colors";
const listing11Photo = require("../img/listing11.png");
import { getmyFavouriteQuery } from "../services/getmybookings";
import { getOpenRooms, getClosedRooms } from "../services/getrooms";

const listings = [
  {
    title: "Favourites",
    boldTitle: false,
    query: getmyFavouriteQuery,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: listing11Photo,
        type: "RIVERSIDE BUILDING",
        title: "Meeting Room",
        location: "Cape Town",
        price: "next meeting",
        priceType: " 5:00 am-6:00pm",
        stars: 29,
        color: colors.gray04
      },
      {
        id: 1,
        photo: listing11Photo,
        type: "RIVERSIDE BUILDING",
        title: "Meeting Room",
        location: "Cape Town",
        price: "next meeting",
        priceType: " 5:00 am-6:00pm",
        stars: 29,
        color: colors.gray04
      }
    ]
  },
  {
    title: "Open Rooms",
    boldTitle: false,
    showAddToFav: true,
    query: getOpenRooms,
    listings: [
      {
        id: 1,
        photo: listing11Photo,
        type: "RIVERSIDE BUILDING",
        title: "Meeting Room",
        location: "Cape Town",
        price: "next meeting",
        priceType: " 5:00 am-6:00pm",
        stars: 29,
        color: colors.gray04
      },
      {
        id: 1,
        photo: listing11Photo,
        type: "RIVERSIDE BUILDING",
        title: "Meeting Room",
        location: "Cape Town",
        price: "next meeting",
        priceType: " 5:00 am-6:00pm",
        stars: 29,
        color: colors.gray04
      }
    ]
  },
  {
    title: "Booked Rooms",
    boldTitle: false,
    showAddToFav: true,
    query: getClosedRooms,
    listings: [
      {
        id: 1,
        photo: listing11Photo,
        type: "RIVERSIDE BUILDING",
        title: "Meeting Room",
        location: "Cape Town",
        price: "next meeting",
        priceType: " 5:00 am-6:00pm",
        stars: 29,
        color: colors.gray04
      },
      {
        id: 1,
        photo: listing11Photo,
        type: "RIVERSIDE BUILDING",
        title: "Meeting Room",
        location: "Cape Town",
        price: "next meeting",
        priceType: " 5:00 am-6:00pm",
        stars: 29,
        color: colors.gray04
      }
    ]
  }
];

export default listings;
