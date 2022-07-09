import java.util.ArrayList;

//accepts a line of strings
public class Entry {
    private int propertyNum;
    private String raw;
    private String[] entryList;

    public Entry(String raw){
        this.raw= raw;
        parseRaw();
    }

    public void parseRaw(){ //parses the raw CSV
        this.entryList= raw.split(",");
    }

    public void printList() { //for testing purposes
		for(int x=0; x< entryList.length; x++) {
			System.out.println(entryList[x]);
		}
    }

    public String getID(){ //returns the first element of entryList
        return entryList[0];
    }

    public Boolean compareEntry(Entry entry){
        //check if length is same. If not, then it's clearly not the same.
        if(entryList.length != entry.getEntryList().length){
            return false;
        }
        //iterate through each entry
        for(int x=0; x<entryList.length; x++){
            if(!entryList[x].equals(entry.getEntryList()[x])){
                return false;
            }
        }
        return true;
    }

    public String[] getEntryList(){
        return entryList;
    }

    public String getEntry(){
        String out= entryList[0];
        for(int x=1; x< entryList.length; x++) {
			out= out+","+entryList[x];
		}
        // System.out.println(out);
        return out;
    }
    

}
