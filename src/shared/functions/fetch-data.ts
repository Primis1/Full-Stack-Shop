const baseUrl = "https://pokeapi.co/api/v2/";

const httpHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function fetchData<T>(
  base: string = baseUrl, 
  endpoint: string,
  headers: Record<string, string> = httpHeader,
  revalidate?: number
) {
  const url = base + endpoint;
  try {
    const res = await fetch(url, {headers: headers, next: {revalidate: revalidate}})
    if (!res.ok) {
      throw new Error("Http request, went wrong!!!")
    }
    const data: T = await res.json() 
    return data 
  } catch (err) {
    console.error("Error during fetch request: \n", err)
  }
}
