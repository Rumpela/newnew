# AI 2D Desktop Studio

> **Describe it. Build it. Play it. Together.**

AI 2D Desktop Studio არის AI-ზე დაფუძნებული Desktop პლატფორმა, რომელიც მომხმარებლებს საშუალებას აძლევს ტექსტური ბრძანებებით შექმნან 2D თამაშები და ინტერაქტიული აპლიკაციები — შემდეგ კი იმუშაონ ერთ პროექტზე მეგობართან ან გუნდთან ერთად, სხვადასხვა კომპიუტერიდან.

## იდეა

2D თამაშის ან ინტერაქტიული აპლიკაციის შექმნა ხშირად მოითხოვს პროგრამირებას, სცენების აწყობას, გრაფიკული ობიექტების მართვას, ფიზიკის ცოდნასა და გუნდურ კოორდინაციას. ჩვენი გადაწყვეტა ამ ყველაფერს აერთიანებს ერთ Desktop სამუშაო გარემოში.

მომხმარებელი წერს ბუნებრივ ენაზე:

```text
შექმენი პატარა 2D პლატფორმერი ტყის თემაზე.
დაამატე მოთამაშე, სამი პლატფორმა,
ორი მონეტა, ერთი მტერი და ქულების სისტემა.
```

AI აანალიზებს პროექტის კონტექსტს და ქმნის შემოწმებად მოქმედებებს:

- ქმნის სცენას;
- ამატებს ობიექტებს;
- აყენებს პოზიციებსა და ზომებს;
- ამატებს კომპონენტებს;
- ქმნის თამაშის ლოგიკას;
- ამოწმებს შეცდომებს;
- ამზადებს playable Preview-ს.

```text
Text Prompt → AI Actions → 2D Scene → Playable Preview
                         ↓
                Collaborative Project
```

## რატომ არის ეს განსხვავებული?

ჩვეულებრივი AI ასისტენტი ძირითადად კოდს აგენერირებს. AI 2D Desktop Studio კი ხედავს პროექტის მდგომარეობას და შეუძლია მართოს:

- სცენები;
- 2D ობიექტები;
- კომპონენტები;
- UI ელემენტები;
- თამაშის ლოგიკა;
- შეცდომების ვალიდაცია;
- Preview runtime.

AI არის არა მხოლოდ ჩათბოტი, არამედ პროექტის რეალური თანაშემქმნელი.

## მთავარი შესაძლებლობები

### Visual 2D Scene Editor

- 2D Canvas;
- Player, Platform, Coin და Enemy ობიექტები;
- ობიექტების დამატება, არჩევა და წაშლა;
- Drag-and-drop გადაადგილება;
- Grid, Zoom და Pan;
- Scene hierarchy;
- Inspector panel;
- პოზიციისა და ზომის შეცვლა.

### AI Project Assistant

AI-ს შეუძლია:

- შექმნას ახალი სცენა ტექსტური მოთხოვნით;
- დაამატოს ობიექტები;
- შექმნას თამაშის ლოგიკა;
- შეცვალოს არსებული ობიექტები;
- ახსნას კოდი;
- იპოვოს შეცდომები;
- შემოგვთავაზოს გამოსწორება;
- შექმნას UI ელემენტები.

### Real-Time Collaboration

ორი ან მეტი მომხმარებელი შეძლებს:

- ერთი პროექტის გახსნას სხვადასხვა კომპიუტერიდან;
- სცენაზე ერთდროულად მუშაობას;
- ცვლილებების რეალურ დროში ნახვას;
- საერთო AI ჩათის გამოყენებას;
- ობიექტებისა და კოდის ცვლილებების სინქრონიზაციას.

### Playable Preview

შექმნილი სცენა უნდა გაეშვას პირდაპირ Desktop აპლიკაციაში და მხარს უჭერდეს:

- Player movement;
- Jump;
- Gravity;
- Collision;
- Coin collection;
- Enemy movement;
- Score UI;
- Debug console.

