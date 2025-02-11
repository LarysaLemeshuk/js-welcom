const dogArray = [
  {
    nickname: 'Tuzik',
    color: 'black',
    weight: 3,
    age: 2,
  },
  {
    nickname: 'Dolly',
    color: 'white',
    weight: 5,
    age: 3,
  },
  {
    nickname: 'Fagot',
    color: 'black',
    weight: 9,
    age: 5,
  },
  {
    nickname: 'Stus',
    color: 'black',
    weight: 15,
    age: 1,
  },
];

//Задача: відсортувати собак за вагою на збільшення ( у порядку зростання)

/*dogArray.sort((dog1, dog2) =>{
 if(dog1.weight < dog2.weight){
    // 5 (dog1), 9 (dog2)
    return -1;
  }else {// dog1.weight > dog2.weight
// 9 (dog2), 5 (dog1)
return 1
  }
})*/

/*
-1 - dog1, dog2
0 - всі на місці
1 - dog2, dog1
*/

dogArray.sort((dog1, dog2) => {
  // return dog1.weight - dog2.weight; // спадання
  return dog2.weight > dog1.weight; // зростання
});
