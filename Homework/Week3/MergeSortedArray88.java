///**
//* MergeSortedArray88
//*/
//public class MergeSortedArray88 {
//
//   public void merge(int[] nums1, int m, int[] nums2, int n) {
//
//
//
//       for (int i = 0; i < n; i++) {
//           int keyPoint = m;
//           while () {
//               if (nums1[keyPoint+i] > nums2[i]) {
//                   int tempValue = nums1[keyPoint+i];
//                   nums1[keyPoint+i] = nums1[keyPoint+i+1];
//                   nums1[keyPoint+i] = tempValue;
//                   keyPoint--;
//               } else {
//                   nums1[keyPoint+i-1] = nums2[i];
//               }
//           }
//
//       }
//   }
//
//   public static void main(String[] args) {
//       MergeSortedArray88 merger = new MergeSortedArray88();
//       int[] nums1 = {1,2,3,0,0,0};
//       int[] nums2 = {2,5,6};
//       merger.merge(nums1, 3, nums2, 3);
//
//       MergeSortedArray88 merger2 = new MergeSortedArray88();
//       int[] nums1_2 = {1};
//       int[] nums2_2 = {};
//       merger.merge(nums1_2, 1, nums2_2, 0);
//
//       MergeSortedArray88 merger3 = new MergeSortedArray88();
//       int[] nums1_3 = {0};
//       int[] nums2_3 = {1};
//       merger.merge(nums1_3, 0, nums2_3, 1);
//   }
//}