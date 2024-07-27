/**
 * Author: xpanvictor@gmail.com xpan victor
 * */
/// <reference types="node" />
import INodeEventEmitter from 'node:events';
import { TCallbackType } from './types/eventEmitter';
declare class XtendedEventEmitter<T extends string | symbol, U extends Record<T, TCallbackType>> extends INodeEventEmitter {
    subscribe(event: T, callback: U[T]): void;
    publish(event: T, ...args: Parameters<U[T]>): void;
}
export default XtendedEventEmitter;
//# sourceMappingURL=index.d.ts.map