
    const getAllSpells = () => {
        return spells = [
            {
                name: "Turn enemy into a newt",
                isEvil: true,
                energyLevel: 5.1
            },
            {
                name: "Conjure some gold for a local charity",
                isEvil: false,
                energyLevel: 2.99
            },
            {
                name: "Give a deaf person the ability to heal",
                isEvil: false,
                energyLevel: 12.2
            },
            {
                name: "Make yourself emperor of the universe",
                isEvil: true,
                energyLevel: 100
            },
            {
                name: "Convince your relatives your political views are correct",
                isEvil: false,
                energyLevel: 2921.5
            },
        ]
    }

    const makeGoodSpellBook = () => {
        let goodBook = 
            {
                title: "Good Book",
                spells: getAllSpells().filter(spell => spell.isEvil === false)
            }
        
        return goodBook
    }
    const makeEvilSpellBook = () => {
        let evilBook = 
            {
                title: "Evil Book",
                spells: getAllSpells().filter(spell => spell.isEvil === true)
            }
        
        return evilBook
    }

    const goodBook = makeGoodSpellBook()
    const evilBook = makeEvilSpellBook()


    const displaySpellBook = (book) => {
       console.log(book.title)
       for (i=0; i < book.spells.length; i++) {
           console.log(book.spells[i].name) 

       }
    }

displaySpellBook(goodBook)
displaySpellBook(evilBook)