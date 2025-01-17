import requests
import json


def fetch_path_data():
    try:
        headers = {
            "Authorization": "KakaoAK 9d667c01eb07e9f64c1df5d6156dbbf2",  # 카카오디벨로퍼스에서 발급 받은 API 키 값
            "Content-Type": "application/json",
        }

        params = {
            "origin": "126.9771,37.5648",  # 출발지
            "destination": "126.9883,37.5710",  # 목적지
            "waypoints": "",  # 경유지
            "priority": "RECOMMEND",  # 경로 탐색 우선순위 옵션
            "car_fuel": "GASOLINE",  # 차량 유종 정보
            "car_hipass": False,  # 하이패스 장착 여부
            "alternatives": False,  # 대안 경로 제공 여부
            "road_details": False,  # 상세 도로 정보 제공 여부
        }

        response = requests.get(
            "https://apis-navi.kakaomobility.com/v1/directions",
            headers=headers,
            params=params,
        )
        data = response.json()

        # 가이드 정보 추출
        guides = []
        for section in data["routes"][0]["sections"]:
            guides.extend(section["guides"])

        # 출력
        for guide in guides:
            if (
                "guidance" in guide
                and "distance" in guide
                and "x" in guide
                and "y" in guide
            ):  # 'guidance'와 'distance' 키가 존재하는지 확인
                print(
                    "Guidance:",
                    guide["guidance"],
                    " Distance:",
                    guide["distance"],
                    "x좌표:",
                    guide["x"],
                    "y좌표:",
                    guide["y"],
                )

    except Exception as e:
        print(f"An error occurred: {e}")


fetch_path_data()
