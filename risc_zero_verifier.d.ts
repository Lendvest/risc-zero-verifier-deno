/* tslint:disable */
/* eslint-disable */
/**
* @returns {any}
*/
export function get_risc0_version(): any;
/**
* @param {Uint8Array} receipt
* @returns {any}
*/
export function binary_to_json(receipt: Uint8Array): any;
/**
* @param {string} guest_code_id_hex_string
* @param {string} receipt_json
* @returns {any}
*/
export function verify_receipt_json(guest_code_id_hex_string: string, receipt_json: string): any;
/**
* @param {string} guest_code_id_hex_string
* @param {Uint8Array} receipt_binary
* @returns {any}
*/
export function verify_receipt_binary(guest_code_id_hex_string: string, receipt_binary: Uint8Array): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly get_risc0_version: (a: number) => void;
  readonly binary_to_json: (a: number, b: number, c: number) => void;
  readonly verify_receipt_json: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly verify_receipt_binary: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly sys_verify_integrity: (a: number, b: number) => void;
  readonly sys_read: (a: number, b: number, c: number) => number;
  readonly sys_read_words: (a: number, b: number, c: number) => number;
  readonly sys_pause: (a: number, b: number) => void;
  readonly sys_halt: (a: number, b: number) => void;
  readonly sys_rand: (a: number, b: number) => void;
  readonly syscall_2: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly sys_cycle_count: () => number;
  readonly sys_log: (a: number, b: number) => void;
  readonly sys_input: (a: number) => number;
  readonly sys_panic: (a: number, b: number) => void;
  readonly sys_sha_buffer: (a: number, b: number, c: number, d: number) => void;
  readonly sys_sha_compress: (a: number, b: number, c: number, d: number) => void;
  readonly sys_bigint: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly sys_write: (a: number, b: number, c: number) => void;
  readonly sys_getenv: (a: number, b: number, c: number, d: number) => number;
  readonly sys_argc: () => number;
  readonly sys_argv: (a: number, b: number, c: number) => number;
  readonly sys_alloc_words: (a: number) => number;
  readonly sys_alloc_aligned: (a: number, b: number) => number;
  readonly sys_fork: () => number;
  readonly sys_pipe: (a: number) => number;
  readonly sys_exit: (a: number) => void;
  readonly syscall_0: (a: number, b: number, c: number, d: number) => void;
  readonly syscall_1: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly syscall_3: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly syscall_4: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly syscall_5: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly sys_verify_integrity2: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
