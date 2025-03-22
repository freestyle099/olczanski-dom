function emailTemplate(body) {
  return `
      <div style="width: 640px; color: rgba(0,0,0,.87)">
        <h3>Dziękujemy za przesłanie wiadomości</h3>
        <h4>Jest to wiadomość automatyczna prosimy na nią nie odpowiadać.</h4>
        <h4>Odpowiemy na Państwa wiadomość tak szybko jak będzie to możliwe.</h4>
        <hr />  
        <p>Treść wiadomości: </p>
        <div><span style="font-weight: bold">Imię i nazwisko: </span><span>${body.fullName}</span></div>
        <div><span style="font-weight: bold">Numer telefonu: </span><span>${body.phone}</span></div>
        <div><span style="font-weight: bold">Adres email: </span><span>${body.email}</span></div>
        <div><span style="font-weight: bold">Treść wiadomości: </span><span>${body.message}</span></div>
        <hr />
        <div style="font-size: 12px; color: #333">
            <div>Olczanskidom.pl</div>
            <div>Sebastian Czerwiński</div>
            <div>Ul. Stachonie 24b</div>
            <div>34-500 Zakopane</div>
            <div>NIP: 799-172-18-78</div>
        </div>
      </div>`;
}

module.exports = emailTemplate;
