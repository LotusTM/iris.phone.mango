import got from 'got'
import querystring from 'querystring'
import { CookieJar } from 'tough-cookie'
import { name, version } from './../package.json'

import * as Mango from './types/mango'

const AUTH_URL = 'https://auth.mango-office.ru/auth/vpbx'
const CREATE_SESSION_URL = 'https://lk.mango-office.ru/auth/create-session'

const cookieJar = new CookieJar()

const client = got.extend({
  cookieJar,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'user-agent': `${name}/${version}`
  }
})

export const login = (options?: Mango.AuthParams): Promise<Mango.AuthResponse> => {
  const body = {
    username: process.env.MANGO_USERNAME,
    password: process.env.MANGO_PASSWORD,
    app: process.env.MANGO_APP,
    device_id: process.env.MANGO_DEVICE_ID,
    ...(options || {})
  }
  return Object.values(body).some((value) => typeof value === 'undefined')
    ? Promise.reject(Error('Please supply all required options'))
    : client.post(AUTH_URL, { body: querystring.stringify(body as Mango.AuthParams) })
        .then((response) => JSON.parse(response.body))
}

export const createSession = (options: Mango.AuthResponse) => {
  const body: Mango.CreateSessionParams = {
    auth_token: options.auth_token,
    refresh_token: options.refresh_token,
    username: '',
    app: options.app
  }
  return client.post(CREATE_SESSION_URL, { body: querystring.stringify(body) })
}
