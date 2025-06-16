/*
nums=[2,7,11,15], target=9 => 2+7=9 => [0,1]

i=0, nums[i]=2, complement=7 => numMap={2:0}
i=1, nums[i]=7, complement=2 => found complement at index 0, return [0,1]
*/

/*
nums = [3,2,4], target = 6 => 2+4=6 => [1,2]

i=0, nums[i]=3, complement=3 => numMap={3:0}
i=1, nums[i]=2, complement=4 => numMap={3:0, 2:1}
i=2, nums[i]=4, complement=2 => found complement at index 1, return [1,2]
*/

export function twoSum(nums: number[], target: number): number[] {
  const numMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}
