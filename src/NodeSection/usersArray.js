


const dat = localStorage.getItem('data');

const userDV = JSON.parse(dat);
const Uname = '';
const Uage ='';
const Ugender='';
if (userDV.name || userDV.gender || userDV.age){

    Uname = userDV.name;
    Uage = userDV.age;
    Ugender = userDV.gender;
}

export const userMedDV = {username:Uname ,usergender:Ugender , userage:Uage }


export const userMed = {userName:'', userAge:'', userGender:'', userPassword:''};


