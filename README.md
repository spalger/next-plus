# @spalger/next-plus

A couple helpers for working with [`next.js`](https://github.com/zeit/next.js)

## Routing

### `createNextHandler`

Create a next.js handler, which is just a micro handler that takes `NextRoute` objects instead. `NextRoute` objects are just `Route` objects that don't specify their path, since next.js handles
routing via the file-system.

Signature:
```ts
interface Options {
  routes: NextRoute[],

  /**
   * global request handler that can return a response to take over requests
   */
  onRequest?: (ctx: ReqContext) => Promise<RouteResponse | void> | RouteResponse | void,

  /**
   * Array of exact origin header values that will authorize cors pre-flight requests
   */
  corsAllowOrigins?: string[]

  /**
   * Object with methods that will be called while a request is processed, see `./src/hooks.ts`
   */
  hooks?: Hooks
}

function createNextHandler(options: Options | NextRoute[]): (req: IncomingMessage, res: ServerResponse) => void
```

Example:
```js
import { createNextHandler, assertValidJwtAuthrorization, getConfigVar } from '@spalger/next-plus'

module.exports = createNextHandler({
  onRequest(ctx) {
    assertValidJwtAuthrorization(ctx, getConfigVar('JWT_SECRET'))
  },

  routes: [
    new NextRoute('GET', (ctx) => ({
      status: 200,
      body: 'bar'
    }))
  ],
})
```


### `NextRoute`

Signature:
```ts
new NextRoute(
  // valid request method for this route
  method: string,
  // function to execute when requests are received
  handler: (ctx: ReqContext) => Promise<RouteResponse> | RouteResponse,
)
```

Simplified version of `Route` for use with [next.js dynamic routing](https://nextjs.org/docs#dynamic-routing).


### `ReqContext`

See [@spalger/micro-plus `RewContext` docs](https://github.com/spalger/micro-plus#reqcontext)

### `RouteResponse`

See [@spalger/micro-plus `RouteResponse` docs](https://github.com/spalger/micro-plus#routeresponse)

## Errors

See [@spalger/micro-plus "Errors" docs](https://github.com/spalger/micro-plus#errors)

## Config

See [@spalger/micro-plus "Config" docs](https://github.com/spalger/micro-plus#config)

## JWT

See [@spalger/micro-plus "JWT" docs](https://github.com/spalger/micro-plus#jwt)


## Search Params

See [@spalger/micro-plus "Search Params" docs](https://github.com/spalger/micro-plus#search-params)
