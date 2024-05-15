export interface IPost {
    id: number,
    user_id: number,
    title: string,
    body: string
}

export interface IPosts {
    posts: IPost[]
}