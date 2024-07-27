# Xtended Event Emitter
This package helps to create properly typed events

## Exports
- `ICallbackTypes`: Type guard for your event callbacks mapping.
- `XtendedEventEmitter`: Emitter class.
- Other type definitions.

## Guide
It's recommended to create a class on this and define constructor or other requirements.
To get started, create your enum or representation of events to monitor.

```ts
export enum EEvent {
  USER_JOINED = 'USER_JOINED',
}
```

Now create the mapping for the events and the callback.
```ts
export interface ICallbacks extends ICallbackTypes<EEvent> {
  [EEvent.USER_JOINED]: (name: string, id: int) => void;
}
```

Finally, export your own wrapper of the XtendedEventEmitter.
```ts
export default class MyEventEmitter extends XtendedEventEmitter<
  EEvent,
  ICallbacks
> {
  constructor() {
    super();
    logger.info('My event emitter initiated');
  }
}
```

For the usage, I recommend a subscriber file to keep all subscribers in place.
```ts
export const myEventEmitterInstance = new MyEventEmitter();

myEventEmitterInstance.subscribe(EEvent.USER_JOINED, (name, id) => {
  console.log(`Invitation created for ${name} with id ${id}`);
});

// From any where imported
myEventEmitter.publish(EEvent.USER_JOINED, 'Jaejae', 123)
```
