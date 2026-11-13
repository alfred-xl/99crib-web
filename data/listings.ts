// Accommodation listings supplied from the 99 Crib test catalogue on 13 November 2026.
// Photos and the mini-flat tour are stored locally in public/images/listings.

export type ListingImage = { url: string; caption: string };

export type Listing = {
  id: number;
  slug: string;
  property: string;
  room: string;
  roomType: string;
  tags: string[];
  verified: boolean;
  university: string;
  universityShort: string;
  locationLine: string;
  address: string;
  area: string;
  locationNote?: string;
  mapQuery: string;
  images: ListingImage[];
  noPhotoNote?: string;
  video?: { src: string; poster: string };
  facts: { label: string; value: string }[];
  lead: string;
  paragraphs: string[];
  amenities: string[];
  chips: string[];
  landlord: { name: string; image: string; subtitle: string; verified: boolean };
  price: { amount: string; period: string; value: number } | null;
  unitLine: string;
  summary: { label: string; value: string }[];
  estimatedTotal: string | null;
  metaTitle: string;
  metaDescription: string;
};

const sycamoreImages: ListingImage[] = [
  { url: "/images/listings/sycamore-house/exterior-front.jpg", caption: "Sycamore House front entrance" },
  { url: "/images/listings/sycamore-house/exterior-grounds.jpg", caption: "Sycamore House buildings and grounds" },
  { url: "/images/listings/sycamore-house/onsite-shop.jpg", caption: "On-site shop at Sycamore House" },
  { url: "/images/listings/sycamore-house/dining-area.jpg", caption: "Students in the Sycamore House dining area" },
  { url: "/images/listings/sycamore-house/common-lounge.jpg", caption: "Shared lounge at Sycamore House" },
  { url: "/images/listings/sycamore-house/shared-room.jpg", caption: "Four-person bunk-bed room at Sycamore House" },
];

const cedarHouseImages: ListingImage[] = [
  { url: "/images/listings/cedar-house/single-room-bed-and-desk.jpg", caption: "Cedar House furnished room with bed and study desk" },
  { url: "/images/listings/cedar-house/single-room-from-doorway.jpg", caption: "Cedar House room with bed, wardrobe and window" },
  { url: "/images/listings/cedar-house/single-room-interior.jpg", caption: "Cedar House room interior with bed and study area" },
  { url: "/images/listings/cedar-house/single-room-second-angle.jpg", caption: "Another view of a furnished Cedar House room" },
  { url: "/images/listings/cedar-house/single-room-window.jpg", caption: "Cedar House room with bed beside the window" },
  { url: "/images/listings/cedar-house/en-suite-shower.jpg", caption: "Cedar House en-suite shower" },
  { url: "/images/listings/cedar-house/building-side-render.jpg", caption: "Cedar House building side rendering" },
  { url: "/images/listings/cedar-house/entrance-render.jpg", caption: "Cedar House entrance rendering" },
  { url: "/images/listings/cedar-house/aerial-render.jpg", caption: "Cedar House aerial rendering" },
];

const redwoodCommonImages: ListingImage[] = [
  { url: "/images/listings/redwood-house/exterior-side-render.jpg", caption: "Redwood House exterior rendering from the side" },
  { url: "/images/listings/redwood-house/exterior-front-render.jpg", caption: "Redwood House front entrance rendering" },
  { url: "/images/listings/redwood-house/shared-kitchen.jpg", caption: "Shared kitchen at Redwood House" },
  { url: "/images/listings/redwood-house/corridor.jpg", caption: "Redwood House room corridor" },
  { url: "/images/listings/redwood-house/open-atrium.jpg", caption: "Open atrium at Redwood House" },
  { url: "/images/listings/redwood-house/common-seating.jpg", caption: "Shared seating area at Redwood House" },
  { url: "/images/listings/redwood-house/common-lounge.jpg", caption: "Common lounge at Redwood House" },
  { url: "/images/listings/redwood-house/gym.jpg", caption: "Exercise equipment at Redwood House" },
  { url: "/images/listings/redwood-house/utility-area.jpg", caption: "Tiled utility area at Redwood House" },
];

const redwoodSharedRoomImages: ListingImage[] = [
  { url: "/images/listings/redwood-house/shared-room-blue-two-beds.jpg", caption: "Two-person room with blue accent wall at Redwood House" },
  { url: "/images/listings/redwood-house/shared-room-blue-doorway.jpg", caption: "Another view of the blue-accent shared room" },
  { url: "/images/listings/redwood-house/shared-room-red-two-beds.jpg", caption: "Two-person room with red accent wall at Redwood House" },
  { url: "/images/listings/redwood-house/shared-room-red-second-angle.jpg", caption: "Another view of the red-accent shared room" },
  { url: "/images/listings/redwood-house/room-wardrobe.jpg", caption: "Wardrobe and doorway in a Redwood House room" },
  { url: "/images/listings/redwood-house/en-suite-bathroom.jpg", caption: "En-suite bathroom at Redwood House" },
  ...redwoodCommonImages,
];

const oakHouseImages: ListingImage[] = [
  { url: "/images/listings/oak-house/exterior-side-render.jpg", caption: "Oak House exterior side rendering" },
  { url: "/images/listings/oak-house/exterior-front-render.jpg", caption: "Oak House front entrance rendering" },
  { url: "/images/listings/oak-house/exterior-aerial-render.jpg", caption: "Oak House aerial rendering" },
  { url: "/images/listings/oak-house/shared-room-bunk-beds-render.jpg", caption: "Illustrative Oak House shared-room design rendering with bunk beds" },
  { url: "/images/listings/oak-house/shared-room-study-desks-render.jpg", caption: "Illustrative Oak House shared-room design rendering with study desks" },
  { url: "/images/listings/oak-house/shared-room-overhead-render.jpg", caption: "Illustrative overhead rendering of an Oak House shared room" },
];

const amethystExteriorImage: ListingImage = {
  url: "/images/listings/amethyst-house/exterior.jpg",
  caption: "Amethyst House exterior",
};

const amethystTwoPersonImages: ListingImage[] = [
  { url: "/images/listings/amethyst-house/two-person-room.jpg", caption: "Two-person room with separate beds and study desks at Amethyst House" },
  { url: "/images/listings/amethyst-house/room-from-doorway.jpg", caption: "Another view of a two-person room and en-suite bathroom at Amethyst House" },
  amethystExteriorImage,
];

const amethystThreePersonImages: ListingImage[] = [
  { url: "/images/listings/amethyst-house/three-person-room.jpg", caption: "Three-person room with separate beds and study desks at Amethyst House" },
  amethystExteriorImage,
];

