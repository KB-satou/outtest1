let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

const YoYoStateFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_yoyostate_free(ptr >>> 0, 1));

export class YoYoState {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(YoYoState.prototype);
        obj.__wbg_ptr = ptr;
        YoYoStateFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        YoYoStateFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_yoyostate_free(ptr, 0);
    }
    /**
     * @param {number} r
     * @param {number} theta
     * @param {number} alpha
     * @param {number} dr
     * @param {number} dtheta
     * @param {number} dalpha
     */
    constructor(r, theta, alpha, dr, dtheta, dalpha) {
        const ret = wasm.yoyostate_new(r, theta, alpha, dr, dtheta, dalpha);
        this.__wbg_ptr = ret >>> 0;
        YoYoStateFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {YoYoState}
     */
    static zeros() {
        const ret = wasm.yoyostate_zeros();
        return YoYoState.__wrap(ret);
    }
    /**
     * @param {YoyoParams} p
     * @param {number} dt
     * @returns {YoYoState}
     */
    one_step(p, dt) {
        _assertClass(p, YoyoParams);
        var ptr0 = p.__destroy_into_raw();
        const ret = wasm.yoyostate_one_step(this.__wbg_ptr, ptr0, dt);
        return YoYoState.__wrap(ret);
    }
    /**
     * @param {YoyoParams} p
     * @param {number} dt
     * @param {number} n
     * @returns {YoYoState}
     */
    steps(p, dt, n) {
        _assertClass(p, YoyoParams);
        var ptr0 = p.__destroy_into_raw();
        const ret = wasm.yoyostate_steps(this.__wbg_ptr, ptr0, dt, n);
        return YoYoState.__wrap(ret);
    }
}

const YoyoParamsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_yoyoparams_free(ptr >>> 0, 1));

export class YoyoParams {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        YoyoParamsFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_yoyoparams_free(ptr, 0);
    }
}

export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

