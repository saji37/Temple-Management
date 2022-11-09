

export const getSevaList = async () => {
    var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZG9yZW1vbiIsImlkIjoiNjM1YmE3ZGUzMjljOTEzYTZiYjNiOTk0IiwiZW1haWwiOiJkb3JlbW9uQGdtYWlsLmNvbSIsImlhdCI6MTY2Nzk5MzgwMywiZXhwIjoxNjY4MDE5MDAzfQ.gMEIsvFYmXviYIeQpkrj12lBBUgX9RelnLu29m0bEhM'
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

    var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZG9yZW1vbiIsImlkIjoiNjM1YmE3ZGUzMjljOTEzYTZiYjNiOTk0IiwiZW1haWwiOiJkb3JlbW9uQGdtYWlsLmNvbSIsImlhdCI6MTY2Nzk5MzgwMywiZXhwIjoxNjY4MDE5MDAzfQ.gMEIsvFYmXviYIeQpkrj12lBBUgX9RelnLu29m0bEhM'
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

    var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZG9yZW1vbiIsImlkIjoiNjM1YmE3ZGUzMjljOTEzYTZiYjNiOTk0IiwiZW1haWwiOiJkb3JlbW9uQGdtYWlsLmNvbSIsImlhdCI6MTY2Nzk5MzgwMywiZXhwIjoxNjY4MDE5MDAzfQ.gMEIsvFYmXviYIeQpkrj12lBBUgX9RelnLu29m0bEhM'
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
    var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZG9yZW1vbiIsImlkIjoiNjM1YmE3ZGUzMjljOTEzYTZiYjNiOTk0IiwiZW1haWwiOiJkb3JlbW9uQGdtYWlsLmNvbSIsImlhdCI6MTY2Nzk5MzgwMywiZXhwIjoxNjY4MDE5MDAzfQ.gMEIsvFYmXviYIeQpkrj12lBBUgX9RelnLu29m0bEhM'
   return await fetch(`http://44.195.26.246:3000/seva-lists/`, {
            method: 'POST',
           
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
            body:raw
        })
}




