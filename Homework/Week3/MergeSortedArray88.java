import java.util.Arrays;

/**
 * MergeSortedArray88
 */
public class MergeSortedArray88 {

    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1; // Pointer for nums1
        int j = n - 1; // Pointer for nums2
        int k = m + n - 1; // Pointer for the merged array

        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }

        // If there are remaining elements in nums2, add them to nums1
        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }

        System.out.println(Arrays.toString(nums1));
    }

    public static void main(String[] args) {
        int[] nums1 = { 1, 2, 3, 10, 12, 14, 0 , 0, 0, 0, 0};
        int[] nums2 = { 2, 5, 6, 7, 8 };
        merge(nums1, 6, nums2, 5);

        int[] nums1_2 = { 1 };
        int[] nums2_2 = {};
        merge(nums1_2, 1, nums2_2, 0);

        int[] nums1_3 = { 0 };
        int[] nums2_3 = { 1 };
        merge(nums1_3, 0, nums2_3, 1);
    }

   };