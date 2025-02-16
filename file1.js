const connection = new Mongo (`localhost:27017`),
    db = connection.getDB(`mydb1`),
    col1 = db.getCollection(`Employees`);

let result, cursor, count;

print();

print(`Insert a document into the collection`);
result = col1.insertOne({
    empID : 1001,
    name:`Joe`,
    salary: 9000
});
printjson(result);


print(`Insert many documents`);
result = col1.insertMany([
    {
        empID : 1001,
        name:`Joe`,
        salary: 9000
    },
    {
        empID : 1002,
        name:`Bob`,
        salary: 9000
    },
    {
        empID : 1003,
        name:`Ann`,
        salary: 9000
    }
]);
printjson(result);


print(`find one document`);
cursor = col1.find( { empID:1002} );
while(cursor.hasNext())
{
    printjson(cursor.next());
}
print();


//comparison operators 
print(`find with $eq 1002`);
col1.find( {empID : {$eq : 1002 } } )
.forEach(doc => {
    printjson(doc);    
    print(`${doc.empID}\t${doc.name}\t${doc.salary}`);
});
print();

print(`Deleting all`);
result = col1.deleteMany({});
printjson(result);