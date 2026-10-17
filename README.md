# AI 2D Desktop Studio

## სრული ტექნიკური დოკუმენტაცია

**ვერსია:** 1.0  
**პლატფორმები:** Windows, macOS, Linux  
**ტიპი:** Desktop 2D Game and App Builder  
**მთავარი შესაძლებლობა:** AI-ის დახმარებით 2D თამაშებისა და აპლიკაციების შექმნა, ასევე ორი ან მეტი მომხმარებლის ერთდროული მუშაობა სხვადასხვა კომპიუტერიდან.

---

## 1. პროექტის აღწერა

**AI 2D Desktop Studio** არის კომპიუტერში დასაინსტალირებელი პროგრამა, რომლის საშუალებითაც მომხმარებელს შეუძლია შექმნას 2D თამაშები და ინტერაქტიული აპლიკაციები AI-ის დახმარებით.

პროგრამა აერთიანებს:

- 2D Game Engine-ს;
- ვიზუალურ Scene Editor-ს;
- Code Editor-ს;
- AI ასისტენტს;
- Asset Manager-ს;
- რეალურ დროში Collaboration სისტემას;
- Preview, Debug და Build/Export სისტემებს.

მომხმარებელს შეეძლება AI-ს მისცეს დავალება ჩვეულებრივი ტექსტით:

> შექმენი 2D პლატფორმერი, სადაც მოთამაშე აგროვებს მონეტებს, ხტება პლატფორმებზე და ებრძვის მტრებს.

AI-მ უნდა შეძლოს:

- პროექტის სტრუქტურის შექმნა;
- სცენების შექმნა;
- ობიექტებისა და კომპონენტების დამატება;
- TypeScript/JavaScript კოდის გენერირება;
- ფიზიკისა და კოლაიდერების დაყენება;
- UI-ის შექმნა;
- შეცდომების აღმოჩენა და გამოსწორება;
- თამაშის გაშვება და ვალიდაცია;
- პროექტის build და export.

პროექტზე ერთდროულად უნდა შეძლოს მუშაობა მინიმუმ ორმა მომხმარებელმა, სხვადასხვა კომპიუტერიდან.

---

## 2. ძირითადი მიზნები

პროექტის მიზანია შეიქმნას მარტივი, მაგრამ ძლიერი Desktop გარემო, სადაც:

1. დამწყებ მომხმარებელს შეძლებს თამაშის შექმნას პროგრამირების მინიმალური ცოდნით;
2. გამოცდილ დეველოპერს ექნება კოდის, სცენისა და runtime-ის სრული კონტროლი;
3. AI იქნება არა მხოლოდ ჩათბოტი, არამედ პროექტის რეალური თანაშემქმნელი;
4. ორი ან მეტი ადამიანი შეძლებს ერთ პროექტზე მუშაობას რეალურ დროში;
5. პროექტის გამოყენება შესაძლებელი იქნება როგორც Offline, ისე Online რეჟიმში;
6. ყველა AI ცვლილება იქნება შემოწმებადი, უსაფრთხო და გაუქმებადი.

### მთავარი პრინციპები

სისტემა უნდა იყოს:

- მარტივი დამწყები მომხმარებლისთვის;
- საკმარისად ძლიერი პროფესიონალისთვის;
- AI-ზე ორიენტირებული;
- მრავალმომხმარებლიანი;
- უსაფრთხო;
- გაფართოებადი;
- Windows/macOS/Linux-ზე ხელმისაწვდომი;
- ნაწილობრივ გამოსაყენებელი ინტერნეტის გარეშე.

---

## 3. სამიზნე მომხმარებლები

### დამწყები მომხმარებელი

ქმნის პროექტებს AI-ის დახმარებით და არ საჭიროებს პროგრამირების ღრმა ცოდნას.

### დიზაინერი

ქმნის სცენებს, პერსონაჟებს, ვიზუალურ სტილსა და ინტერფეისებს.

### პროგრამისტი

წერს და ამუშავებს TypeScript/JavaScript კოდს.

### პატარა გუნდი

ორი ან მეტი ადამიანი მუშაობს ერთ პროექტზე სხვადასხვა კომპიუტერიდან.

### მასწავლებელი და მოსწავლე

ერთად ქმნიან სასწავლო თამაშებსა და ინტერაქტიულ პროექტებს.

### ინდი დეველოპერი

ქმნის სრულ 2D თამაშს და შემდეგ ახდენს მის ექსპორტს Windows, macOS, Linux ან Web ფორმატში.

