class Contents {
  constructor(httpClient) {
    this.contents = httpClient;
  }

  async getContents(name) {
    const res = await this.contents.get(`content/${name}`);
    return res.data;
  }

  async realTimeBest() {
    const res = await this.contents.get('best');
    return res.data;
  }

  async detailPage(url) {
    const res = await this.contents.get(`detail/${url}`);
    return res.data;
  }
}

export default Contents;
