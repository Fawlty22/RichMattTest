import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutGameComponent } from './about-game/about-game.component';
import { RealWorldAccuracyComponent } from './real-world-accuracy/real-world-accuracy.component';
import { DevelopmentBlogComponent } from './development-blog/development-blog.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutGameComponent,
    RealWorldAccuracyComponent,
    DevelopmentBlogComponent,
    MediaGalleryComponent,
    NewsletterComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Summit: A Mountain Simulator';
}
