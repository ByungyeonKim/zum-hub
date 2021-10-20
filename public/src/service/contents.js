class Contents {
  constructor() {
    this.baseURL = 'http://localhost:3000/api';
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async life() {
    const res = await fetch(
      `${this.baseURL}/content/life`,
      this.requestOptions
    );
    const result = await res.json();
    return result;
  }

  async food() {
    const res = await fetch(
      `${this.baseURL}/content/food`,
      this.requestOptions
    );
    const result = await res.json();
    return result;
  }

  async trip() {
    const res = await fetch(
      `${this.baseURL}/content/trip`,
      this.requestOptions
    );
    const result = await res.json();
    return result;
  }

  async culture() {
    const res = await fetch(
      `${this.baseURL}/content/culture`,
      this.requestOptions
    );
    const result = await res.json();
    return result;
  }

  async best() {
    const res = await fetch(
      `${this.baseURL}/content/best`,
      this.requestOptions
    );
    const result = await res.json();
    return result;
  }
}

export default Contents;
