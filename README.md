# Intermediate Unit Tests

* [SLIDE DECK](./Intermediate-Unit-Tests.pdf)
* [Unit and Integration Testing](https://dev.to/leading-edje/unit-and-integration-testing-bco)

## Setup

Run the following ...

```script
> npm install
```

Please install `nvm` [link here](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating) and run ...

```script
> nvm use
```

## Running Unit Tests

```script
> npm test
```

## Coverage

```script
> npm test -- --coverage
```

... OR, if you have `jest` installed globally ...

```script
> jest --coveration
```

### Coverage Report

```script
> npm run test:coverage
```