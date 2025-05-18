import { messageModel } from "./messageModel"

export interface chatBoxModel{
    id:number,
    photo:string,
    name:string,
    messages: messageModel[]
}