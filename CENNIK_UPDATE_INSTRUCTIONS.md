# INSTRUKCJE AKTUALIZACJI CENNIKA

## WAŻNE: Musisz zaktualizować plik pages/cennik.tsx

Obecnie cennik zawiera dane zastępcze. Aby dodać prawdziwe ceny z pliku cennik.xlsx:

### Krok 1: Otwórz cennik.xlsx
Sprawdź wszystkie pozycje w pliku Excel

### Krok 2: Zaktualizuj pages/cennik.tsx
Znajdź sekcję `const pricingPlans = [` i zastąp placeholder danymi z Excel

### Struktura dla każdej pozycji:
```javascript
{
  name: 'Nazwa usługi z Excel',
  price: 'Cena z Excel',
  duration: 'Czas trwania z Excel',
  description: 'Opis z Excel',
  features: [
    'Cecha 1 z Excel',
    'Cecha 2 z Excel',
    'Cecha 3 z Excel'
  ],
  popular: false // ustaw true dla najpopularniejszej opcji
}
```

### Przykład:
```javascript
const pricingPlans = [
  {
    name: 'Trening Personalny - 1 sesja',
    price: '150',
    duration: '60 min',
    description: 'Pojedyncza sesja treningowa',
    features: [
      'Indywidualny plan treningowy',
      'Analiza techniki',
      'Porady żywieniowe'
    ],
    popular: false
  },
  // Dodaj wszystkie inne pozycje z cennik.xlsx
]
```

### UWAGA:
- NIE dodawaj pozycji, których nie ma w Excel
- Użyj DOKŁADNIE tych samych nazw i cen co w pliku
- Dodaj WSZYSTKIE pozycje z cennik.xlsx