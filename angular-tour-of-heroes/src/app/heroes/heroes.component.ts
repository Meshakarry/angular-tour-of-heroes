import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
// import {HEROES} from '../mock-heroes'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 heroes:Hero[]=[];
 selectedHero:Hero

 onSelect(hero:Hero){
  this.selectedHero=hero;
  this.messageServices.addMessage(`You selected a hero with id=${hero.id}`)
 }
  constructor( private heroservice:HeroService,private messageServices:MessageService) //say that this is injection site 
  { }
   getHeroes():void{
      this.heroservice.getHeroes().subscribe(x=>this.heroes=x);
   }
  ngOnInit(): void {
    this.getHeroes();
  }

}
