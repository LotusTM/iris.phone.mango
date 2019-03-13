import got from 'got'
import { name, version } from './../package.json'
import * as auth from './auth'

import * as Mango from './types/mango'

const REST_URL = `https://lk.mango-office.ru`

export const create = async (options?: Mango.AuthParams) => {
  const authData = await auth.login(options)
  const { request } = await auth.createSession(authData)
  return got.extend({
    baseUrl: `${REST_URL}/${authData.account_id}/${authData.product_id}`,
    cookieJar: request.gotOptions.cookieJar,
    timeout: 10000,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent': `${name}/${version}`
    }
  })
}
