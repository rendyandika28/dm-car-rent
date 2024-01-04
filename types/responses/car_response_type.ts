export interface Car {
  gasolineLiter: number;
  id: string;
  img: string;
  kindOfTransition: string;
  name: string;
  people: number;
  pricePerDay: number;
  type: string;
  isFavorite: boolean;
}

export interface DetailCar {
  description: string;
  gasolineLiter: number;
  id: string;
  images: Array<string>;
  img: string;
  kindOfTransition: string;
  name: string;
  people: number;
  pricePerDay: number;
  type: string;
  isFavorite: boolean;
}
