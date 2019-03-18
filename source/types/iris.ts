export interface Call {
  readonly date: string
  readonly direction: string
  readonly caller: string
  readonly line: string
  readonly member: ReadonlyArray<Member>
  readonly duration: number
  readonly callback_id: number
  readonly cost: number
}

export interface Member {
  readonly type: string
  readonly id: number
  readonly created_at: string
  readonly answered_at: string | null
  readonly end_at: string
  readonly end_reason: string
  readonly duration: Duration
  readonly intercepted: boolean
  readonly answered: boolean
}

export interface Duration {
  readonly hold: number
  readonly call: number
  readonly talk: number
  readonly dial: number
}
