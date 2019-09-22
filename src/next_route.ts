import { Route, RouteHandler, ReqContext } from '@spalger/micro-plus'

export class NextRoute extends Route {
  constructor(method: string, handler: RouteHandler) {
    super(method, '*', handler)
  }

  match(ctx: ReqContext) {
    return ctx.method === this.method
  }
}
