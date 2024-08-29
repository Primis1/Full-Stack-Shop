export type Order = {
    orderId     :string   
    userId      :string
    totalAmount : number
    createdAt   : string
    items       :string 
}
export type UserInfo = {
    userId: string
    Fname: string
    Lname: string
    email: string
    image?: string
    orders?:  Order[]
    
}