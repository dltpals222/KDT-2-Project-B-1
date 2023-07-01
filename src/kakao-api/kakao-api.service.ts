// kakao-api-service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class KakaoApiService {
  private kakao_api_key = '9d667c01eb07e9f64c1df5d6156dbbf2'; // 카카오 API 키
  private destination = '127.4332,36.3521'; // 목적지

  async getDirections(origin: string) {
    const url = `https://apis-navi.kakaomobility.com/v1/directions?origin=${origin}&destination=${this.destination}`;
    const headers = {
      Authorization: `KakaoAK ${this.kakao_api_key}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      const data = response.data; // 응답 데이터

      // 경로 좌표 추출
      const polyline = [];
      const sections = data['routes'][0]['sections'];
      for (const section of sections) {
        const roads = section['roads'];
        for (const road of roads) {
          const vertexes = road['vertexes'];
          for (let i = 0; i < vertexes.length - 1; i += 2) {
            const x = vertexes[i];
            const y = vertexes[i + 1];
            polyline.push([x, y]);
          }
        }
      }

      return polyline; // 폴리라인 반환
    } catch (error) {
      console.error(`Error: ${error}`);
      return null;
    }
  }
}