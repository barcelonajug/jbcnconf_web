export interface Talk {
  id: number
  title: string
  speaker: string[]
  description: string
  room: string
}

export interface Slot {
  id: number
  start: string
  end: string
  talks: Talk[]
}

export interface ScheduleDate {
  date: string
  slots: Slot[]
}
