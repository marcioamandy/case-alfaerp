export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordPessoa = {
    FirstName: string;
    LastName: string;
}

export type RecordItem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: Platform;
    genreName: string;
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';
