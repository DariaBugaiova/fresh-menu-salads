import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Salad } from '../shared/salad.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const salads: Salad[] = [
      {
        "id": 1,
        "name": 'Avocado Cucumber Salad',
        "ingredient": `Red onions, cucumber, red bell peppers,
                 avocado and sautéd shrimp.
                 Also, it’s tossed with a very light
                 and fresh lemon dressing.`,
        "img": 'avocado-salad.jpg'
      },
      {
        "id": 2,
        "name": 'Roasted Cauliflower Salad',
        "ingredient": '1 head cauliflower $2.99\n' +
          '1/2 red onion $0.55\n' +
          '2 Tbsp olive oil $0.32\n' +
          'Salt and Pepper to taste $0.05\n' +
          '1/2 bunch parsley $0.45',
        "img": 'cauliflower-salad.jpg'
      }
    ];
    return {salads};
  }
}
