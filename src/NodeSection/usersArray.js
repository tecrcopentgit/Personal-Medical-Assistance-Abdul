


const dat = localStorage.getItem('data');
const userDV = JSON.parse(dat) || "{}" || null ;
console.log(userDV);
const Uname = userDV=== null   ? '.' : userDV.name;
const Uage = userDV === null ? '.' : userDV.age;
const Ugender= userDV === null ? '.' : userDV.gender;





export const userMedDV = {username:Uname ,usergender:Ugender , userage:Uage }


export const userMed = {userName:'', userAge:'', userGender:'', userPassword:''};


export const userMedicine =[];
console.log(userMedicine.length);
export const userReport = [];
export const userDoctor = [];