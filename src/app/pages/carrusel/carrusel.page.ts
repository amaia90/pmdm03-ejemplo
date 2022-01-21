import { CamaraService } from './../../servicios/camara.service';
import { Component, OnInit } from '@angular/core';
import Swiper, {SwiperOptions, Pagination, Navigation} from 'swiper/';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.page.html',
  styleUrls: ['./carrusel.page.scss'],
})
export class CarruselPage implements OnInit {
  public swiperConfig:SwiperOptions={pagination:true, navigation:true};

  /*options={
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   }; */

  constructor(public usarCamara: CamaraService) { }

  ngOnInit() {
    Swiper.use([Pagination, Navigation]);

  }

}
