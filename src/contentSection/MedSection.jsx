

const randColArr = [`red` , `amber` , `stone` , `blue`];

var randNum = Math.floor(Math.random() * 4);




const randCol = randColArr[randNum];
export const cssClassOfMedDocRep = `bg-gradient-to-br from-green-700/50 via-amber-300/30 to-${randColArr}-900/60 w-full h-screen`;


export default function MedSection(){

    return (
        <div className={cssClassOfMedDocRep}>

        </ div >
    )
}