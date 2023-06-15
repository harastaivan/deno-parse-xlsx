export function add(a: number, b: number): number {
    return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
    console.log('Add 5 + 3 =', add(5, 3));
}
