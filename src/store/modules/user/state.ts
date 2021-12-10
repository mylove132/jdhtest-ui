export type IUserState = {
    token: string
    name: string
}

export const userState = (): IUserState => {
    return {
        name: '张三',
        token: ''
    }
}