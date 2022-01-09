export interface SpeakerDetailType {
  name: string
  role: string
  image: string
  biography: string
  linkedin?: string
  twitter?: string
  web?: string
}

export interface TalkDetailType {
  title: string
  youtube?: string
  tags: string[]
  speaker: SpeakerDetailType
  abstract: string
}

export interface SpeakerType {
  name: string
  image: string
}

export interface TalkType {
  id: string
  title: string
  abstract: string
  type: string
  tags: string[]
  level: string
  speakers: SpeakerType[]
}

export interface TalkProps {
  talk: TalkType
  index: number
}
