# rknuotykiai

## Contentful konfiguracija

1. Nukopijuok `.env.example` į `.env`:
   ```bash
   cp .env.example .env
   ```
2. `.env` faile pateikti `Space ID` ir API raktai jau suvesti.
3. Naudok `src/contentfulClient.js` norint gauti duomenis iš Contentful:
   ```javascript
   import { deliveryClient, previewClient } from './contentfulClient';

   // Pvz. gauti įrašus
   deliveryClient.getEntries().then(console.log);
   ```

`deliveryClient` naudoja Content Delivery API, o `previewClient` - Content Preview API.
