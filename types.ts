export type AddressType = {
    street:string,
    suite: string,
    city: string,
    zipcode: string
}
export type ContactType = {
    id?: string
    name: string,
    email: string,
    address: AddressType
}
export type PostType = {
    body: string,
    id: string,
    title: string,
    userid: string
}
export type SocialsType = {
    id: string,
    icon: string,
    path: string
}
