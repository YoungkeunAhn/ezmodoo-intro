module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'], //파일 크기를 최소화하기 위한 옵션, 여기에 설정된 파일이 아니면 삭제된다.
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
}
