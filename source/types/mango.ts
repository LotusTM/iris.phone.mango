export interface AuthOptions {
  readonly username: string
  readonly password: string
  readonly app: string
  readonly device_id: string
}

export interface Options {
  readonly authToken: string
  readonly refreshToken: string
  readonly accountId: number
  readonly productId: number
  readonly customerId: number
  readonly abonentId: number
  readonly pointId: string
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

export interface StatsResponse {
  readonly status: boolean
}
