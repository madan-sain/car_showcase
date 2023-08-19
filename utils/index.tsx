import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 

export async function fetchCars(filters: FilterProps) {
  const { maunfacher, year, model, limit, fuel } = filters;
    const headers  =  {
        'X-RapidAPI-Key': '76e48b50e1msh0d6991b3160c051p1a3cedjsnec19c7bc577c',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const responce  =  await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${maunfacher}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{ headers: headers})

    const result  =  await responce .json();
    
    return result;
}


// export async function fetchCars(filters: FilterProps) {
//   const { manufacturer, year, model, limit, fuel } = filters;

//   // Set the required headers for the API request
//   const headers: HeadersInit = {
//     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "76e48b50e1msh0d6991b3160c051p1a3cedjsnec19c7bc577c",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   // Set the required headers for the API request
//   const response = await fetch(
//     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//     {
//       headers: headers,
//     }
//   )}