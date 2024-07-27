/**
 * Author: xpanvictor@gmail.com xpan victor
 * */

import INodeEventEmitter from 'node:events';
import { TCallbackType } from './types/eventEmitter';

class XtendedEventEmitter<
  T extends string | symbol,
  U extends Record<T, TCallbackType>
> extends INodeEventEmitter {
  public subscribe(event: T, callback: U[T]): void {
    this.on(event, callback);
  }

  public publish(event: T, ...args: Parameters<U[T]>): void {
    this.emit(event, ...args);
  }
}

export default XtendedEventEmitter;
