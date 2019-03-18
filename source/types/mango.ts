export interface AuthParams {
  readonly username: string
  readonly password: string
  readonly app: string
  readonly device_id: string
}

export interface CreateSessionParams {
  readonly auth_token: string
  readonly refresh_token: string
  readonly username: string
  readonly app: string
}

export interface AuthResponse {
  readonly result: number
  readonly auth_token: string
  readonly refresh_token: string
  readonly customer_id: number
  readonly account_id: number
  readonly product_id: number
  readonly abonent_id: number
  readonly point_id: number
  readonly app: string
  readonly authMethod: string
}

export enum StatCallsPeriod {
  arbitrary = 'arbitrary',
  today2 = 'today2',
  yesterday = 'yesterday',
  current_week = 'current_week',
  current_month = 'current_month',
  last_month = 'last_month',
  current_quarter = 'current_quarter',
  last_quarter = 'last_quarter'
}

export enum CallerType {
  member = 'member',
  client = 'client',
  client_or_member = 'client_or_member'
}

export enum CallStatus {
  all = 'all',
  success = 'success',
  fail = 'fail'
}

export type DateString = string

export interface StatCallsParams {
  readonly perpage: number
  readonly type: 'calls'
  readonly period: StatCallsPeriod
  readonly startDate: DateString
  readonly endDate: DateString
  readonly whoCalledType: CallerType
  readonly whoCalled: string
  readonly clientNumber: number | undefined
  readonly line: number | 'any'
  readonly groups: ReadonlyArray<string>
  readonly phones: ReadonlyArray<string>
  readonly offset: number
  readonly sorting: string | undefined
  readonly fromLine: number | undefined
  readonly members: ReadonlyArray<string>
  readonly callStatus: CallStatus
  readonly filterParty: 'listall'
}

export interface StatsResponse {
  readonly status: string
  readonly hash: string
  readonly data: ReadonlyArray<Call>
}

export interface PartyMember {
  readonly id: number
  readonly create_time_original: string
  readonly create_time: number
  readonly answer_time: number | undefined
  readonly end_time: number
  readonly end_reason: 'string'
  readonly swt: string
  readonly ida: string
  readonly idb: string
  readonly rcb: number | undefined
  readonly hold_duration: number
  readonly call_duration: number
  readonly talk_duration: number
  readonly dial_duration: number
  readonly time_offset: number
  readonly call_intercepted: boolean
  readonly detail: number
  readonly isAnswer: boolean
  readonly count: number | undefined
}

export interface Member extends PartyMember {
  readonly type: 'member'
}

export interface Group extends PartyMember {
  readonly type: 'group'
  readonly members: ReadonlyArray<Member>
}

export interface Call {
  readonly time: number
  readonly direction: string
  readonly caller: string
  readonly call_member_id: string | null
  readonly dnis: string
  readonly party: ReadonlyArray<Member | Group>
  readonly duration: string
  readonly contextId: string
  readonly billingContextId: string
  readonly time_offset: number
  readonly clir: string
  readonly clir_in: string
  readonly callback_button_id: string
  readonly vcdr_id: null
  readonly cost: number
}

export interface CallEndReasons {
  readonly [code: string]: string
}
