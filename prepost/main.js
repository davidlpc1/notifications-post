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

const button = document.getElementById('notification')
button.addEventListener("click",() => NotificateUser('Agora eu posso te mandar notificações 😃'))