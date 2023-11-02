/* eslint-disable prefer-rest-params */
import { Subscription } from 'rxjs';

/* eslint-disable @typescript-eslint/ban-types */
const isFunction = (fn: Function) => typeof fn === 'function';

const doUnsubscribe = (subscription: Subscription) => {
  subscription &&
    isFunction(subscription.unsubscribe) &&
    subscription.unsubscribe();
};

const doUnsubscribeIfArray = (subscriptionsArray: unknown) => {
  Array.isArray(subscriptionsArray) &&
    subscriptionsArray.forEach(doUnsubscribe);
};

export function AutoUnsubscribe({
  blackList = [],
  arrayName = '',
  event = 'ngOnDestroy',
} = {}) {
  return function (constructor: Function) {
    const original = constructor.prototype[event];

    if (!isFunction(original)) {
      throw new Error(
        `${constructor.name} is using @AutoUnsubscribe but does not implement ${event}`
      );
    }

    constructor.prototype[event] = function () {
      isFunction(original) && original.apply(this, arguments);

      if (arrayName) {
        doUnsubscribeIfArray(this[arrayName]);
        return;
      }

      for (const propName in this) {
        if ((blackList as string[]).includes(propName)) continue;

        const property = this[propName];
        doUnsubscribe(property);
      }
    };
  };
}
