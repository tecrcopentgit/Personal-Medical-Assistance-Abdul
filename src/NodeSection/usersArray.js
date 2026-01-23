


const dat = localStorage.getItem('data');

const userDV = JSON.parse(dat);
const Uname = userDV.name === null ? '' : userDV.name;
const Uage = userDV.age === null ? '' : userDV.age;
const Ugender= userDV.gender === null ? '' : userDV.gender;


export const userMedDV = {username:Uname ,usergender:Ugender , userage:Uage }


export const userMed = {userName:'', userAge:'', userGender:'', userPassword:''};


