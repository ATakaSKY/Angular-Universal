import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('My Spiffy About Page');

    meta.addTags([
      { name: 'author',   content: 'sky.com'},
      { name: 'keywords', content: 'find me at kok'},
      { name: 'description', content: 'Cool SEO job' }
    ]);

  }

  ngOnInit() {
  }

}
