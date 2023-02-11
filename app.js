const hide = document.querySelector('.hide-list');
const open = document.querySelector('.open');
const bioBtn = document.getElementsByClassName('bio-btn');
const hideBio = document.getElementsByClassName('hide-bio');
const submit = document.querySelector('.form-btn');

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

// show and hide specific employee bio button

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


// submit.addEventListener ('click', () => {
//   const name1Input = document.getElementById('name1');
//   const name2Input = document.getElementById('name2');
//   const ageInput = document.getElementById('age');
//   const jobInput = document.getElementById('job-role');
//   const emailInput = document.getElementById('e-mail');
//   const textareaInput = document.getElementById('bio');
//   const tr = document.getElementById('tr');
//
//       if( name1Input.value && name2Input.value && ageInput.value && jobInput.value && emailInput.value ) {
//
//         let code =
//         `<th scope="row">${name1Input.value} ${name2Input.value}</th>
//           <td>${ageInput.value}</td>
//           <td>${jobInput.value}</td>
//           <td>${emailInput.value}</td>`;
//           tr.innerHTML = code;
//           name1Input.value = '';
//           name2Input.value = '';
//           ageInput.value = '';
//           jobInput.value = '';
//           emailInput.value = '';
//       } else {
//          alert('You left some empty spaces, Do it again')
//       }
// });



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

// the end of the inputs id's variables
// the create elements in the table variables

  const tbody = document.getElementsByTagName('tbody')[1];
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  const td = document.createElement('td');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');

// the end of the create elements in the table variables
// the create elements in the div ( button and the paragraph ) variables

  const openDiv = document.getElementsByClassName('open')[0];
  const button = document.createElement('button');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

    if( name1Input.value && name2Input.value && ageInput.value && jobInput.value && emailInput.value ) {

// the end of the create elements in the div ( button and the paragraph ) variables

      if(textareaInput.value) {


        // creating the tr inside the tbody and the th inside the tr

            th.textContent =` ${name1Input.value} ${name2Input.value}`;
            tbody.appendChild(tr);
            tr.appendChild(th);

            td.textContent = ageInput.value;
            tbody.appendChild(tr);
            tr.appendChild(td);

            td1.textContent = jobInput.value;
            tbody.appendChild(tr);
            tr.appendChild(td1);

            td2.textContent = emailInput.value;
            tbody.appendChild(tr);
            tr.appendChild(td2);

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

            name1Input.value = '';
            name2Input.value = '';
            ageInput.value = '';
            jobInput.value = '';
            emailInput.value = '';
            textareaInput.value = '';

     }else {
       alert('You left The Empolyee info empty, Do it again');
     }

  } else {
     alert('You left some empty spaces, Do it again');
  }
});
