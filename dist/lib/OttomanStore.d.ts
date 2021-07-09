import session, { Store } from 'express-session';
import { Ottoman } from 'ottoman';
export declare class OttomanStore extends Store {
    client: Ottoman;
    collectionName: string;
    maxExpiry: number;
    prefix: string;
    constructor(options: OttomanStoreOptions);
    connectToOttoman(): import("ottoman").ModelTypes<any, any>;
    get(sid: string, callback: (err: any, session?: session.SessionData | null) => void): void;
    set(sid: string, session: session.SessionData, callback?: (err: any) => void): void;
    destroy(sid: string, callback?: (err: any) => void): void;
    touch(sid: string, session: session.SessionData & {
        lastModified?: Date;
    }, callback?: (err: any) => void): void;
    length(callback: (err: any, length: number) => void): void;
    clear(callback?: (err: any) => void): void;
    all(callback: (err: any, obj?: session.SessionData[] | {
        [sid: string]: session.SessionData;
    } | null) => void): void;
}
export interface OttomanStoreOptions {
    client?: Ottoman;
    collectionName?: string;
    maxExpiry?: number;
    prefix?: string;
}
