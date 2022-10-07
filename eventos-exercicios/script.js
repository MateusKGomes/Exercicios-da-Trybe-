function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth (){
  let ul = document.getElementById('days');
  for(let index = 0; index < decemberDaysList.length; index += 1){
  let day = decemberDaysList[index];
  let li = document.createElement('li');
  li.id = 'day';
  li.innerHTML = day;
  

if(day === 24 || day === 31){
  li.className = 'day holiday'
  ul.appendChild(li);  
} else if(day === 4 || day === 11 || day === 18){
  li.className ='day-friday';
  ul.appendChild(li);
} else if(day === 25){
  li.className = 'day holiday friday';
  ul.appendChild(li);
} else {
  li.className = 'day';
  ul.appendChild(li);
}
}
}
createDaysOfTheMonth();

function createHolidayButton(buttonName) {

  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');  
  let newButtonId = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;

  buttonContainer.appendChild(newButton);

}
createHolidayButton('Feriados');

// function changeColor (){
// let changeHoliday = document.getElementById('btn-holiday');
// let getHoliday = document.getElementsByClassName('holiday');
// let backGroundColor = 'rgb(238,238,238)';
// let setNewColor = 'white';  
// changeHoliday.addEventListener('click');

// }

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

// changeColor();

function createFridayButton(buttonName){
  let getFriday = document.querySelector('.buttons-container');
  let fridayButton = document.createElement('button');
  let fridayButtonId = 'btn-friday';

  fridayButton.innerHTML = buttonName;
  fridayButton.id = fridayButtonId;
  getFriday.appendChild(fridayButton);
 
} 
createFridayButton('Sexta-Feira');

function fridayDays (fridayArray){
  let friday = document.getElementById('btn-friday');
  let fridayDays = document.getElementsByClassName('day-friday')
  let newText = 'SEXTOU O/';
  
  friday.addEventListener('Click', function(){
    for(let index = 0; index < fridayDays.length; index += 1){
      if(fridayDays[index].innerHTML !== newText) {
        fridayDays[index].innerHTML = newText;
      }else {
        fridayDays[index] = fridayArray[index];
    
  }  
}
})
}
let decemberFridays = [ 4, 11, 18, 25 ];
fridayDays(decemberFridays);

function mouseCursorOver(){
  let getDays = document.getElementById('days');
  getDays.addEventListener('mouseover', function(event){ 
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; 
  });
}

function mouseCursorOut(){
  let getDays = document.getElementById('days');
  getDays.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'

  });
};

mouseCursorOver();
mouseCursorOut();

function newTaskSpan(task) {
  let getTask = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  getTask.appendChild(taskName);

}
newTaskSpan('projeto');



function taskColor (changeColor) {
  let colorCreater = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = changeColor;
  colorCreater.appendChild(newTask);

}

taskColor('yellow');

