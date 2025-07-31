
        const inputBox = document.querySelector('input');
        const ListContainer = document.getElementById('list-container');


        function AddTask() {
            if (inputBox.value === "") {
                alert("You must writ somethings.." + "\n " + document.title)
            } else {
                let li = document.createElement('li');
                li.innerHTML = inputBox.value;

                ListContainer.appendChild(li);

                let span = document.createElement('span');
                span.innerHTML = "<i class='ri-close-fill'>";
                li.appendChild(span)
            }
            inputBox.value = "";
            saveData();
        }


        function clearAll(e) {
            if (ListContainer.children.length === 0) {
                alert('No tasks to clear..')
            } else if (confirm("Are you sure you want to delete all task ?")) {
                ListContainer.innerHTML = "";

                localStorage.removeItem('data')
            }

        }


        ListContainer.addEventListener('click', (e) => {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle('checked');
                saveData();
            }
            else if (e.target.tagName === "SPAN" || e.target.tagName == "I") {
                e.target.closest('li').remove();
                saveData();

            }
        }, false)


        function saveData() {
            localStorage.setItem('data', ListContainer.innerHTML);

        }

        function getData() {
            ListContainer.innerHTML = localStorage.getItem('data');
        }
        getData();
