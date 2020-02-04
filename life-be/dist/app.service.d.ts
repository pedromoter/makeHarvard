export declare class AppService {
    private API_VERSION;
    private DISCOVERY_API;
    private client;
    private pastLocations;
    private lockedState;
    getHello(): string;
    addLocation(loc: any): void;
    lock(): Promise<void>;
    unlock(): Promise<void>;
    gps(): Promise<void>;
    getLockState(): boolean;
    getLast(): any;
}
