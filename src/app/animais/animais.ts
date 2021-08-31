export interface Animal {
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComment: boolean;
    likes: number;
    comments: string;
    userId: number;
}

export type Animais = Array<Animal>;