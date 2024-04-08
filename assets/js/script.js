(function() {
    const urlApi = "https://randomuser.me/api/?results=4";

    const request = async (url)=> {
        try {
            const datosraw = await fetch(url);
            const datosjson = await datosraw.json();
            console.log(datosjson.results[0].name);

            for (let i = 0; i < 4 ; i++) {
                let profilePic = datosjson.results[i].picture.medium;
                let profileFirstName = datosjson.results[i].name.first;
                let profileLastName = datosjson.results[i].name.last;
                let profileEmail = datosjson.results[i].email;
                let profileTelephone = datosjson.results[i].phone;

                document.getElementById("resultados").innerHTML += `
                <p><img src="${profilePic}" alt=""></p>
                <p>${profileFirstName} ${profileLastName}</p>
                <p>${profileEmail}</p>
                <p>${profileTelephone}</p>
                `;
            }

        }
        catch(e) {
            console.log(e);
        }
    };

    request(urlApi);
})();
