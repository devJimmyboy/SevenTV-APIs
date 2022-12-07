export interface OwnerData {
  id: string
  twitch_id: string
  login: string
  display_name: string
  role: RoleData
}

export interface UserData extends OwnerData {
  profile_picture_id: string
}

export interface RoleData {
  id: string
  name: string
  position: number
  color: number
  allowed: number
  denied: number
}

export enum Visibility {
  PUBLIC = 0,
  PRIVATE = 1,
}

export type MimeTypes = 'image/avif' | 'image/webp' | 'image/gif'

export enum Status {
  ACTIVE = 3,
  DELETED = 4,
}
