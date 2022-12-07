import { DataObject, rawDataSymbol } from '../DataObject'
import { OwnerData, MimeTypes, Status, Visibility } from '../types'

export type EmoteSize = '1' | '2' | '3' | '4'

export interface EmoteSettings {
  size: EmoteSize
}

export type EmoteURL = [EmoteSize, string]

export interface EmoteData {
  id: string
  name: string
  owner: OwnerData
  visibility: Visibility
  visibility_simple: any[]
  mime: MimeTypes
  status: Status
  tags: string[]
  width: [number, number, number, number]
  height: [number, number, number, number]
  urls: [EmoteURL, EmoteURL, EmoteURL, EmoteURL]
}

export class Emote extends DataObject<EmoteData> {
  /**
   * The ID of the emote.
   */
  get id(): string {
    return this[rawDataSymbol].id
  }
  /**
   * The name of the emote. This is how you would use the emote in chat.
   */
  get code(): string {
    return this[rawDataSymbol].name
  }

  getUrl(size: EmoteSettings): string
  getUrl(size: EmoteSize): string
  getUrl(emoteSize: EmoteSize | EmoteSettings): string {
    const { size = '1' } = typeof emoteSize === 'string' ? { size: emoteSize } : emoteSize
    return `https://cdn.7tv.app/emote/${this.id}/${size}x`
  }
}
