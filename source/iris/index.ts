import { convertCall } from './convert'

import * as Mango from './../types/mango'
import * as Iris from './types/iris'

export const convert = (calls: ReadonlyArray<Mango.Call>): ReadonlyArray<Iris.Call> => calls.map(convertCall)
