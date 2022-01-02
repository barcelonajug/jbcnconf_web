export interface MemberType {
  name: string
  lastname: string
  position: string
  bio: string
  role: string
  image: string
  linkedin?: string
  twitter?: string
}

export interface MemberProps {
  member: MemberType
}
