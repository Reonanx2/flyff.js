export class Base {
  protected async get<T>(endpoint: string): Promise<T> {
    const API_URL = `https://api.flyff.com/${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(API_URL, { headers }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
