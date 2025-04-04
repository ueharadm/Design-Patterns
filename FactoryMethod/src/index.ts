import { UIFramework } from './UIFramework/UIFramework'
import { UIWithSquareButtons } from './UIFramework/creators/UIWithSquareButtons';
import { UIWithCircleButtons } from './UIFramework/creators/UIWithCircleButtons';


/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function interfaceResolver(creator: UIFramework) {
    // ...
    console.log('Interface Resolver: I\'m not aware of the creator\'s class, but it still works.\n');
    creator.render();
    // ...
}

/**
 * The Application picks a creator's type depending on the chosen theme
 */
console.log('Application: Launched with the UIWithCircleButtons.');
interfaceResolver(new UIWithCircleButtons());
console.log('');

console.log('Appplication: Launched with the UIWithSquareButtons.');
interfaceResolver(new UIWithSquareButtons());