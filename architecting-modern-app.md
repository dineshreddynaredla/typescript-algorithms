# Architecting Modern Web Apps

## Charactericts
- Cross Platform
- Modular and Loosely Coupled *(IOC container: Ninject)*
- Easily Tested with Automated Tests
- Traditional web app or SPA behaviours supported (MVC)
- Simple Development and Deployment - CI/CD
    - No monolithic apps
    - Git
    - Azure

## Common Desing Principles

### Separation of Concerns
 Sperate core business behavior from infrastructure and user interface logic. Ideally, business rules and logic should reside in a seperate project without dependency on other projects so that it can evolve easily or extended.

###  Encapsulation
Protect private state of the object with clear external contracts

### Dependency Inversion
Application should use abstractions 

### Explicit Dependencies
Methods and classes should explicitly require any collaborating objects they need to function correctly. i.e Proper constructor and method contract

### Single Responsibility 
Similer to SOC, loosely coupled and module application. e.g microservices

### DRY
Don't Repeat Yourself

### Persistence Ignorance
Persistence choices might change over time e.g Redis cache, Azure

### Bounded Context
Central pattern in Domain-driven design.

**SOLID**
- Single Responsibility
- Open/Close: Open for extension close for modification
- Liskov Principle: Object should be replaceble by it's subtype
- Interface Segregation Principle: Client specific interfaces than general one
- Dependency Inversion Principle: Depend on abstractions no concretions


ORMs
- EF Core
- Dapper
- Glimpsee EF6

Ninject, Castle Windser, AutoMapper, EF 