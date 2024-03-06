import java.util.Arrays;

/**
 * MergeSortedArray88
 */
public class MergeSortedArray88 {

    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        int p_a = nums1.length-1;
        int p_b = m-1;
        int p_c = nums2.length-1;

        while (nums1[p_b] > nums1[p_a]) {
            if (nums1[p_b] > nums2[p_c]) {
                int temp = nums1[p_b];
                nums1[p_b] = nums1[p_a];
                nums1[p_a] = temp;
                p_b--;
                p_a--;
            } else {
                int temp = nums2[p_c];
                nums2[p_c] = nums1[p_a];
                nums1[p_a] = temp;
                p_a--;
                p_c--;
            }
        }

        System.out.println(Arrays.toString(nums1));
    }

    public static void main(String[] args) {
        int[] nums1 = { 1, 2, 3, 0, 0, 0 };
        int[] nums2 = { 2, 5, 6 };
        merge(nums1, 3, nums2, 3);

        int[] nums1_2 = { 1 };
        int[] nums2_2 = {};
        merge(nums1_2, 1, nums2_2, 0);

        int[] nums1_3 = { 0 };
        int[] nums2_3 = { 1 };
        merge(nums1_3, 0, nums2_3, 1);
    }

   };