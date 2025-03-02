/* tslint:disable */
/* eslint-disable */
export class YoYoState {
  free(): void;
  constructor(r: number, theta: number, alpha: number, dr: number, dtheta: number, dalpha: number);
  toObject(): any;
  static zeros(): YoYoState;
  one_step(p: YoyoParams, dt: number): YoYoState;
  steps(p: YoyoParams, dt: number, n: number): YoYoState;
}
export class YoyoParams {
  free(): void;
  constructor(m: number, I: number, D: number, d: number, l: number, g: number);
  static new_gmms(m: number, I: number, D: number, d: number, l: number): YoyoParams;
  toObject(): any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly yoyostate_toObject: (a: number) => any;
  readonly __wbg_yoyoparams_free: (a: number, b: number) => void;
  readonly yoyoparams_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly yoyoparams_new_gmms: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly yoyoparams_toObject: (a: number) => any;
  readonly yoyostate_zeros: () => number;
  readonly yoyostate_one_step: (a: number, b: number, c: number) => number;
  readonly yoyostate_steps: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_yoyostate_free: (a: number, b: number) => void;
  readonly yoyostate_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
