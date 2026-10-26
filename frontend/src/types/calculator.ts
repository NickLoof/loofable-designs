
export type Package = {
        name: string,
        price: number,
        startingAt: boolean,
        description: string,
        features: string[]
    }
export type AddOn = {
        name: string;
        price: number;
        startingAt: boolean;
        allowsQuantity: boolean
    }
export type CalculatorSelection = {
    selectedPackage: Package | null;
    selectedAddons: AddOn[];
    addonQuantities: Record<string, number>;
    total: number;
}