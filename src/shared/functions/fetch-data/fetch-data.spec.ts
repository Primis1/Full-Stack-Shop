import { fetchData } from "./fetch-data";

describe("Fetch data function", () => {
    test("fetching data from API", async () => {
        const data = await fetchData("pokemon/ditto")
        expect(data).toBeTruthy
    })
})