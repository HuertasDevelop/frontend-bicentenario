interface Area {
  id: number;
  photo: string;
  name: string;
}
interface Benefit {
  id: number;
  name: string;
  description: string;
}
interface Gallery {
  id: number;
  photo: string;
  alt: string;
}

interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  place: string;
  from_price: number;
  price: number;
  from_area: number;
  type_coin: "PEN" | "USD";
  people_card: string;
  banner_card: string;
  slogan: string;
  banner_detail: string;
  banner: string;
  link_banner_video: string;
  location: string;
  ref_location: string;
  photo_map: string;
  link_google_maps: string;
  link_waze: string;
  photo_feature: string;
  benefits: Benefit[];
  areas: Area[];
  gallery: Gallery[];
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

interface Contact {
  id: number;
  banner_top: string;
  banner_bot: string;
  people_photo: string;
  photo_number_phone: string;
  number_phone: number;
}

interface About {
  id: number;
  description: string;
  banner_bg: string;
  banner_info: string;
}

interface Stats {
  id: number;
  description: string;
  title: string;
}

interface Office {
  id: number;
  address: string;
  reference: string;
  link_google_maps: string;
  link_waze: string;
}
