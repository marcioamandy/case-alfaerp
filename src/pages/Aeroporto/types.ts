
export type RecordAirport = {
    Name: string;
    IcaoCode: string;
    IataCode: string;
    Location: RecordLocation[];
}

export type RecordLocation = {
    Address: string;
}
