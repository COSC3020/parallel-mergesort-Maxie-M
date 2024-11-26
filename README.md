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
### Recursive Parallel Mergesort 
#### Work 
- The merging step processes all elements in the array at each level of recursion
  - Takes: $\Theta(n)$
- The **depth** of recursions is $log(n)$
  - As the array is halved at each step
- **Total Work Arcoss All Levels:** $\Theta(n log(n))$
#### Span
- This is determined by the merge operations along the recursion tree
- Merging at each level happens sequentially
- The **depth** of recursion is $log(n)$
  - merging at each level takes $\Theta(n)$ for the critical path 
- Since the merge at each level cannot be parallelized further
  - the **span** is $\Theta(log(n))$
#### Total Time Complexity of Recursive Parallel Mergesort 
- **Total Time Complexity:** $\Theta(n log(n))$ 
### Iterative Parallel Mergesort 
#### Work 
- Array is divided into progressively larger subarrays and merged iteratively
- All elements in the array are processed in each iteration
  - Takes: $\Theta(n)$
- The number of iterations is $log(n)$
  - corresponding to the number of levels of merging 
- **Total Work Across All Iterations:** $\Theta(n log(n))$
#### Span 
- Multiple merge operations are perfirmed in parakkek within each iteration
- Merging is sequential for each subarray
  - **Merge Operation on Single Subarray Takes:** $\Theta(log(n))$
- The number of iterations will determine the span of the program
  - There is $log(n)$ iteration, which each involve parallel merges 
- Span is dominated by the sequential merging at each level
  - $\Theta(log(n))$
### Conclusion 
- **Total Time Complexity:** $\Theta(n log(n))$
- **Span:** $\Theta(log(n))$
### Plagiarism Statement: 
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
### Resources:
- https://rachitvasudeva.medium.com/parallel-merge-sort-algorithm-e8175ab60e7
