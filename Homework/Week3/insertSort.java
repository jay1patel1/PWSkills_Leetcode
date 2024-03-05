import java.util.Arrays;

public class insertSort {
    public static void sortingArray(int[] array) {
        int n = array.length;

        for (int i = 1; i < n; i++) {
            int ele = array[i];
            int j;
            for (j = i - 1; j >= 0; j--) {
                if (array[j] > ele) {
                    array[j + 1] = array[j];
                } else {
                    break;
                }
            }
            array[j + 1] = ele;
            j = 0;
        }

        System.out.println(Arrays.toString(array));
    }

    public static void main(String[] args) {
        int[] arr1 = {5, 3, 4, 6, 4, 6, 3, 8, 9, 10};
        sortingArray(arr1);
        int[] arr2 = {12, 3, 25, 8, 1, 9, 7, 14, 6, 2};
        sortingArray(arr2);
        int[] arr3 = {18, 22, 9, 17, 6, 11, 4, 28, 15, 20};
        sortingArray(arr3);
        int[] arr4 = {31, 24, 5, 13, 27, 19, 2, 10, 8, 16};
        sortingArray(arr4);
        int[] arr5 = {5,5,4,3,2,1,1};
        sortingArray(arr5);
    }

}
