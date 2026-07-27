export interface Category{
    id:number
    name:string

}
export interface Blog{
    id:number
    title:string
    description:string
    categories:Category[]
    createdAt:Date
    updatedAt:Date
}