/**
 * Author: xpanvictor@gmail.com xpan victor
 * */

import INodeEventEmitter from 'node:events';
import { TCallbackType } from './types/eventEmitter';

class XtendedEventEmitter<
  T extends string | symbol,
  U extends Record<T, TCallbackType>
> extends INodeEventEmitter {
  public subscribe<K extends T>(event: K, callback: U[K]): void {
    this.on(event, callback);
  }

  public publish<K extends T>(event: K, ...args: Parameters<U[K]>): void {
    this.emit(event, ...args);
  }
}

export default XtendedEventEmitter;
