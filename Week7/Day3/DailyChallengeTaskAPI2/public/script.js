const form = document.getElementsByTagName('form')[0];
const button = document.getElementById('button');
form.addEventListener('input', ()=> {
  const inputs = form.querySelectorAll('input');
  let allFilled = true;
  for (let input of inputs) {
    if (!input.value) {
      allFilled = false;
      break;
    }
  }
  button.disabled = !allFilled;
});


const apiRequest = async (url,options) => {
  try {
      const res = await fetch (url,options);
      const data = await res.json();  
      return data;
  } catch (error) {
      console.log(error);
  }
}


const registerUser = (e) =>{
    e.preventDefault();
    const first_name = e.target.firstName.value;
    const last_name = e.target.lastName.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const options = {
      method: "POST",
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({first_name,last_name,email,username,password})
  }
  apiRequest(`http://localhost:3001/register`, options).then((reply) =>{
      if (reply.message){document.getElementById('message').innerText = 'User already exists'}
      else {document.getElementById('message').innerText = 'Hello! Your account is now created!'}

  })
    
}


const login = (e) =>{
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  const options = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({username,password})
}
apiRequest(`http://localhost:3001/login`, options).then((reply) =>{
  console.log(reply);
  {
    if (reply.message) {
      document.getElementById('message').innerText = reply.message
    }
      else{
      document.getElementById('message').innerText = `Hi ${reply[0].username}! Welcome back!`
    }
    
}})
}