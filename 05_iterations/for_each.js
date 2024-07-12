/*================================= for each ==================================*/
const coding = ["html","css","js","cpp","ruby","python"];

coding.forEach(function (item){
    //console.log(item);
})
coding.forEach((item)=>{
    // console.log(item);
})
const values = coding.forEach( (item) => {
     //console.log(item);
     return item      
})
//console.log(values);        // for-each doesn't return any value.


/* i m p o r t a n t  uases */
function printMe(item){
    console.log(item);
}
//coding.forEach(printMe);               





coding.forEach((item,index,array)=>{
    //console.log(`${item} it has index of ${index} in array ${array}`);
})


const myCoding =[
    {
        language:"html",
        languagefilename:".html"
    },
    {
        language:"css",
        languagefilename:".css"
    },
    {
        language:"c",
        languagefilename:".c"
    }
]

myCoding.forEach((item)=>{
    //console.log(item.language);
})

/*============================ filter ==========================*/

const myNum=[1,2,3,4,5,6,7,8,9,10];

const myNewNum = myNum.filter((num)=> num>4);       //num>4 is the codition.
// console.log(myNewNum);


const newNum = [];
myNum.forEach((num)=>{
    if (num>4){
        newNum.push(num);
    }
})
//console.log(newNum);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1991, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 1981, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

console.log(books.filter( (bk)=> bk.publish >=1995 && bk.genre === "History"));

