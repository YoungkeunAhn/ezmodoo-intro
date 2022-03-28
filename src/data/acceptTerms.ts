export const serviceAcceptTerms: SeviceAcceptTermsType = {
  mainTitle: '서비스 이용약관',
  required: true,
  content: [
    {
      title: '총칙',
      subContent: [
        {
          subTitle: '목적',
          content:
            '본 약관은 LKR 주식회사(이하”회사)가 제공하는 모두편해(www.ezmodoo.com)서비스의 가입조건 및 이용에 관한 제반 사항과 기타 필요한 사항을 구체적으로 규정함을 목적으로 한다.',
        },
      ],
    },
  ],
}

export const userInfoAcceptTerms: UserInfoAcceptTermsType = {
  mainTitle: '개인정보 수집 및 이용',
  required: true,
  content: [
    {
      title: '개인정보 수집에 대한 동의',
      content:
        '회사는 이용자들이 회사의 개인정보 보호정책 또는 이용약관의 내용에 대하여 「동의」버튼 또는 「취소」버튼을 클릭할 수 있는 절차를 마련하여, 「동의」버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.',
    },
    {
      title: '개인정보의 수집 및 이용 목적',
      content:
        '이용자 식별, 중복가입방지, 서비스 제공에 관한 계약 이행 및 유료서비스 제공에 따른 요금정산, 서비스 이용 만족도 조사',
    },
    {
      title: '개인정보의 수집 항목',
      content:
        '계정정보(아이디, 비밀번호, 중복 가입 확인 정보), 담당자정보(이름, 이메일, 휴대폰전화번호), 회사정보(상호명 및 법인명, 사업자 등록번호), 가입경로',
    },
    {
      title: '개인정보의 보유기간',
      content:
        ' 모두편해 서비스 이용기간 종료 후 최종 접속일로부터 12개월 이후 파기, 회원탈퇴 또는 동의 철회시 7일 후에 파기하되 일부 항목(회사명, 담당자명, 아이디, 비밀번호, 휴대전화 번호, 이메일 주소)에 대하여는 12개월 이후 파기',
    },
  ],
}
