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
  subscribe<K extends T>(event: K, callback: U[K]): void;

  publish<K extends T>(event: K, ...args: TCallbackArgsType<K>): void;
}
