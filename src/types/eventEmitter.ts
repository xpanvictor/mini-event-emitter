import type INodeEventEmitter from 'node:events';

export type TCallbackType = (...args: any[]) => any;

export type ICallbackTypes<T extends string | symbol> = Record<
  T,
  TCallbackType
>;

export type TCallbackArgsType<T extends string | symbol> = Parameters<
  ICallbackTypes<T>[T]
>;

export interface IEventEmitter<
  T extends string | symbol,
  U extends ICallbackTypes<T>
> extends INodeEventEmitter {
  subscribe(event: T, callback: U[T]): void;

  publish(event: T, ...args: TCallbackArgsType<T>): void;
}
