export interface Car {
    color: string;
    make: string;
    model: number | null;
    year?: Date;
    price: number;
    description: string;
    gas: "gasoline" | "electric";
}