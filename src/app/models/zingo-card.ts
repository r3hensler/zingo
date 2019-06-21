import { Tile } from './tile';

export class ZingoCard {
    id: number;
    title: string;
    spaces: [ // 3 x 3 layout of spaces on card
        Tile, Tile, Tile,
        Tile, Tile, Tile,
        Tile, Tile, Tile
    ];
}
