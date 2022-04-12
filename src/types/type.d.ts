declare type MenuType = {
  title: string
  subTitle: SubTitleType[]
}

type SubTitleType = {
  title: string
  url: string
}

declare type PageType = {
  title: string
  bgImage: string
  engTitle: string
  summary: string
  mBgImage: string
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

declare type FaqContentType = {
  id: string
  category: Omit<FaqCategoryId, 'All'>
  question: string
  answer: string
}
type FaqCategoryId =
  | 'All'
  | 'Site'
  | 'Error'
  | 'Service'
  | 'Extra'
  | 'Policy'
  | 'Setting'

declare type FaqCategoryType = {
  cateId: FaqCategoryId
  icon: string
  cateName: string
}

declare type ExtraPageType = {
  title: string
  cardList: Array<{ title: string; text: string }>
  image: string
  color: string
  stepList: string[]
  mColorFrameData: {
    titleList: string[]
    mainColor: string
    subColor: string
  }
}
declare type BannerType = {
  id: string
  title: string
  active: boolean
  image: string
  content: string
  order: number
}

declare interface mBannerType extends BannerType {
  button?: {
    title: string
    border: string
    color: string
    radius: number
  }
  url?: string
  bottomContent?: string
}

declare type mCardType = {
  icon: string
  bgImage: string
  title: string
  content: string
  url: string
}