---

## 4. ძირითადი ფუნქციები

მომხმარებელს უნდა შეეძლოს:

- ახალი პროექტის შექმნა;
- არსებული პროექტის გახსნა;
- პროექტის ლოკალურად შენახვა;
- პროექტის Cloud-ში სინქრონიზაცია;
- 2D სცენის შექმნა;
- ობიექტების დამატება და გადაადგილება;
- Sprite-ების გამოყენება;
- ტექსტის, ღილაკებისა და UI ელემენტების დამატება;
- ფიზიკისა და კოლაიდერების შექმნა;
- ანიმაციების დამატება;
- აუდიოს გამოყენება;
- სკრიპტების შექმნა და რედაქტირება;
- AI-ის გამოყენება პროექტის შესაქმნელად ან შესაცვლელად;
- პროექტის გაშვება და Debug რეჟიმში შემოწმება;
- სხვა მომხმარებლის მოწვევა;
- რეალურ დროში თანამშრომლობა;
- პროექტის build და export.

---

## 5. არქიტექტურა

### 5.1. მაღალი დონის არქიტექტურა

```text
┌────────────────────────────────────┐
│         Desktop Application        │
│                                    │
│  React UI                          │
│  2D Editor                         │
│  Code Editor                       │
│  AI Chat                           │
│  Game Preview                      │
│  Collaboration Client              │
│  Local Project Manager             │
└───────────────┬────────────────────┘
                │
        Tauri Desktop Layer
                │
┌───────────────┼────────────────────┐
│               │                    │
│ Local Files   │ Local Database     │
│ SQLite        │ Project Cache      │
│               │                    │
└───────────────┴────────────────────┘
                │
        Internet Connection
                │
┌───────────────┴────────────────────┐
│          Cloud Backend             │
│                                    │
│ API Server                         │
│ Auth Service                       │
│ Collaboration Server               │
│ AI Service                         │
│ Asset Storage                      │
│ Project Sync                       │
│ PostgreSQL                         │
│ Redis                              │
└────────────────────────────────────┘
```

### 5.2. რეკომენდებული ტექნოლოგიური სტეკი

#### Desktop

```text
Desktop Shell: Tauri
Desktop Backend: Rust
Frontend: React + TypeScript + Vite
```

Tauri-ის უპირატესობებია მცირე ზომის ინსტალერი, დაბალი RAM-ის გამოყენება, სწრაფი გაშვება და Windows/macOS/Linux მხარდაჭერა.

ალტერნატივის სახით შესაძლებელია Electron-ის გამოყენებაც, თუმცა Electron-ზე აგებული აპლიკაციები, როგორც წესი, უფრო დიდია და მეტ მეხსიერებას მოიხმარს.

#### Frontend

```text
React
TypeScript
Vite
Zustand ან Redux Toolkit
Tailwind CSS
Monaco Editor
```

#### 2D Rendering

```text
Scene Editor: PixiJS ან Konva.js
Game Runtime: Phaser
```

#### Backend

```text
Node.js
NestJS ან Fastify
PostgreSQL
Prisma
Redis
WebSocket
BullMQ
```

#### AI

```text
LLM API
Structured JSON Output
Function Calling
Project Context
Code Validation
AI Action System
```

---

## 6. Desktop აპლიკაციის ფანჯარა

```text
┌─────────────────────────────────────────────────────────────┐
│ File  Edit  View  Project  AI  Run  Build  Help             │
├─────────────┬───────────────────────────────┬───────────────┤
│             │                               │               │
│ Project     │                               │ Inspector     │
│ Explorer    │                               │               │
│             │        2D Scene Editor        │ Object        │
│ Assets      │                               │ Properties    │
│ Scenes      │                               │ Components    │
│ Scripts     │                               │ Events        │
│ UI          │                               │               │
│             │                               │               │
├─────────────┴───────────────────────────────┴───────────────┤
│ Console │ Errors │ AI Activity │ Collaboration │ Timeline    │
├─────────────────────────────────────────────────────────────┤
│ AI Assistant                                                │
└─────────────────────────────────────────────────────────────┘
```

### ზედა მენიუ

- File — პროექტის შექმნა, გახსნა, შენახვა და export;
- Edit — Undo, Redo, Copy, Paste და სხვა ოპერაციები;
- View — პანელებისა და სამუშაო სივრცის მართვა;
- Project — პროექტის პარამეტრები და წევრები;
- AI — AI ჩათი, კონტექსტი და ისტორია;
- Run — Preview და Debug;
- Build — საბოლოო build და export;
- Help — დოკუმენტაცია, ლოგები და განახლებები.

