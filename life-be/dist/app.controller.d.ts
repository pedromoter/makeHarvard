import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    checkForUpdate(): string;
    getLock(): boolean;
    lock(): void;
    unlock(): void;
    saveLocation(b: any): void;
}
