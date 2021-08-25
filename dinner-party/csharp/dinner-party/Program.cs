using System;
using System.Collections.Generic;
using System.Linq;

List<Person> allPeople = GetAllPeople();
Table table1 = MakeTable1(allPeople);
Table table2 = MakeTable2(allPeople);

DisplayTable(table1);
Console.WriteLine();
DisplayTable(table2);

void DisplayTable(Table table)
{
    Console.WriteLine(table.tableName);
    foreach (Person person in table.People)
    {
        Console.WriteLine($"{person.name} ({person.occupation}) {person.bio}");
    }
}

Table MakeTable1(List<Person> allPeople)
{
    Table table1 = new Table();
    table1.tableName = "Table 1";
    table1.People = new List<Person>();

    foreach (Person Person in allPeople)
    {
        List<string> table1Occupants = table1.People.Select(Person => Person.occupation).ToList();
        if (!table1Occupants.Contains(Person.occupation))
        {
            table1.People.Add(Person);
        }

    }
    return table1;

}

Table MakeTable2(List<Person> allPeople)
{
    Table table2 = new Table();
    table2.tableName = "Table 2";
    table2.People = new List<Person>();

    foreach (Person person in allPeople)
    {
        if (!table1.People.Contains(person))
        {
            table2.People.Add(person);
        }
    }

    return table2;
}






List<Person> GetAllPeople()
{
    List<Person> allPeople = new List<Person>() {
        new Person() {
            name = "Marilyn Monroe",
            occupation = "entertainer",
            bio = "(1926 - 1962) American actress, singer, model"
        },
        new Person()
        {
            name = "Abraham Lincoln",
            occupation = "politician",
            bio = "(1809 - 1865) US President during American civil war"
        },
        new Person()
        {
            name = "Martin Luther King",
            occupation = "activist",
            bio = "(1929 - 1968)  American civil rights campaigner"

        },
        new Person()
        {
            name = "Rosa Parks",
            occupation = "activist",
            bio = "(1913 - 2005)  American civil rights activist"
        },
        new Person()
        {
            name = "Peter Sellers",
            occupation = "entertainer",
            bio = "(1925 - 1980) British actor and comedian"
        },
        new Person()
        {
            name = "Alan Turing",
            occupation = "computer scientist",
            bio = "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
        },
        new Person()
        {
            name = "Admiral Grace Hopper",
            occupation = "computer scientist",
            bio = "(1906–1992) - developed early compilersnameof = FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
        },
        new Person()
        {
            name = "Indira Gandhi",
            occupation = "politician",
            bio = "(1917 - 1984) Prime Minister of India 1966 - 1977",
        }
    };

    return allPeople;
}

public class Table
{
    public string tableName { get; set; }

    public List<Person> People { get; set; }
}

public class Person
{
    public string name { get; set; }

    public string occupation { get; set; }

    public string bio { get; set; }

}