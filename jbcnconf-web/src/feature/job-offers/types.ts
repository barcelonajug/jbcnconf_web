export interface Company {
  name: string
  logo: string
  linkedin: string
  twitter: string
  web: string
  instagram: string
  location: string
  offers: Offer[]
}

export interface Offer {
  title: string
  description: string
  url: string
}

export interface JobOffer {
  company: Company
}

export interface JobItemProps {
  job: JobOffer
}
