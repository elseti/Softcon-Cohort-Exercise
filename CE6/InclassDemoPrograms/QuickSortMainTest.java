
public class QuickSortMainTest {
//	public QuickSort qs;
	
	public static void main(String args[]) {
		QuickSort qs= new QuickSort();
		int[] arr= {1,2,4,5,1,2,10,4};
		qs.sort(arr);
		for(int x=0; x<arr.length; x++) {
			System.out.println(arr[x]);
		}
		
	}
}
