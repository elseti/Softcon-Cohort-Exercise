import java.util.ArrayList;

public class Record {
    private int propertyNum;
    private String[] properties;
    private ArrayList<Entry> dataList; //contains a list of entry objects.

    public Record(String properties){
        dataList= new ArrayList<Entry>();
        this.properties= properties.split(",");
        this.propertyNum= properties.length();
    }

    public void addEntry(String raw){
        Entry entry= new Entry(raw);
        dataList.add(entry);
    }
    //returns ArrayList<Entry>
    public String compareRecord(Record record){ //returns an arraylist of entries that do not match
        // ArrayList<String> mismatches= new ArrayList<String>();
        String mismatches = "";
        for(int x=0; x<dataList.size(); x++){
            for(int y=0; y<record.getDataList().size(); y++){
                if(dataList.get(x).getID().equalsIgnoreCase(record.getDataList().get(y).getID())){
                    //check each entry in the element
                    // System.out.println(dataList.get(x).getID());
                    Boolean same= dataList.get(x).compareEntry(record.getDataList().get(y));
                    if(!same){
                        String outputString= dataList.get(x).getEntry() + "\n" + record.getDataList().get(y).getEntry() + "\n";
                        mismatches+= outputString;  
                    }
                }
            }
        }
        // System.out.println(mismatches);
        return mismatches;
    }



    public void printRecord(){ //testing purposes
        for(int x=0; x<dataList.size(); x++){
            System.out.println(dataList.get(x).getEntry());
        }
    }

    public String getProperty(){
        String out= "";
        for(int x=0; x<properties.length; x++){
            out= out + properties[x] + " ";
        }
        return out;
    }

    public ArrayList<Entry> getDataList(){
        return dataList;
    }

}