---

## 7. ძირითადი მოდულები

### 7.1. Project Manager

ფუნქციები:

- ახალი პროექტის შექმნა;
- პროექტის გახსნა და დახურვა;
- ბოლო პროექტების სია;
- პროექტის დუბლირება;
- პროექტის წაშლა და არქივირება;
- იმპორტი და ექსპორტი;
- Cloud Sync-ის ჩართვა;
- პროექტის წევრების მართვა.

### 7.2. Scene Editor

ფუნქციები:

- ობიექტების დამატება;
- Drag-and-drop;
- გადაადგილება, ზომის შეცვლა და Rotation;
- Layer-ების მართვა;
- Grid და Snap-to-grid;
- Zoom და Pan;
- Multi-select;
- Grouping;
- Lock/Unlock;
- Visibility;
- Scene hierarchy;
- Camera view.

### 7.3. Asset Manager

მხარდაჭერილი ტიპები:

- PNG, JPG, WebP, SVG, GIF;
- MP3, WAV, OGG;
- TTF, OTF;
- JSON;
- Sprite Sheet;
- Tilemap.

ფუნქციები:

- ფაილის ატვირთვა;
- Drag-and-drop;
- Preview;
- Rename;
- Folder-ების შექმნა;
- Asset-ის ჩანაცვლება;
- Asset-ის წაშლა;
- Asset-ის გამოყენების ადგილების ნახვა.

### 7.4. Script Editor

რეკომენდებულია Monaco Editor-ის გამოყენება.

მხარდაჭერილი ენები:

```text
TypeScript
JavaScript
```

ფუნქციები:

- Syntax highlighting;
- Autocomplete;
- Error highlighting;
- File search;
- Code formatting;
- AI code generation;
- AI code explanation;
- Code diff;
- Version history;
- უსაფრთხო runtime execution.

### 7.5. Game Runtime

რეჟიმები:

- Run current scene;
- Run full project;
- Debug mode;
- Pause;
- Restart;
- Step-by-step debugging;
- Colliders-ის ჩვენება;
- FPS-ის ჩვენება;
- Object ID-ების ჩვენება;
- Physics მონაცემების ჩვენება.

მალსახმობები:

```text
F5          Run
F6          Debug
F8          Stop
F9          Restart
Ctrl/Cmd+S  Save
Ctrl/Cmd+Z  Undo
```

---

## 8. 2D ობიექტებისა და კომპონენტების სისტემა

ყველა ობიექტი უნდა შედგებოდეს Entity-სა და Component-ებისგან.

### 8.1. Scene Object

```typescript
 type SceneObject = {
  id: string;
  name: string;
  type: ObjectType;
  parentId?: string;
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  visible: boolean;
  locked: boolean;
  layer: number;
  components: Component[];
};
```

### 8.2. ობიექტების ტიპები

```text
Sprite
Text
Shape
Button
Tilemap
Particle
Camera
Audio Source
Group
Custom Object
```

### 8.3. კომპონენტები

```text
Transform
Sprite Renderer
Text Renderer
Rigidbody
Collider
Character Controller
Animation
Audio
Camera
Health
Inventory
Interaction
Script
AI Behavior
Particle Emitter
```

### 8.4. მაგალითი

```json
{
  "id": "player-001",
  "name": "Player",
  "type": "Sprite",
  "x": 120,
  "y": 300,
  "rotation": 0,
  "scaleX": 1,
  "scaleY": 1,
  "components": [
    {
      "type": "SpriteRenderer",
      "properties": {
        "asset": "assets/player.png"
      }
    },
    {
      "type": "Rigidbody",
      "properties": {
        "gravity": true
      }
    },
    {
      "type": "Collider",
      "properties": {
        "shape": "rectangle"
      }
    },
    {
      "type": "Script",
      "properties": {
        "file": "scripts/player-controller.ts"
      }
    }
  ]
}
```

---

## 9. პროექტის ფაილების სტრუქტურა

```text
MyProject/
│
├── project.json
├── settings.json
│
├── scenes/
│   ├── main.scene.json
│   ├── level-1.scene.json
│   └── menu.scene.json
│
├── scripts/
│   ├── player-controller.ts
│   ├── enemy-ai.ts
│   └── game-manager.ts
│
├── assets/
│   ├── images/
│   ├── sprites/
│   ├── audio/
│   ├── fonts/
│   └── tilesets/
│
├── ui/
│   └── hud.ui.json
│
├── builds/
├── backups/
│
└── .ai2d/
    ├── history/
    ├── cache/
    └── collaboration.json
```

