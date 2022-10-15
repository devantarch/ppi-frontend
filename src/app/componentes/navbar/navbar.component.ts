import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PfDataFetchService } from 'src/app/servicios/pf-data-fetch.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router, private datosPf:PfDataFetchService, private tokenService:TokenService ) { }

  ngOnInit(): void {
        this.datosPf.obtenerDatos();
        if(this.tokenService.getToken()){
          this.isLogged=true;
        }else{
          this.isLogged=false;
        }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
