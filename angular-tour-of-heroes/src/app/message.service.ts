import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   messages:string[]=[];
    addMessage(novaPoruka:string){
      this.messages.push(novaPoruka);
    }
    clear(){
      this.messages=[];
    }
  constructor() { }
}
