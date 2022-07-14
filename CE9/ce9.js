const { MongoCursorInUseError } = require('mongodb');

const MongoClient= require('mongodb').MongoClient;
const url= "mongodb://localhost:27017/";
const client= new MongoClient(url);

const init_data= [
    {student_id: 1, average_grade:0, full_name:"student1", grades:[], term:0},
    {student_id: 2, average_grade:0, full_name:"student2", grades:[], term:0},
    {student_id: 3, average_grade:0, full_name:"student3", grades:[], term:0},
    {student_id: 4, average_grade:0, full_name:"student4", grades:[], term:0},
    {student_id: 5, average_grade:0, full_name:"student5", grades:[], term:0},
    {student_id: 6, average_grade:0, full_name:"student6", grades:[], term:0},
    {student_id: 7, average_grade:0, full_name:"student7", grades:[], term:0},
    {student_id: 8, average_grade:0, full_name:"student8", grades:[], term:0},
    {student_id: 9, average_grade:0, full_name:"student9", grades:[], term:0},
    {student_id: 10, average_grade:0, full_name:"student10", grades:[], term:0},
    {student_id: 11, average_grade:0, full_name:"student11", grades:[], term:0},
    {student_id: 12, average_grade:0, full_name:"student12", grades:[], term:0},
    {student_id: 13, average_grade:0, full_name:"student13", grades:[], term:0},
    {student_id: 14, average_grade:0, full_name:"student14", grades:[], term:0},
    {student_id: 15, average_grade:0, full_name:"student15", grades:[], term:0},
    {student_id: 16, average_grade:0, full_name:"student16", grades:[], term:0},
    {student_id: 17, average_grade:0, full_name:"student17", grades:[], term:0},
    {student_id: 18, average_grade:0, full_name:"student18", grades:[], term:0},
    {student_id: 19, average_grade:0, full_name:"student19", grades:[], term:0},
    {student_id: 20, average_grade:0, full_name:"student20", grades:[], term:0},
    
]
async function run(){
    try{
        const database= client.db("sutd");
        // database.dropDatabase();
        const students= database.collection("students");
        await students.insertMany(init_data); //initialise
        for(let i=1; i<21; i++){
            for(let x=0; x<8; x++){ //do it 8 times for 8 terms
                // await students.aggregate([{$push: {grades: {$multiply: [{$rand:{}}, 100]}}}, {$merge: "students"}]);
                await students.updateMany({student_id:i}, { $push: { grades: Math.floor(Math.random() * 101) } }); //randomly generate grades between 0 to 100
                await students.updateMany({student_id:i}, {$push: {grades: Math.floor(Math.random()*101)}}); //randomly generate grades between 0 to 100
                await students.updateMany({student_id:i}, {$push: {grades: Math.floor(Math.random()*101)}}); //randomly generate grades between 0 to 100
                await students.updateMany({student_id:i}, {$push: {grades: Math.floor(Math.random()*101)}}); //randomly generate grades between 0 to 100
                await students.updateMany({}, {$inc: {term: 1}}); //increase term by 1
            }
        }

        for(let x=1; x<21; x++){
            await students.updateOne({student_id:x},[{$set: {average_grade: {$avg: "$grades"}}}]);
        }
        
        const result= await students.find().sort({average_grade:-1}).toArray(); //sort by average_grade descending

        console.log(result);
    }
    finally{
        await client.close();
    }
}


run().catch(console.dir);
