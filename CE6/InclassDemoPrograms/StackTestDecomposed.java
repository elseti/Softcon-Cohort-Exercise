//package Week4;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class StackTestDecomposed {
	private Stack<Integer> stack;
	// setUp method using @Before syntax
	// @Before methods are run before each test
	@Before 
	public void runBeforeEachTest()
	{
		System.out.println("setting up");
		
	    stack = new Stack<Integer>();
	}

	// tear-down method using @After
	// @After methods are run after each test
	@After 
	public void runAfterEachTest()
	{
	    stack = null;
		System.out.println("setting down");
	}

	@Test public void testToString()
	{
		System.out.println("testing");
	   stack.push(new Integer(1));
	   stack.push(new Integer(2));
	   assertEquals ("{2, 1}", stack.toString());
	}
	
	//decomposed

	@Test public void testRepOk() {
		boolean result = stack.repOK();
		assertEquals (true, result);
	}
	
	
	@Test public void testPush() {
		stack.push (new Integer (1));
		boolean result = stack.repOK();
		assertEquals (true, result);
	}
	
	@Test public void testPop() {
		stack.push(new Integer(1));
		stack.pop();
		boolean result = stack.repOK();
		assertEquals (true, result);
	}
		
	
	@Test public void testPushPop() {
		stack.push (new Integer (1));
		stack.pop();
		boolean result = stack.repOK();
		assertEquals (true, result);
	}
	
	   
	   

}
