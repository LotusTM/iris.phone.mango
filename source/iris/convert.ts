import { DateTime, Duration } from 'luxon'
import { reasons } from '../reasons'
import { direction, memberType } from './normalize'

import * as Iris from '../types/iris'
import * as Mango from '../types/mango'

const MOSCOW_TIMEZONE_OFFSET = 180

const convertPartyMember = (member: Mango.Member | Mango.Group) => {
  const zone = (member.time_offset === MOSCOW_TIMEZONE_OFFSET) ? 'Europe/Moscow' : 'UTC'
  return {
    type: memberType(member.type),
    id: Number(member.id),
    // create_time_original: member.create_time_original,
    created_at: DateTime.fromSeconds(member.create_time, { zone }).toISO(),
    answered_at: (member.answer_time) ? DateTime.fromSeconds(member.answer_time, { zone }).toISO() : null,
    end_at: DateTime.fromSeconds(member.end_time, { zone }).toISO(),
    end_reason: reasons[member.end_reason],
    // swt: member.swt,
    // ida: member.ida,
    // idb: member.idb,
    // rcb: member.rcb,
    duration: {
      // hold: Duration.fromObject({ seconds: Number(member.hold_duration) }).toFormat('hh:mm:ss'),
      // call: Duration.fromObject({ seconds: Number(member.call_duration) }).toFormat('hh:mm:ss'),
      // talk: Duration.fromObject({ seconds: Number(member.talk_duration) }).toFormat('hh:mm:ss'),
      // dial: Duration.fromObject({ seconds: Number(member.dial_duration) }).toFormat('hh:mm:ss'),
      hold: Number(member.hold_duration),
      call: Number(member.call_duration),
      talk: Number(member.talk_duration),
      dial: Number(member.dial_duration)
    },
    // time_offset: member.time_offset,
    intercepted: (member.call_intercepted),
    // detail: member.detail,
    answered: (member.isAnswer)
  }
}

export const convertCall = (call: Mango.Call) => {
  const zone = (call.time_offset === MOSCOW_TIMEZONE_OFFSET) ? 'Europe/Moscow' : 'UTC'
  return {
    date: DateTime.fromSeconds(call.time, { zone }).toISO(),
    direction: direction(call.direction),
    caller: call.caller,
    // mango member id for outgoing calls
    // call_member_id: call.call_member_id,
    // https://en.wikipedia.org/wiki/Dialed_Number_Identification_Service
    line: call.dnis,
    member: call.party.map(convertPartyMember),
    duration: Duration.fromObject({ seconds: Number(call.duration) }).toFormat('hh:mm:ss'),
    // contextId: Number(call.contextId),
    // billingContextId:	Number(call.billingContextId),
    // time_offset:	Number(call.time_offset),
    // https://en.wikipedia.org/wiki/Caller_ID#Blocking_and_unblocking_caller_ID
    // clir: (call.clir === '1')
    // clir_in: (call.clir_in === '1')
    callback_id: (call.callback_button_id === '-1') ? 0 : Number(call.callback_button_id),
    // vcdr_id: call.vcdr_id
    cost: call.cost
  }
}
