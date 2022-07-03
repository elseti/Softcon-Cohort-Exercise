
import org.junit.*;
import static org.junit.Assert.*;

public class FindMaxTest {
	
	//resulting in failure
	@Test public void findMaxFailure() {
		int[] array= {1, 23, 34, 3, 20, 44};
		int result= FindMax.max(array);
		assertEquals(44, result);
	}
	
	//resulting in exception
	@Test public void findMaxException() {
		int[] array= {};
		try {
			int result= FindMax.max(array);
		}
		catch(Exception ex){
			fail("Unexpected exception was thrown");
		}
	}
	
	//resulting in success/pass
	@Test public void findMaxSuccess() {
		int[] array= {1, 23, 44, 3, 20};
		int result= FindMax.max(array);
		assertEquals(44, result);
	}

}