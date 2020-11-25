import 'styled-components'

declare module 'styled-componets'{
    export interface DefaultTheme{
        borderRadius: string

        colors: {
            main: string
            secondary: string
        }
    }
}