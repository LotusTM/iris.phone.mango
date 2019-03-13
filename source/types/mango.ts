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
}
