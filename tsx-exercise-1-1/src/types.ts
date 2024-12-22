type info = {
    id: string,
    email: string,
    name: string
}

type admininfo = info & {
    isadmin: boolean
}

export type {info, admininfo}