## AI Action System

AI პროექტს პირდაპირ და უკონტროლოდ არ ცვლის. ის აბრუნებს სტრუქტურირებულ მოქმედებებს, რომლებიც გადის ვალიდაციას, უსაფრთხოების შემოწმებასა და საჭიროების შემთხვევაში მომხმარებლის დადასტურებას.

```json
{
  "message": "დავამატე მოთამაშე და სამი პლატფორმა.",
  "actions": [
    {
      "type": "CREATE_OBJECT",
      "payload": {
        "name": "Player",
        "objectType": "player",
        "x": 100,
        "y": 400
      }
    },
    {
      "type": "CREATE_OBJECT",
      "payload": {
        "name": "Platform",
        "objectType": "platform",
        "x": 300,
        "y": 500
      }
    }
  ],
  "requiresApproval": false
}
```

დაშვებული მოქმედებებია:

```text
CREATE_OBJECT
UPDATE_OBJECT
DELETE_OBJECT
CREATE_SCRIPT
UPDATE_SCRIPT
ADD_COMPONENT
UPDATE_UI
RUN_VALIDATION
RUN_BUILD
```

AI-ს არ აქვს უფლება შეასრულოს სისტემური ბრძანებები, წაიკითხოს პირადი ფაილები, წაშალოს სისტემური ფაილები ან შევიდეს არაავტორიზებულ პროექტებში.

## Hackathon MVP

პირველი ვერსიის მთავარი workflow:

1. Desktop აპლიკაციის გახსნა;
2. ახალი 2D პროექტის შექმნა;
3. AI-სთვის ტექსტური მოთხოვნის გაგზავნა;
4. Player, Platform, Coin და Enemy ობიექტების შექმნა;
5. სცენის ვიზუალურად შეცვლა;
6. მეორე მომხმარებლის მოწვევა;
7. ცვლილებების სინქრონიზაცია;
8. playable Preview-ის გაშვება.

### MVP-ში შედის

- Tauri Desktop application;
- React + TypeScript interface;
- 2D scene editor;
- ძირითადი 2D ობიექტები;
- object selection და Inspector;
- drag-and-drop movement;
- project save/load;
- AI chat და structured actions;
- basic runtime preview;
- two-user collaboration;
- Windows-first build.

### MVP-ში არ შედის

- სრული 3D engine;
- რთული multiplayer gameplay;
- asset marketplace;
- plugin marketplace;
- სრულყოფილი animation suite;
- მობილური და კონსოლური export;
- საკუთარი AI მოდელის ტრენინგი.

## დემოს სცენარი

```text
შექმენი პატარა 2D პლატფორმერი ტყის თემაზე.
დაამატე მოთამაშე მარცხნივ, სამი პლატფორმა,
ორი მონეტა, ერთი მტერი და ფინიშის ზონა.
მოთამაშეს შეეძლოს მოძრაობა და ხტომა,
ხოლო მტერი მოძრაობდეს მარცხნიდან მარჯვნივ.
დაამატე ქულების HUD.
```

AI ქმნის ფონს, მოთამაშეს, პლატფორმებს, მონეტებს, მტერს, ფინიშის ზონას, ქულების UI-სა და საწყის gameplay ლოგიკას. შემდეგ ერთი მომხმარებელი ცვლის ვიზუალურ სცენას, მეორე — თამაშის ლოგიკას, ხოლო ორივე ხედავს ცვლილებებს რეალურ დროში.

## ტექნოლოგიური არქიტექტურა

```text
┌────────────────────────────────────┐
│          Desktop Client            │
│                                    │
│  React UI                          │
│  2D Scene Editor                   │
│  AI Chat                           │
│  Code Editor                       │
│  Game Preview                      │
│  Collaboration Client              │
└────────────────┬───────────────────┘
                 │
          HTTPS / WebSocket
                 │
┌────────────────┴───────────────────┐
│             Cloud Backend          │
│                                    │
│  Authentication                    │
│  Project Service                   │
│  AI Service                        │
│  Collaboration Service             │
│  Validation Service                │
└────────────────┬───────────────────┘
                 │
┌────────────────┴───────────────────┐
│             Data Layer             │
│  PostgreSQL · Redis · Object Store │
└────────────────────────────────────┘
```

