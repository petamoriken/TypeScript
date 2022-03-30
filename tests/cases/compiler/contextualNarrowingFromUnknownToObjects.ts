
// @strictNullChecks: true, false
// @target: esnext

declare function keysOfEmptyObject(o: {}): string[];
declare function keysOfNonPrimitive(o: object): string[];

namespace explicitConstraints {
    export function keyLengthsEqualUsingEmptyObjectFn<T>(a: T, b: T): [T, T] | undefined {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
    
    export function keyLengthsEqualUsingNonPrimitiveFn<T>(a: T, b: T): [T, T] | undefined {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
}

// Explicit Constraints of 'unknown'
namespace explicitConstraintsOfUnknown {
    export function keyLengthsEqualUsingEmptyObjectFn<T>(a: T, b: T): [T, T] | undefined {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
    
    export function keyLengthsEqualUsingNonPrimitiveFn<T>(a: T, b: T): [T, T] | undefined {
        if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
            return undefined;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return undefined;
        }
        if (keysOfEmptyObject(a).length !== keysOfEmptyObject(b).length) {
            return [a, b];
        }
        return undefined;
    }
}
