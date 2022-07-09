import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.util.*;

public class CSVComparison {
	public static Record makeRecord(String fileName) { //make a record out of a CSV file
		try {
			File file= new File(fileName);
			Scanner scanner= new Scanner(file);
			Record record= new Record(scanner.nextLine());
			// System.out.println(record.getProperty());
			while(scanner.hasNextLine()) {
				String data= scanner.nextLine();
				// System.out.println(data);
				record.addEntry(data);
			}
			scanner.close();
			return record;
		}
		catch(FileNotFoundException e) {
			System.out.println("Error occurred.");
			return null;
		}
	}

	public static void writeMismatches(String fileName, String mismatches){
		try{
			FileWriter myWriter = new FileWriter(fileName);
			myWriter.write(mismatches);
			myWriter.close();
		} 
		catch (IOException e) {
			System.out.println("An error occurred.");
		}
	}
	
	public static void printList(ArrayList<String> alist) { //testing purposes
		for(int x=0; x< alist.size(); x++) {
			System.out.println(alist.get(x));
		}
	}

	
	
	
	public static void main(String[] args) {
		Record record1= makeRecord("sample_csv/sample_file_1.csv"); //can change depending on which dir u in
		Record record2= makeRecord("sample_csv/sample_file_3.csv");
		String mismatches= record1.compareRecord(record2);
		writeMismatches("output.txt", mismatches);
	}
}