| ფენა | ტექნოლოგია |
|---|---|
| Desktop shell | Tauri |
| Desktop backend | Rust |
| UI | React + TypeScript + Vite |
| State management | Zustand |
| 2D editor | PixiJS / Canvas |
| Game runtime | Phaser |
| Code editor | Monaco Editor |
| Backend | Node.js + Fastify/NestJS |
| Database | PostgreSQL |
| Cache and queues | Redis + BullMQ |
| Collaboration | WebSocket + CRDT-ready protocol |
| AI | LLM API + structured function calling |

## მიმდინარე მდგომარეობა

პირველი ფაზა უკვე დაწყებულია და რეპოზიტორიაში არსებობს Tauri + React Desktop აპლიკაცია.

განხორციელებულია:

- Tauri Desktop პროექტი;
- React/TypeScript UI;
- Project Explorer;
- 2D Scene Canvas;
- Inspector panel;
- Player, Platform, Coin და Enemy ობიექტები;
- ობიექტის არჩევა;
- პოზიციისა და ზომის შეცვლა;
- ობიექტის წაშლა;
- Drag-and-drop გადაადგილება;
- TypeScript/Vite production build.

შემდეგი ეტაპებია:

- Save/Open project files;
- Preview runtime;
- AI Action System;
- collaboration backend;
- invite flow;
- two-user synchronization;
- build/export.

## ინსტალაცია და გაშვება

### მოთხოვნები

- Node.js LTS;
- Rust;
- Tauri CLI;
- Linux-ზე WebKitGTK და build tools;
- Windows-ზე WebView2 და C++ Build Tools;
- macOS-ზე Xcode Command Line Tools.

### პროექტის ჩამოტვირთვა

```bash
git clone https://github.com/Rumpela/newnew.git
cd newnew
```

### Desktop აპლიკაციის გაშვება

```bash
cd apps/desktop
npm install
npm run tauri dev
```

### Production build

```bash
cd apps/desktop
npm run build
```

## Roadmap

### Phase 1 — Desktop Foundation

- Desktop application;
- 2D scene editor;
- object system;
- local project storage;
- basic playable preview.

### Phase 2 — AI Creation Layer

- AI chat;
- project context;
- structured actions;
- action preview;
- code generation;
- AI debugging.

### Phase 3 — Collaboration

- accounts;
- invite links;
- WebSocket synchronization;
- presence;
- shared AI chat;
- operation history.

### Phase 4 — Production Features

- animation editor;
- tilemaps;
- asset manager;
- multi-scene projects;
- build/export;
- comments and version history.

### Phase 5 — Ecosystem

- local AI models;
- AI-generated assets;
- visual scripting;
- plugin API;
- asset marketplace;
- mobile and Steam export.

## Open-source მიმართულება

პროექტი დაგეგმილია ღია და გაფართოებადი არქიტექტურით. Open-source სახით შეიძლება გამოქვეყნდეს:

- 2D Scene Format;
- AI Action Schema;
- Collaboration Protocol;
- basic runtime;
- starter templates;
- example projects;
- plugin API;
- დოკუმენტაცია.

## მთავარი მესიჯი

ჩვენ არ ვქმნით უბრალოდ კიდევ ერთ AI ჩათს.

ჩვენ ვქმნით **Desktop გარემოს, სადაც იდეა ტექსტიდან პირდაპირ playable 2D პროექტად გადაიქცევა** და სადაც ადამიანი და AI ერთ სივრცეში თანამშრომლობენ.

```text
Describe it.
Build it.
Play it.
Together.
```

## Repository

[github.com/Rumpela/newnew](https://github.com/Rumpela/newnew)
