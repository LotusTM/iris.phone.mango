import got from 'got'
import querystring from 'querystring'
import { name, version } from './../package.json'

import * as Mango from './types/mango'

const AUTH_URL = 'https://auth.mango-office.ru/auth/vpbx'

const client = got.extend({
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'user-agent': `${name}/${version}`
  }
})

export const login = (options?: Mango.AuthOptions): Promise<Mango.AuthResponse> | Error => {
  const body = {
    username: process.env.MANGO_USERNAME,
    password: process.env.MANGO_PASSWORD,
    app: process.env.MANGO_APP,
    device_id: process.env.MANGO_DEVICE_ID,
    ...(options || {})
  }
  return Object.values(body).some((value) => typeof value === 'undefined')
    ? Error('Please supply all required options')
    : client.post(AUTH_URL, { body: querystring.stringify(body as Mango.AuthOptions) })
        .then((response) => JSON.parse(response.body))
}
