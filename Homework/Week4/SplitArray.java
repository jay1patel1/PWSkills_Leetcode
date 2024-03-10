public class SplitArray {
    public static int[] splitArray (int[] arr,int x) {
        int i = 0;
        int j = arr.length-1;

        while (i < j) {
            if (arr[i] > x) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j--;
            } else if (arr[j] < x) {
                int temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                i++;
            } else if (arr[i] < x) {
                i++;
            } else if (arr[j] > x) {
                j++;
            } else if (arr[i] == x) {
                int temp = arr[i];
                arr[i] = arr[arr.length-1];
                arr[arr.length-1] = temp;
            } else if (arr[j] == x) {
                int temp = arr[j];
                arr[j] = arr[arr.length-1];
                arr[arr.length-1] = temp;
        }
    }
    public static void main(String[] args) {
        int[] array = {9,6,3,1,4,8};
        splitArray(array,4);
    }
}
