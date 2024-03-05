import java.util.Arrays;

public class bubbleSort {
    
    public static int[] sortingArray (int[] args) {
        for (int i = 0; i < args.length; i++) {
            
            boolean swapped = false;
            
            for (int j = 0; j < args.length - i - 1; j++) {
                
                if (args[j] > args[j+1]) {
                    int temp = args[j];
                    args[j] = args[j+1];
                    args[j+1] = temp;
                    swapped = true;
                }
            }
            
            if (swapped == false) {
                System.out.println(Arrays.toString(args));
                return args;
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
    }
}