export const listings: Listing[] = [
  {
    "id": 1,
    "slug": "rilwan-ajala-homes-bed-space-standard-shared-2-persons",
    "property": "Rilwan AJALA Homes",
    "room": "Bed space, standard shared, 2 persons",
    "roomType": "Bed Space",
    "tags": [],
    "verified": true,
    "university": "University of Lagos (UNILAG)",
    "universityShort": "University of Lagos",
    "locationLine": "Eletu Odibo Street, Abule Oja, Yaba, Lagos · near University of Lagos (UNILAG)",
    "address": "Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "area": "Yaba, Lagos",
    "locationNote": "Near UNILAG. Open to students of any institution.",
    "mapQuery": "Rilwan AJALA Homes, Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "images": [
      {
        "url": "/images/listings/rilwan-ajala/bedspace-1.jpg",
        "caption": "Two-person shared room"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-2.jpg",
        "caption": "Two-person room - additional angle"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-3.jpg",
        "caption": "Shared two-bed room with blinds"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-4.jpg",
        "caption": "Shared room with two separate beds"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-5.jpg",
        "caption": "Two beds with bright window"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-6.jpg",
        "caption": "Shared room wardrobe and beds"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-7.jpg",
        "caption": "Two beds with floral bedding"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-8.jpg",
        "caption": "Two beds with decorative walls"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Bed Space"
      },
      {
        "label": "Occupancy",
        "value": "2 people"
      },
      {
        "label": "Bathroom",
        "value": "Shared bathroom"
      },
      {
        "label": "Tenancy",
        "value": "12 months"
      },
      {
        "label": "Billing",
        "value": "Per year"
      },
      {
        "label": "Area",
        "value": "Yaba, Lagos"
      }
    ],
    "lead": "Furnished, air-conditioned rooms minutes from UNILAG, with evening power backup and cleaned common areas.",
    "paragraphs": [
      "Furnished place in a two-person shared room with two separate beds and space for both occupants to store their belongings. Each resident has a personal bed, while the table, chair and shared facilities are used jointly.",
      "This rate provides the standard shared-bathroom arrangement; other flexible lengths (30 days, three or six months) are also offered for standard spaces."
    ],
    "amenities": [
      "Air conditioning",
      "Study desk",
      "Power backup",
      "Common-area cleaning"
    ],
    "chips": [
      "2 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦950,000",
      "period": "/year",
      "value": 950000
    },
    "unitLine": "Per bed space, per year",
    "summary": [
      {
        "label": "Rent",
        "value": "₦950,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦47,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦50,000"
      }
    ],
    "estimatedTotal": "₦1,047,500",
    "metaTitle": "Rilwan AJALA Homes, Bed space, standard shared, 2 persons near University of Lagos",
    "metaDescription": "Bed space, standard shared, 2 persons at Rilwan AJALA Homes, Yaba, Lagos. From ₦950,000 per year. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 2,
    "slug": "rilwan-ajala-homes-bed-space-en-suite-shared-2-persons",
    "property": "Rilwan AJALA Homes",
    "room": "Bed space, en-suite shared, 2 persons",
    "roomType": "Bed Space",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "University of Lagos (UNILAG)",
    "universityShort": "University of Lagos",
    "locationLine": "Eletu Odibo Street, Abule Oja, Yaba, Lagos · near University of Lagos (UNILAG)",
    "address": "Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "area": "Yaba, Lagos",
    "locationNote": "Near UNILAG. Open to students of any institution.",
    "mapQuery": "Rilwan AJALA Homes, Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "images": [
      {
        "url": "/images/listings/rilwan-ajala/bedspace-1.jpg",
        "caption": "Two-person shared room"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-2.jpg",
        "caption": "Two-person room - additional angle"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-3.jpg",
        "caption": "Shared two-bed room with blinds"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-4.jpg",
        "caption": "Shared room with two separate beds"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-5.jpg",
        "caption": "Two beds with bright window"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-6.jpg",
        "caption": "Shared room wardrobe and beds"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-7.jpg",
        "caption": "Two beds with floral bedding"
      },
      {
        "url": "/images/listings/rilwan-ajala/bedspace-8.jpg",
        "caption": "Two beds with decorative walls"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Bed Space"
      },
      {
        "label": "Occupancy",
        "value": "2 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "12 months"
      },
      {
        "label": "Billing",
        "value": "Per year"
      },
      {
        "label": "Area",
        "value": "Yaba, Lagos"
      }
    ],
    "lead": "Furnished, air-conditioned rooms minutes from UNILAG, with evening power backup and cleaned common areas.",
    "paragraphs": [
      "Furnished place in a two-person shared room with two separate beds and space for both occupants to store their belongings. Each resident has a personal bed, while the table, chair and shared facilities are used jointly.",
      "This rate provides the private en-suite bathroom; other flexible lengths (30 days, three or six months) are also offered for standard spaces."
    ],
    "amenities": [
      "Air conditioning",
      "Study desk",
      "Power backup",
      "Common-area cleaning"
    ],
    "chips": [
      "En-suite",
      "2 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦1,050,000",
      "period": "/year",
      "value": 1050000
    },
    "unitLine": "Per bed space, per year",
    "summary": [
      {
        "label": "Rent",
        "value": "₦1,050,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦52,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦50,000"
      }
    ],
    "estimatedTotal": "₦1,152,500",
    "metaTitle": "Rilwan AJALA Homes, Bed space, en-suite shared, 2 persons near University of Lagos",
    "metaDescription": "Bed space, en-suite shared, 2 persons at Rilwan AJALA Homes, Yaba, Lagos. From ₦1,050,000 per year. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 3,
    "slug": "rilwan-ajala-homes-single-room-standard-no-en-suite",
    "property": "Rilwan AJALA Homes",
    "room": "Single room, standard (no en-suite)",
    "roomType": "Single Room",
    "tags": [],
    "verified": true,
    "university": "University of Lagos (UNILAG)",
    "universityShort": "University of Lagos",
    "locationLine": "Eletu Odibo Street, Abule Oja, Yaba, Lagos · near University of Lagos (UNILAG)",
    "address": "Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "area": "Yaba, Lagos",
    "locationNote": "Near UNILAG. Open to students of any institution.",
    "mapQuery": "Rilwan AJALA Homes, Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "images": [
      {
        "url": "/images/listings/rilwan-ajala/single-1.jpg",
        "caption": "Single room with terracotta curtains"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-2.jpg",
        "caption": "Private bedroom with wall art"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-3.jpg",
        "caption": "Private room bed and desk"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-4.jpg",
        "caption": "Private room additional interior"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-5.jpg",
        "caption": "Private bedroom with window"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-6.jpg",
        "caption": "Single bed and workspace"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-7.jpg",
        "caption": "Private room storage and desk"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-8.jpg",
        "caption": "Single room sleeping area"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-9.jpg",
        "caption": "Single bedroom with shelving"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-10.jpg",
        "caption": "Private bedroom additional angle"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Single Room"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "Shared bathroom"
      },
      {
        "label": "Tenancy",
        "value": "12 months"
      },
      {
        "label": "Billing",
        "value": "Per year"
      },
      {
        "label": "Area",
        "value": "Yaba, Lagos"
      }
    ],
    "lead": "Furnished, air-conditioned rooms minutes from UNILAG, with evening power backup and cleaned common areas.",
    "paragraphs": [
      "A private, single-occupancy bedroom with no roommate. The standard category (shared bathroom) includes a bed and mattress, wardrobe, mirror, 32-inch smart television, air conditioning, and a table with chair."
    ],
    "amenities": [
      "Air conditioning",
      "Study desk",
      "Wardrobe",
      "Smart TV",
      "Power backup",
      "Common-area cleaning"
    ],
    "chips": [
      "1 person",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦1,850,000",
      "period": "/year",
      "value": 1850000
    },
    "unitLine": "Per private room, per year",
    "summary": [
      {
        "label": "Rent",
        "value": "₦1,850,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦92,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦50,000"
      }
    ],
    "estimatedTotal": "₦1,992,500",
    "metaTitle": "Rilwan AJALA Homes, Single room, standard (no en-suite) near University of Lagos",
    "metaDescription": "Single room, standard (no en-suite) at Rilwan AJALA Homes, Yaba, Lagos. From ₦1,850,000 per year. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 4,
    "slug": "rilwan-ajala-homes-single-room-mid-tier",
    "property": "Rilwan AJALA Homes",
    "room": "Single room, mid-tier",
    "roomType": "Single Room",
    "tags": [],
    "verified": true,
    "university": "University of Lagos (UNILAG)",
    "universityShort": "University of Lagos",
    "locationLine": "Eletu Odibo Street, Abule Oja, Yaba, Lagos · near University of Lagos (UNILAG)",
    "address": "Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "area": "Yaba, Lagos",
    "locationNote": "Near UNILAG. Open to students of any institution.",
    "mapQuery": "Rilwan AJALA Homes, Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "images": [
      {
        "url": "/images/listings/rilwan-ajala/single-1.jpg",
        "caption": "Single room with terracotta curtains"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-2.jpg",
        "caption": "Private bedroom with wall art"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-3.jpg",
        "caption": "Private room bed and desk"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-4.jpg",
        "caption": "Private room additional interior"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-5.jpg",
        "caption": "Private bedroom with window"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-6.jpg",
        "caption": "Single bed and workspace"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-7.jpg",
        "caption": "Private room storage and desk"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-8.jpg",
        "caption": "Single room sleeping area"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-9.jpg",
        "caption": "Single bedroom with shelving"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-10.jpg",
        "caption": "Private bedroom additional angle"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Single Room"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "To be confirmed"
      },
      {
        "label": "Tenancy",
        "value": "12 months"
      },
      {
        "label": "Billing",
        "value": "Per year"
      },
      {
        "label": "Area",
        "value": "Yaba, Lagos"
      }
    ],
    "lead": "Furnished, air-conditioned rooms minutes from UNILAG, with evening power backup and cleaned common areas.",
    "paragraphs": [
      "A private, single-occupancy bedroom with no roommate. The mid-tier category includes a bed and mattress, wardrobe, mirror, 32-inch smart television, air conditioning, and a table with chair."
    ],
    "amenities": [
      "Air conditioning",
      "Study desk",
      "Wardrobe",
      "Smart TV",
      "Power backup",
      "Common-area cleaning"
    ],
    "chips": [
      "1 person",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦1,950,000",
      "period": "/year",
      "value": 1950000
    },
    "unitLine": "Per private room, per year",
    "summary": [
      {
        "label": "Rent",
        "value": "₦1,950,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦97,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦50,000"
      }
    ],
    "estimatedTotal": "₦2,097,500",
    "metaTitle": "Rilwan AJALA Homes, Single room, mid-tier near University of Lagos",
    "metaDescription": "Single room, mid-tier at Rilwan AJALA Homes, Yaba, Lagos. From ₦1,950,000 per year. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 5,
    "slug": "rilwan-ajala-homes-single-room-en-suite",
    "property": "Rilwan AJALA Homes",
    "room": "Single room, en-suite",
    "roomType": "Single Room",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "University of Lagos (UNILAG)",
    "universityShort": "University of Lagos",
    "locationLine": "Eletu Odibo Street, Abule Oja, Yaba, Lagos · near University of Lagos (UNILAG)",
    "address": "Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "area": "Yaba, Lagos",
    "locationNote": "Near UNILAG. Open to students of any institution.",
    "mapQuery": "Rilwan AJALA Homes, Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "images": [
      {
        "url": "/images/listings/rilwan-ajala/single-1.jpg",
        "caption": "Single room with terracotta curtains"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-2.jpg",
        "caption": "Private bedroom with wall art"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-3.jpg",
        "caption": "Private room bed and desk"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-4.jpg",
        "caption": "Private room additional interior"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-5.jpg",
        "caption": "Private bedroom with window"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-6.jpg",
        "caption": "Single bed and workspace"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-7.jpg",
        "caption": "Private room storage and desk"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-8.jpg",
        "caption": "Single room sleeping area"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-9.jpg",
        "caption": "Single bedroom with shelving"
      },
      {
        "url": "/images/listings/rilwan-ajala/single-10.jpg",
        "caption": "Private bedroom additional angle"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Single Room"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "12 months"
      },
      {
        "label": "Billing",
        "value": "Per year"
      },
      {
        "label": "Area",
        "value": "Yaba, Lagos"
      }
    ],
    "lead": "Furnished, air-conditioned rooms minutes from UNILAG, with evening power backup and cleaned common areas.",
    "paragraphs": [
      "A private, single-occupancy bedroom with no roommate. The en-suite category with a private bathroom includes a bed and mattress, wardrobe, mirror, 32-inch smart television, air conditioning, and a table with chair."
    ],
    "amenities": [
      "Air conditioning",
      "Study desk",
      "Wardrobe",
      "Smart TV",
      "Power backup",
      "Common-area cleaning"
    ],
    "chips": [
      "En-suite",
      "1 person",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦2,150,000",
      "period": "/year",
      "value": 2150000
    },
    "unitLine": "Per private room, per year",
    "summary": [
      {
        "label": "Rent",
        "value": "₦2,150,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦107,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦50,000"
      }
    ],
    "estimatedTotal": "₦2,307,500",
    "metaTitle": "Rilwan AJALA Homes, Single room, en-suite near University of Lagos",
    "metaDescription": "Single room, en-suite at Rilwan AJALA Homes, Yaba, Lagos. From ₦2,150,000 per year. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 6,
    "slug": "rilwan-ajala-homes-mini-flat-en-suite",
    "property": "Rilwan AJALA Homes",
    "room": "Mini flat, en-suite",
    "roomType": "Mini Flat",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "University of Lagos (UNILAG)",
    "universityShort": "University of Lagos",
    "locationLine": "Eletu Odibo Street, Abule Oja, Yaba, Lagos · near University of Lagos (UNILAG)",
    "address": "Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "area": "Yaba, Lagos",
    "locationNote": "Near UNILAG. Open to students of any institution.",
    "mapQuery": "Rilwan AJALA Homes, Eletu Odibo Street, Abule Oja, Yaba, Lagos",
    "images": [
      {
        "url": "/images/listings/rilwan-ajala/selfcon-1.jpg",
        "caption": "Mini flat bedroom"
      },
      {
        "url": "/images/listings/rilwan-ajala/selfcon-2.jpg",
        "caption": "Mini flat interior and fridge"
      },
      {
        "url": "/images/listings/rilwan-ajala/selfcon-3.jpg",
        "caption": "Mini flat bed and desk"
      },
      {
        "url": "/images/listings/rilwan-ajala/selfcon-4.jpg",
        "caption": "Mini flat feature wall and workstation"
      },
      {
        "url": "/images/listings/rilwan-ajala/selfcon-5.jpg",
        "caption": "Mini flat private sleeping space"
      },
      {
        "url": "/images/listings/rilwan-ajala/selfcon-6.jpg",
        "caption": "Mini flat lounge / sitting room"
      },
      {
        "url": "/images/listings/rilwan-ajala/selfcon-7.jpg",
        "caption": "Mini flat shared living room additional view"
      },
      {
        "url": "/images/listings/rilwan-ajala/selfcon-8.jpg",
        "caption": "Mini flat lounge and seating"
      },
      {
        "url": "/images/listings/rilwan-ajala/selfcon-9.jpg",
        "caption": "Mini flat entertainment/lounge perspective"
      }
    ],
    "video": {
      "src": "/images/listings/rilwan-ajala/mini-flat-tour.mp4",
      "poster": "/images/listings/rilwan-ajala/selfcon-1.jpg"
    },
    "facts": [
      {
        "label": "Room type",
        "value": "Mini Flat"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "12 months"
      },
      {
        "label": "Billing",
        "value": "Per year"
      },
      {
        "label": "Area",
        "value": "Yaba, Lagos"
      }
    ],
    "lead": "Furnished, air-conditioned rooms minutes from UNILAG, with evening power backup and cleaned common areas.",
    "paragraphs": [
      "Private en-suite mini-flat accommodation with a bathroom for the sole use of the occupant. Furnishings listed by the operator include a fridge, 32-inch smart television, bed and mattress, wardrobe, mirror, air conditioning and a table and chair.",
      "Residents bring personal items, cooking equipment and a gas cooker; no built-in kitchen is described."
    ],
    "amenities": [
      "Air conditioning",
      "Study desk",
      "Wardrobe",
      "Smart TV",
      "Fridge",
      "Power backup",
      "Common-area cleaning"
    ],
    "chips": [
      "En-suite",
      "1 person",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦2,250,000",
      "period": "/year",
      "value": 2250000
    },
    "unitLine": "Per private room, per year",
    "summary": [
      {
        "label": "Rent",
        "value": "₦2,250,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦112,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦50,000"
      }
    ],
    "estimatedTotal": "₦2,412,500",
    "metaTitle": "Rilwan AJALA Homes, Mini flat, en-suite near University of Lagos",
    "metaDescription": "Mini flat, en-suite at Rilwan AJALA Homes, Yaba, Lagos. From ₦2,250,000 per year. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 7,
    "slug": "pine-house-2-person-shared-room",
    "property": "Pine House",
    "room": "2-person shared room",
    "roomType": "Shared Room",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "University of Lagos (UNILAG)",
    "universityShort": "University of Lagos",
    "locationLine": "372 Herbert Macaulay Way, Yaba, Lagos · near University of Lagos (UNILAG)",
    "address": "372 Herbert Macaulay Way, Yaba, Lagos",
    "area": "Yaba, Lagos",
    "locationNote": "Near UNILAG. Open to students of any institution.",
    "mapQuery": "Pine House, 372 Herbert Macaulay Way, Yaba, Lagos",
    "images": [
      {
        "url": "/images/listings/pine-house/DdT2nJ9W0AASyoy.jpg",
        "caption": "Archive photo from the operator"
      },
      {
        "url": "/images/listings/pine-house/photo-634b128c.jpg",
        "caption": "Archive photo from the operator"
      }
    ],
    "noPhotoNote": "These are older photos from the operator. Current photos are being added.",
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "2 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Yaba, Lagos"
      }
    ],
    "lead": "A managed hostel on Herbert Macaulay Way, a short walk from the University of Lagos.",
    "paragraphs": [
      "Furnished 2-person shared hostel room at Pine House, 372 Herbert Macaulay Way, Yaba, Lagos, a short walk from the University of Lagos. The hostel advertises individual beds, study desks, shelves, shoe racks, air conditioning, water heaters and en-suite showers.",
      "The building is described as having 18 rooms and 43 bed spaces. A ₦30,000 compulsory maintenance fee is stated separately."
    ],
    "amenities": [
      "Air conditioning",
      "Water heater",
      "Study desk",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management",
      "Shoe rack and shelves"
    ],
    "chips": [
      "En-suite",
      "2 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦1,170,000",
      "period": "/session",
      "value": 1170000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦1,170,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦58,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦30,000"
      }
    ],
    "estimatedTotal": "₦1,258,500",
    "metaTitle": "Pine House, 2-person shared room near University of Lagos",
    "metaDescription": "2-person shared room at Pine House, Yaba, Lagos. From ₦1,170,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 8,
    "slug": "pine-house-3-person-shared-room",
    "property": "Pine House",
    "room": "3-person shared room",
    "roomType": "Shared Room",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "University of Lagos (UNILAG)",
    "universityShort": "University of Lagos",
    "locationLine": "372 Herbert Macaulay Way, Yaba, Lagos · near University of Lagos (UNILAG)",
    "address": "372 Herbert Macaulay Way, Yaba, Lagos",
    "area": "Yaba, Lagos",
    "locationNote": "Near UNILAG. Open to students of any institution.",
    "mapQuery": "Pine House, 372 Herbert Macaulay Way, Yaba, Lagos",
    "images": [
      {
        "url": "/images/listings/pine-house/DdT2nJ9W0AASyoy.jpg",
        "caption": "Archive photo from the operator"
      },
      {
        "url": "/images/listings/pine-house/photo-634b128c.jpg",
        "caption": "Archive photo from the operator"
      }
    ],
    "noPhotoNote": "These are older photos from the operator. Current photos are being added.",
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "3 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Yaba, Lagos"
      }
    ],
    "lead": "A managed hostel on Herbert Macaulay Way, a short walk from the University of Lagos.",
    "paragraphs": [
      "Furnished 3-person shared hostel room at Pine House, 372 Herbert Macaulay Way, Yaba, Lagos, a short walk from the University of Lagos. The hostel advertises individual beds, study desks, shelves, shoe racks, air conditioning, water heaters and en-suite showers.",
      "The building is described as having 18 rooms and 43 bed spaces. A ₦30,000 compulsory maintenance fee is stated separately."
    ],
    "amenities": [
      "Air conditioning",
      "Water heater",
      "Study desk",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management",
      "Shoe rack and shelves"
    ],
    "chips": [
      "En-suite",
      "3 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦975,000",
      "period": "/session",
      "value": 975000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦975,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦48,750"
      },
      {
        "label": "Property fees at booking",
        "value": "₦30,000"
      }
    ],
    "estimatedTotal": "₦1,053,750",
    "metaTitle": "Pine House, 3-person shared room near University of Lagos",
    "metaDescription": "3-person shared room at Pine House, Yaba, Lagos. From ₦975,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 9,
    "slug": "cedar-house-single-room",
    "property": "Cedar House",
    "room": "Single room",
    "roomType": "Single Room",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "Pan-Atlantic University (PAU)",
    "universityShort": "Pan-Atlantic University",
    "locationLine": "Pan-Atlantic University, Ibeju-Lekki, Lagos · near Pan-Atlantic University (PAU)",
    "address": "Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "area": "Ibeju-Lekki, Lagos",
    "mapQuery": "Cedar House, Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "images": cedarHouseImages,
    "noPhotoNote": "These are older photos from the operator. Current photos are being added.",
    "facts": [
      {
        "label": "Room type",
        "value": "Single Room"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ibeju-Lekki, Lagos"
      }
    ],
    "lead": "Purpose-built student residence inside Pan-Atlantic University with a lounge and fitted kitchen.",
    "paragraphs": [
      "Single-occupant accommodation option at Cedar House, a purpose-built student residence within Pan-Atlantic University in Ibeju-Lekki, Lagos. Advertised room features include beds, study desks, shelves, shoe racks, an en-suite shower, water heater and air conditioning.",
      "Communal areas include a lounge and fitted kitchen."
    ],
    "amenities": [
      "Air conditioning",
      "Water heater",
      "Study desk",
      "Kitchenette",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management",
      "Shoe rack and shelves"
    ],
    "chips": [
      "En-suite",
      "1 person",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦3,500,000",
      "period": "/session",
      "value": 3500000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦3,500,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦175,000"
      }
    ],
    "estimatedTotal": "₦3,675,000",
    "metaTitle": "Cedar House, Single room near Pan-Atlantic University",
    "metaDescription": "Single room at Cedar House, Ibeju-Lekki, Lagos. From ₦3,500,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 10,
    "slug": "cedar-house-2-person-shared-room",
    "property": "Cedar House",
    "room": "2-person shared room",
    "roomType": "Shared Room",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "Pan-Atlantic University (PAU)",
    "universityShort": "Pan-Atlantic University",
    "locationLine": "Pan-Atlantic University, Ibeju-Lekki, Lagos · near Pan-Atlantic University (PAU)",
    "address": "Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "area": "Ibeju-Lekki, Lagos",
    "mapQuery": "Cedar House, Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "images": cedarHouseImages,
    "noPhotoNote": "These are older photos from the operator. Current photos are being added.",
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "2 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ibeju-Lekki, Lagos"
      }
    ],
    "lead": "Purpose-built student residence inside Pan-Atlantic University with a lounge and fitted kitchen.",
    "paragraphs": [
      "Two-occupant accommodation option at Cedar House, a purpose-built student residence within Pan-Atlantic University in Ibeju-Lekki, Lagos. Advertised room features include beds, study desks, shelves, shoe racks, an en-suite shower, water heater and air conditioning.",
      "Communal areas include a lounge and fitted kitchen."
    ],
    "amenities": [
      "Air conditioning",
      "Water heater",
      "Study desk",
      "Kitchenette",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management",
      "Shoe rack and shelves"
    ],
    "chips": [
      "En-suite",
      "2 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦2,750,000",
      "period": "/session",
      "value": 2750000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦2,750,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦137,500"
      }
    ],
    "estimatedTotal": "₦2,887,500",
    "metaTitle": "Cedar House, 2-person shared room near Pan-Atlantic University",
    "metaDescription": "2-person shared room at Cedar House, Ibeju-Lekki, Lagos. From ₦2,750,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 11,
    "slug": "cedar-house-4-person-shared-room",
    "property": "Cedar House",
    "room": "4-person shared room",
    "roomType": "Shared Room",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "Pan-Atlantic University (PAU)",
    "universityShort": "Pan-Atlantic University",
    "locationLine": "Pan-Atlantic University, Ibeju-Lekki, Lagos · near Pan-Atlantic University (PAU)",
    "address": "Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "area": "Ibeju-Lekki, Lagos",
    "mapQuery": "Cedar House, Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "images": cedarHouseImages,
    "noPhotoNote": "These are older photos from the operator. Current photos are being added.",
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "4 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ibeju-Lekki, Lagos"
      }
    ],
    "lead": "Purpose-built student residence inside Pan-Atlantic University with a lounge and fitted kitchen.",
    "paragraphs": [
      "Four-occupant accommodation option at Cedar House, a purpose-built student residence within Pan-Atlantic University in Ibeju-Lekki, Lagos. Advertised room features include beds, study desks, shelves, shoe racks, an en-suite shower, water heater and air conditioning.",
      "Communal areas include a lounge and fitted kitchen."
    ],
    "amenities": [
      "Air conditioning",
      "Water heater",
      "Study desk",
      "Kitchenette",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management",
      "Shoe rack and shelves"
    ],
    "chips": [
      "En-suite",
      "4 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦1,880,000",
      "period": "/session",
      "value": 1880000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦1,880,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦94,000"
      }
    ],
    "estimatedTotal": "₦1,974,000",
    "metaTitle": "Cedar House, 4-person shared room near Pan-Atlantic University",
    "metaDescription": "4-person shared room at Cedar House, Ibeju-Lekki, Lagos. From ₦1,880,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 12,
    "slug": "sycamore-house-4-person-shared-room-boys",
    "property": "Sycamore House",
    "room": "4-person shared room (boys)",
    "roomType": "Shared Room",
    "tags": [
      "Male students",
      "En-suite"
    ],
    "verified": true,
    "university": "Olabisi Onabanjo University (OOU)",
    "universityShort": "Olabisi Onabanjo University",
    "locationLine": "On campus, Olabisi Onabanjo University, Ago-Iwoye, Ogun State · near Olabisi Onabanjo University (OOU)",
    "address": "On campus, Olabisi Onabanjo University, Ago-Iwoye, Ogun State",
    "area": "Ago-Iwoye, Ogun",
    "mapQuery": "Sycamore House, On campus, Olabisi Onabanjo University, Ago-Iwoye, Ogun State",
    "images": sycamoreImages,
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "4 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Male students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ago-Iwoye, Ogun"
      }
    ],
    "lead": "On-campus residence at OOU with two blocks, a shared lounge and managed facilities.",
    "paragraphs": [
      "Four-person shared room in the male accommodation category at Sycamore House, located on the Olabisi Onabanjo University campus in Ago-Iwoye, Ogun State. The residence has two blocks advertised with 384 bed spaces in total.",
      "Furnishing includes bunk beds, study desk, wardrobe, en-suite shower room and wall fans. Students have access to the shared lounge, kitchenette, water and electricity, security and managed facilities."
    ],
    "amenities": [
      "Study desk",
      "Wardrobe",
      "Bunk beds",
      "Kitchenette",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "4 people"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦195,200",
      "period": "/session",
      "value": 195200
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦195,200"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦9,760"
      }
    ],
    "estimatedTotal": "₦204,960",
    "metaTitle": "Sycamore House, 4-person shared room (boys) near Olabisi Onabanjo University",
    "metaDescription": "4-person shared room (boys) at Sycamore House, Ago-Iwoye, Ogun. From ₦195,200 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 13,
    "slug": "sycamore-house-4-person-shared-room-girls",
    "property": "Sycamore House",
    "room": "4-person shared room (girls)",
    "roomType": "Shared Room",
    "tags": [
      "Female students",
      "En-suite"
    ],
    "verified": true,
    "university": "Olabisi Onabanjo University (OOU)",
    "universityShort": "Olabisi Onabanjo University",
    "locationLine": "On campus, Olabisi Onabanjo University, Ago-Iwoye, Ogun State · near Olabisi Onabanjo University (OOU)",
    "address": "On campus, Olabisi Onabanjo University, Ago-Iwoye, Ogun State",
    "area": "Ago-Iwoye, Ogun",
    "mapQuery": "Sycamore House, On campus, Olabisi Onabanjo University, Ago-Iwoye, Ogun State",
    "images": sycamoreImages,
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "4 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Female students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ago-Iwoye, Ogun"
      }
    ],
    "lead": "On-campus residence at OOU with two blocks, a shared lounge and managed facilities.",
    "paragraphs": [
      "Four-person shared room in the female accommodation category at Sycamore House, located on the Olabisi Onabanjo University campus in Ago-Iwoye, Ogun State. The residence has two blocks advertised with 384 bed spaces in total.",
      "Furnishing includes bunk beds, study desk, wardrobe, en-suite shower room and wall fans. Students have access to the shared lounge, kitchenette, water and electricity, security and managed facilities."
    ],
    "amenities": [
      "Study desk",
      "Wardrobe",
      "Bunk beds",
      "Kitchenette",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "4 people"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦195,200",
      "period": "/session",
      "value": 195200
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦195,200"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦9,760"
      }
    ],
    "estimatedTotal": "₦204,960",
    "metaTitle": "Sycamore House, 4-person shared room (girls) near Olabisi Onabanjo University",
    "metaDescription": "4-person shared room (girls) at Sycamore House, Ago-Iwoye, Ogun. From ₦195,200 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 14,
    "slug": "redwood-house-single-room",
    "property": "Redwood House",
    "room": "Single room",
    "roomType": "Single Room",
    "tags": [
      "Female students",
      "En-suite"
    ],
    "verified": true,
    "university": "Pan-Atlantic University (PAU)",
    "universityShort": "Pan-Atlantic University",
    "locationLine": "Pan-Atlantic University, Ibeju-Lekki, Lagos · near Pan-Atlantic University (PAU)",
    "address": "Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "area": "Ibeju-Lekki, Lagos",
    "mapQuery": "Redwood House, Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "images": redwoodCommonImages,
    "noPhotoNote": "Photos of this room are being added. Ask us and we will send you the latest pictures.",
    "facts": [
      {
        "label": "Room type",
        "value": "Single Room"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Female students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ibeju-Lekki, Lagos"
      }
    ],
    "lead": "Female-student hostel at Pan-Atlantic University with kitchenettes, a gym and CCTV security.",
    "paragraphs": [
      "Private single-occupant room at Redwood House, a purpose-built hostel serving female students at Pan-Atlantic University, Ibeju-Lekki, Lagos. The operator advertises en-suite accommodation with air conditioning, equipped kitchenettes and cookers, lounge and study areas, a gym, landscaped sitting areas, security with CCTV, Wi-Fi, and facility management.",
      "Electricity and water supply are included among listed utilities."
    ],
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "Kitchenette",
      "Common lounge",
      "Study room",
      "Gym",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "1 person",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦2,900,000",
      "period": "/session",
      "value": 2900000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦2,900,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦145,000"
      }
    ],
    "estimatedTotal": "₦3,045,000",
    "metaTitle": "Redwood House, Single room near Pan-Atlantic University",
    "metaDescription": "Single room at Redwood House, Ibeju-Lekki, Lagos. From ₦2,900,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 15,
    "slug": "redwood-house-2-person-shared-room",
    "property": "Redwood House",
    "room": "2-person shared room",
    "roomType": "Shared Room",
    "tags": [
      "Female students",
      "En-suite"
    ],
    "verified": true,
    "university": "Pan-Atlantic University (PAU)",
    "universityShort": "Pan-Atlantic University",
    "locationLine": "Pan-Atlantic University, Ibeju-Lekki, Lagos · near Pan-Atlantic University (PAU)",
    "address": "Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "area": "Ibeju-Lekki, Lagos",
    "mapQuery": "Redwood House, Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "images": redwoodSharedRoomImages,
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "2 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Female students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ibeju-Lekki, Lagos"
      }
    ],
    "lead": "Female-student hostel at Pan-Atlantic University with kitchenettes, a gym and CCTV security.",
    "paragraphs": [
      "Two-person shared room at Redwood House, a purpose-built hostel serving female students at Pan-Atlantic University, Ibeju-Lekki, Lagos. The operator advertises en-suite accommodation with air conditioning, equipped kitchenettes and cookers, lounge and study areas, a gym, landscaped sitting areas, security with CCTV, Wi-Fi, and facility management.",
      "Electricity and water supply are included among listed utilities."
    ],
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "Kitchenette",
      "Common lounge",
      "Study room",
      "Gym",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "2 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦2,400,000",
      "period": "/session",
      "value": 2400000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦2,400,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦120,000"
      }
    ],
    "estimatedTotal": "₦2,520,000",
    "metaTitle": "Redwood House, 2-person shared room near Pan-Atlantic University",
    "metaDescription": "2-person shared room at Redwood House, Ibeju-Lekki, Lagos. From ₦2,400,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 16,
    "slug": "oak-house-2-person-shared-room-boys",
    "property": "Oak House",
    "room": "2-person shared room (boys)",
    "roomType": "Shared Room",
    "tags": [
      "Male students",
      "En-suite"
    ],
    "verified": true,
    "university": "Obafemi Awolowo University (OAU)",
    "universityShort": "Obafemi Awolowo University",
    "locationLine": "Near Obafemi Awolowo University, Ile-Ife, Osun State · near Obafemi Awolowo University (OAU)",
    "address": "Near Obafemi Awolowo University, Ile-Ife, Osun State",
    "area": "Ile-Ife, Osun",
    "mapQuery": "Oak House, Near Obafemi Awolowo University, Ile-Ife, Osun State",
    "images": oakHouseImages,
    "noPhotoNote": "These are design renderings from the operator. Current room photos are being added.",
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "2 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Male students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ile-Ife, Osun"
      }
    ],
    "lead": "En-suite shared rooms near OAU with a kitchenette, lounge and round-the-clock security.",
    "paragraphs": [
      "Two-person shared accommodation in the male category at Oak House near Obafemi Awolowo University, Ile-Ife, Osun State. The detailed listing describes en-suite rooms with air conditioning, an equipped kitchenette, shared lounge, electricity and water, security and facility management.",
      "The page advertises a ₦10,000 refundable caution fee on top of the stated bed-space rate."
    ],
    "amenities": [
      "Air conditioning",
      "Kitchenette",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "2 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦450,000",
      "period": "/session",
      "value": 450000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦450,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦22,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦10,000"
      }
    ],
    "estimatedTotal": "₦482,500",
    "metaTitle": "Oak House, 2-person shared room (boys) near Obafemi Awolowo University",
    "metaDescription": "2-person shared room (boys) at Oak House, Ile-Ife, Osun. From ₦450,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 17,
    "slug": "oak-house-2-person-shared-room-girls",
    "property": "Oak House",
    "room": "2-person shared room (girls)",
    "roomType": "Shared Room",
    "tags": [
      "Female students",
      "En-suite"
    ],
    "verified": true,
    "university": "Obafemi Awolowo University (OAU)",
    "universityShort": "Obafemi Awolowo University",
    "locationLine": "Near Obafemi Awolowo University, Ile-Ife, Osun State · near Obafemi Awolowo University (OAU)",
    "address": "Near Obafemi Awolowo University, Ile-Ife, Osun State",
    "area": "Ile-Ife, Osun",
    "mapQuery": "Oak House, Near Obafemi Awolowo University, Ile-Ife, Osun State",
    "images": oakHouseImages,
    "noPhotoNote": "These are design renderings from the operator. Current room photos are being added.",
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "2 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Female students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ile-Ife, Osun"
      }
    ],
    "lead": "En-suite shared rooms near OAU with a kitchenette, lounge and round-the-clock security.",
    "paragraphs": [
      "Two-person shared accommodation in the female category at Oak House near Obafemi Awolowo University, Ile-Ife, Osun State. The detailed listing describes en-suite rooms with air conditioning, an equipped kitchenette, shared lounge, electricity and water, security and facility management.",
      "The page advertises a ₦10,000 refundable caution fee on top of the stated bed-space rate."
    ],
    "amenities": [
      "Air conditioning",
      "Kitchenette",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "2 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦450,000",
      "period": "/session",
      "value": 450000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦450,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦22,500"
      },
      {
        "label": "Property fees at booking",
        "value": "₦10,000"
      }
    ],
    "estimatedTotal": "₦482,500",
    "metaTitle": "Oak House, 2-person shared room (girls) near Obafemi Awolowo University",
    "metaDescription": "2-person shared room (girls) at Oak House, Ile-Ife, Osun. From ₦450,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 18,
    "slug": "amethyst-house-single-room",
    "property": "Amethyst House",
    "room": "Single room",
    "roomType": "Single Room",
    "tags": [
      "Male students",
      "En-suite"
    ],
    "verified": true,
    "university": "Pan-Atlantic University (PAU)",
    "universityShort": "Pan-Atlantic University",
    "locationLine": "Pan-Atlantic University, Ibeju-Lekki, Lagos · near Pan-Atlantic University (PAU)",
    "address": "Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "area": "Ibeju-Lekki, Lagos",
    "mapQuery": "Amethyst House, Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "images": [amethystExteriorImage],
    "noPhotoNote": "Photos of this room are being added. Ask us and we will send you the latest pictures.",
    "facts": [
      {
        "label": "Room type",
        "value": "Single Room"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Male students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ibeju-Lekki, Lagos"
      }
    ],
    "lead": "Male-student hostel at Pan-Atlantic University with a study room, gym and CCTV security.",
    "paragraphs": [
      "1-person room at Amethyst House, a male-student residence at Pan-Atlantic University, Ibeju-Lekki, Lagos. The operator lists air-conditioned en-suite rooms, equipped kitchenettes with cookers, common lounges, study room, gymnasium, landscaped sitting areas, CCTV-equipped security, Wi-Fi and facility management.",
      "Electricity, water and common-area access are among the listed services."
    ],
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "Kitchenette",
      "Common lounge",
      "Study room",
      "Gym",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "1 person",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦2,250,000",
      "period": "/session",
      "value": 2250000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦2,250,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦112,500"
      }
    ],
    "estimatedTotal": "₦2,362,500",
    "metaTitle": "Amethyst House, Single room near Pan-Atlantic University",
    "metaDescription": "Single room at Amethyst House, Ibeju-Lekki, Lagos. From ₦2,250,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 19,
    "slug": "amethyst-house-2-person-shared-room",
    "property": "Amethyst House",
    "room": "2-person shared room",
    "roomType": "Shared Room",
    "tags": [
      "Male students",
      "En-suite"
    ],
    "verified": true,
    "university": "Pan-Atlantic University (PAU)",
    "universityShort": "Pan-Atlantic University",
    "locationLine": "Pan-Atlantic University, Ibeju-Lekki, Lagos · near Pan-Atlantic University (PAU)",
    "address": "Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "area": "Ibeju-Lekki, Lagos",
    "mapQuery": "Amethyst House, Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "images": amethystTwoPersonImages,
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "2 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Male students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ibeju-Lekki, Lagos"
      }
    ],
    "lead": "Male-student hostel at Pan-Atlantic University with a study room, gym and CCTV security.",
    "paragraphs": [
      "2-person room at Amethyst House, a male-student residence at Pan-Atlantic University, Ibeju-Lekki, Lagos. The operator lists air-conditioned en-suite rooms, equipped kitchenettes with cookers, common lounges, study room, gymnasium, landscaped sitting areas, CCTV-equipped security, Wi-Fi and facility management.",
      "Electricity, water and common-area access are among the listed services."
    ],
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "Kitchenette",
      "Common lounge",
      "Study room",
      "Gym",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "2 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦1,900,000",
      "period": "/session",
      "value": 1900000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦1,900,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦95,000"
      }
    ],
    "estimatedTotal": "₦1,995,000",
    "metaTitle": "Amethyst House, 2-person shared room near Pan-Atlantic University",
    "metaDescription": "2-person shared room at Amethyst House, Ibeju-Lekki, Lagos. From ₦1,900,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 20,
    "slug": "amethyst-house-3-person-shared-room",
    "property": "Amethyst House",
    "room": "3-person shared room",
    "roomType": "Shared Room",
    "tags": [
      "Male students",
      "En-suite"
    ],
    "verified": true,
    "university": "Pan-Atlantic University (PAU)",
    "universityShort": "Pan-Atlantic University",
    "locationLine": "Pan-Atlantic University, Ibeju-Lekki, Lagos · near Pan-Atlantic University (PAU)",
    "address": "Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "area": "Ibeju-Lekki, Lagos",
    "mapQuery": "Amethyst House, Pan-Atlantic University, Ibeju-Lekki, Lagos",
    "images": amethystThreePersonImages,
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Occupancy",
        "value": "3 people"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Open to",
        "value": "Male students"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Ibeju-Lekki, Lagos"
      }
    ],
    "lead": "Male-student hostel at Pan-Atlantic University with a study room, gym and CCTV security.",
    "paragraphs": [
      "3-person room at Amethyst House, a male-student residence at Pan-Atlantic University, Ibeju-Lekki, Lagos. The operator lists air-conditioned en-suite rooms, equipped kitchenettes with cookers, common lounges, study room, gymnasium, landscaped sitting areas, CCTV-equipped security, Wi-Fi and facility management.",
      "Electricity, water and common-area access are among the listed services."
    ],
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "Kitchenette",
      "Common lounge",
      "Study room",
      "Gym",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "En-suite",
      "3 people",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦1,600,000",
      "period": "/session",
      "value": 1600000
    },
    "unitLine": "Per bed space, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦1,600,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦80,000"
      }
    ],
    "estimatedTotal": "₦1,680,000",
    "metaTitle": "Amethyst House, 3-person shared room near Pan-Atlantic University",
    "metaDescription": "3-person shared room at Amethyst House, Ibeju-Lekki, Lagos. From ₦1,600,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 21,
    "slug": "hurera-house-one-bedroom-apartment-mini-flat",
    "property": "Hurera House",
    "room": "One-bedroom apartment / mini flat",
    "roomType": "Mini Flat",
    "tags": [],
    "verified": true,
    "university": "Nigerian Law School (Bwari)",
    "universityShort": "Nigerian Law School",
    "locationLine": "Bwari, Abuja, FCT · near Nigerian Law School (Bwari)",
    "address": "Bwari, Abuja, FCT",
    "area": "Bwari, Abuja",
    "mapQuery": "Hurera House, Bwari, Abuja, FCT",
    "images": [
      { "url": "/images/listings/hurera-house/exterior.jpg", "caption": "Hurera House exterior" },
      { "url": "/images/listings/hurera-house/living-room.jpg", "caption": "Furnished living room" },
      { "url": "/images/listings/hurera-house/kitchenette.jpg", "caption": "Kitchenette with refrigerator" },
      { "url": "/images/listings/hurera-house/living-room-and-kitchen.jpg", "caption": "Living room and kitchen counter" },
      { "url": "/images/listings/hurera-house/living-room-reverse-angle.jpg", "caption": "Living room from another angle" },
      { "url": "/images/listings/hurera-house/bedroom.jpg", "caption": "Bedroom with wardrobe and study desk" },
      { "url": "/images/listings/hurera-house/shower.jpg", "caption": "Bathroom shower" },
      { "url": "/images/listings/hurera-house/bathroom.jpg", "caption": "Bathroom with shower, sink and toilet" },
      { "url": "/images/listings/hurera-house/bathroom-sink.jpg", "caption": "Bathroom sink" },
      { "url": "/images/listings/hurera-house/living-room-seating.jpg", "caption": "Living room seating area" }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Mini Flat"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "Shared bathroom"
      },
      {
        "label": "Tenancy",
        "value": "One school session"
      },
      {
        "label": "Billing",
        "value": "Per school session"
      },
      {
        "label": "Area",
        "value": "Bwari, Abuja"
      }
    ],
    "lead": "Private one-bedroom flats in Bwari for Nigerian Law School students.",
    "paragraphs": [
      "One-bedroom mini-flat at Hurera House in Bwari, Abuja, intended for students attending the Nigerian Law School. The property advertises a private bedroom with air conditioning, kitchen, lounge and common areas, security provisions and professional facility management.",
      "Power and water are included among the stated services."
    ],
    "amenities": [
      "Air conditioning",
      "Kitchenette",
      "Common lounge",
      "Electricity and water",
      "CCTV and security",
      "On-site management"
    ],
    "chips": [
      "1 person",
      "Air con"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": {
      "amount": "₦3,000,000",
      "period": "/session",
      "value": 3000000
    },
    "unitLine": "Per room, per school session",
    "summary": [
      {
        "label": "Rent",
        "value": "₦3,000,000"
      },
      {
        "label": "Service fee (5%)",
        "value": "₦150,000"
      },
      {
        "label": "Property fees at booking",
        "value": "₦50,000"
      }
    ],
    "estimatedTotal": "₦3,200,000",
    "metaTitle": "Hurera House, One-bedroom apartment / mini flat near Nigerian Law School",
    "metaDescription": "One-bedroom apartment / mini flat at Hurera House, Bwari, Abuja. From ₦3,000,000 per school session. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 22,
    "slug": "aurorawoods-shared-bunk-bed-student-room",
    "property": "Aurorawoods",
    "room": "Shared bunk-bed student room",
    "roomType": "Shared Room",
    "tags": [],
    "verified": true,
    "university": "Akwa Ibom State University (AKSU)",
    "universityShort": "Akwa Ibom State University",
    "locationLine": "Ikot Akpaden, Mkpat Enin LGA, Akwa Ibom State · near Akwa Ibom State University (AKSU)",
    "address": "Ikot Akpaden, Mkpat Enin LGA, Akwa Ibom State",
    "area": "Mkpat Enin, Akwa Ibom",
    "mapQuery": "Aurorawoods, Ikot Akpaden, Mkpat Enin LGA, Akwa Ibom State",
    "images": [
      {
        "url": "/images/listings/aurorawoods/hero-bedroom.jpg",
        "caption": "Bunk room interior"
      },
      {
        "url": "/images/listings/aurorawoods/hero-bathroom.jpg",
        "caption": "Bathroom interior"
      },
      {
        "url": "/images/listings/aurorawoods/about-building.jpg",
        "caption": "Building exterior"
      },
      {
        "url": "/images/listings/aurorawoods/cafeteria.jpg",
        "caption": "Cafeteria"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Bathroom",
        "value": "Fitted bathroom"
      },
      {
        "label": "Tenancy",
        "value": "To be confirmed"
      },
      {
        "label": "Area",
        "value": "Mkpat Enin, Akwa Ibom"
      }
    ],
    "lead": "Bunk-bed student rooms in Mkpat Enin with generator-backed power, CCTV and a cafeteria.",
    "paragraphs": [
      "Shared bunk-bed student accommodation at Aurorawoods in Ikot Akpaden, Mkpat Enin, Akwa Ibom State. The property shows bunk rooms with individual sleeping spaces, a fitted bathroom, study-related furniture in a 3D layout, and floor-plan diagrams.",
      "It advertises generator-backed power, monitored security with CCTV, internet service, clean water, on-site maintenance and a cafeteria."
    ],
    "amenities": [
      "Wi-Fi",
      "Bunk beds",
      "Power backup",
      "Electricity and water",
      "CCTV and security",
      "Cafeteria",
      "On-site management"
    ],
    "chips": [],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": null,
    "unitLine": "Ask us for the current rate and availability",
    "summary": [],
    "estimatedTotal": null,
    "metaTitle": "Aurorawoods, Shared bunk-bed student room near Akwa Ibom State University",
    "metaDescription": "Shared bunk-bed student room at Aurorawoods, Mkpat Enin, Akwa Ibom. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 23,
    "slug": "oldbrookes-hostel-single-private-room",
    "property": "Oldbrookes Hostel",
    "room": "Single / private room",
    "roomType": "Single Room",
    "tags": [],
    "verified": true,
    "university": "College of Education Warri",
    "universityShort": "College of Education Warri",
    "locationLine": "College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State · near College of Education Warri",
    "address": "College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State",
    "area": "Warri, Delta",
    "locationNote": "Also serves students of nearby Warri institutions.",
    "mapQuery": "Oldbrookes Hostel, College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State",
    "images": [
      {
        "url": "/images/listings/oldbrookes-hostel/aerial_campus.jpg",
        "caption": "Aerial overview"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/spacious_layout.jpg",
        "caption": "Room with bunk bed and study desk"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/room_amenities.jpg",
        "caption": "Room with bed and wardrobe"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/furnished_room.jpg",
        "caption": "Furnished bunk room"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/bedroom_interior.jpg",
        "caption": "Hostel interior"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/restroom.jpg",
        "caption": "Hostel interior"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/aerial_grounds.jpg",
        "caption": "Property grounds aerial view"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/open_walkway.jpg",
        "caption": "Corridor/walkway"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/onsite_cafe.jpg",
        "caption": "Cafeteria"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Single Room"
      },
      {
        "label": "Occupancy",
        "value": "1 person"
      },
      {
        "label": "Bathroom",
        "value": "Shared bathroom"
      },
      {
        "label": "Tenancy",
        "value": "To be confirmed"
      },
      {
        "label": "Area",
        "value": "Warri, Delta"
      }
    ],
    "lead": "A newly built hostel on the College of Education Warri campus with 24/7 power and Wi-Fi.",
    "paragraphs": [
      "Private single-room option designed for an individual who prioritises personal space and studying at Oldbrookes Hostel, located within the College of Education Warri campus on Edjeba Road, Warri, Delta State. The operator advertises a newly built hostel with generator-backed 24/7 electricity, treated water, high-speed Wi-Fi, security and CCTV, cleaning of common areas, on-site maintenance, study spaces, and communal amenities."
    ],
    "amenities": [
      "Wi-Fi",
      "Study room",
      "Power backup",
      "Electricity and water",
      "CCTV and security",
      "Common-area cleaning",
      "On-site management"
    ],
    "chips": [
      "1 person"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": null,
    "unitLine": "Ask us for the current rate and availability",
    "summary": [],
    "estimatedTotal": null,
    "metaTitle": "Oldbrookes Hostel, Single / private room near College of Education Warri",
    "metaDescription": "Single / private room at Oldbrookes Hostel, Warri, Delta. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 24,
    "slug": "oldbrookes-hostel-shared-room",
    "property": "Oldbrookes Hostel",
    "room": "Shared room",
    "roomType": "Shared Room",
    "tags": [],
    "verified": true,
    "university": "College of Education Warri",
    "universityShort": "College of Education Warri",
    "locationLine": "College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State · near College of Education Warri",
    "address": "College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State",
    "area": "Warri, Delta",
    "locationNote": "Also serves students of nearby Warri institutions.",
    "mapQuery": "Oldbrookes Hostel, College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State",
    "images": [
      {
        "url": "/images/listings/oldbrookes-hostel/aerial_campus.jpg",
        "caption": "Aerial overview"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/spacious_layout.jpg",
        "caption": "Room with bunk bed and study desk"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/room_amenities.jpg",
        "caption": "Room with bed and wardrobe"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/furnished_room.jpg",
        "caption": "Furnished bunk room"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/bedroom_interior.jpg",
        "caption": "Hostel interior"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/restroom.jpg",
        "caption": "Hostel interior"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/aerial_grounds.jpg",
        "caption": "Property grounds aerial view"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/open_walkway.jpg",
        "caption": "Corridor/walkway"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/onsite_cafe.jpg",
        "caption": "Cafeteria"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "Shared Room"
      },
      {
        "label": "Bathroom",
        "value": "Shared bathroom"
      },
      {
        "label": "Tenancy",
        "value": "To be confirmed"
      },
      {
        "label": "Area",
        "value": "Warri, Delta"
      }
    ],
    "lead": "A newly built hostel on the College of Education Warri campus with 24/7 power and Wi-Fi.",
    "paragraphs": [
      "Shared-room accommodation option with hostel-wide furnishings and communal services at Oldbrookes Hostel, located within the College of Education Warri campus on Edjeba Road, Warri, Delta State. The operator advertises a newly built hostel with generator-backed 24/7 electricity, treated water, high-speed Wi-Fi, security and CCTV, cleaning of common areas, on-site maintenance, study spaces, and communal amenities."
    ],
    "amenities": [
      "Wi-Fi",
      "Study room",
      "Power backup",
      "Electricity and water",
      "CCTV and security",
      "Common-area cleaning",
      "On-site management"
    ],
    "chips": [],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": null,
    "unitLine": "Ask us for the current rate and availability",
    "summary": [],
    "estimatedTotal": null,
    "metaTitle": "Oldbrookes Hostel, Shared room near College of Education Warri",
    "metaDescription": "Shared room at Oldbrookes Hostel, Warri, Delta. Amenities, fees and secure booking with escrow payments on 99 Crib."
  },
  {
    "id": 25,
    "slug": "oldbrookes-hostel-en-suite-room",
    "property": "Oldbrookes Hostel",
    "room": "En-suite room",
    "roomType": "En-suite Room",
    "tags": [
      "En-suite"
    ],
    "verified": true,
    "university": "College of Education Warri",
    "universityShort": "College of Education Warri",
    "locationLine": "College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State · near College of Education Warri",
    "address": "College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State",
    "area": "Warri, Delta",
    "locationNote": "Also serves students of nearby Warri institutions.",
    "mapQuery": "Oldbrookes Hostel, College of Education Warri campus, Edjeba Road, Edjeba, Warri, Delta State",
    "images": [
      {
        "url": "/images/listings/oldbrookes-hostel/aerial_campus.jpg",
        "caption": "Aerial overview"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/spacious_layout.jpg",
        "caption": "Room with bunk bed and study desk"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/room_amenities.jpg",
        "caption": "Room with bed and wardrobe"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/furnished_room.jpg",
        "caption": "Furnished bunk room"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/bedroom_interior.jpg",
        "caption": "Hostel interior"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/restroom.jpg",
        "caption": "Hostel interior"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/aerial_grounds.jpg",
        "caption": "Property grounds aerial view"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/open_walkway.jpg",
        "caption": "Corridor/walkway"
      },
      {
        "url": "/images/listings/oldbrookes-hostel/onsite_cafe.jpg",
        "caption": "Cafeteria"
      }
    ],
    "facts": [
      {
        "label": "Room type",
        "value": "En-suite Room"
      },
      {
        "label": "Bathroom",
        "value": "En-suite bathroom"
      },
      {
        "label": "Tenancy",
        "value": "To be confirmed"
      },
      {
        "label": "Area",
        "value": "Warri, Delta"
      }
    ],
    "lead": "A newly built hostel on the College of Education Warri campus with 24/7 power and Wi-Fi.",
    "paragraphs": [
      "En-suite room option designed for residents who prefer a private bathroom at Oldbrookes Hostel, located within the College of Education Warri campus on Edjeba Road, Warri, Delta State. The operator advertises a newly built hostel with generator-backed 24/7 electricity, treated water, high-speed Wi-Fi, security and CCTV, cleaning of common areas, on-site maintenance, study spaces, and communal amenities."
    ],
    "amenities": [
      "Wi-Fi",
      "Study room",
      "Power backup",
      "Electricity and water",
      "CCTV and security",
      "Common-area cleaning",
      "On-site management"
    ],
    "chips": [
      "En-suite"
    ],
    "landlord": {
      "name": "Rahmon Ogunkunle",
      "image": "/images/team/Rahmon.png",
      "subtitle": "Landlord on 99 Crib",
      "verified": true
    },
    "price": null,
    "unitLine": "Ask us for the current rate and availability",
    "summary": [],
    "estimatedTotal": null,
    "metaTitle": "Oldbrookes Hostel, En-suite room near College of Education Warri",
    "metaDescription": "En-suite room at Oldbrookes Hostel, Warri, Delta. Amenities, fees and secure booking with escrow payments on 99 Crib."
  }
];

export function getListing(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}

// Short price periods for tight spaces like listing cards ("/yr" instead of "/year").
// `spoken` is read by screen readers in place of the abbreviation.
const periodLabels: Record<string, { short: string; spoken: string }> = {
  "/year": { short: "/yr", spoken: "per year" },
  "/session": { short: "/sess", spoken: "per session" },
  "/semester": { short: "/sem", spoken: "per semester" },
  "/month": { short: "/mo", spoken: "per month" },
  "/week": { short: "/wk", spoken: "per week" },
};

export function shortPeriod(period: string) {
  return periodLabels[period] ?? { short: period, spoken: period.replace(/^\//, "per ") };
}
