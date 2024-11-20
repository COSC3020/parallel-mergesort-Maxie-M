# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

## Runtime Anaylsis, Maxie M.
### Recursive Mergesort 
- will recursively divide array and will perform merge operation
- each recusive call to sort the left and right halves can in parallel
  - Although merging of these halves must happen sequentially
- **depth of recursion at each level:** $log(n)$
- **merge operation processes:** $\Theta(n)$
- **span of the parallel program:** $\Theta(n)$
### Iterative Mergesort 
- splits the array into sub-arrays and performs merges in parallel within each iteration
- **span of the parallel program:** $\Theta(n)$
### Conclusion 
- The *spam of the parallel program*, in the terms of *worst-case $\Theta$* is $\Theta(n)$
  - the merge operations at each level form the critical path
  - there's no way to parallelize them further
### Plagiarism Statement: 
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
### Resources:
- https://rachitvasudeva.medium.com/parallel-merge-sort-algorithm-e8175ab60e7
