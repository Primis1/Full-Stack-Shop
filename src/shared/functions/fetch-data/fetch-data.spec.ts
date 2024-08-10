import { fetchData } from "./fetch-data";

const mockData = { name: 'bulbasaur' };

global.fetch = jest.fn() as jest.Mock;

describe('fetchData', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should fetch data successfully with default headers', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchData('pokemon/1');
    
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: undefined }
    });
    expect(data).toEqual(mockData);
  });

  it('should fetch data with custom headers and base URL', async () => {
    const customHeaders = { Authorization: 'Bearer token' };
    const customBaseUrl = 'https://customapi.com/';
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchData('pokemon/1', customHeaders, customBaseUrl);
    
    expect(fetch).toHaveBeenCalledWith('https://customapi.com/pokemon/1', {
      headers: customHeaders,
      next: { revalidate: undefined }
    });
    expect(data).toEqual(mockData);
  });

  it('should throw an error if the fetch fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    await fetchData('invalid-endpoint');
    
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/invalid-endpoint', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: undefined }
    });
    expect(consoleSpy).toHaveBeenCalledWith("Error during fetch request: \n", new Error("Http request, went wrong!!!"));
    
    consoleSpy.mockRestore();
  });

  it('should handle revalidation', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchData('pokemon/1', undefined, undefined, 60);
    
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: 60 }
    });
    expect(data).toEqual(mockData);
  });
});
