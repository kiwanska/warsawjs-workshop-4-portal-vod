import { Injectable } from '@angular/core';
import { Video } from './video.interface';

@Injectable()
export class VideosService {

  videos: Video[] = [
    {
      description: 'Description lorem ipsum',
      title: 'Fast & Furious',
      image: 'https://unsplash.it/320/250?image=0',
      liked: false,
      rating: 5,
      source: '/assets/video2.mp4'
    }, {
      description: 'Description lorem ipsum',
      title: 'Slow & Lazy',
      image: 'https://unsplash.it/320/250?image=100',
      liked: true,
      rating: 2,
      source: '/assets/video.mp4'
    }, {
      description: 'Description lorem ipsum',
      title: 'Iron Man III',
      image: 'https://unsplash.it/320/250?image=200',
      liked: false,
      rating: 2,
      source: '/assets/video2.mp4'
    }, {
      description: 'Description lorem ipsum',
      title: 'Back to the future',
      image: 'https://unsplash.it/320/250?image=300',
      liked: true,
      rating: 2,
      source: '/assets/video.mp4'
    }, {
      description: 'Description lorem ipsum',
      title: 'Fast & Furious',
      image: 'https://unsplash.it/320/250?image=0',
      liked: false,
      rating: 5,
      source: '/assets/video2.mp4'
    }, {
      description: 'Description lorem ipsum',
      title: 'Slow & Lazy',
      image: 'https://unsplash.it/320/250?image=100',
      liked: true,
      rating: 2,
      source: '/assets/video.mp4'
    }, {
      description: 'Description lorem ipsum',
      title: 'Iron Man III',
      image: 'https://unsplash.it/320/250?image=200',
      liked: false,
      rating: 2,
      source: '/assets/video2.mp4'
    }, {
      description: 'Description lorem ipsum',
      title: 'Back to the future',
      image: 'https://unsplash.it/320/250?image=300',
      liked: true,
      rating: 2,
      source: '/assets/video.mp4'
    }
  ]

  constructor() { }

}
