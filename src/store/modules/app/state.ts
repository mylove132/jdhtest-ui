export type IAppState = {
    drawerStatus: boolean
}

export const appState = (): IAppState => {
    return {
        drawerStatus: false
    }
}