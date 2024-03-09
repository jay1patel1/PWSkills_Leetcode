import java.util.ArrayList;
import java.util.List;

public class CountOfSmallerNumbers {

    public static List<Integer> countSmaller(int[] nums) {
        List<Integer> returnList = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int counter = 0;
            for (int j = i+1; j < nums.length; j++) {
                if (num > nums[j]) {
                    counter++;
                }
            }
            returnList.add(counter);
        }

        System.out.println(returnList);

        return returnList;
    }
    public static void main(String[] args) {
        int[] nums = {5,2,6,1};
        int[] nums2 = {-1};
        int[] nums3 = {-1,-1};

        List<Integer> integerList = countSmaller(nums);
        List<Integer> integerList2 = countSmaller(nums2);
        List<Integer> integerList3 = countSmaller(nums3);
    }
}
