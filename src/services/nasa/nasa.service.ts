import config from '../../config';
import axios, { AxiosInstance } from 'axios';

export class NasaService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: config.api.nasa,
    });
  }

  public async getApod() {
    const response = await this.api.get('/planetary/apod?api_key=DEMO_KEY');

    return response.data;
  }
}

export default new NasaService();
