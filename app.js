
function getData() {
    let input = document.getElementById("input").value;
    fetch(`https://api.github.com/users/${input}`)
        .then(function(res) { 
            return res.json();
        })
        .then(function(res) {
            if (res.message === "Not Found") {
                alert("User not found!");
                return;
            }
            let image = document.getElementById("image");
            let name = document.getElementById("name");
            let bio = document.getElementById("bio");
            let id = document.getElementById("id");
            let public_repos = document.getElementById("public_repos");
            let created_at = document.getElementById("created_at");


            image.src = res.avatar_url;
            image.style.display = "block";
            name.textContent = res.name || "No Name Provided";
            bio.textContent ="Bio"+": "+ res.bio || "No Bio Available";
            id.textContent = "id"+" :"+ res.id || "No id Available";
            public_repos.textContent = "public_repos"+": "+res.public_repos || "No public_repos Available";
            created_at = "created_at" + ": " + (res.created_at || "No created_at Available");

        })
        .catch(function(error) {
            console.log("Error: ", error);
        });
}