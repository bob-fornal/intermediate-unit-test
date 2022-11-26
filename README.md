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

... this is done to ensure the correct version of NodeJS is running and is capable of running the `fetch` command.

## Running Unit Tests

```script
> npm test
```

If you have [Jest installed](https://jestjs.io/docs/getting-started#running-from-command-line) globally, you can use ...

```script
> jest
```

## Coverage

```script
> npm run test:coverage
```

... OR, if you have [Jest installed](https://jestjs.io/docs/getting-started#running-from-command-line) globally ...

```script
> jest --coveration
```
