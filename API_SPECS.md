# Dobartek API specs 🍕

https://api.dobartek.hr/v1/

## GET `/restaurants/search`
Endpoint vraća listu restorana ovisno o lokaciji i stringu za pretragu. 

Parametri su isti kao za `/restaurants`, s tim da postoji dodatni parametar 

### Request params
`latitude={latitude}&longitude={longitude}&isFoodPickup=false&query={query}`

- `latitude` - lat trenutne lokacije
- `longitude` - lng trenutne lokacije
- `isFoodPickup` - može li se hrana osobno skupiti
- `query` - string po kojem želimo pretraživati restorane
  
### Response
Response je niz objekata.

```
[
    {
        rating: string,
        title: string,
        urlFriendlyName: string,
        profilePicture: {
            url3x: string
        },
        isOnline: bool,
        cityName: string
    }
]
```

### Primjer
Pretraži restorane na lokaciji `43.508133, 16.440193` koji u imenu imaju riječ `fast`.

https://api.dobartek.hr/v1/restaurants/search?latitude=43.508133&longitude=16.440193&isFoodPickup=false&query=fast


## GET `/restaurants`
Endpoint vraća listu restorana ovisno o lokaciji.
Lokacija se šalje u formatu `latitude` i `longitude` query parametara. 

Također moramo specificirati želimo li restorane kod kojih se hrana može osobno skupiti (`isFoodPickup`).

### Request params
`latitude={latitude}&longitude={longitude}&isFoodPickup=false`

- `latitude` - lat trenutne lokacije
- `longitude` - lng trenutne lokacije
- `isFoodPickup` - može li se hrana osobno skupiti
  
### Response
Response je niz objekata.

```
[
    {
        title: string,
        urlFriendlyName: string,
        rating: string,
        cityName: string,
        profilePicture: {
            url3x: string
        },
        isOnline: bool
    }
]
```

### Primjer
Pretraži restorane na lokaciji `43.508133, 16.440193`.

https://api.dobartek.hr/v1/restaurants?latitude=43.508133&longitude=16.440193&isFoodPickup=false
