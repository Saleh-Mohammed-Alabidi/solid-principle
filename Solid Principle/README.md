# SOLID Principles 

Solid principles applied on Typescript.

## What is SOLID?

SOLID is an acronym for 5 important design principles when doing OOP (Object Oriented Programming). These 5 principles were introduced by Uncle Bob, in the 2000s.that aim to help us structure our code in order to :
 
- Tolerate change.
- Ease code understanding.
- write components that can be used in many software systems.
- They also make it easy for developers to avoid code smells, easily refactor code.

## SOLID Stands For :

- S - Single Responsibility Principle (SRP)
- O - Open Closed Principle (OCP)
- L - Liskov Substitution Principle (LSP)
- I - Interface Segregation Principle (ISP)
- D - Dependency Inversion Principle (DIP)

# Single Responsibility Principle

A class should have one, and only one, reason to change.

If our classes assume multiple responsibilities, they will be highly coupled thus making them more difficult to maintain.

# Open-Closed Principle

Software entities should be open for extension, but closed for modification.

This principle states that software entities must be extensible without having to modify the existing code. In order to achieve this, we need to make abstractions. By doing this, we’ll be able to extend the behavior of a class without changing a single line of code in it.

# Liskov substitution Principles

Sub classes should be substitutable for their super classes.

This principle states that objects must be replaceable by instances of their subtypes without altering the correct functioning of the system.

# Interface Segregation Principle

Many client-specific interfaces are better than one general-purpose interface.

This principle states that classes should never implement interfaces that they don’t need to use. If they do, we’ll end up having not implemented methods in our classes. This can be solved creating specific interfaces instead of general-purpose interfaces.

# Dependency Inversion Principle

Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.

This principle states that a class should not depend on another class, but instead on an abstraction of that class. It allows loose-coupling and more reusability.


## Contact me:
#### Name : Saleh Mohammed Saleh Alabidi
#### Email: saleh.m.alabidi@gmail.com