### project.json

```json
{
  "name": "Forest Adventure",
  "version": "1.0.0",
  "engineVersion": "0.1.0",
  "projectType": "platformer",
  "mainScene": "scenes/main.scene.json",
  "settings": {
    "width": 1280,
    "height": 720,
    "gravity": 900,
    "targetFps": 60
  }
}
```

---

## 10. ლოკალური შენახვა და Crash Recovery

Desktop აპლიკაციამ პროექტი უნდა შეინახოს მომხმარებლის კომპიუტერში.

### შენახვის რეჟიმები

#### Manual Save

მომხმარებელი თავად ინახავს პროექტს:

```text
Ctrl/Cmd + S
```

#### Auto Save

სისტემა ავტომატურად ინახავს ცვლილებებს გარკვეული ინტერვალით.

#### Crash Recovery

თუ აპლიკაცია მოულოდნელად დაიხურა, შემდეგ გაშვებაზე გამოჩნდება:

```text
A recovered version of this project is available.

[Open recovered version] [Ignore]
```

---

## 11. AI ასისტენტი

AI ასისტენტი უნდა იყოს ინტეგრირებული მთელ აპლიკაციაში და არა მხოლოდ ცალკე ჩათის ფანჯარაში.

მომხმარებელს შეუძლია AI-ს მიმართოს:

- ჩათის ფანჯრიდან;
- არჩეულ ობიექტზე მარჯვენა ღილაკით;
- კოდის რედაქტორიდან;
- შეცდომის შეტყობინებიდან;
- სცენის კონტექსტური მენიუდან;
- კლავიატურის shortcut-ით.

### 11.1. პროექტის შექმნა ტექსტიდან

მომხმარებელი წერს:

> შექმენი 2D პლატფორმერი ტყის თემაზე.

AI ქმნის:

- მთავარ სცენას;
- მოთამაშეს;
- პლატფორმებს;
- ფონს;
- კამერას;
- ფიზიკას;
- საწყის კონტროლერს;
- მტრის ობიექტს;
- UI-ს.

### 11.2. ობიექტის შექმნა

> დაამატე მოთამაშე ეკრანის მარცხენა მხარეს.

### 11.3. ფუნქციის დამატება

> მოთამაშეს დაუმატე ორმაგი ნახტომი.

### 11.4. დიზაინის შეცვლა

> ფონი გახადე ღამის ფერი და დაამატე მოძრავი ვარსკვლავები.

### 11.5. UI-ის შექმნა

> შექმენი HUD, სადაც გამოჩნდება სიცოცხლე, მონეტები და ქულა.

### 11.6. შეცდომის გამოსწორება

> მოთამაშე იატაკში ვარდება. გამოიკვლიე პრობლემა და გაასწორე.

### 11.7. კოდის ახსნა და ოპტიმიზაცია

> ამიხსენი, როგორ მუშაობს enemy-ai.ts.

> იპოვე პროექტში ნელი კოდი და გააუმჯობესე წარმადობა.

---

## 12. AI Action System

AI-მ არ უნდა შეძლოს პროექტის შეუზღუდავად შეცვლა. მისმა პასუხმა უნდა მიიღოს სტრუქტურირებული მოქმედებების ფორმა.

```json
{
  "message": "დავამატე მონეტა მოთამაშის მარჯვნივ.",
  "actions": [
    {
      "type": "CREATE_OBJECT",
      "payload": {
        "name": "Coin",
        "objectType": "Sprite",
        "x": 400,
        "y": 300
      }
    },
    {
      "type": "ADD_COMPONENT",
      "payload": {
        "objectId": "coin-001",
        "componentType": "Animation",
        "properties": {
          "type": "rotation",
          "speed": 2
        }
      }
    }
  ],
  "requiresApproval": false
}
```

### დაშვებული მოქმედებები

```text
CREATE_PROJECT
CREATE_SCENE
CREATE_OBJECT
UPDATE_OBJECT
DELETE_OBJECT
ADD_COMPONENT
REMOVE_COMPONENT
CREATE_SCRIPT
UPDATE_SCRIPT
DELETE_SCRIPT
ADD_ASSET
UPDATE_UI
UPDATE_SETTINGS
RUN_VALIDATION
RUN_BUILD
```

### აკრძალული მოქმედებები

