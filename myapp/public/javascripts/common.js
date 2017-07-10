    $(document).ready(function(){
        $("form#pug-form").submit(function(e) {

            e.preventDefault();
            var registerForm = document.forms["registerForm"];
            var userName = registerForm.elements["userName"].value;
            var userPass = registerForm.elements["userPass"].value;

            $.ajax({
                type: "POST",
                url: "/user",
                data: JSON.stringify({userName: userName, userPass: userPass}),
                dataType: "json",
                contentType: "application/json",
                success: function(data){
                    console.log(data);
                },
            });
        });

    })

