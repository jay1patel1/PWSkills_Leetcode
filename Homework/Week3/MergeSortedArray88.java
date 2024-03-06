/**
 * MergeSortedArray88
 */
public class MergeSortedArray88 {

    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p_a = nums1.length-1;
        int p_b = m-1;
        int p_c = nums2.length-1;

        while (nums1[p_b] > nums2[p_c] {
            if (nums1[p_b] > nums2[p_c]) {
                int tmep = nums1[p_b];
                nums2[p_c]
            }
        }
    }

    public static void main(String[] args) {
        int[] nums1 = { 1, 2, 3, 0, 0, 0 };
        int[] nums2 = { 2, 5, 6 };
        merge(nums1, 3, nums2, 3);

        int[] nums1_2 = { 1 };
        int[] nums2_2 = {};
        merge(nums1_2, 1, nums2_2, 0);

        MergeSortedArray88 merger3 = new MergeSortedArray88();
        int[] nums1_3 = { 0 };
        int[] nums2_3 = { 1 };
        merge(nums1_3, 0, nums2_3, 1);
    }

   };