```text
EXECUTE_SYSTEM_COMMAND
READ_PRIVATE_FILES
DELETE_USER_FILES
INSTALL_SOFTWARE
ACCESS_UNAUTHORIZED_PROJECTS
DIRECT_DATABASE_ACCESS
```

### AI ცვლილებების დადასტურება

მნიშვნელოვანი ცვლილებების წინ გამოჩნდება ცვლილებების მიმოხილვა:

```text
AI wants to make the following changes:

- Create 8 objects
- Add 2 scripts
- Modify player-controller.ts
- Change gravity settings
- Add HUD interface

[Review] [Apply] [Reject]
```

მომხმარებელს უნდა შეეძლოს:

- თითოეული ცვლილების ნახვა;
- კოდის diff-ის ნახვა;
- კონკრეტული ცვლილების უარყოფა;
- ყველა ცვლილების მიღება;
- ცვლილებების გაუქმება.

---

## 13. AI Context

AI-ს უნდა მიეწოდოს მხოლოდ საჭირო პროექტის კონტექსტი.

```json
{
  "project": {
    "name": "Forest Adventure",
    "type": "platformer",
    "engineVersion": "0.1.0"
  },
  "activeScene": {
    "name": "Level 1",
    "objectCount": 24
  },
  "selectedObject": {
    "id": "player-001",
    "type": "Sprite"
  },
  "scripts": [
    "player-controller.ts",
    "enemy-ai.ts"
  ],
  "errors": [
    "Missing collider on Ground"
  ],
  "recentChanges": []
}
```

---

## 14. Collaboration სისტემა

### 14.1. მიზანი

ორი ან მეტი მომხმარებელი უნდა შევიდეს ერთ პროექტში სხვადასხვა კომპიუტერიდან და იმუშაოს ერთდროულად.

```text
User A Desktop
       │
       ├── Secure WebSocket
       │
Collaboration Server
       │
       └── Secure WebSocket
User B Desktop
```

### 14.2. ფუნქციები

- პროექტში მოწვევა;
- მომხმარებლების სიის ნახვა;
- Online/Offline სტატუსი;
- მომხმარებლის Cursor-ის გაზიარება;
- არჩეული ობიექტის გაზიარება;
- ცვლილებების რეალურ დროში მიღება;
- AI ჩათის საერთო ისტორია;
- მოქმედებების ისტორია;
- Project Version History;
- Undo/Redo;
- კონფლიქტების მართვა.

### 14.3. პროექტში მოწვევა

პროექტის მფლობელი ქმნის მოწვევის კოდს ან ბმულს:

```text
Invite Code: F7K2-91LM
```

ან:

```text
ai2dstudio://project/abc123/invite/F7K291LM
```

მეორე მომხმარებელი ხსნის Desktop აპლიკაციას, შედის ანგარიშში, უთითებს კოდს და უერთდება პროექტის სინქრონიზაციას.

### 14.4. Collaboration ოპერაციები

```typescript
 type CollaborationOperation =
  | {
      type: "CREATE_OBJECT";
      projectId: string;
      sceneId: string;
      object: SceneObject;
    }
  | {
      type: "UPDATE_OBJECT";
      projectId: string;
      sceneId: string;
      objectId: string;
      changes: Record<string, unknown>;
    }
  | {
      type: "DELETE_OBJECT";
      projectId: string;
      sceneId: string;
      objectId: string;
    }
  | {
      type: "UPDATE_SCRIPT";
      projectId: string;
      filePath: string;
      content: string;
    };
```

### 14.5. კონფლიქტების მართვა

თუ მომხმარებელი A ცვლის Player-ის Sprite-ს, ხოლო მომხმარებელი B ცვლის მის პოზიციას, ცვლილებები ავტომატურად ერთიანდება.

თუ ორივე მომხმარებელი ცვლის ერთსა და იმავე მნიშვნელობას, გამოჩნდება:

```text
Conflict detected in Player.x

User A: 300
User B: 450

[Use A] [Use B] [Merge manually]
```

კოდის ფაილებისთვის საჭიროა Diff რეჟიმი:

```diff
<<<<<<< User A
speed = 200;
=======
speed = 250;
>>>>>>> User B
```

---

## 15. მომხმარებლის როლები

### Owner

- პროექტის შექმნა;
- წევრების მართვა;
- პროექტის წაშლა;
- AI ხარჯების მართვა;
- Export;
- Project Settings.

### Editor

- სცენის რედაქტირება;
- კოდის შეცვლა;
- Asset-ების დამატება;
- AI-ის გამოყენება;
- Preview-ის გაშვება.

