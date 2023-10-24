# Jammming

Toto je webová aplikace vytvořená v Reactu, která umožňuje uživatelům prohledávat knihovnu Spotify, vytvářet vlastní seznam skladeb a ukládat ho na jejich účet Spotify.

This is a React-based web application that allows users to search the Spotify library, create custom playlists, and save them to their Spotify accounts.

## Komponenty / Components

### App.js
Hlavní komponenta, která obsahuje logiku aplikace a propojuje všechny ostatní komponenty.
Main component that contains the application's logic and connects all other components.
- Uchovává stav aplikace, včetně vyhledávacího termínu, výsledků vyhledávání, názvu playlistu a skladeb v playlistu.
Stores the application's state, including the search term, search results, playlist name, and playlist tracks.
- Obsahuje metody pro vyhledávání skladeb, přidávání skladeb do playlistu, odebírání skladeb z playlistu a ukládání playlistu na Spotify.
Contains methods for searching for tracks, adding tracks to the playlist, removing tracks from the playlist, and saving the playlist to Spotify.
- Obsahuje renderování všech podkomponent.
Renders all subcomponents.

### Spotify.js
Modul pro komunikaci s Spotify API a správu autentizace.
Module for communicating with the Spotify API and handling authentication.
- Získává přístupový token pro autorizaci s API.
Obtains an access token for authorization with the API.
- Obsahuje metodu pro vyhledávání skladeb na Spotify a metodu pro ukládání playlistu na účet uživatele.
Contains a method for searching for tracks on Spotify and a method for saving the playlist to the user's account.

### Playlist.js
Komponenta pro zobrazení playlistu a jeho správu.
Component for displaying the playlist and managing it.
- Umožňuje uživatelům měnit název playlistu, odebírat skladby a ukládat playlist na Spotify.
Allows users to change the playlist name, remove tracks, and save the playlist to Spotify.

### SearchBar.js
Komponenta pro vyhledávání skladeb v Spotify.
Component for searching for tracks on Spotify.
- Umožňuje uživatelům zadat vyhledávací termín a spustit vyhledávání.
Allows users to enter a search term and initiate a search.

### SearchResults.js
Komponenta pro zobrazení výsledků vyhledávání skladeb v Spotify.
Component for displaying search results of tracks on Spotify.
- Zobrazuje seznam skladeb a umožňuje uživatelům přidávat sklady do playlistu.
Displays a list of tracks and allows users to add tracks to the playlist.

### Track.js
Komponenta pro zobrazení jednoho sklady v seznamu výsledků vyhledávání.
Component for displaying an individual track in the search results.
- Zobrazuje informace o skladbě, včetně názvu, interpreta a alba.
Displays information about the track, including its name, artist, and album.
- Umožňuje uživatelům přidávat sklady do playlistu nebo je odebírat.
Allows users to add tracks to the playlist or remove them.

### TrackList.js
Komponenta pro zobrazení seznamu skladeb.
Component for displaying a list of tracks.
- Zobrazuje seznam skladeb a pro každou skladbu používá komponentu `Track`.
Displays a list of tracks, using the `Track` component for each track.
- Umožňuje uživatelům přidávat sklady do playlistu nebo je odebírat.
Allows users to add tracks to the playlist or remove them.



## Instalace / Installation
1. Naklonujte tento repozitář.
   Clone this repository.
2. Spusťte příkaz `npm install` k instalaci závislostí.
   Run the `npm install` command to install the dependencies.
3. Spusťte aplikaci pomocí `npm start`.
   Start the application using `npm start`.

## Použité technologie / Technologies Used
- React
- HTML
- CSS
- JavaScript
- HTTP Requests and Responses
- Authentication

## Licence / License
Tento projekt je licencován pod [MIT licencí](LICENSE).

This project is licensed under the [MIT License](LICENSE).

MIT Licence:

Autorská práva (c) [2023] [Petr Fifka]

Tento software je poskytován pod licencí MIT, což znamená, že můžete tento software používat, kopírovat, upravovat, spojovat, publikovat, distribuovat, sublicencovat a/nebo prodat, ale BEZ ZÁRUKY. Pro více informací si přečtěte text MIT Licence v souboru [LICENSE](LICENSE).

This software is provided under the MIT license, which means you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell this software, but WITHOUT ANY WARRANTY. For more information, please read the MIT License text in the [LICENSE](LICENSE) file.

## Kontakt / Contact
Pro jakékoli otázky nebo komentáře mě můžete kontaktovat na [blek2@seznam.cz].

For any questions or comments, you can contact me at [blek2@seznam.cz].
