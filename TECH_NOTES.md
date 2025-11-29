# Īss Tehniskais Apraksts

## Tehnoloģijas
- HTML: Lapas struktūra.
- CSS: Pamata stili.
- JavaScript: Loģika datu nolasīšanai.
- Supabase: Mākoņdatubāze datu glabāšanai un API.
- GitHub Pages — projekta hostings
- GitHub — versiju kontrole (branches, commits, pull request)


## Konfigurācijas faili
- `.env.example`: Piemērs vides mainīgajiem (iekļauj `SUPABASE_URL` un `SUPABASE_ANON_KEY`). Īstās atslēgas neliec repozitorijā – izmanto `.env` failu lokāli un ignorē to ar `.gitignore`.

## Kods Supabase pieslēgšanai
- Fails: `script.js`.
- Komentārs: Šajā failā tiek izveidots Supabase klients ar URL un atslēgu, pēc tam tiek veikts vaicājums uz tabulu 'tasks', lai nolasītu visus ierakstus un attēlotu tos HTML elementā ar ID 'tasks'.