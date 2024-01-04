import type { Car } from "~/types/responses/car_response_type";

interface CarStore {
  favoriteCars: Ref<string[]>;
  querySearch: Ref<string>;
  isSelectFavorites: Ref<boolean>;
  toggleCarAsFavorite: (car: Car) => void;
}

export const useCarStore = defineStore("car", (): CarStore => {
  const favoriteCars = ref<Array<string>>([]);
  const querySearch = ref<string>("");
  const isSelectFavorites = ref<boolean>(false);

  const toggleCarAsFavorite = (car: Car) => {
    car.isFavorite = !car.isFavorite;

    favoriteCars.value = car.isFavorite
      ? [...favoriteCars.value, car.id]
      : favoriteCars.value.filter((favCar) => favCar !== car.id);
  };

  return { favoriteCars, querySearch, isSelectFavorites, toggleCarAsFavorite };
});
