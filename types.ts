export type addressType = {
    street:string,
    suite: string,
    city: string,
    zipcode: string
}
export type contactType = {
    id?: string
    name: string,
    email: string,
    address: addressType
}
export type postType = {
    body: string,
    id: string,
    title: string,
    userid: string
}
export type socialsType = {
    id: string,
    icon: string,
    path: string
}
