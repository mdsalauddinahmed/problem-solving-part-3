const names = ['abul','kabul','rakibul','mamun','jamul','babul','abul','cabul','kabul',
'dabul','babul']
console.log(names.includes('abul'))
function removeDuplicate(names){
    const unique =[];
    for(let i=0;i<names.length;i++){
        const name = names[i];
        if(unique.includes(name)===false){
            unique.push(name)
        }
    }
    return unique;

}
const uni =removeDuplicate(names);
console.log(uni)
