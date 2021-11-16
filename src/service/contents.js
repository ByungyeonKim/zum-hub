class Contents {
  constructor(httpClient) {
    this.contents = httpClient;
  }

  async content(category) {
    const res = await this.contents.get(`content/${category}`);
    return res.data;
  }

  async best() {
    const res = await this.contents.get('best');
    return res.data;
  }

  async detail(url) {
    const res = await this.contents.get(`detail/${url}`);
    return res.data;
  }
}

export default Contents;
