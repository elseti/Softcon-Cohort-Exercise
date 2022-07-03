
import org.junit.*;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import static org.junit.Assert.*;
import java.util.*;

import static org.junit.Assert.*;

@RunWith(Parameterized.class)

public class QuickSortParameterizedTest {
	public QuickSort qs= new QuickSort();
	public int[] result;
	public int[] input;
	
	public QuickSortParameterizedTest(int[] result, int[] input) {
		this.result= result;
		this.input= input;
	}
	
	@Parameters
	public static Collection<Object[]> parameters(){
		int[] arr1= {1,23,4,55,66,12,32};
		int[] arr2= {12,44,50,2};
		int[] arr3= {3,4};
		int[] res1= {1,23,4,55,66,12,32};
		int[] res2= {12,44,50,2};
		int[] res3= {3,4};
		Arrays.sort(res1);
		Arrays.sort(res2);
		Arrays.sort(res3);
		return Arrays.asList(new Object[][] {{res1, arr1}, {res2, arr2}, {res3, arr3}});
	}
	
	@Test
	public void quickSortTest() {
		int[] afterQS= input;
		qs.sort(afterQS);
		//System.out.println(Arrays.toString(result) + " "+ Arrays.toString(afterQS));
		assertArrayEquals(result, afterQS);
	}
}
