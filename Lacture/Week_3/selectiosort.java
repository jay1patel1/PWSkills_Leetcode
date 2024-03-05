import java.lang.reflect.Array;
import java.util.Arrays;

public class selectiosort {
    public static int[] sortingArray (int[] args) {
        for (int i = 0; i < args.length; i++) {
            for (int j = i+1; j < args.length; j++) {
                if (args[i] > args[j]) {
                    int tempNumber = args[i];
                    args[i] = args[j];
                    args[j] = tempNumber;
                }
            }
        }
        System.out.println(Arrays.toString(args));
        return args;
    }
    public static void main(String[] args) {
        int[] arr1 = {5, 3, 4, 6, 4, 6, 3, 8, 9, 10}; sortingArray(arr1);
        int[] arr2 = {12, 3, 25, 8, 1, 9, 7, 14, 6, 2}; sortingArray(arr2);
        int[] arr3 = {18, 22, 9, 17, 6, 11, 4, 28, 15, 20}; sortingArray(arr3);
        int[] arr4 = {31, 24, 5, 13, 27, 19, 2, 10, 8, 16}; sortingArray(arr4);
        
        int[] arr5 = {};
        sortingArray(arr5);

        int[] arr6 = {1};
        sortingArray(arr6);

        int[] arr7 = {3, 3, 3, 3, 3};
        sortingArray(arr7);

        int[] arr8 = {-5, 2, 1, -8, 0, 7};
        sortingArray(arr8);

        int[] arr9 = {Integer.MAX_VALUE, Integer.MIN_VALUE, 10000000, -9999999};
        sortingArray(arr9);

        int[] arr12 = new int[100000]; // Adjust size as needed
        for (int i = 0; i < arr12.length; i++) {
            arr12[i] = (int) (Math.random() * 10000); // Random values
        }

        long startTime = System.currentTimeMillis();
        sortingArray(arr12);
        long endTime = System.currentTimeMillis();

    }
}
