

export interface ICatData {
    name: string;
    image: string;
    position: { x: number, y: number };
    isInteracted: boolean;
}


export const CatData:ICatData[] = [
    {name: "cat1", image: "", position: {x: 100, y: 100}, isInteracted: false},
]