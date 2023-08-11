export async function fetchCars() {
    const headers  =  {
        'X-RapidAPI-Key': '76e48b50e1msh0d6991b3160c051p1a3cedjsnec19c7bc577c',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const responce  =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{ headers: headers})

    const result  =  await responce .json();
    
    return result;
}