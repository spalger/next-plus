import { NextRoute } from './next_route'
import {
  CreateMicroHandlerOptions,
  createMicroHandler,
} from '@spalger/micro-plus'

interface CreateNextHandlerOptions extends CreateMicroHandlerOptions {
  routes: NextRoute[]
}

export function makeNextHandler(
  optionsOrRoutes: CreateNextHandlerOptions | NextRoute[],
) {
  return createMicroHandler(optionsOrRoutes)
}
