export interface SpeakerProps {
  speaker: SpeakerType
}

export interface SpeakerType {
  name: string
  lastname: string
  description: string
  company?: string
  biography: string
  enabled: string
  homepage: string
  image: string
  ref: string
  url: string
  twitter: string
  scheduleId?: string
  linkedin?: string
}
