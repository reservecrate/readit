import { Injectable } from '@nestjs/common';
import { IPost } from './interfaces';

@Injectable()
export class AppService {
  getHello(): IPost[] {
    return [
      {
        title: 'Post 1',
        content: 'Body 1',
        flair: 'Gameplay',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 420,
      },
      {
        title: 'Post 2',
        content: 'Content 2',
        flair: 'Gameplay',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 303,
      },
      {
        title: 'Post 3',
        content: 'Content 3',
        flair: 'Gameplay',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 504,
      },
      {
        title: 'Post 4',
        content: 'Content 4',
        flair: 'Gameplay',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 872,
      },
      {
        title: 'Post gay 5',
        content: 'Content 5',
        flair: 'Gameplay',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 69,
      },
    ];
  }
}