### Viewer

- პროექტის ნახვა;
- Preview-ის გაშვება;
- კომენტარების დატოვება.

### AI Manager

- AI ცვლილებების დადასტურება;
- AI მოდელის არჩევა;
- AI გამოყენების ლიმიტების მართვა.

---

## 16. WebSocket მოვლენები

```text
project:join
project:leave
project:state
project:operation
project:cursor
project:selection
project:presence
project:conflict
project:sync
ai:started
ai:completed
ai:error
build:started
build:completed
```

მაგალითი:

```json
{
  "event": "project:operation",
  "projectId": "project-001",
  "userId": "user-002",
  "operation": {
    "type": "UPDATE_OBJECT",
    "objectId": "enemy-001",
    "changes": {
      "x": 560,
      "y": 320
    }
  }
}
```

---

## 17. მონაცემთა ბაზა

### Users

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### Projects

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  project_type VARCHAR(50) NOT NULL,
  current_version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### Project Members

```sql
CREATE TABLE project_members (
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  role VARCHAR(30) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY(project_id, user_id)
);
```

### Scenes

```sql
CREATE TABLE scenes (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  name VARCHAR(255) NOT NULL,
  scene_data JSONB NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### Scripts

```sql
CREATE TABLE scripts (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  path VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_by UUID REFERENCES users(id),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### AI Messages

```sql
CREATE TABLE ai_messages (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  role VARCHAR(20) NOT NULL,
  content TEXT NOT NULL,
  actions JSONB,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### Project Operations

```sql
CREATE TABLE project_operations (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  operation_type VARCHAR(100) NOT NULL,
  payload JSONB NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

---

## 18. REST API

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
```

### Projects

```http
POST /api/projects
GET /api/projects
GET /api/projects/:projectId
PATCH /api/projects/:projectId
DELETE /api/projects/:projectId
```

### Members

```http
POST /api/projects/:projectId/invitations
GET /api/projects/:projectId/members
PATCH /api/projects/:projectId/members/:userId
DELETE /api/projects/:projectId/members/:userId
```

### AI

```http
POST /api/projects/:projectId/ai/chat
POST /api/projects/:projectId/ai/apply
POST /api/projects/:projectId/ai/validate
GET /api/projects/:projectId/ai/history
```

### Sync

```http
GET /api/projects/:projectId/sync
POST /api/projects/:projectId/operations
GET /api/projects/:projectId/versions
```

### AI მოთხოვნა

```json
{
  "message": "დაამატე მონეტების შეგროვების სისტემა",
  "projectId": "project-001",
  "sceneId": "scene-001",
  "selectedObjectId": "player-001",
  "autoApply": false
}
```

### AI პასუხი

```json
{
  "message": "მონეტების სისტემა მომზადებულია.",
  "actions": [
    {
      "type": "CREATE_OBJECT",
      "payload": {
        "name": "Coin",
        "objectType": "Sprite"
      }
    },
    {
      "type": "CREATE_SCRIPT",
      "payload": {
        "path": "scripts/coin.ts"
      }
    },
    {
      "type": "UPDATE_SCRIPT",
      "payload": {
        "path": "scripts/player-controller.ts"
      }
    }
  ],
  "requiresApproval": true
}
```

---

## 19. Preview და Debug სისტემა

მომხმარებელმა უნდა შეძლოს პროექტის გაშვება აპლიკაციის შიგნით.

### Preview რეჟიმები

- Current Scene;
- Entire Project;
- Debug Mode;
- Fullscreen;
- Mobile Resolution;
- Show Physics;
- Show Colliders;
- Show FPS;
- Show Input Events.

### Debug Console

```text
INFO: Scene loaded
INFO: Player initialized
WARN: Enemy has no patrol path
ERROR: Missing asset: coin.png
```

### AI Debugging

მომხმარებელს შეუძლია დააჭიროს **Ask AI to fix**. AI მიიღებს შეცდომას, შესაბამისი ფაილის კოდს, სცენის მონაცემებსა და ბოლო ცვლილებებს.

---

## 20. Build და Export

### მხარდაჭერილი ფორმატები

- Windows `.exe`;
- macOS `.app`;
- Linux AppImage;
- Web build;
- ZIP project;
- Source project.

### Build პროცესი

```text
Project Validation
        │
Script Compilation
        │
Asset Processing
        │
Scene Packaging
        │
Runtime Packaging
        │
Final Build
```

Build-ის შეცდომის შემთხვევაში მომხმარებელს უნდა შეეძლოს შეცდომის გახსნა ან AI-სთვის მისი გასწორების მოთხოვნა.

---

## 21. უსაფრთხოება

Desktop აპლიკაციამ არ უნდა მისცეს AI-ს შეუზღუდავი წვდომა კომპიუტერზე.

აუცილებელია:

- Sandbox;
- პროექტის დირექტორიის შეზღუდული წვდომა;
- სისტემური ფაილების დაცვა;
- კოდის ვალიდაცია;
- ბრძანებების Whitelist;
- CPU ლიმიტი;
- Memory ლიმიტი;
- Execution Timeout;
- Network Access-ის შეზღუდვა;
- მომხმარებლის უფლებების შემოწმება;
- Audit Log.

### დაშვებული დირექტორიები

```text
Current Project Directory
Application Cache Directory
Application Temporary Directory
```

### აკრძალული დირექტორიები

```text
Operating System Directories
User Password Directories
Private Application Data
Other Project Directories
```

---

## 22. Cloud და Offline რეჟიმები

### Offline რეჟიმი

ინტერნეტის გარეშე ხელმისაწვდომი იქნება:

- პროექტის შექმნა;
- Scene Editor;
- Asset Manager;
- Script Editor;
- Preview;
- Local Save;
- Local History;
- Local Build.

Cloud AI-ის გამოყენებას დასჭირდება ინტერნეტი, თუ მომხმარებელს არ აქვს ადგილობრივი AI მოდელი.

### Online რეჟიმი

ონლაინ რეჟიმში დაემატება:

- Cloud AI;
- Real-time Collaboration;
- Cloud Backup;
- Project Sharing;
- Version Synchronization;
- Remote Asset Storage;
- Team Management.

---

## 23. განახლებები და ლოგირება

აპლიკაციას უნდა ჰქონდეს ავტომატური განახლება:

```text
New version available: 1.2.0

Changes:
- Improved AI code generation
- Added tilemap editor
- Fixed collaboration errors

[Update now] [Later]
```

განახლება უნდა ხდებოდეს signed package-ით, rollback შესაძლებლობითა და მომხმარებლის პროექტების დაზიანების გარეშე.

სისტემამ უნდა შეინახოს:

- Application Logs;
- Build Logs;
- AI Action Logs;
- Collaboration Logs;
- Crash Reports;
- Sync Errors;
- Validation Errors.

ლოგების გახსნა შესაძლებელი უნდა იყოს:

```text
Help → Open Logs Folder
```

---

## 24. MVP ვერსია

პირველი სამუშაო ვერსია უნდა შეიცავდეს:

### Desktop

- Windows მხარდაჭერა;
- macOS მხარდაჭერა;
- Tauri აპლიკაცია;
- Project Manager;
- Local File Storage;
- Auto-save.

### 2D Editor

- Canvas;
- Sprite-ები;
- ტექსტი;
- Shape-ები;
- ობიექტების გადაადგილება;
- Layers;
- Inspector;
- Scenes.

### Code

- Monaco Editor;
- TypeScript;
- Script Files;
- Basic Validation;
- Error Console.

### AI

- AI Chat;
- Project Context;
- Object Creation;
- Script Generation;
- Code Explanation;
- Error Fixing;
- Action Preview;
- Apply/Reject.

### Collaboration

- ანგარიშები;
- Project Invitation;
- ორი მომხმარებლის ერთდროული შესვლა;
- WebSocket Sync;
- Presence;
- Operation History.

### Runtime

- Run Scene;
- Pause;
- Restart;
- Debug Console;
- Basic Physics;
- Basic Collision.

### Export

- Windows Build;
- Project ZIP;
- Source Export.

---

## 25. განვითარების ეტაპები

### Phase 1 — Desktop Foundation

- Tauri setup;
- React/TypeScript;
- Application Window;
- Menus;
- Local File Access;
- Project Creation;
- Project Open/Save.

### Phase 2 — 2D Editor

- Canvas;
- Scene Hierarchy;
- Object System;
- Inspector;
- Sprite Assets;
- Scene Serialization.

### Phase 3 — Runtime

- Renderer;
- Input System;
- Physics;
- Collision;
- Scene Loading;
- Preview Mode.

### Phase 4 — Code Editor

- Monaco Editor;
- Script Files;
- TypeScript Validation;
- Runtime Script Loading;
- Error Display.

### Phase 5 — AI

- AI Chat;
- Project Context;
- Structured Actions;
- Code Generation;
- Action Review;
- Apply/Reject;
- AI Debugging.

### Phase 6 — Collaboration

- Authentication;
- Project Members;
- WebSocket;
- Presence;
- Operation Sync;
- Conflict Resolution;
- Shared AI Chat.

### Phase 7 — Build and Export

- Project Validation;
- Asset Packaging;
- Windows Build;
- Web Build;
- ZIP Export;
- Installer Generation.

### Phase 8 — Advanced Features

- Animation Editor;
- Tilemap Editor;
- Particle Editor;
- Visual Scripting;
- Local AI;
- Asset Generation;
- Multiplayer Runtime;
- Plugin System.

---

## 26. მომავალი ფუნქციები

მომავალში შეიძლება დაემატოს:

- AI-generated Sprites;
- AI-generated Music;
- AI-generated Sound Effects;
- AI-generated Animations;
- Visual Scripting;
- Multiplayer Game Testing;
- Asset Marketplace;
- Plugin Marketplace;
- Steam Export;
- Mobile Export;
- Console Export;
- Local AI Models;
- Voice Commands;
- Version Branching;
- Git Integration;
- Team Comments;
- Task Management.

---

## 27. საბოლოო მომხმარებლის სცენარი

მომხმარებელი ხსნის Desktop აპლიკაციას და წერს:

> შექმენი 2D RPG თამაში ტყის სამყაროში. მოთამაშეს ჰქონდეს ჯანმრთელობა, ინვენტარი და ხმალი. დაამატე ორი მტერი, ერთი NPC, ქვესტი და ორი ოთახი.

AI-ის მოქმედებები:

1. ქმნის ახალ პროექტს;
2. ქმნის მთავარ მენიუს;
3. ქმნის პირველ სცენას;
4. ქმნის ტყის ფონს;
5. ამატებს მოთამაშეს;
6. ამატებს ორ მტერს;
7. ამატებს NPC-ს;
8. ქმნის ოთახებს;
9. ქმნის ჯანმრთელობის სისტემას;
10. ქმნის ინვენტარს;
11. ქმნის ქვესტის სისტემას;
12. ამატებს შესაბამის სკრიპტებს;
13. ამოწმებს შეცდომებს;
14. აჩვენებს ცვლილებების მიმოხილვას;
15. ელოდება მომხმარებლის დადასტურებას;
16. უშვებს თამაშის Preview-ს.

შემდეგ მომხმარებელი აგზავნის მოწვევას მეგობარს. მეგობარი სხვა კომპიუტერიდან შედის პროექტში და ორივე ერთდროულად მუშაობს:

- ერთი ცვლის ვიზუალურ სცენას;
- მეორე წერს კოდს;
- ორივე იყენებს AI-ს;
- ცვლილებები მყისიერად სინქრონიზდება.

---

## 28. საბოლოო ტექნოლოგიური რეკომენდაცია

```text
Desktop Shell:
Tauri

Frontend:
React + TypeScript + Vite

State Management:
Zustand ან Redux Toolkit

2D Editor:
PixiJS ან Konva.js

Game Runtime:
Phaser

Code Editor:
Monaco Editor

Local Storage:
Project Files + SQLite

Backend:
Node.js + NestJS

Database:
PostgreSQL

Cache and Queues:
Redis + BullMQ

Collaboration:
WebSocket + CRDT/Yjs

AI:
Cloud LLM API + Structured Actions

Authentication:
JWT + OAuth

Cloud Storage:
S3-compatible object storage

Export:
Windows, macOS, Linux და Web
```

---

## 29. მთავარი პროდუქტის პრინციპი

ეს არ უნდა იყოს მხოლოდ AI ჩათის მქონე 2D რედაქტორი.

ეს უნდა იყოს:

> **AI-ზე დაფუძნებული Desktop განვითარების გარემო, სადაც AI არის პროექტის თანაშემქმნელი და შეუძლია სცენების, ობიექტების, კოდის, UI-ის, ფიზიკისა და აპლიკაციის სტრუქტურის მართვა.**

ყველა AI ცვლილება უნდა იყოს:

- სტრუქტურირებული;
- შემოწმებადი;
- უსაფრთხო;
- გაუქმებადი;
- ვერსიონირებადი;
- მომხმარებლის მიერ კონტროლირებადი.

საბოლოო პროდუქტი აერთიანებს **2D Game Engine-ს, Desktop Editor-ს, Code Editor-ს, AI Agent-სა და Real-Time Collaboration სისტემას** ერთ პროგრამაში.
