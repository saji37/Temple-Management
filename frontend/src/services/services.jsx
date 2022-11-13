export const login = async (emailId,password) => {
    var raw=  JSON.stringify({
        "email":emailId,
        "password":password
    });
   return await fetch("http://44.195.26.246:3000/login", {
            method: 'POST',
           
            headers: {
                'Content-Type': 'application/json'
            },
            body:raw,
        })
}

export const getSevaList = async () => {
    var bearer = 'Bearer ' + localStorage.getItem('authenticated');

   return await fetch('http://44.195.26.246:3000/seva-lists', {
            method: 'GET',
           
            headers: {
                'Authorization': bearer,

                'Content-Type': 'application/json'
            },
        })
}

export const updateSevaList = async (id,name) => {
    var raw=  JSON.stringify({ "name": name });

    var bearer = 'Bearer ' + localStorage.getItem('authenticated')
   return await fetch(`http://44.195.26.246:3000/seva-lists/${id}`, {
            method: 'PATCH',
           
            headers: {
                'Authorization': bearer,

                'Content-Type': 'application/json'
            },
            body:raw
        })
}

export const removeSevaList = async (id) => {

    var bearer = 'Bearer ' + localStorage.getItem('authenticated')
   return await fetch(`http://44.195.26.246:3000/seva-lists/${id}`, {
            method: 'DELETE',
           
            headers: {
                'Authorization': bearer,

                'Content-Type': 'application/json'
            },
        })
}

export const createSevaList = async (name) => {
    var raw=  JSON.stringify({ "name": name ,
    "price": 3,
    "raashiReq": false,
    "nakshatraReq": true,
    "nameReq": false,
    "featured": true,
    "createdDate": "2022-11-03T07:28:35.107Z",
    "categoryId": "635383771404eb2e84446f6d"});
    var bearer = 'Bearer ' + localStorage.getItem('authenticated')
   return await fetch(`http://44.195.26.246:3000/seva-lists/`, {
            method: 'POST',
           
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            body:raw
        })
}

export const getSevaOrders = async () => {
    var bearer = 'Bearer ' + localStorage.getItem('authenticated');

   return await fetch('http://44.195.26.246:3000/seva-lists', {
            method: 'GET',
           
            headers: {
                'Authorization': bearer,

                'Content-Type': 'application/json'
            },
        })
}



