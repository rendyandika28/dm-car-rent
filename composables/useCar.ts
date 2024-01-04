import API_ENDPOINT from "~/misc/constants/api_endpoint";
import type { Car, DetailCar } from "~/types/responses/car_response_type";

interface CarsResponse {
  data: Car[] | null;
  meta: any;
}

const useCar = () => {
  const getCars = async (payload: Ref<{ q: string; page: number }>) => {
    return await useFetch<CarsResponse>(API_ENDPOINT.CARS.DATA, {
      params: payload,
    });
  };
  const getPopularCars = async () => {
    return await useFetch<Car[]>(API_ENDPOINT.CARS.POPULAR);
  };
  const getDetailCar = async (slug: string): Promise<any> => {
    return await useFetch<DetailCar>(`${API_ENDPOINT.CARS.DATA}/${slug}`);
  };
  return {
    getCars,
    getPopularCars,
    getDetailCar,
  };
};

export default useCar;
