# Factory Method

Creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

Factory method solves the problem of creating product objects without specifying their concrete classes.


## Example

In this example we will implement the Factory Method to create an UI that returns different themed buttons based on the subclass called, making sure the code is open for new themes and without needing to know each theme when Factory is defined