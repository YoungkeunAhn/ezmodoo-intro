declare type MenuType = {
  title: string
  subTitle: SubTitleType[]
}

declare type SubTitleType = {
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

declare type ChargeInfoDiscount = {
  mounth: number
  image: string
}
