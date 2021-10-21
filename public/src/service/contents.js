class Contents {
  constructor() {
    this.baseURL = 'http://localhost:3000/api';
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async getContents(name) {
    const res = await fetch(
      `${this.baseURL}/content/${name}`,
      this.requestOptions
    );

    const result = await res.json();
    return result;
  }

  async realTimeBest() {
    const res = await fetch(
      `${this.baseURL}/content/best`,
      this.requestOptions
    );
    const result = await res.json();
    return result;
  }
}

export default Contents;
