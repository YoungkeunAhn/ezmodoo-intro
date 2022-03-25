declare type MenuType = {
  title: string
  subTitle: SubTitleType[]
}

type SubTitleType = {
  title: string
  url: string
}

declare type BannerType = {
  image: string
  content: string
}

declare type PageType = {
  title: string
  bgImage: string
  engTitle: string
  summary: string
}

declare type ChargeInfoCardType = {
  type: 'simple' | 'basic' | 'pro' | 'premium'
  price: string
  content: string[]
}

declare type ChargeInfoDiscountType = {
  mounth: number
  image: string
}

type ServiceAcceptContentType = {
  title: string
  subContent: Array<{ subTitle: string; content: string }>
}
declare type SeviceAcceptTermsType = {
  mainTitle: string
  content: Array<ServiceAcceptContentType>
  required: boolean
}

declare type UserInfoAcceptTermsType = {
  mainTitle: string
  content: Array<{ title: string; content: string }>
  required: boolean
}
