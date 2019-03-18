import { convertCall } from './convert'

import * as Mango from '../types/mango'

export const convert = (calls: ReadonlyArray<Mango.Call>) => calls.map(convertCall)
