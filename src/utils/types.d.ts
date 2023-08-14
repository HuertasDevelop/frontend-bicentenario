interface Project {
  id: number;
  name: string;
  from_price: number;
  price: number;
  location: string;
  ref_location: string;
  description: string;
  areas: string;
  benefits: string;
  photo_map: string;
  photo_banner: string;
  photo_video: string;
  photo_miniature: string;
  people_miniature: string;
  link_video: string;
  slug: string;
  type_coin: string;
  from_area: number;
  logo: string;
}

interface Carousel {
  id: number;
  description: string;
  link: string;
  photo: string;
  active: boolean;
  order: number;
}

interface Home {
  id: number;
  description: string;
  link: string;
  photo: string;
  type: "BANNER_3" | "BANNER_2" | "BANNER_1" | "FORM";
}

interface Comment {
  id: number;
  name: string;
  comment: string;
  photo: string;
}

interface FormContact {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  document: string;
  type_document: string;
}
