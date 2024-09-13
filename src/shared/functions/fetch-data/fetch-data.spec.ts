import { fetchData } from "./fetch-data";

const mockData = { name: "bulbasaur" };

global.fetch = jest.fn() as jest.Mock;

describe("Fetch Data Class", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("should fetch data successfully with default headers", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchData.get({url: "pokemon/1"});

    expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/1", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    expect(data).toEqual(mockData);
  });

  it("should fetch data with custom headers and base URL", async () => {
    const customHeaders = { Authorization: "Bearer token" };
    // const mockData = { name: "bulbasaur" }; // Define mock data to return

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchData.get({
      url: "pokemon/1",
      headers: customHeaders,
    });

    expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/1", {
      headers: customHeaders,
    });
    expect(data).toEqual(mockData);
  });

  it("should throw an error if the fetch fails", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: jest.fn().mockResolvedValue({ message: "Not Found" }),
    });
  
    await expect(fetchData.get({ url: "invalid-endpoint" })).rejects.toThrow(
      "HTTP request went wrong!!!"
    );
  
    expect(fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/invalid-endpoint",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  });
  
});
