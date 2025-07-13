export type LeetCodeProblem = {
  title: string;
  url: string;
  sample: string;
};

export type PokeAlgo = {
  name: string;
  region: string;
  type: string;
  rarity: number;
  timeComplexity: string;
  spaceComplexity: string;
  specialMove: string;
  effectiveAgainst: string;
  pokedexEntry: string;
  cxx: string;
  evolution: string;
  leetcode: LeetCodeProblem[];
};

export const pokedex: PokeAlgo[] = [
  {
    name: "STACK",
    region: "kanto",
    type: "Data Structure",
    rarity: 2,
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    specialMove: "Push/Pop",
    effectiveAgainst: "LIFO",
    pokedexEntry: "The LIFO Pokemon. Known for its ability to reverse order and match parentheses. Habitat: Function calls, expression evaluation.",
    cxx: `#include <stack>\nstd::stack<int> myStack;\nmyStack.push(10);\nmyStack.pop();`,
    evolution: "STACK → QUEUE → DEQUE",
    leetcode: [
      {
        title: "Valid Parentheses (LeetCode 20)",
        url: "https://leetcode.com/problems/valid-parentheses/",
        sample: `Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`
      },
      {
        title: "Min Stack (LeetCode 155)",
        url: "https://leetcode.com/problems/min-stack/",
        sample: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.`
      }
    ]
  },
  {
    name: "QUEUE",
    region: "kanto",
    type: "Data Structure",
    rarity: 2,
    timeComplexity: "O(1)",
    spaceComplexity: "O(n)",
    specialMove: "Enqueue/Dequeue",
    effectiveAgainst: "FIFO",
    pokedexEntry: "The FIFO Pokemon. Always first in line! Habitat: Scheduling, BFS algorithms.",
    cxx: `#include <queue>\nstd::queue<int> myQueue;\nmyQueue.push(10);\nmyQueue.pop();`,
    evolution: "QUEUE → DEQUE",
    leetcode: [
      {
        title: "Number of Recent Calls (LeetCode 933)",
        url: "https://leetcode.com/problems/number-of-recent-calls/",
        sample: `You have a RecentCounter class that counts the number of recent requests within a given time window.`
      }
    ]
  },
  {
    name: "BINARY SEARCH",
    region: "johto",
    type: "Algorithm",
    rarity: 3,
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    specialMove: "Divide & Conquer",
    effectiveAgainst: "Sorted Arrays",
    pokedexEntry: "The Search Pokemon. Finds targets in sorted habitats with lightning speed!",
    cxx: `int binarySearch(vector<int>& arr, int target) {\n  int l = 0, r = arr.size() - 1;\n  while (l <= r) {\n    int m = l + (r-l)/2;\n    if (arr[m] == target) return m;\n    if (arr[m] < target) l = m + 1;\n    else r = m - 1;\n  }\n  return -1;\n}`,
    evolution: "BINARY SEARCH → LOWER/UPPER BOUND",
    leetcode: [
      {
        title: "Binary Search (LeetCode 704)",
        url: "https://leetcode.com/problems/binary-search/",
        sample: `Given a sorted array of n integers and a target value, return the index if the target is found. If not, return -1.`
      },
      {
        title: "Search Insert Position (LeetCode 35)",
        url: "https://leetcode.com/problems/search-insert-position/",
        sample: `Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.`
      }
    ]
  },
  {
    name: "SLIDING WINDOW",
    region: "johto",
    type: "Pattern",
    rarity: 3,
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    specialMove: "Window Shift",
    effectiveAgainst: "Subarray Problems",
    pokedexEntry: "The Window Pokemon. Slides through arrays to find optimal solutions!",
    cxx: `int maxSum(vector<int>& nums, int k) {\n  int sum = 0, maxSum = 0;\n  for (int i = 0; i < k; ++i) sum += nums[i];\n  maxSum = sum;\n  for (int i = k; i < nums.size(); ++i) {\n    sum += nums[i] - nums[i-k];\n    maxSum = max(maxSum, sum);\n  }\n  return maxSum;\n}`,
    evolution: "SLIDING WINDOW → TWO POINTERS",
    leetcode: [
      {
        title: "Maximum Average Subarray I (LeetCode 643)",
        url: "https://leetcode.com/problems/maximum-average-subarray-i/",
        sample: `Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.`
      }
    ]
  },
  {
    name: "QUICK SORT",
    region: "hoenn",
    type: "Algorithm",
    rarity: 4,
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(log n)",
    specialMove: "Partition",
    effectiveAgainst: "Unsorted Arrays",
    pokedexEntry: "The Sorting Pokemon. Sorts with speed and style!",
    cxx: `void quickSort(vector<int>& arr, int l, int r) {\n  if (l < r) {\n    int pi = partition(arr, l, r);\n    quickSort(arr, l, pi-1);\n    quickSort(arr, pi+1, r);\n  }\n}`,
    evolution: "QUICK SORT → RANDOMIZED QUICK SORT",
    leetcode: [
      {
        title: "Sort an Array (LeetCode 912)",
        url: "https://leetcode.com/problems/sort-an-array/",
        sample: `Given an array of integers, sort the array in ascending order.`
      }
    ]
  },
  {
    name: "KMP",
    region: "sinnoh",
    type: "Algorithm",
    rarity: 5,
    timeComplexity: "O(n+m)",
    spaceComplexity: "O(m)",
    specialMove: "Prefix Table",
    effectiveAgainst: "String Matching",
    pokedexEntry: "The String Master Pokemon. Finds patterns in a flash!",
    cxx: `vector<int> kmp(string s, string p) {\n  vector<int> lps(p.size(), 0);\n  // ... build lps\n  // ... search\n  return {};\n}`,
    evolution: "KMP → Z-ALGORITHM",
    leetcode: [
      {
        title: "Implement strStr() (LeetCode 28)",
        url: "https://leetcode.com/problems/implement-strstr/",
        sample: `Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.`
      }
    ]
  }
];
