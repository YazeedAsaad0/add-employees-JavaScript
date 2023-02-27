const hide = document.querySelector('.hide-list');
const open = document.querySelector('.open');
const bioBtn = document.getElementsByClassName('bio-btn');
const hideBio = document.getElementsByClassName('hide-bio');
const submit = document.querySelector('.form-btn');
const tr = document.getElementsByTagName('tr');
const trChildren = tr.children;

// Clear the inputs values function

function clearInput() {

  const name1Input = document.getElementById('name1');
  const name2Input = document.getElementById('name2');
  const ageInput = document.getElementById('age');
  const jobInput = document.getElementById('job-role');
  const emailInput = document.getElementById('e-mail');
  const textareaInput = document.getElementById('bio');

  name1Input.value = '';
  name2Input.value = '';
  ageInput.value = '';
  jobInput.value = '';
  emailInput.value = '';
  textareaInput.value = '';
}

// creating the tr inside the tbody and the th inside the tr function

function createTable() {

// the create elements in the table variables
  const name1Input = document.getElementById('name1');
  const name2Input = document.getElementById('name2');
  const ageInput = document.getElementById('age');
  const jobInput = document.getElementById('job-role');
  const emailInput = document.getElementById('e-mail');
  const textareaInput = document.getElementById('bio');
  const tbody = document.getElementsByTagName('tbody')[1];

// the end of the create elements in the table variables

  const tr = document.createElement('tr');
  const th = document.createElement('th');
  const td = document.createElement('td');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');

  th.textContent =` ${name1Input.value} ${name2Input.value}`;
  tbody.appendChild(tr);
  tr.appendChild(th);
  th.scope = "row";

  td.textContent = ageInput.value;
  tbody.appendChild(tr);
  tr.appendChild(td);

  td1.textContent = jobInput.value;
  tbody.appendChild(tr);
  tr.appendChild(td1);

  td2.textContent = emailInput.value;
  tbody.appendChild(tr);
  tr.appendChild(td2);
}

// The end of creating the tr inside the tbody and the th inside the tr function
// show and hide employees bio button

hide.addEventListener('click', () => {
  if(open.style.display === 'none') {
   open.removeAttribute('style');
   hide.textContent = 'Hide Employees bio'
 } else {
   open.style.display = 'none';
   hide.textContent = 'Show Employees bio';
 }
});

// the end of show and hide employees bio button
//loop show and hide specific employee bio button

 for (let i = 0; i < 5; i++) {

      hideBio[i].addEventListener('click', () => {
        if(bioBtn[i].style.display === 'none') {
         bioBtn[i].removeAttribute('style');
         hideBio[i].textContent = 'Hide Bio';
       } else {
         bioBtn[i].style.display = 'none';
         hideBio[i].textContent = 'Show Bio';
       }
      });
  }

// the end of loop show and hide specific employee bio button

submit.addEventListener ('click', () => {

  const bioBtn = document.getElementsByClassName('bio-btn');
  const hideBio = document.getElementsByClassName('hide-bio');

// the inputs id's variables

  const name1Input = document.getElementById('name1');
  const name2Input = document.getElementById('name2');
  const ageInput = document.getElementById('age');
  const jobInput = document.getElementById('job-role');
  const emailInput = document.getElementById('e-mail');
  const textareaInput = document.getElementById('bio');

// the create elements in the div ( button and the paragraph ) variables

  const openDiv = document.getElementsByClassName('open')[0];
  const button = document.createElement('button');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

// the end of the create elements in the div ( button and the paragraph ) variables
// the conditional statement for the add employees form

    if( name1Input.value && name2Input.value && ageInput.value && jobInput.value && emailInput.value ) {

      if(ageInput.value > 18  && ageInput.value <= 80) {
        if(emailInput.value.includes('@') && emailInput.value.includes('.')) {
          if(textareaInput.disabled) {

            createTable();
            clearInput();

          }else if(textareaInput.value) {

              // creating the tr inside the tbody and the th inside the tr

              createTable();

              // the end of creating the tr inside the tbody and the th inside the tr
              //  creating the paragraph, button and the div

              p.textContent = textareaInput.value;

              openDiv.appendChild(button);
              button.textContent = "Hide Bio";
              button.type = "button";
              button.name = "button2";
              button.className = "hide-bio";

              openDiv.appendChild(div);
              div.className = "bio-btn";

              div.appendChild(h2);
              h2.textContent = `${name1Input.value} Bio`;

              div.appendChild(p);
              p.textContent = `${textareaInput.value}`;
              p.hyphens = "auto";

              //  the end of creating the paragraph, button and the div
              // loop for the hide and show the button

              for (let i = 5; i < bioBtn.length; i++) {

                   hideBio[i].addEventListener('click', () => {
                     if(bioBtn[i].style.display === 'none') {
                      bioBtn[i].removeAttribute('style');
                      hideBio[i].textContent = 'Hide Bio';
                    } else {
                      bioBtn[i].style.display = 'none';
                      hideBio[i].textContent = 'Show Bio';
                    }
                   });
              }

                // the end of loop for the hide and show the button
               //  clear the input after the click

              clearInput();

          }else {
            alert('You left The Empolyee info empty, Do it again');
            }

        }else {
          alert('This is not a valid email please provid a valid email');
         }

      }else {
        alert('The Empolyee should be older than 18 years old and younger than 80, Try again');
       }

    } else {
       alert('You left some empty spaces, Do it again');
  }
});

// the end of the conditional statement for the add employees form
// Disable button for the textarea

  const disable = document.querySelector('.disable');
  const textareaInput = document.getElementById('bio');

  disable.addEventListener('click', () => {
    if(textareaInput.disabled) {
      disable.textContent = 'Disable text area';
      textareaInput.disabled = false;
    }else {
      disable.textContent = 'Active text area';
      textareaInput.disabled = true;
      textareaInput.value = '';
    }
  });

//the end of Disable button for the textarea
// the change theme code
const changeTheme = document.getElementById('change-theme');
const pink = document.getElementById('pink');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

changeTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

pink.addEventListener('click', () => {
  document.body.classList.remove("red", "green");
  document.body.classList.toggle('pink');
});

red.addEventListener('click', () => {
  document.body.classList.remove("pink", "green");
  document.body.classList.toggle('red');
});

green.addEventListener('click', () => {
  document.body.classList.remove("red", "pink");
  document.body.classList.toggle('green');
});

blue.addEventListener('click', () => {
  document.body.classList.remove("red", "pink", "green");
});
