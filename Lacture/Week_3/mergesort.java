import java.util.Arrays;

public class mergesort {
    public static int[] merge (int[] left, int[] right) {
        int i = 0;
        int j = 0;
        int k = 0;

        int[] result = new int[left.length + right.length];

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result[k] = left[i];
                k++;
                i++;
            } else {
                result[k] = right[j];
                k++;
                j++;
            }
        }

        while (i < left.length) {
            result[k] = left[i];
            k++;
            i++;
        }

        while (j < right.length) {
            result[k] = right[j];
            k++;
            j++;
        }

        System.out.println(Arrays.toString(result));

        return result; 
    }

    public static int[] mergeSortHelper(int[] arr, int start, int end) {
        
        if (start == end) {
            return arr;
        }

        int mid = (start + end) /2;
        int[] left = mergeSortHelper(arr, start, mid);
        int[] right = mergeSortHelper(arr, mid + 1, end);

        return merge(left, right);
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 45,2,67,8};
        mergeSortHelper(arr, 0, arr.length);
    }
}
