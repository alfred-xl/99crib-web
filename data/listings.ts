export type Listing = {
  title: string;
  type: string;
  university: string;
  location: string;
  price: string;
  annualPrice: number;
  image: string;
};

export const listings: Listing[] = [
  {
    title: "Modern Self-Contain",
    type: "Self-Contain",
    university: "University of Lagos (UNILAG)",
    location: "Akoka, Lagos",
    price: "From ₦650,000/yr",
    annualPrice: 650000,
    image: "/images/listings/modern-self-contain.jpg",
  },
  {
    title: "Bright Studio Flat",
    type: "Mini Flat",
    university: "Obafemi Awolowo University (OAU)",
    location: "Ile-Ife, Osun",
    price: "From ₦380,000/yr",
    annualPrice: 380000,
    image: "/images/listings/bright-studio-flat.jpg",
  },
  {
    title: "Spacious Single Room",
    type: "Single Room",
    university: "University of Ibadan (UI)",
    location: "Bodija, Ibadan",
    price: "From ₦360,000/yr",
    annualPrice: 360000,
    image: "/images/listings/spacious-single-room.jpg",
  },
  {
    title: "Cosy 2-Bed Flat",
    type: "2 Bedroom",
    university: "Covenant University",
    location: "Ota, Ogun",
    price: "From ₦620,000/yr",
    annualPrice: 620000,
    image: "/images/listings/cosy-2-bed-flat.jpg",
  },
  {
    title: "Budget Self-Contain",
    type: "Self-Contain",
    university: "ABU Zaria",
    location: "Samaru, Zaria",
    price: "From ₦310,000/yr",
    annualPrice: 310000,
    image: "/images/listings/budget-self-contain.jpg",
  },
  {
    title: "Premium Shared Room",
    type: "Shared Room",
    university: "Babcock University",
    location: "Ilishan-Remo, Ogun",
    price: "From ₦300,000/yr",
    annualPrice: 300000,
    image: "/images/listings/premium-shared-room.jpg",
  },
];
