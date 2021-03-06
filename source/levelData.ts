module Octopussy {
    export class LevelData {

        private data: string[][] = 
        [
            [
                '#####################',
                '###4------2#4-2V4-2##',
                '###|BX    3-1B3-1T32#',
                '###32 4V2X   X   XT|#',
				'####| 3^^ 4V2 4V2 41#',
                '####|X  X >V< >+1 |##',
                '####| 42 L^^< 21  |##',
                '####| ><  XB|   X41##',
				'####| >+V2 4+VV2 |###',
				'###41 >++< >+++< |###',
                '###|TX>++< >+++< |###',
                '#4-^R 3^^< 3^^^1 32##',
                '#|SI X XB|X     X |##',
                '#3----2 L1 4----R |##',
                '######|X  X|TX   X32#',
                '###4-V< 42T>2 4V2 T|#',
                '###|T31 >+V+1 T^^-V1#',				
                '###|X  X>++< X    |##',
				'###| 42 >^+< 4VV2 |##',
				'###|B>< DB>1 3^^< 32#',
				'###3-+1X X|BX  T|XT|#',
				'#####|T UT>-----< L^2',
				'#####3--^-1#####| NE|',
                '################3---1',
				'#####################'
            ]
        ];

        get(index: number) : string[] {

            return this.data[index];
        }
    }
} 