const myAPIKey = 'a9fed1aa2fc03ef580c5bc4c';
const dropdownFrom = document.getElementsByName('from')[0];
const dropdownTo = document.getElementsByName('to')[0];

const getAllCurrenciesFetch = async () =>{
    try {
        let res = await fetch(`https://v6.exchangerate-api.com/v6/${myAPIKey}/codes`);
        let data = await res.json();
        return data.supported_codes;
    } catch (error) {
        console.log(error);
    }
}

function showDropdown(codes){
    for (const code of codes){
        let html = `<option>${code[0]} - ${code[1]}</option>`;
        if (code[0] != 'USD'){dropdownFrom.innerHTML += html};
        if (code[0] != 'ILS'){dropdownTo.innerHTML += html;}
    }  
}

function convert(rate){
    let amount = document.getElementsByName('amount')[0].value;
    document.getElementById('result').value = amount * rate;
}

function switchCurrencies(e){
    let from = dropdownFrom.value;
    let to = dropdownTo.value;
    dropdownFrom.value = to;
    dropdownTo.value=from;
    getConvertRate(e);
}

async function getConvertRate(e){
    e.preventDefault();
    let currencyFrom = dropdownFrom.value.substring(0,3);
    let currencyTo = dropdownTo.value.substring(0,3);    
    try {
        let res = await fetch(`https://v6.exchangerate-api.com/v6/${myAPIKey}/pair/${currencyFrom}/${currencyTo}`);
        let data = await res.json();
        convert(data.conversion_rate);
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    let supportedCodes = await getAllCurrenciesFetch();
    showDropdown(supportedCodes);
  }
  
main();