export interface Room {
  id: number;
  filmId: number;
  schedule: RoomSchedule[]
}

export interface RoomSchedule {
  day: string,
  hours: string[]
}
