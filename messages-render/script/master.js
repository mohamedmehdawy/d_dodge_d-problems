function getMessages(route, theTeacher) {
    let chat_history = document.querySelector("#chat_history");

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "X-CSRF-TOKEN":
                document.head.querySelector("[name=csrf-token]").content,
        },
    };
    fetchRes = fetch(`${route}/${theTeacher}`, options);
    fetchRes
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let history_length = chat_history.childElementCount,
                messages_length = data.messages.length;

            if (history_length !== messages_length) {
                for (
                    let c = history_length != 0 ? history_length - 1 : 0;
                    c < data.messages.length;
                    c++
                ) {
                    if (data.messages[c].sender.indexOf("admin") > -1) {
                        let liTwo = document.createElement("li");
                        let message_data = document.createElement("div");
                        let message_data_span = document.createElement("span");
                        let my_messages = document.createElement("div");
                        liTwo.classList.add("clearfix");
                        message_data.classList.add(
                            "message-data",
                            "text-right"
                        );
                        my_messages.classList.add("message", "my-message");
                        message_data_span.classList.add("message-data-time");
                        message_data_span.innerText =
                            data.messages[c].created_at;
                        message_data.innerHTML = message_data_span.outerHTML;
                        my_messages.innerText = data.messages[c].message;
                        liTwo.appendChild(message_data);
                        liTwo.appendChild(my_messages);
                        chat_history.append(liTwo);
                        // message_data_img.src = d
                    }
                    if (data.messages[c].sender.indexOf("teacher") > -1) {
                        let li = document.createElement("li");
                        let message_data = document.createElement("div");
                        let message_data_span = document.createElement("span");
                        let message_data_img = document.createElement("img");
                        let other_message = document.createElement("div");
                        li.classList.add("clearfix");
                        message_data.classList.add(
                            "message-data",
                            "text-right"
                        );
                        other_message.classList.add(
                            "message",
                            "other-message",
                            "float-right"
                        );
                        message_data_span.classList.add("message-data-time");
                        message_data_span.innerText =
                            data.messages[c].created_at;
                        message_data_img.src =
                            "http://127.0.0.1/twaqah-project/twaqah/public/storage/" +
                            data.teacher.avatar;
                        message_data.innerHTML =
                            message_data_span.outerHTML +
                            message_data_img.outerHTML;
                        other_message.innerText = data.messages[c].message;
                        li.appendChild(message_data);
                        li.appendChild(other_message);
                        chat_history.append(li);

                        // message_data_img.src = d
                    }
                }
            }
        });
}
