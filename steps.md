# Create an index.html file and put the basic structure with "!" vs code shortcut
```html
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Notificações em HTML</title>
    </head>
    <body>
        
    </body>
    </html>
```

# Create an button to notificate the user
```html
    <button id="notification">Notifique-me</button>
```

# Create an main.js and link with script tag in the html
```html
    <script src="./main.js"></script>
```

# Create an function called NotificateUser that will receive an param message
```js
    function NotificateUser(message){
        // todo
    }
```

# Complete the function with the code bellow
```js
    function NotificateUser(message){
        // Se não tiver a api de notificação retorne
        if (!("Notification" in window)) return; 
        // Se não tiver mensagem retorne
        if (!message) return;

        // Se o usuario aceitou receber notificações
        if (Notification.permission === "granted") {
        // Cria uma notificação
        const notification = new Notification(message);

        }
        // Se o usuario negou receber notificações
        else if (Notification.permission !== "denied") {
        Notification.requestPermission((permission) => {
            if (permission === "granted") {
            // Cria uma notificação
            const notification = new Notification(message);
            }
        });
        }
    }
```

# Run the function
```js
    const button = document.getElementById('notification')
    button.addEventListener("click",() => NotificateUser('Agora eu posso te mandar notificações 😃'))
```
