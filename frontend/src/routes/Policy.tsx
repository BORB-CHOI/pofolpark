import { Divider, Stack, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Stack mx={60} spacing={"6"}>
      <Text mb={5} textAlign={"center"} fontSize={"xl"} fontWeight={"bold"}>
        Too Simple - PofolPark 개인정보처리방침
      </Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        1. 개인정보 수집 및 이용목적
      </Text>
      <Text>
        Too Simple - PofolPark 사이트(이하 "사이트"라 함)는 쿠키 및 서비스
        상에서 사용자 정보를 수집하며, 이 정보는 주로 로그인 및 서비스 이용을
        위한 목적으로 사용됩니다.
      </Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        2. 수집하는 개인정보 항목
      </Text>
      <Text>
        사이트는 다음과 같은 개인정보 항목을 수집할 수 있습니다:
        <br />
        <br />
        • 사용자의 로그인 정보 (아이디, 토큰)
        <br />
        • 사용자의 서비스 이용 기록
        <br />• 기기 정보 (브라우저 종류, IP 주소 등)
      </Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        3. 개인정보의 수집방법
      </Text>
      <Text>
        사이트는 다음과 같은 방법으로 개인정보를 수집합니다:
        <br />
        <br />
        • 사용자의 직접적인 입력 (로그인 정보)
        <br />• 쿠키 및 기술적인 수단을 통한 자동 수집 (서비스 이용 기록, 기기
        정보)
      </Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        4. 개인정보 보유 및 이용기간
      </Text>
      <Text>
        사이트는 수집한 개인정보를 서비스 제공을 위한 목적으로만 사용하며, 이용
        목적이 달성될 때까지 보관됩니다.
        <br /> 다만 사용자가 개인정보의 삭제를 원하는 경우 지체 없이 해당 정보를
        삭제합니다.
      </Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        5. 개인정보의 제3자 제공
      </Text>
      <Text>사이트는 수집한 개인정보를 제3자와 공유하지 않습니다.</Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        6. 사용자의 권리
      </Text>
      <Text>
        사용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수
        있으며 사용자 정보 삭제 및 처리정지를 요청할 수도 있습니다. 사용자 정보
        삭제 또는 처리정지를 원하시는 경우, 책임자에게 연락 시 지체 없이
        조치됩니다.
      </Text>

      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        7. 개인정보 보안조치
      </Text>
      <Text>
        사이트는 사용자의 개인정보를 보호하기 위해 관리적, 기술적 조치를
        시행합니다.
        <br /> <br />
        1. 관리적 조치 <br />
        내부관리계획 수립/시행
        <br /> <br />
        2. 기술적 조치 <br />
        개인정보처리시스템 등의 접근권한 관리, 접근통제 시스템, 주요 개인정보의
        암호화
      </Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        8. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항
      </Text>
      <Text>
        사이트는 웹서비스를 제공하기 위해 ‘쿠키(cookie)’를 사용합니다. 쿠키는
        웹사이트를 운영하는데 이용되고 서버가 이용자의 컴퓨터 브라우저에서
        보내는 소량의 정보이며 이용자들의 PC 내의 하드디스크에 저장될 수
        있습니다.
        <br />
        <br />
        가. 쿠키의 사용목적
        <br />
        이용자가 방문한 웹페이지 대한 방문 및 이용형태, 보안접속 여부 등을
        파악하기 위해 사용합니다.
        <br />
        <br />
        나. 쿠키의 설치·운영 및 거부
        <br />웹 브라우저 상단의 도구{">"}인터넷 옵션{">"}개인정보 메뉴의 옵션
        설정을 통해 쿠키 저장을 거부할 수 있습니다. 쿠키 저장을 거부할 경우 별도
        불이익은 없습니다.
      </Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        9. 변경 사항 통지
      </Text>
      <Text>
        현 개인정보처리방침에 변경이 있을 경우, 사이트 정책 페이지에 공지됩니다.
      </Text>
      <Divider />
      <Text fontSize={"lg"} fontWeight={900}>
        10. 문의처 정보
      </Text>
      <Text>
        개인정보 처리와 관련한 문의사항은 다음 연락처로 문의 가능합니다:
        <br />
        <br />
        Email: qzsec299@naver.com
        <br />
        DM: @too_simple_dev
      </Text>
    </Stack>
  );
}
