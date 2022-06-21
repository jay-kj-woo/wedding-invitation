import styled from 'styled-components';
import Map from './Map';
import { SectionTitle } from './Styles';

const Location = () => {
  return (
    <Wrapper>
      <SectionTitle>오시는 길</SectionTitle>
      <Text>
        <strong>빌라드지디 수서 5층, 르씨엘 홀</strong>
        <br />
        서울 강남구 밤고개로 21길 79 (율현동 535)
        <br />
        02-543-2555
      </Text>
      <Map />
      <Text className="info">
        <strong>대중교통 이용 시</strong>
        <br />
        지하철 7호선 또는 3호선 수서역 <br />
        4번 출구 계단 이용 후 약 50m 직진
        <br />
        횡단보도가 나오면 왼쪽 약국을 감싸며 좌회전
        <br />
        50m앞 기아오토큐 맞은편에서 셔틀버스 탑승
        <br />
        <br />
        <strong>자기차량 이용 시</strong>
        <br />
        건물 앞에서 주차요원의 안내를 받으시길 바랍니다.
        <br />
        (주차 2시간 무료)
        <br />
        <br />
        <strong> 기차 이용 시</strong>
        <br />
        SRT고속철도 수서역 1번 출구 하차
        <br />
        도보 30초 거리 셔틀버스 탑승장에서 셔틀버스 이용
        <strong></strong>
        <br />
        <br />
        <strong>대전 셔틀버스 이용 시</strong>
        <br />
        여기저기서 3시에 탐
      </Text>
    </Wrapper>
  );
};

export default Location;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 100px 0 100px 0;
`;

const Text = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  strong {
    font-weight: 600;
  }
  line-height: 2;
  &.info {
    text-align: left;
  }
`;
