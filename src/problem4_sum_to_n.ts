/**
 * Approach 1: Iterative loop (for loop)
 * Add up all numbers from 1 to n using a standard loop.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * This is simple and reliable for all reasonable values of n.
 */
export function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
/**
 * Approach 2: Mathematical formula
 * Uses the arithmetic progression formula: sum = n * (n + 1) / 2
 * Time complexity: O(1) (constant time)
 * Space complexity: O(1)
 * Fastest and most efficient for all valid values of n.
 */
export function sum_to_n_b(n: number): number {
    return (n * (n + 1))/2;
}
/**
 * Approach 3: Recursive function
 * Adds n to sum_to_n_c(n-1) recursively until n == 1.
 * Time complexity: O(n)
 * Space complexity: O(n) due to call stack usage
 * Simple but not recommended for large n (risk of stack overflow).
 */
export function sum_to_n_c(n: number): number {
    if (n <= 1) return n;
    return n + sum_to_n_c(n-1);
}

// === Quick test ===
function test() {
  const n = 1000;
  console.log(`sum_to_n_a(${n}) =`, sum_to_n_a(n));
  console.log(`sum_to_n_b(${n}) =`, sum_to_n_b(n)); 
  console.log(`sum_to_n_c(${n}) =`, sum_to_n_c(n)); 
}

test()