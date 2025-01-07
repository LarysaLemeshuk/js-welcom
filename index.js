/*
Розробити алгоритм, який буде відображати режим нашого дня

Потрібнорозробити функцію, яка приймає ту чи іншу пору дня (ранок, обід, вечір) і виконує ті чи інші дії, які ми виконуємо у вкаазану пору дня
*/

function todo(timeOfDay) {
  //HOF
  //morning - список справ на ранок
  //lanch - список справ на обід
  //eevening - список справ на вечір

  switch (timeOfDay) {
    case "morning": {
      woshingFace();
      brushingTeth();
      skincare();
      breakfast();
      break;
    }
    case "lunch": {
      goToOffice();
      coding();
      lunch();
      coding();
      break;
    }
    case "evening": {
      education();
      coding();
      goToHome();
      shower();
      brushingTeth();
      skincare();
      sleep();
      break;
    }
    default: {
      console.log("помилка! такої пори дня не передбачено");
    }
  }
}

//todo("morning");
//todo("lunch");
todo ('evening')

function brushingTeth() {
  console.log("brushing face");
}

function skincare() {
  console.log("skin care");
}

function breakfast() {
  console.log("breakfast");
}

function goToOffice() {
  console.log("goToOffice");
}

function coding() {
  console.log("coding");
}

function lunch() {
  console.log("lunch");
}

function education() {
  console.log("education");
}

function goToHome() {
  console.log("go to home");
}

function shower() {
  console.log("shower");
}

function sleep() {
  console.log("sleep");
}
