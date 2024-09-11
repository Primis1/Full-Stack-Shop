type Request = {
  url: string;
  headers?: Record<string, string>;
};

interface DeliverData extends Request {
  body: unknown;
}

class FetchDataClass {
  private baseURL: string = "https://pokeapi.co/api/v2/";
  private headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  async get({ url, headers = this.headers }: Request) {
    const res = await fetch(this.baseURL + url, {
      headers: headers,
    });
    return this.handleResponse(res);
  }

  async post({ url, headers, body }: DeliverData) {
    const res = await fetch(this.baseURL + url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    return this.handleResponse(res);
  }
  async put({ url, headers, body }: DeliverData) {
    const res = await fetch(this.baseURL + url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    });
    return this.handleResponse(res);
  }
  async delete(url: string) {
    const res = await fetch(this.baseURL + url, {
      method: "DELETE",
    });
    return this.handleResponse(res);
  }
  private async handleResponse(response: Response) {
    if (!response.ok) {
      throw new Error("HTTP request went wrong!!!");
    }
    return await response.json();
  }
}
export const fetchData = new FetchDataClass();
