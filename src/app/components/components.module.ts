import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  entryComponents: [DetailsComponent],
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent, DetailsComponent],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowParesComponent, DetailsComponent],
  imports: [
    CommonModule,
    PipesModule,
    IonicModule  
  ]
})
export class ComponentsModule { }
