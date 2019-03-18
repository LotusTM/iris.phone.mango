export const direction = (dir: string): string => {
  switch (dir) {
    case '1': return 'INCOMING'
    case '2': return 'OUTGOING'
    case '3': return 'INTERNAL'
    default: return 'UNKNOWN'
  }
}

export const memberType = (type: string): string => {
  switch (type) {
    case 'member': return 'MEMBER'
    case 'group': return 'GROUP'
    default: return 'UNKNOWN'
  }
}
