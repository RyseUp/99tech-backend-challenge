/**
 * Approach A: Iterative loop
 * Time complexity: O(n)
 * Space complexity: O(1)
 * Reliable and readable, but slower than formula.
 */
export function sum_to_n_a(n: number): number {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Approach B: Math formula (Arithmetic Progression)
 * Formula: sum = n * (n + 1) / 2
 * Time complexity: O(1)
 * Space complexity: O(1)
 * Best performance.
 */
export function sum_to_n_b(n: number): number {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
}

/**
 * Approach C: Recursive
 * Time complexity: O(n)
 * Space complexity: O(n) - due to call stack
 * Elegant but risky for large n (stack overflow)
 */
export function sum_to_n_c(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return n + sum_to_n_c(n - 1);
}

/**
 * Quick test runner
 */
function test() {
  const cases = [5, 10, 0, -5, 100];

  for (const n of cases) {
    console.log(`\n=== Test with n = ${n} ===`);
    console.log("sum_to_n_a:", sum_to_n_a(n));
    console.log("sum_to_n_b:", sum_to_n_b(n));
    console.log("sum_to_n_c:", sum_to_n_c(n));
  }
}

if (require.main === module) {
  test();
}
