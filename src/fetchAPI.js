export default async function fetchAPI(query) {
  const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const response = await fetch(api + query) 
  if(!response.ok){
    throw Error('Failed to fetch recipes!');
  }
  const resData = await response.json();
  return resData;
}
