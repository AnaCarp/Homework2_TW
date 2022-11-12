function addTokens(input, tokens){
    
    if(input.length<=5)
         throw Error('Input should have at least 6 characters')
    if(tokens)
         {   

             for(var i=0;i<tokens.length;i++)
                {
                    if(!(typeof(tokens[i].tokenName)==='string')){
                        throw Error('Invalid array format')
                  }
                }
         }
    if(!(typeof(input)==='string'))
        throw Error('Invalid input')

    if(input.indexOf('...')==-1)
        return input;      
    else{
        var input2=input.split(" ");
        var string='';
        var k=0;
        for(var i=0;i<input2.length;i++)
            {
                if(input2[i]==='...')
                    {
                    string+='${'+tokens[k].tokenName+'}';
                    k++;
                    if(i!=input2.length-1)
                         string+=" ";
                    }
                else
                    {
                        string+=input2[i];
                        if(i!=input2.length-1)
                            string+=" ";
                    }
            }
        //string.slice(0,string.length-3);
        return string;
    }  
        
}

const app = {
    addTokens: addTokens
}

module.exports = app;

/*
# Avand urmatoarea functie `function addTokens(input, tokens)` unde:
- `input` este un string ce poate sa contina "...". De exemplu: Subsemnatul ..., dominiciliat in ...;
- `tokens` un vector de tokenuri.
- Functia trebuie sa inlocuiasca toate `...` din `input` cu valorile corespunzatoare din `tokens` sub urmatorul format `${tokenName}`, in ordinea in care exista in vector;

# Complete the following tasks:

- `input` trebuie sa fie de tip `string`. Daca alt tip este pasat ca si parametru aruncati `Error` cu mesajul `Input should be a string`; (0.5 pts)
- `input` trebuie sa aiba cel putin 6 caractere ca si lungime. Daca dimensiunea `input-ului` este mai mica de 6, aruncati `Error` cu mesajul `Input should have at least 6 characters`; (0.5 pts)
- `tokens` este un vector de elemente cu urmatorul format: `{tokenName: string}`. Daca urmatorul format nu este respectat, aruncati `Error` cu urmatorul mesaj `Invalid array format`; (0.5 pts)
- Daca `input` nu contine `...` returnati valoarea initiala a `input-ului`; (0.5 pts)
- Daca `input` contine `...`, inlocuiti-le cu valorile specifice si returnati noul `input`; (0.5 pts)
*/