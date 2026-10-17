# AI 2D Desktop Studio — სრული ჩათის კონტექსტი

ეს ფაილი შეიცავს ChatGPT-სა და მომხმარებელს შორის მიმდინარე პროექტთან დაკავშირებულ სრულ საუბარს.

ინსტრუქცია AI ასისტენტისთვის:

- წაიკითხე ეს ფაილი მთლიანად;
- გამოიტანე პროექტის მიმდინარე მდგომარეობა;
- დაადგინე უკვე შესრულებული ნაბიჯები;
- იპოვე ბოლო დაუმთავრებელი ეტაპი;
- არ გაიმეორო უკვე შესრულებული სამუშაო;
- შემდეგი ცვლილების წინ ჯერ შეამოწმე არსებული კოდი;
- არ შეცვალო unrelated ფაილები;
- ცვლილების შემდეგ გაუშვი `npm run build`;
- Tauri-ის ცვლილებისას გაუშვი `npm run tauri dev`.

---

დოკუმენტაცია მჭირდება game tool ის, სადაც ჩაშენებული იქნება ai, ორ ადამიანს შეეძლება ერთად შესვლა სხვადასხვა კომპიუტერიდან და ერთდროულად გამოყენება ai-ს. 2d-ზე მორგებული. ანუ ნებისმიერი 2d აპპ შექმნა და დამუშავება ai-ის გამოყენებით
AI 2D Game Tool — ტექნიკური დოკუმენტაცია
1. პროექტის აღწერა
AI 2D Game Tool არის ბრაუზერზე დაფუძნებული პლატფორმა, რომლის საშუალებითაც მომხმარებლებს შეუძლიათ:

შექმნან ნებისმიერი 2D თამაში ან აპლიკაცია;
გამოიყენონ AI კოდის, სცენების, ობიექტებისა და ლოგიკის შესაქმნელად;
იმუშაონ ერთ პროექტზე ერთდროულად;
შევიდნენ სხვადასხვა კომპიუტერიდან;
რეალურ დროში დაინახონ ერთმანეთის ცვლილებები;
AI-ს მიმართონ ორივე მომხმარებელმა ერთობლივად;
გამოიყენონ ვიზუალური 2D რედაქტორი კოდის ცოდნის გარეშე ან მინიმალური ცოდნით.
პლატფორმა უნდა ჰგავდეს ერთდროულად:

2D game engine-ს;
ონლაინ კოდის რედაქტორს;
დიზაინისა და სცენების რედაქტორს;
AI ასისტენტს;
Google Docs-ის მსგავს თანამშრომლობით სამუშაო სივრცეს.
2. ძირითადი მიზანი
მომხმარებელმა უნდა შეძლოს ასეთი ტიპის დავალების შესრულება:

„შექმენი 2D პლატფორმერი, სადაც მოთამაშე აგროვებს მონეტებს, გაურბის მტრებს და გადადის შემდეგ დონეზე.“

AI-მ უნდა შეძლოს:

თამაშის ძირითადი სტრუქტურის შექმნა;
სცენის გენერირება;
მოთამაშის, მტრების, კედლებისა და ნივთების დამატება;
JavaScript/TypeScript ან სხვა შიდა სკრიპტების გენერირება;
ობიექტებს შორის კავშირების შექმნა;
შეცდომების აღმოჩენა;
პროექტის გაშვება და ტესტირება;
მომხმარებლის ინსტრუქციების მიხედვით ცვლილებების შეტანა.
3. მომხმარებლის ძირითადი სცენარი
3.1. პროექტის შექმნა
მომხმარებელი ქმნის ახალ პროექტს:

პროექტის სახელი;
პროექტის ტიპი:
Platformer;
Top-down;
Puzzle;
RPG;
Shooter;
Visual novel;
Custom 2D app;
ეკრანის ზომა;
ფიზიკის რეჟიმი;
არჩეული სტილი;
AI-ის გამოყენების რეჟიმი.
მაგალითად:

Text
Project name: Space Adventure
Type: 2D Platformer
Resolution: 1280x720
Physics: Enabled
Multiplayer editing: Enabled
3.2. მეორე მომხმარებლის მოწვევა
პროექტის მფლობელი აგზავნის მოწვევის ბმულს:

Text
https://app.example.com/project/abc123/invite/xyz789
მეორე მომხმარებელს შეუძლია:

შეუერთდეს ანგარიშით;
შეუერთდეს სტუმრის რეჟიმში;
მიიღოს როლი:
Owner;
Editor;
Viewer;
AI Manager.
3.3. ერთდროული მუშაობა
ორივე მომხმარებელი ხედავს:

ერთსა და იმავე სცენას;
ობიექტების გადაადგილებას;
კოდის ცვლილებებს;
AI ჩათს;
მიმდინარე პროექტის მდგომარეობას;
მეორე მომხმარებლის კურსორსა და მოქმედებებს.
მაგალითად:

პირველი მომხმარებელი ამატებს მოთამაშეს;
მეორე მომხმარებელი ცვლის ფონის ფერს;
AI ამატებს მტრის მოძრაობის ლოგიკას;
ცვლილებები ორივეს ეკრანზე მყისიერად აისახება.
4. სისტემის ძირითადი მოდულები
4.1. Authentication Module
მომხმარებლის ავტორიზაცია:

Email/password;
Google login;
GitHub login;
Guest session;
Two-factor authentication — შემდგომ ეტაპზე.
მომხმარებლის მონაცემები:

TypeScript
type User = {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  createdAt: Date;
};
4.2. Project Management Module
პროექტის ფუნქციები:

პროექტის შექმნა;
სახელის შეცვლა;
დუბლირება;
წაშლა;
ექსპორტი;
იმპორტი;
ვერსიების ისტორია;
ავტომატური შენახვა;
collaborators-ის მართვა.
TypeScript
type Project = {
  id: string;
  ownerId: string;
  name: string;
  description?: string;
  type: "platformer" | "topdown" | "puzzle" | "rpg" | "custom";
  width: number;
  height: number;
  currentVersion: number;
  createdAt: Date;
  updatedAt: Date;
};
4.3. 2D Scene Editor
რედაქტორი უნდა შეიცავდეს შემდეგ ზონებს:

მარცხენა პანელი
Assets;
Scenes;
Objects;
Components;
Scripts;
Templates.
ცენტრალური სივრცე
Scene canvas;
Grid;
Zoom;
Pan;
Selection;
Multi-selection;
Snap-to-grid;
Camera preview.
მარჯვენა პანელი
Object properties;
Position;
Rotation;
Scale;
Width/height;
Physics;
Collision;
Sprite;
Animation;
Events;
Custom variables.
ქვედა პანელი
Console;
Errors;
AI activity;
Timeline;
Logs;
Multiplayer activity.
5. 2D ობიექტების სისტემა
ყველა ობიექტი უნდა იყოს Entity/Component ტიპის სტრუქტურით.

5.1. ობიექტის მაგალითი
TypeScript
type SceneObject = {
  id: string;
  name: string;
  type: "sprite" | "text" | "shape" | "group" | "tilemap" | "custom";
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  visible: boolean;
  locked: boolean;
  components: Component[];
};
5.2. კომპონენტები
შესაძლო კომპონენტები:

Transform;
Sprite;
Animation;
Rigidbody;
Collider;
CharacterController;
Health;
Inventory;
Camera;
Audio;
Particle;
Script;
Interaction;
AI Behavior.
TypeScript
type Component = {
  id: string;
  type: string;
  enabled: boolean;
  properties: Record<string, unknown>;
};
5.3. მაგალითი
Player ობიექტი:

JSON
{
  "name": "Player",
  "type": "sprite",
  "components": [
    {
      "type": "Transform",
      "properties": {
        "x": 100,
        "y": 300
      }
    },
    {
      "type": "Sprite",
      "properties": {
        "asset": "player.png"
      }
    },
    {
      "type": "Rigidbody",
      "properties": {
        "gravity": 900
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
        "file": "player-controller.ts"
      }
    }
  ]
}
6. AI ასისტენტი
AI უნდა იყოს პროექტის მთავარი ფუნქცია და არა მხოლოდ ჩათის ფანჯარა.

6.1. AI-ის ძირითადი შესაძლებლობები
ტექსტიდან სცენის შექმნა
Text
შექმენი მწვანე ტყის დონე, სადაც მარცხნივ არის მოთამაშე,
შუაში სამი პლატფორმა და მარჯვნივ დიდი მტერი.
AI-მ უნდა შექმნას:

ფონი;
პლატფორმები;
მოთამაშე;
მტერი;
კოლაიდერები;
კამერა;
საწყისი ლოგიკა.
კოდის გენერირება
Text
დაამატე ორმაგი ნახტომი მოთამაშეს.
ობიექტის მოდიფიცირება
Text
ეს მტერი გადაადგილდეს მარცხნიდან მარჯვნივ
და პლატფორმის კიდეზე შემობრუნდეს.
დიზაინის შეცვლა
Text
ფონი გახადე ღამის ლურჯი და დაამატე მოძრავი ვარსკვლავები.
შეცდომების გასწორება
Text
მოთამაშე იატაკში ვარდება. იპოვე და გაასწორე პრობლემა.
ახალი ფუნქციის დამატება
Text
დაამატე მონეტების შეგროვება, ქულების სისტემა და HUD.
6.2. AI-ის მუშაობის პრინციპი
AI-მ პირდაპირ არ უნდა შეცვალოს მონაცემთა ბაზა. რეკომენდებულია Action-based architecture.

AI პასუხის ნაცვლად აგენერირებს ოპერაციებს:

JSON
{
  "actions": [
    {
      "type": "CREATE_OBJECT",
      "payload": {
        "name": "Enemy",
        "objectType": "sprite",
        "x": 600,
        "y": 350
      }
    },
    {
      "type": "ADD_COMPONENT",
      "payload": {
        "objectId": "enemy-123",
        "componentType": "PatrolAI",
        "properties": {
          "speed": 100,
          "range": 300
        }
      }
    }
  ]
}
ეს მიდგომა უზრუნველყოფს:

ცვლილებების გაუქმებას;
ცვლილებების გადახედვას;
უსაფრთხოებას;
ვერსიების შენახვას;
რეალურ დროში სინქრონიზაციას;
AI-ის მოქმედებების კონტროლს.
6.3. AI ცვლილებების დადასტურება
დიდი ცვლილებებისას მომხმარებელმა უნდა დაადასტუროს:

Text
AI wants to:
- Create 12 objects
- Add 3 scripts
- Modify player-controller.ts
- Change physics settings

[Cancel] [Review changes] [Apply]
მცირე ცვლილებები შეიძლება ავტომატურად შესრულდეს, თუ მომხმარებელმა ჩართო Auto-apply რეჟიმი.

7. ორი მომხმარებლის ერთდროული მუშაობა
7.1. Collaboration-ის მოთხოვნები
სისტემამ უნდა უზრუნველყოს:

რეალურ დროში სინქრონიზაცია;
კონფლიქტების მართვა;
მომხმარებლების presence;
cursor sharing;
selection sharing;
activity feed;
ცვლილებების ისტორია;
undo/redo თითოეული ოპერაციისთვის.
7.2. რეკომენდებული ტექნოლოგია
სინქრონიზაციისთვის შესაძლებელია:

WebSocket;
Socket.IO;
Yjs;
Liveblocks;
Automerge;
CRDT;
Operational Transform.
რეკომენდებული მიდგომა:

Text
Frontend Editor
      |
WebSocket / CRDT Layer
      |
Collaboration Server
      |
Project State Store
7.3. ოპერაციების ტიპები
TypeScript
type CollaborationOperation =
  | {
      type: "CREATE_OBJECT";
      object: SceneObject;
    }
  | {
      type: "UPDATE_OBJECT";
      objectId: string;
      changes: Partial<SceneObject>;
    }
  | {
      type: "DELETE_OBJECT";
      objectId: string;
    }
  | {
      type: "UPDATE_SCRIPT";
      fileId: string;
      content: string;
    }
  | {
      type: "CHAT_MESSAGE";
      message: string;
    };
7.4. კონფლიქტების მართვა
მაგალითი:

User A ცვლის Player-ის პოზიციას;
User B ცვლის Player-ის sprite-ს.
ორივე ცვლილება უნდა გაერთიანდეს.

თუ ორივე მომხმარებელი ცვლის ერთსა და იმავე property-ს, მაგალითად x პოზიციას, სისტემა იყენებს:

operation timestamp-ს;
version number-ს;
მომხმარებლის მიერ არჩეულ merge-ს;
ხელით დადასტურებას კონფლიქტისას.
8. AI Chat-ის საერთო სივრცე
AI Chat უნდა იყოს პროექტთან დაკავშირებული და ორივე მომხმარებლისთვის ხილული.

8.1. ჩათის მონაცემთა სტრუქტურა
TypeScript
type AIMessage = {
  id: string;
  projectId: string;
  userId?: string;
  role: "user" | "assistant" | "system";
  content: string;
  actions?: AIAction[];
  createdAt: Date;
};
8.2. AI-მ უნდა იცოდეს
მიმდინარე სცენა;
არჩეული ობიექტი;
პროექტის ტიპი;
არსებული სკრიპტები;
asset-ები;
შეცდომები;
ორივე მომხმარებლის ბოლო ცვლილებები;
მიმდინარე ვერსია.
AI-სთვის context-ის მაგალითი:

JSON
{
  "project": {
    "name": "Space Adventure",
    "type": "platformer"
  },
  "activeScene": "Level1",
  "selectedObject": "Player",
  "objects": 32,
  "scripts": [
    "player-controller.ts",
    "enemy-ai.ts"
  ],
  "errors": [
    "Player collider missing"
  ]
}
9. Backend არქიტექტურა
9.1. სერვისები
Text
Client Applications
        |
     API Gateway
        |
--------------------------------
| Auth Service                 |
| Project Service              |
| Collaboration Service       |
| AI Service                  |
| Asset Service                |
| Build/Preview Service       |
| Export Service               |
--------------------------------
        |
-------------------------------
| PostgreSQL                  |
| Redis                       |
| Object Storage              |
| Vector Database             |
-------------------------------
9.2. რეკომენდებული ტექნოლოგიები
Frontend
React;
TypeScript;
Vite ან Next.js;
Zustand ან Redux Toolkit;
PixiJS ან Phaser;
Monaco Editor;
Tailwind CSS;
WebSocket client;
Yjs ან Liveblocks.
Backend
Node.js;
NestJS ან Fastify;
TypeScript;
WebSocket Gateway;
PostgreSQL;
Prisma;
Redis;
S3-compatible storage;
Queue system — BullMQ.
AI Layer
LLM API;
tool/function calling;
structured JSON output;
embedding model;
vector database;
prompt/version management;
safety validation.
Rendering
შესაძლო ვარიანტები:

PixiJS — სწრაფი 2D rendering;
Phaser — 2D თამაშებისთვის;
Konva.js — canvas-based editor;
React Flow — ვიზუალური ლოგიკისთვის.
რეკომენდაცია:

Text
Editor Rendering: PixiJS ან Konva.js
Game Runtime: Phaser ან custom runtime
Code Editor: Monaco Editor
10. მონაცემთა ბაზის მოდელი
10.1. Users
SQL
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
10.2. Projects
SQL
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
10.3. Project Members
SQL
CREATE TABLE project_members (
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  role VARCHAR(30) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY(project_id, user_id)
);
10.4. Scenes
SQL
CREATE TABLE scenes (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  name VARCHAR(255) NOT NULL,
  scene_data JSONB NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
10.5. Scripts
SQL
CREATE TABLE scripts (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  path VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_by UUID REFERENCES users(id),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
10.6. AI Conversations
SQL
CREATE TABLE ai_messages (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  role VARCHAR(20) NOT NULL,
  content TEXT NOT NULL,
  actions JSONB,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
11. API დიზაინი
11.1. Project API
HTTP
POST /api/projects
GET /api/projects/:projectId
PATCH /api/projects/:projectId
DELETE /api/projects/:projectId
11.2. Collaboration API
HTTP
POST /api/projects/:projectId/invitations
GET /api/projects/:projectId/members
DELETE /api/projects/:projectId/members/:userId
11.3. AI API
HTTP
POST /api/projects/:projectId/ai/chat
POST /api/projects/:projectId/ai/execute
GET /api/projects/:projectId/ai/history
AI მოთხოვნის მაგალითი
JSON
{
  "message": "დაამატე მტერი, რომელიც მოთამაშეს უახლოვდება",
  "context": {
    "sceneId": "scene-123",
    "selectedObjectId": "player-123"
  },
  "autoApply": false
}
AI პასუხი
JSON
{
  "message": "შევქმენი მტრის ობიექტი და დავამატე დევნის ლოგიკა.",
  "actions": [
    {
      "type": "CREATE_OBJECT",
      "payload": {}
    },
    {
      "type": "CREATE_SCRIPT",
      "payload": {}
    }
  ],
  "requiresApproval": true
}
11.4. WebSocket Events
Text
project:join
project:leave
project:operation
project:cursor
project:selection
project:presence
project:ai:started
project:ai:completed
project:error
მაგალითი:

JSON
{
  "event": "project:operation",
  "projectId": "project-123",
  "userId": "user-456",
  "operation": {
    "type": "UPDATE_OBJECT",
    "objectId": "enemy-123",
    "changes": {
      "x": 540
    }
  }
}
12. Preview და გაშვების სისტემა
მომხმარებელს უნდა შეეძლოს პროექტის გაშვება პირდაპირ ბრაუზერში.

12.1. Run რეჟიმები
Play current scene;
Play from beginning;
Debug mode;
Multiplayer preview;
Mobile preview;
Fullscreen preview.
12.2. Preview pipeline
Text
Project State
     |
Validation
     |
Script Compilation
     |
Asset Loading
     |
Runtime Initialization
     |
Browser Preview
12.3. შეცდომების ჩვენება
Text
Error: PlayerController.ts:24
Cannot read property "velocity" of undefined

[Ask AI to fix]
[Open file]
[Ignore]
AI-ს შეუძლია შეცდომის ავტომატურად გასწორება:

Text
იპოვე პრობლემა PlayerController.ts-ში და გაასწორე.
13. Asset სისტემა
მომხმარებელს უნდა შეეძლოს:

PNG/JPG/WebP ატვირთვა;
sprite sheet-ის გამოყენება;
აუდიოს ატვირთვა;
ფონების დამატება;
tilemap-ის შექმნა;
AI-ით დროებითი asset-ის გენერირება;
asset-ის ჩანაცვლება;
asset-ის ვერსიების შენახვა.
Asset მონაცემთა სტრუქტურა
TypeScript
type Asset = {
  id: string;
  projectId: string;
  name: string;
  type: "image" | "audio" | "font" | "tileset" | "animation";
  url: string;
  metadata: {
    width?: number;
    height?: number;
    duration?: number;
  };
};
14. უსაფრთხოება
AI-ის მიერ გენერირებული კოდი უნდა გაიშვას იზოლირებულ გარემოში.

აუცილებელია:

sandbox execution;
CPU და memory limits;
timeout;
file system isolation;
network access-ის შეზღუდვა;
მავნე კოდის შემოწმება;
მომხმარებლის უფლებების კონტროლი;
პროექტზე წვდომის შემოწმება ყველა API მოთხოვნაზე;
rate limiting;
audit log.
არ არის რეკომენდებული AI-სთვის სრული სერვერული წვდომის მიცემა.

AI-მ უნდა იმუშაოს მხოლოდ დაშვებულ ოპერაციებზე:

Text
CREATE_OBJECT
UPDATE_OBJECT
DELETE_OBJECT
CREATE_SCRIPT
UPDATE_SCRIPT
ADD_ASSET
UPDATE_PROJECT_SETTINGS
აკრძალული ოპერაციები:

Text
EXECUTE_SYSTEM_COMMAND
READ_SERVER_FILES
ACCESS_DATABASE_DIRECTLY
MAKE_UNAUTHORIZED_NETWORK_REQUEST
15. მომხმარებლის როლები
Owner
პროექტის წაშლა;
წევრების მართვა;
AI პარამეტრების მართვა;
ექსპორტი;
billing-ის მართვა.
Editor
სცენის ცვლილება;
კოდის ცვლილება;
AI-ს გამოყენება;
asset-ების დამატება.
Viewer
მხოლოდ ნახვა;
preview-ის გაშვება;
ჩათის კითხვა.
AI Manager
AI ოპერაციების დადასტურება;
AI მოდელის არჩევა;
AI ბიუჯეტის მართვა.
16. MVP ვერსია
პირველ ვერსიაში საკმარისია შემდეგი ფუნქციები:

აუცილებელი ფუნქციები
მომხმარებლის რეგისტრაცია;
პროექტის შექმნა;
2D canvas;
sprite ობიექტები;
ობიექტების გადაადგილება;
scene save/load;
ორი მომხმარებლის ერთდროული შესვლა;
WebSocket სინქრონიზაცია;
AI chat;
AI-ის მიერ ობიექტების შექმნა;
AI-ის მიერ მარტივი კოდის გენერირება;
preview რეჟიმი;
undo/redo;
პროექტის მოწვევის ბმული.
MVP-ში არ არის აუცილებელი
სრული animation editor;
რთული multiplayer gameplay;
asset marketplace;
mobile app;
advanced particle editor;
სრული visual scripting;
საკუთარი AI მოდელის ტრენინგი;
დიდი მასშტაბის publishing სისტემა.
17. განვითარების ეტაპები
Phase 1 — Foundation
Authentication;
Projects;
Database;
Basic dashboard;
Project permissions.
Phase 2 — 2D Editor
Canvas;
Scene system;
Object selection;
Transform tools;
Asset upload;
Save/load.
Phase 3 — Collaboration
WebSocket;
Presence;
Real-time operations;
Cursor sharing;
Conflict handling;
Activity feed.
Phase 4 — AI Integration
AI Chat;
Project context;
Structured actions;
Action preview;
Apply/reject changes;
Code generation.
Phase 5 — Runtime
Preview mode;
Physics;
Collision;
Script execution;
Error console;
AI debugging.
Phase 6 — Export
Web export;
Desktop export;
Project download;
JSON/source export;
Shareable preview link.
18. რეკომენდებული პროექტის სტრუქტურა
Text
apps/
  web/
    src/
      components/
      editor/
      collaboration/
      ai/
      projects/
      assets/
      runtime/

  api/
    src/
      auth/
      projects/
      scenes/
      collaboration/
      ai/
      assets/
      runtime/

packages/
  types/
  editor-core/
  game-runtime/
  ai-actions/
  collaboration-protocol/
19. AI-ის სისტემური პრომპტის მაგალითი
Text
You are an AI assistant inside a collaborative 2D application builder.

You can:
- create and modify 2D objects;
- create and modify scripts;
- configure physics and collisions;
- inspect project errors;
- explain changes to users.

You must:
- return valid structured JSON;
- never access server files;
- never execute arbitrary system commands;
- ask for confirmation before destructive changes;
- preserve existing user changes;
- avoid deleting objects unless explicitly requested.

Available actions:
- CREATE_OBJECT
- UPDATE_OBJECT
- DELETE_OBJECT
- CREATE_SCRIPT
- UPDATE_SCRIPT
- ADD_COMPONENT
- REMOVE_COMPONENT
- UPDATE_PROJECT_SETTINGS
- RUN_VALIDATION
20. საბოლოო პროდუქტის ხედვა
საბოლოო ვერსიაში მომხმარებელი შეძლებს დაწეროს:

Text
შექმენი 2D RPG თამაში ტყის სამყაროში.
მოთამაშეს ჰქონდეს ინვენტარი, ჯანმრთელობა და ხმალი.
დაამატე სამი მტერი, ერთი NPC, ქვესტი და ორი ოთახი.
მინდა, რომ მე და ჩემმა მეგობარმა ერთდროულად შევქმნათ ეს თამაში.
AI-მ უნდა:

შექმნას პროექტის სტრუქტურა;
შექმნას სცენები;
დაამატოს ობიექტები;
შექმნას საჭირო სკრიპტები;
დააკავშიროს ობიექტები;
გაუშვას ვალიდაცია;
აჩვენოს შეცვლილი ფაილები;
მისცეს ორივე მომხმარებელს ცვლილებების დადასტურების შესაძლებლობა.
მთავარი პრინციპია: AI არ უნდა იყოს მხოლოდ ჩათბოტი — ის უნდა იყოს პროექტის რეალური თანაშემქმნელი, რომელსაც შეუძლია 2D სცენის, კოდის, ლოგიკისა და აპლიკაციის სტრუქტურის მართვა, თუმცა ყველა მოქმედება უნდა ხდებოდეს უსაფრთხო, შემოწმებადი და გაუქმებადი ოპერაციების საშუალებით.

დესტკოპ აპპ მინდა იყოს
გასაგებია — პლატფორმა უნდა იყოს Desktop აპლიკაცია, არა მხოლოდ ბრაუზერზე დაფუძნებული სისტემა.

AI 2D Game Tool — Desktop ვერსია
1. აპლიკაციის ფორმატი
აპლიკაცია უნდა მუშაობდეს:

Windows-ზე;
macOS-ზე;
Linux-ზე;
ინტერნეტის გარეშე — შეზღუდული ფუნქციებით;
ინტერნეტით — AI და ერთობლივი მუშაობის სრული ფუნქციებით.
მომხმარებელი აპლიკაციას ჩამოტვირთავს და დააინსტალირებს კომპიუტერში.

2. რეკომენდებული ტექნოლოგიური არქიტექტურა
ვარიანტი A — Tauri
Text
Desktop UI: React + TypeScript
Desktop Shell: Tauri
Game Runtime: Phaser ან PixiJS
Code Editor: Monaco Editor
Local Database: SQLite
Cloud Sync: WebSocket + API
AI: Cloud AI API
Tauri-ის უპირატესობები:

მცირე ზომის ინსტალერი;
ნაკლები RAM-ის გამოყენება;
კარგი წარმადობა;
Windows/macOS/Linux მხარდაჭერა;
Rust-ის უსაფრთხო backend;
ლოკალურ ფაილებთან მუშაობის შესაძლებლობა.
ვარიანტი B — Electron
Text
Desktop UI: React + TypeScript
Desktop Shell: Electron
Game Runtime: Phaser ან PixiJS
Code Editor: Monaco Editor
Local Database: SQLite
Cloud Sync: WebSocket + API
AI: Cloud AI API
Electron-ის უპირატესობები:

უფრო მარტივი განვითარება JavaScript/TypeScript-ით;
დიდი ეკოსისტემა;
მრავალი მზა ბიბლიოთეკა;
კარგი მხარდაჭერა desktop ფუნქციებისთვის.
რეკომენდაცია
პირველი ვერსიისთვის შესაძლებელია:

Text
React + TypeScript + Tauri + Phaser + SQLite
თუ გუნდი უფრო კარგად იცნობს Electron-ს, მაშინ:

Text
React + TypeScript + Electron + Phaser + SQLite
3. Desktop აპლიკაციის სტრუქტურა
Text
AI 2D Tool
│
├── Project Manager
├── 2D Scene Editor
├── Asset Manager
├── Script Editor
├── AI Assistant
├── Collaboration Client
├── Game Preview
├── Build & Export System
└── Local Project Storage
აპლიკაციის გახსნისას მომხმარებელი დაინახავს:

Text
[New Project] [Open Project] [Recent Projects] [Cloud Projects]
4. ლოკალური პროექტები
Desktop ვერსიაში პროექტები ინახება მომხმარებლის კომპიუტერში.

მაგალითი:

Text
MyGame/
├── project.json
├── scenes/
│   ├── main.scene.json
│   └── level-1.scene.json
├── scripts/
│   ├── player-controller.ts
│   └── enemy-ai.ts
├── assets/
│   ├── images/
│   ├── audio/
│   └── fonts/
├── builds/
└── .ai2d/
    ├── history/
    └── metadata.json
პროექტის გახსნის ფორმატი
Text
.ai2d-project
ან ჩვეულებრივი დირექტორია, რომელსაც აპლიკაცია ავტომატურად ცნობს.

5. ლოკალური და ონლაინ რეჟიმები
Offline რეჟიმი
ინტერნეტის გარეშე მომხმარებელს შეეძლება:

პროექტის შექმნა;
სცენების დამუშავება;
ობიექტების დამატება;
კოდის წერა;
თამაშის გაშვება;
local undo/redo;
პროექტის ექსპორტი;
ადრე ჩამოტვირთული AI მოდელის გამოყენება — თუ დაემატება.
Online რეჟიმი
ინტერნეტით დაემატება:

AI ასისტენტი;
პროექტის cloud sync;
მეორე მომხმარებლის მოწვევა;
რეალურ დროში თანამშრომლობა;
პროექტის ვერსიების cloud შენახვა;
ონლაინ backup;
AI-generated assets.
6. ორი ადამიანის ერთდროული მუშაობა
ორივე მომხმარებელი საკუთარ კომპიუტერში გახსნის Desktop აპლიკაციას.

Text
User A Desktop App
        │
        │ WebSocket
        ▼
Collaboration Server
        ▲
        │ WebSocket
User B Desktop App
მომხმარებლები შეძლებენ:

ერთ პროექტში შესვლას;
ერთი სცენის ერთდროულად რედაქტირებას;
ობიექტების დამატებასა და გადაადგილებას;
კოდის შეცვლას;
AI ჩათის გამოყენებას;
ერთმანეთის კურსორისა და მოქმედებების ნახვას;
ცვლილებების მიღებას რეალურ დროში.
პროექტში შესვლის მაგალითი
Text
Project ID: space-adventure
Invite Code: 7F4K-92LM
ან მოწვევის ბმულით:

Text
ai2d://project/space-adventure/invite/7F4K-92LM
7. Desktop UI განლაგება
Text
┌─────────────────────────────────────────────────────────────┐
│ File  Edit  View  Project  AI  Run  Collaborators           │
├───────────────┬───────────────────────────────┬─────────────┤
│               │                               │             │
│ Assets        │                               │ Inspector   │
│ Scenes        │        2D Scene Canvas        │ Properties  │
│ Objects       │                               │ Components  │
│ Scripts       │                               │             │
│               │                               │             │
├───────────────┴───────────────────────────────┴─────────────┤
│ Console │ Errors │ AI Activity │ Collaboration │ Timeline    │
├─────────────────────────────────────────────────────────────┤
│ AI Assistant Chat                                           │
└─────────────────────────────────────────────────────────────┘
8. Desktop სისტემასთან ინტეგრაცია
აპლიკაციას უნდა ჰქონდეს:

ფაილების გახსნა და შენახვა;
drag-and-drop asset-ებისთვის;
პროექტის საქაღალდის არჩევა;
სისტემური clipboard;
keyboard shortcuts;
native notifications;
auto-save;
crash recovery;
აპლიკაციის ავტომატური განახლება;
პროექტის backup;
ფაილების import/export.
მნიშვნელოვანი shortcut-ები
Text
Ctrl/Cmd + S       Save
Ctrl/Cmd + Z       Undo
Ctrl/Cmd + Shift+Z Redo
Ctrl/Cmd + P       Quick command
F5                 Run project
F6                 Debug project
Ctrl/Cmd + K       Open AI assistant
9. AI Desktop აპლიკაციაში
AI შეიძლება მუშაობდეს ორ რეჟიმში:

Cloud AI
Text
Desktop App → AI API → Generated Actions → Local Project
უპირატესობები:

უფრო ძლიერი მოდელები;
სწრაფი პასუხები;
კოდის უკეთესი გენერირება;
ტექსტიდან asset-ების შექმნა.
Local AI
Text
Desktop App → Local AI Model → Generated Actions → Local Project
უპირატესობები:

პროექტის მონაცემები კომპიუტერს არ ტოვებს;
შესაძლებელია offline მუშაობა;
არ არის აუცილებელი ყველა მოთხოვნისთვის API ხარჯი.
MVP-სთვის რეკომენდებულია პირველ ეტაპზე Cloud AI, ხოლო Local AI დაემატოს შემდეგ ვერსიაში.

10. AI-ის უსაფრთხო მოქმედებები Desktop-ზე
AI-ს არ უნდა ჰქონდეს სრული წვდომა კომპიუტერზე.

დაშვებული ოპერაციები:

Text
CREATE_OBJECT
UPDATE_OBJECT
DELETE_OBJECT
CREATE_SCRIPT
UPDATE_SCRIPT
CREATE_SCENE
ADD_COMPONENT
ADD_ASSET
RUN_VALIDATION
BUILD_PROJECT
აკრძალული ოპერაციები:

Text
EXECUTE_ARBITRARY_COMMAND
READ_PRIVATE_FILES
DELETE_SYSTEM_FILES
ACCESS_UNAUTHORIZED_DIRECTORIES
INSTALL_SOFTWARE
AI-ს მიერ შექმნილი ცვლილებები ჯერ გადის ვალიდაციას:

Text
AI generated 5 changes.

[Review changes] [Apply] [Reject]
11. Desktop Build და Export
მომხმარებელს უნდა შეეძლოს პროექტის ექსპორტი შემდეგ ფორმატებში:

Web build;
Windows .exe;
macOS .app;
Linux AppImage;
Source project;
ZIP არქივი.
Build Pipeline
Text
Project Files
     │
Validation
     │
Script Compilation
     │
Asset Processing
     │
Runtime Packaging
     │
Desktop/Web Build
12. Desktop აპლიკაციის ძირითადი მოდულები
Text
desktop/
├── main/
│   ├── window-manager
│   ├── file-system
│   ├── auto-updater
│   ├── project-manager
│   └── security
│
├── renderer/
│   ├── editor
│   ├── scene-canvas
│   ├── asset-panel
│   ├── script-editor
│   ├── ai-chat
│   └── collaboration-ui
│
├── runtime/
│   ├── physics
│   ├── renderer
│   ├── input
│   ├── audio
│   └── scene-loader
│
└── shared/
    ├── project-types
    ├── ai-actions
    ├── collaboration-protocol
    └── validation
13. Desktop MVP
პირველი სამუშაო ვერსია უნდა შეიცავდეს:

Windows/macOS/Linux აპლიკაციას;
ახალი პროექტის შექმნას;
ლოკალური პროექტის შენახვას;
2D canvas-ს;
sprite ობიექტებს;
ობიექტების გადაადგილებას;
scene save/load სისტემას;
code editor-ს;
game preview-ს;
AI Chat-ს;
AI-ის მიერ ობიექტების შექმნას;
ორი მომხმარებლის ონლაინ შესვლას;
WebSocket სინქრონიზაციას;
project invite code-ს;
undo/redo-ს;
Windows build export-ს.
14. განახლებული საბოლოო ხედვა
ეს იქნება ინსტალირებადი Desktop 2D Game/App Builder, სადაც მომხმარებელი შეძლებს:

Text
შექმენი 2D platformer თამაში ტყის თემაზე.
დაამატე მოთამაშე, სამი მტერი, მონეტები და ორი დონე.
მე და ჩემმა მეგობარმა ერთდროულად უნდა შევძლოთ პროექტზე მუშაობა.
AI შექმნის:

სცენებს;
ობიექტებს;
კოდს;
ფიზიკას;
UI-ს;
თამაშის ლოგიკას;
საჭირო ფაილებს.
მეორე მომხმარებელი კი სხვა კომპიუტერიდან შეუერთდება პროექტს და ორივე ერთდროულად იმუშავებს ერთსა და იმავე Desktop აპლიკაციაში.

საბოლოო ტექნოლოგიური რეკომენდაცია:

Text
Desktop Shell: Tauri
Frontend: React + TypeScript
2D Engine: Phaser ან PixiJS
Code Editor: Monaco Editor
Local Storage: SQLite + Project Files
Online Sync: WebSocket + CRDT
Backend: Node.js + PostgreSQL + Redis
AI: Cloud LLM API
Export: Windows, macOS, Linux და Web
მთლიანი დოკუმენტაცია დაწერე თავიდან desktop-ისთვის
AI 2D Desktop Studio
სრული ტექნიკური დოკუმენტაცია
დოკუმენტის ვერსია: 1.0
პლატფორმა: Windows, macOS, Linux
ტიპი: Desktop 2D Game and App Builder
მთავარი შესაძლებლობა: AI-ის დახმარებით 2D თამაშებისა და აპლიკაციების შექმნა ორ ან მეტ მომხმარებელთან ერთად, სხვადასხვა კომპიუტერიდან, რეალურ დროში.

1. პროექტის მოკლე აღწერა
AI 2D Desktop Studio არის კომპიუტერში დასაინსტალირებელი პროგრამა, რომელიც მომხმარებელს საშუალებას აძლევს შექმნას:

2D თამაშები;
2D ინტერაქტიული აპლიკაციები;
საგანმანათლებლო პროგრამები;
ვიზუალური ისტორიები;
პლატფორმერები;
RPG თამაშები;
Top-down თამაშები;
Puzzle თამაშები;
2D ხელსაწყოები და სიმულაციები;
მორგებული 2D აპლიკაციები.
პროგრამაში ჩაშენებული იქნება AI ასისტენტი, რომელსაც მომხმარებელი მისცემს დავალებებს ჩვეულებრივი ტექსტით.

მაგალითი:

„შექმენი 2D პლატფორმერი, სადაც მოთამაშე აგროვებს მონეტებს, ხტება პლატფორმებზე და ებრძვის მტრებს.“

AI-მ უნდა შეძლოს:

პროექტის სტრუქტურის შექმნა;
სცენების შექმნა;
ობიექტების დამატება;
კოდის გენერირება;
ფიზიკისა და კოლაიდერების დაყენება;
UI-ის შექმნა;
შეცდომების აღმოჩენა;
შეცდომების გამოსწორება;
თამაშის გაშვება;
პროექტის ექსპორტი.
პროექტზე ერთდროულად უნდა შეძლოს მუშაობა მინიმუმ ორმა მომხმარებელმა, სხვადასხვა კომპიუტერიდან.

2. ძირითადი მიზნები
2.1. მთავარი მიზანი
შეიქმნას Desktop აპლიკაცია, რომელიც გააერთიანებს:

2D Game Engine-ს;
Visual Scene Editor-ს;
Code Editor-ს;
AI ასისტენტს;
Collaboration სისტემას;
Build და Export სისტემას.
2.2. მთავარი პრინციპები
სისტემა უნდა იყოს:

მარტივი დამწყები მომხმარებლისთვის;
საკმარისად ძლიერი პროფესიონალისთვის;
AI-ზე ორიენტირებული;
მრავალმომხმარებლიანი;
უსაფრთხო;
გაფართოებადი;
Windows/macOS/Linux-ზე ხელმისაწვდომი;
ნაწილობრივ გამოსაყენებელი ინტერნეტის გარეშე.
3. სამიზნე მომხმარებლები
დამწყები მომხმარებელი
არ იცის პროგრამირება და ქმნის პროექტებს AI-ის დახმარებით.

დიზაინერი
ქმნის სცენებს, პერსონაჟებს, ინტერფეისებსა და ვიზუალურ სტილს.

პროგრამისტი
წერს და ამუშავებს TypeScript/JavaScript კოდს.

პატარა გუნდი
ორი ან მეტი ადამიანი ერთად მუშაობს ერთ პროექტზე.

მასწავლებელი და მოსწავლე
ერთად ქმნიან სასწავლო ან თამაშის პროექტს.

ინდი დეველოპერი
ქმნის სრულ 2D თამაშს და შემდეგ ახდენს მის ექსპორტს.

4. Desktop აპლიკაციის ძირითადი შესაძლებლობები
აპლიკაციაში მომხმარებელს უნდა შეეძლოს:

ახალი პროექტის შექმნა;
არსებული პროექტის გახსნა;
პროექტის ლოკალურად შენახვა;
პროექტის cloud-ში სინქრონიზაცია;
2D სცენის შექმნა;
ობიექტების დამატება;
ობიექტების გადაადგილება;
sprite-ების გამოყენება;
ტექსტის დამატება;
ღილაკებისა და UI ელემენტების შექმნა;
ფიზიკის დამატება;
კოლაიდერების შექმნა;
ანიმაციების დამატება;
აუდიოს გამოყენება;
სკრიპტების შექმნა;
AI-ის გამოყენება;
პროექტის გაშვება;
შეცდომების შემოწმება;
სხვა მომხმარებლის მოწვევა;
რეალურ დროში თანამშრომლობა;
პროექტის build და export.
5. სისტემის არქიტექტურა
5.1. მაღალი დონის არქიტექტურა
Text
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
6. რეკომენდებული ტექნოლოგიები
6.1. Desktop Framework
რეკომენდებულია Tauri.

Text
Desktop Shell: Tauri
Desktop Backend: Rust
Frontend: React + TypeScript
Tauri-ის უპირატესობები
მცირე ზომის აპლიკაცია;
დაბალი RAM-ის გამოყენება;
სწრაფი გაშვება;
Windows/macOS/Linux მხარდაჭერა;
უსაფრთხო ფაილურ სისტემასთან წვდომა;
კარგი წარმადობა.
ალტერნატივაა Electron, თუმცა Electron-ის აპლიკაციები ხშირად უფრო დიდია და მეტ მეხსიერებას იყენებს.

6.2. Frontend
Text
React
TypeScript
Vite
Zustand ან Redux Toolkit
Tailwind CSS
Monaco Editor
6.3. 2D Rendering
შესაძლო ტექნოლოგიები:

Phaser;
PixiJS;
Konva.js;
custom Canvas/WebGL renderer.
რეკომენდაცია:

Text
Scene Editor: PixiJS ან Konva.js
Game Runtime: Phaser
6.4. Backend
Text
Node.js
NestJS ან Fastify
PostgreSQL
Prisma
Redis
WebSocket
BullMQ
6.5. AI
Text
LLM API
Structured JSON Output
Function Calling
Project Context
Code Validation
AI Action System
7. აპლიკაციის ფანჯრის სტრუქტურა
Text
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
8. მთავარი მოდულები
8.1. Project Manager
პროექტის მართვის ფუნქციები:

ახალი პროექტის შექმნა;
პროექტის გახსნა;
პროექტის დახურვა;
ბოლო პროექტების სია;
პროექტის დუბლირება;
პროექტის წაშლა;
პროექტის არქივირება;
პროექტის იმპორტი;
პროექტის ექსპორტი;
cloud sync-ის ჩართვა.
8.2. Scene Editor
Scene Editor არის ძირითადი სამუშაო სივრცე.

ფუნქციები:

ობიექტების დამატება;
drag-and-drop;
გადაადგილება;
ზომის შეცვლა;
rotation;
layer-ების მართვა;
grid;
snap-to-grid;
zoom;
camera view;
multi-select;
grouping;
locking;
visibility;
scene hierarchy.
8.3. Asset Manager
Asset Manager მართავს პროექტის ფაილებს.

მხარდაჭერილი ტიპები:

PNG;
JPG;
WebP;
SVG;
GIF;
MP3;
WAV;
OGG;
TTF;
OTF;
JSON;
sprite sheet;
tilemap.
ფუნქციები:

ფაილის ატვირთვა;
drag-and-drop;
preview;
rename;
folder-ების შექმნა;
asset-ის ჩანაცვლება;
asset-ის წაშლა;
asset-ის გამოყენების ადგილების ნახვა.
8.4. Script Editor
კოდის რედაქტორი უნდა დაფუძნდეს Monaco Editor-ზე.

მხარდაჭერილი ენა:

Text
TypeScript
JavaScript
სკრიპტების მაგალითები:

Text
player-controller.ts
enemy-ai.ts
coin.ts
game-manager.ts
ui-manager.ts
dialogue-system.ts
ფუნქციები:

syntax highlighting;
autocomplete;
error highlighting;
file search;
code formatting;
AI code generation;
AI code explanation;
code diff;
version history;
safe execution.
8.5. Game Runtime
Game Runtime გამოიყენება პროექტის გაშვებისთვის.

რეჟიმები:

Run current scene;
Run full project;
Debug mode;
Pause;
Restart;
Step-by-step;
Show colliders;
Show FPS;
Show object IDs;
Show physics data.
კლავიატურის მალსახმობები:

Text
F5          Run
F6          Debug
F8          Stop
F9          Restart
9. 2D ობიექტების სისტემა
ყველა ობიექტი უნდა შედგებოდეს Entity-სა და Component-ებისგან.

9.1. Scene Object
TypeScript
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
9.2. ობიექტის ტიპები
Text
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
9.3. კომპონენტები
Text
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
9.4. მაგალითი
JSON
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
10. პროექტის ფაილების სტრუქტურა
Text
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
│
├── backups/
│
└── .ai2d/
    ├── history/
    ├── cache/
    └── collaboration.json
პროექტის ფაილი
JSON
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
11. ლოკალური შენახვა
Desktop აპლიკაციამ პროექტი უნდა შეინახოს მომხმარებლის კომპიუტერში.

შენახვის რეჟიმები
Manual Save
მომხმარებელი თავად ინახავს პროექტს.

Text
Ctrl/Cmd + S
Auto Save
სისტემა ავტომატურად ინახავს ცვლილებებს ყოველ რამდენიმე წამში.

Crash Recovery
თუ აპლიკაცია მოულოდნელად დაიხურა, შემდეგ გახსნაზე მომხმარებელს ეჩვენება:

Text
A recovered version of this project is available.

[Open recovered version] [Ignore]
12. AI ასისტენტი
AI ასისტენტი უნდა იყოს ინტეგრირებული მთელ აპლიკაციაში.

მომხმარებელს უნდა შეეძლოს AI-სთან საუბარი:

ჩათის ფანჯრიდან;
არჩეულ ობიექტზე მარჯვენა ღილაკით;
კოდის რედაქტორიდან;
შეცდომის შეტყობინებიდან;
სცენის კონტექსტური მენიუდან;
კლავიატურის shortcut-ით.
13. AI-ის ფუნქციები
13.1. პროექტის შექმნა ტექსტიდან
მომხმარებელი წერს:

„შექმენი 2D პლატფორმერი ტყის თემაზე.“

AI ქმნის:

მთავარ სცენას;
მოთამაშეს;
პლატფორმებს;
ფონს;
კამერას;
ფიზიკას;
საწყის კონტროლერს;
მტრის ობიექტს;
UI-ს.
13.2. ობიექტის შექმნა
„დაამატე მოთამაშე ეკრანის მარცხენა მხარეს.“

13.3. ფუნქციის დამატება
„მოთამაშეს დაუმატე ორმაგი ნახტომი.“

13.4. დიზაინის შეცვლა
„ფონი გახადე ღამის ფერი და დაამატე მოძრავი ვარსკვლავები.“

13.5. UI-ის შექმნა
„შექმენი HUD, სადაც გამოჩნდება სიცოცხლე, მონეტები და ქულა.“

13.6. შეცდომის გამოსწორება
„მოთამაშე იატაკში ვარდება. გამოიკვლიე პრობლემა და გაასწორე.“

13.7. კოდის ახსნა
„ამიხსენი, როგორ მუშაობს enemy-ai.ts.“

13.8. ოპტიმიზაცია
„იპოვე პროექტში ნელი კოდი და გააუმჯობესე წარმადობა.“

14. AI Action System
AI-ს არ უნდა ჰქონდეს პროექტის პირდაპირი და შეუზღუდავი მოდიფიცირების უფლება.

AI პასუხობს სტრუქტურირებული მოქმედებებით.

JSON
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
დაშვებული მოქმედებები
Text
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
აკრძალული მოქმედებები
Text
EXECUTE_SYSTEM_COMMAND
READ_PRIVATE_FILES
DELETE_USER_FILES
INSTALL_SOFTWARE
ACCESS_UNAUTHORIZED_PROJECTS
DIRECT_DATABASE_ACCESS
15. AI ცვლილებების დადასტურება
მნიშვნელოვანი ცვლილებების წინ უნდა გამოჩნდეს ცვლილებების მიმოხილვა.

Text
AI wants to make the following changes:

- Create 8 objects
- Add 2 scripts
- Modify player-controller.ts
- Change gravity settings
- Add HUD interface

[Review] [Apply] [Reject]
მომხმარებელს უნდა შეეძლოს:

თითოეული ცვლილების ნახვა;
კოდის diff-ის ნახვა;
კონკრეტული ცვლილების უარყოფა;
ყველა ცვლილების მიღება;
ცვლილებების გაუქმება.
16. AI Context
AI-ს უნდა მიეწოდოს მხოლოდ საჭირო პროექტის კონტექსტი.

JSON
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
17. Collaboration სისტემა
17.1. მიზანი
ორი ან მეტი მომხმარებელი უნდა შევიდეს ერთ პროექტში სხვადასხვა კომპიუტერიდან და იმუშაოს ერთდროულად.

17.2. მომხმარებლების კავშირი
Text
User A Desktop
       │
       ├── Secure WebSocket
       │
Collaboration Server
       │
       └── Secure WebSocket
User B Desktop
17.3. თანამშრომლობის ფუნქციები
პროექტში მოწვევა;
მომხმარებლების სიის ნახვა;
online/offline სტატუსი;
მომხმარებლის cursor;
არჩეული ობიექტის გაზიარება;
ცვლილებების რეალურ დროში მიღება;
AI ჩათის საერთო ისტორია;
მოქმედებების ისტორია;
პროექტის version history;
undo/redo;
კონფლიქტების მართვა.
18. პროექტში მომხმარებლის მოწვევა
პროექტის მფლობელი აგზავნის მოწვევის ბმულს ან კოდს.

Text
Invite Code: F7K2-91LM
ან:

Text
ai2dstudio://project/abc123/invite/F7K291LM
მოწვევის მიღების შემდეგ მეორე მომხმარებელი:

ხსნის Desktop აპლიკაციას;
შედის ანგარიშში;
აჭერს Join Project;
უთითებს მოწვევის კოდს;
იღებს პროექტის ლოკალურ ასლს;
უერთდება რეალურ დროში სინქრონიზაციას.
19. Collaboration ოპერაციები
ყველა ცვლილება ინახება ოპერაციის სახით.

TypeScript
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
20. კონფლიქტების მართვა
მაგალითი:

მომხმარებელი A ცვლის მოთამაშის sprite-ს;
მომხმარებელი B ცვლის მოთამაშის პოზიციას.
ეს ცვლილებები ავტომატურად ერთიანდება.

თუ ორივე ცვლის ერთსა და იმავე მნიშვნელობას, მაგალითად x პოზიციას, სისტემა აჩვენებს:

Text
Conflict detected in Player.x

User A: 300
User B: 450

[Use A] [Use B] [Merge manually]
კოდის ფაილებისთვის უნდა არსებობდეს diff რეჟიმი:

Diff
<<<<<<< User A
speed = 200;
=======
speed = 250;
>>>>>>> User B
21. მომხმარებლის როლები
Owner
პროექტის შექმნა;
წევრების მართვა;
პროექტის წაშლა;
AI ხარჯების მართვა;
export;
project settings.
Editor
სცენის რედაქტირება;
კოდის შეცვლა;
asset-ების დამატება;
AI-ის გამოყენება;
preview-ის გაშვება.
Viewer
პროექტის ნახვა;
preview-ის გაშვება;
კომენტარების დატოვება.
AI Manager
AI ცვლილებების დადასტურება;
AI მოდელის არჩევა;
AI-ის გამოყენების ლიმიტების მართვა.
22. WebSocket მოვლენები
Text
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
მაგალითი:

JSON
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
23. მონაცემთა ბაზა
23.1. Users
SQL
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
23.2. Projects
SQL
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
23.3. Project Members
SQL
CREATE TABLE project_members (
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  role VARCHAR(30) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY(project_id, user_id)
);
23.4. Scenes
SQL
CREATE TABLE scenes (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  name VARCHAR(255) NOT NULL,
  scene_data JSONB NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
23.5. Scripts
SQL
CREATE TABLE scripts (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  path VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_by UUID REFERENCES users(id),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
23.6. AI Messages
SQL
CREATE TABLE ai_messages (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  role VARCHAR(20) NOT NULL,
  content TEXT NOT NULL,
  actions JSONB,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
23.7. Project Operations
SQL
CREATE TABLE project_operations (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  operation_type VARCHAR(100) NOT NULL,
  payload JSONB NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
24. API
Authentication
HTTP
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
Projects
HTTP
POST /api/projects
GET /api/projects
GET /api/projects/:projectId
PATCH /api/projects/:projectId
DELETE /api/projects/:projectId
Members
HTTP
POST /api/projects/:projectId/invitations
GET /api/projects/:projectId/members
PATCH /api/projects/:projectId/members/:userId
DELETE /api/projects/:projectId/members/:userId
AI
HTTP
POST /api/projects/:projectId/ai/chat
POST /api/projects/:projectId/ai/apply
POST /api/projects/:projectId/ai/validate
GET /api/projects/:projectId/ai/history
Sync
HTTP
GET /api/projects/:projectId/sync
POST /api/projects/:projectId/operations
GET /api/projects/:projectId/versions
25. AI API მოთხოვნა
JSON
{
  "message": "დაამატე მონეტების შეგროვების სისტემა",
  "projectId": "project-001",
  "sceneId": "scene-001",
  "selectedObjectId": "player-001",
  "autoApply": false
}
AI API პასუხი
JSON
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
26. Preview და Debug სისტემა
მომხმარებელმა უნდა შეძლოს პროექტის გაშვება აპლიკაციის შიგნით.

Preview რეჟიმები
Current Scene;
Entire Project;
Debug Mode;
Fullscreen;
Mobile Resolution;
Show Physics;
Show Colliders;
Show FPS;
Show Input Events.
Debug Console
Text
INFO: Scene loaded
INFO: Player initialized
WARN: Enemy has no patrol path
ERROR: Missing asset: coin.png
AI Debugging
მომხმარებელს შეუძლია დააჭიროს:

Text
[Ask AI to fix]
AI მიიღებს:

error message-ს;
შესაბამისი ფაილის კოდს;
სცენის მონაცემებს;
ბოლო ცვლილებებს.
27. Build და Export
მხარდაჭერილი ექსპორტის ფორმატები
Windows .exe;
macOS .app;
Linux AppImage;
Web build;
ZIP project;
Source project.
Build პროცესი
Text
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
Build შეცდომები
Text
Build failed.

Errors:
- Missing script dependency
- Invalid scene object
- Missing asset
- TypeScript compilation error

[Ask AI to fix] [Open errors]
28. უსაფრთხოება
Desktop აპლიკაციამ არ უნდა მისცეს AI-ს შეუზღუდავი წვდომა კომპიუტერზე.

აუცილებელია:

sandbox;
პროექტის დირექტორიის შეზღუდული წვდომა;
სისტემური ფაილების დაცვა;
კოდის ვალიდაცია;
ბრძანებების whitelist;
CPU ლიმიტი;
memory ლიმიტი;
execution timeout;
network access-ის შეზღუდვა;
მომხმარებლის უფლებების შემოწმება;
audit log.
დაშვებული დირექტორიები
Text
Current Project Directory
Application Cache Directory
Application Temporary Directory
აკრძალული დირექტორიები
Text
Operating System Directories
User Password Directories
Private Application Data
Other Project Directories
29. Cloud და Offline რეჟიმები
Offline რეჟიმი
ინტერნეტის გარეშე ხელმისაწვდომი იქნება:

პროექტის შექმნა;
Scene Editor;
Asset Manager;
Script Editor;
Preview;
local save;
local history;
local build.
AI ფუნქციები იმუშავებს მხოლოდ მაშინ, თუ:

ინტერნეტი ხელმისაწვდომია; ან
მომხმარებელს აქვს ადგილობრივი AI მოდელი.
Online რეჟიმი
ონლაინ რეჟიმში ხელმისაწვდომი იქნება:

Cloud AI;
real-time collaboration;
cloud backup;
project sharing;
version synchronization;
remote asset storage;
team management.
30. განახლებები
Desktop აპლიკაციას უნდა ჰქონდეს ავტომატური განახლება.

Text
New version available: 1.2.0

Changes:
- Improved AI code generation
- Added tilemap editor
- Fixed collaboration errors

[Update now] [Later]
განახლება უნდა ხდებოდეს:

უსაფრთხო არხით;
signed package-ით;
rollback შესაძლებლობით;
მომხმარებლის პროექტების დაზიანების გარეშე.
31. ლოგირება და მონიტორინგი
აპლიკაციამ უნდა შეინახოს:

application logs;
build logs;
AI action logs;
collaboration logs;
crash reports;
sync errors;
validation errors.
მომხმარებელს უნდა შეეძლოს ლოგების ნახვა:

Text
Help → Open Logs Folder
32. MVP ვერსია
პირველი სამუშაო ვერსია უნდა შეიცავდეს:

Desktop
Windows მხარდაჭერა;
macOS მხარდაჭერა;
Tauri აპლიკაცია;
project manager;
local file storage;
auto-save.
2D Editor
canvas;
sprite-ები;
ტექსტი;
shape-ები;
ობიექტების გადაადგილება;
layers;
inspector;
scenes.
Code
Monaco Editor;
TypeScript;
script files;
basic validation;
error console.
AI
AI chat;
project context;
object creation;
script generation;
code explanation;
error fixing;
action preview;
apply/reject.
Collaboration
ანგარიშები;
project invitation;
ორი მომხმარებლის ერთდროული შესვლა;
WebSocket sync;
presence;
operation history.
Runtime
Run scene;
pause;
restart;
debug console;
basic physics;
basic collision.
Export
Windows build;
project ZIP;
source export.
33. განვითარების ეტაპები
Phase 1 — Desktop Foundation
Tauri setup;
React/TypeScript;
application window;
menus;
local file access;
project creation;
project opening and saving.
Phase 2 — 2D Editor
Canvas;
scene hierarchy;
object system;
inspector;
sprite assets;
scene serialization.
Phase 3 — Runtime
renderer;
input system;
physics;
collision;
scene loading;
preview mode.
Phase 4 — Code Editor
Monaco Editor;
script files;
TypeScript validation;
runtime script loading;
error display.
Phase 5 — AI
AI chat;
project context;
structured actions;
code generation;
action review;
apply/reject;
AI debugging.
Phase 6 — Collaboration
authentication;
project members;
WebSocket;
presence;
operation sync;
conflict resolution;
common AI chat.
Phase 7 — Build and Export
project validation;
asset packaging;
Windows build;
Web build;
ZIP export;
installer generation.
Phase 8 — Advanced Features
animation editor;
tilemap editor;
particle editor;
visual scripting;
local AI;
asset generation;
multiplayer runtime;
plugin system.
34. მომავალი ფუნქციები
მომავალში შეიძლება დაემატოს:

AI-generated sprites;
AI-generated music;
AI-generated sound effects;
AI-generated animations;
visual scripting;
multiplayer game testing;
asset marketplace;
plugin marketplace;
Steam export;
mobile export;
console export;
local AI models;
voice commands;
version branching;
Git integration;
team comments;
task management.
35. საბოლოო მომხმარებლის სცენარი
მომხმარებელი ხსნის Desktop აპლიკაციას და წერს:

„შექმენი 2D RPG თამაში ტყის სამყაროში. მოთამაშეს ჰქონდეს ჯანმრთელობა, ინვენტარი და ხმალი. დაამატე ორი მტერი, ერთი NPC, ქვესტი და ორი ოთახი.“

AI მოქმედებები:

ქმნის ახალ პროექტს;
ქმნის მთავარ მენიუს;
ქმნის პირველ სცენას;
ქმნის ტყის ფონს;
ამატებს მოთამაშეს;
ამატებს ორ მტერს;
ამატებს NPC-ს;
ქმნის ოთახებს;
ქმნის ჯანმრთელობის სისტემას;
ქმნის ინვენტარს;
ქმნის ქვესტის სისტემას;
ამატებს შესაბამის სკრიპტებს;
ამოწმებს შეცდომებს;
აჩვენებს ცვლილებების მიმოხილვას;
ელოდება მომხმარებლის დადასტურებას;
უშვებს თამაშის Preview-ს.
შემდეგ მომხმარებელი აგზავნის მოწვევას მეგობარს. მეგობარი სხვა კომპიუტერიდან შედის პროექტში და ორივე ერთდროულად მუშაობს:

ერთი ცვლის ვიზუალურ სცენას;
მეორე წერს კოდს;
ორივე იყენებს AI-ს;
ცვლილებები მყისიერად სინქრონიზდება.
36. საბოლოო ტექნოლოგიური რეკომენდაცია
Text
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
37. მთავარი პროდუქტის პრინციპი
ეს არ უნდა იყოს მხოლოდ AI ჩათის მქონე 2D რედაქტორი.

ეს უნდა იყოს:

AI-ზე დაფუძნებული Desktop განვითარების გარემო, სადაც AI არის პროექტის თანაშემქმნელი და შეუძლია სცენების, ობიექტების, კოდის, UI-ის, ფიზიკისა და აპლიკაციის სტრუქტურის მართვა.

ყველა AI ცვლილება უნდა იყოს:

სტრუქტურირებული;
შემოწმებადი;
უსაფრთხო;
გაუქმებადი;
ვერსიონირებადი;
მომხმარებლის მიერ კონტროლირებადი.
საბოლოო პროდუქტი უნდა აერთიანებდეს 2D Game Engine-ს, Desktop Editor-ს, Code Editor-ს, AI Agent-სა და Real-Time Collaboration სისტემას ერთ პროგრამაში.

კარგია, readme pdf  ფაილში გადაიტანე ეს ყველაფერ
კი, შემიძლია ეს დოკუმენტაცია გადავიყვანო README.md და README.pdf ფორმატებში.

ამისთვის მომწერე GitHub repository-ის მისამართი ამ ფორმატით:

Text
username/repository
მაგალითად:

Text
Rumpela/ai-2d-desktop-studio
შემდეგ შევქმნი:

Text
README.md
README.pdf
თუ ჯერ repository არ გაქვს, შემიძლია აქვე მოვამზადო სრული README.md ფაილის შიგთავსი, ხოლო PDF-ის შესაქმნელად შეგიძლია გამოიყენო Markdown → PDF კონვერტერი ან მოგვიანებით მომაწოდო repository.

https://github.com/Rumpela/newnew.git

Get data from /repos/Rumpela/newnew

Created agent task in Rumpela/newnew
ვიცდი შენს დადასტურებას, რომ გავაგრძელო Rumpela/newnew რეპოზიტორიაში README.md და README.pdf ფაილების დამატება და Pull Request-ის შექმნა.

Confirm cloud agent session
Please confirm you want Copilot to start a cloud agent session in Rumpela/newnew with title "Add complete Georgian AI 2D Desktop Studio documentation".

 Rumpela accepted the action

Created agent task in Rumpela/newnew and 1 other tool call
დადასტურებას ველოდებით, რათა გაგრძელდეს Rumpela/newnew რეპოზიტორიაში სრული ქართული README.md და რეალური README.pdf ფაილების დამატება და Pull Request-ის შექმნა.

Confirm cloud agent session
Please confirm you want Copilot to start a cloud agent session in Rumpela/newnew with title "Add complete Georgian AI 2D Desktop Studio documentation".

 Rumpela accepted the action

Created agent task in Rumpela/newnew
Cloud coding agent-ის გაშვება ორჯერ ჩავარდა, ამიტომ ამ ეტაპზე რეპოზიტორიაში ფაილები არ დამატებულა და Pull Request-იც არ შექმნილა.

შეცდომა:

Text
Failed to start coding agent for Rumpela/newnew
შემიძლია შემდეგი გზით გავაგრძელო:

პირდაპირ დავამატო სრული ქართული README.md;
დავამატო PDF-ის გენერირების reproducible script;
შევქმნა Pull Request პირდაპირ GitHub-ის ფაილური ინსტრუმენტებით.
შენიშვნა: ამ გარემოში პირდაპირი binary PDF-ის გენერირება/ატვირთვა შეზღუდულია. ამიტომ რეალური README.pdf-ის მისაღებად ყველაზე საიმედო გზა იქნება repository-ში დამატებული build script, მაგალითად:

bash
npm install
npm run docs:pdf
რომელიც README.md-დან შექმნის ქართულად გამართულ README.pdf ფაილს.

1
ვიცდი შენს დადასტურებას, რათა გავაგრძელო README.md ფაილის დამატება Rumpela/newnew რეპოზიტორიაში.

Are you sure?
Please confirm you want Copilot to make this change in the Rumpela/newnew repository on the default branch.

 Rumpela accepted the action
სრული ქართული დოკუმენტაცია დაემატა Rumpela/newnew რეპოზიტორიაში:

README.md-ის ნახვა
Commit: Add complete Georgian AI 2D Desktop Studio documentation
დოკუმენტაციაში შეტანილია:

Desktop არქიტექტურა;
Windows/macOS/Linux მხარდაჭერა;
AI ასისტენტი;
2D Scene Editor;
ობიექტებისა და კომპონენტების სისტემა;
Collaboration ორი ან მეტი მომხმარებლისთვის;
WebSocket/CRDT მოდელი;
API და მონაცემთა ბაზის სტრუქტურა;
Offline/Online რეჟიმები;
Preview, Debug და Export;
უსაფრთხოება;
MVP და განვითარების ეტაპები;
მომავალი ფუნქციები.
README.pdf ამ ეტაპზე არ დამატებულა — დაემატა მხოლოდ ის, რაც აირჩიე: README.md.

https://l.facebook.com/l.php?u=https%3A%2F%2Fopening.hacktoberfest.ge%2Fdeck%2Fhf-cover%3Ffbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgVicmlkETFVZTVROVBVWVN5NTZCQWlic3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtNcTnFrLquYRPxSUzDN02J1Tks9IRiJf9vfLgwehXA5VZBwekheC6u4fMVs_aem_n7y1_zmSzz-EjRr-atEfxw&h=AUBrVAo7T9lPb4eZEv5aWLnxvSdvvWEC2ahUgFpRxMP_yFeGWX8fjk5WLyTQEq8967uK60bKVMCad95njMSAm0pblnW3ycXu6BIkpFRZieXOPzKi7cnSRazB3SNgudY
რამდენად ერგება ამ პრეზენტაციის მოთხოვნებს ეს იდეა?
მოკლე პასუხი: იდეა Hacktoberfest Georgia-სთვის საკმაოდ კარგად ერგება — დაახლოებით 8/10, განსაკუთრებით AI, open-source და collaborative building მიმართულებით. თუმცა ამჟამინდელი კონცეფცია ძალიან ფართოა: სრულფასოვანი 2D Desktop Engine-ის აშენება ერთდღიან ჰაკათონზე რეალისტური არ არის. საჭიროა იდეის გადაყვანა მკაფიო, დემონსტრირებად MVP-ში.

Hacktoberfest Georgia 2026-ის ფორმატი ორიენტირებულია პრაქტიკულ building-ზე, AI/open-source პროექტებზე; მონაწილეებს შეუძლიათ გამოიყენონ ნებისმიერი ტექნოლოგიური სტეკი და გუნდში შეიძლება იყოს მაქსიმუმ 5 წევრი. პროექტის submission-ის ვადა მითითებულია 2026 წლის 18 ოქტომბერს, 12:00-ზე. (hacktoberfest.ge)

რამდენად შეესაბამება იდეა
მოთხოვნა	შესაბამისობა	შეფასება
AI-ის გამოყენება	ძალიან მაღალი	AI ქმნის სცენებს, ობიექტებსა და კოდს
Open-source პოტენციალი	მაღალი	შესაძლებელია engine, action system და runtime-ის გახსნა
საინტერესო ტექნიკური გამოწვევა	ძალიან მაღალი	AI + 2D editor + collaboration
სწრაფი პროტოტიპირება	საშუალო	სრული ვერსია რთულია, MVP — რეალისტური
დემოს შესაძლებლობა	მაღალი	ტექსტიდან თამაშის შექმნა ეფექტური დემოა
მომხმარებლისთვის ღირებულება	მაღალი	ამარტივებს 2D აპებისა და თამაშების შექმნას
hackathon-ის დროში დასრულება	დაბალი სრული კონცეფციისთვის / მაღალი MVP-სთვის	Scope-ის შემცირება აუცილებელია
მთავარი პრობლემა
შენი დოკუმენტაცია აღწერს დიდ პროდუქტს, რომელიც მოიცავს:

სრულ 2D Game Engine-ს;
Desktop აპლიკაციას;
AI Agent-ს;
Script Editor-ს;
Cloud Backend-ს;
WebSocket Collaboration-ს;
CRDT/კონფლიქტების მართვას;
Build/Export სისტემას;
Windows/macOS/Linux მხარდაჭერას.
ეს ძალიან კარგი გრძელვადიანი პროდუქტის ხედვაა, მაგრამ ჰაკათონისთვის ზედმეტად ფართოა.

პრეზენტაციაში არ უნდა წარადგინო იდეა ასე:

„ჩვენ ვაშენებთ სრულფასოვან Unity-ს AI-ით.“

უკეთესი ფორმულირებაა:

„ჩვენ ვქმნით AI-ით მართულ 2D Desktop პროტოტიპერს, სადაც ორი ადამიანი ტექსტური ბრძანებებით ერთად ქმნის playable 2D სცენას.“

ეს ბევრად უფრო მკაფიო, რეალისტური და დემონსტრირებადია.

რა უნდა იყოს ჰაკათონის MVP
აუცილებელი ფუნქციები
Desktop აპლიკაცია;
ერთი 2D Scene Editor;
რამდენიმე ძირითადი ობიექტი:
Player;
Platform;
Enemy;
Coin;
Text;
AI Chat;
ტექსტიდან ობიექტების შექმნა;
ტექსტიდან მარტივი კოდის გენერირება;
სცენის Preview;
ორი მომხმარებლის ერთდროული შესვლა;
ცვლილებების რეალურ დროში სინქრონიზაცია;
პროექტის შენახვა.
დემოს მაგალითი
მომხმარებელი AI-ს წერს:

Text
შექმენი პატარა 2D პლატფორმერი.
დაამატე მოთამაშე მარცხნივ,
სამი პლატფორმა, ორი მონეტა და ერთი მტერი.
მოთამაშეს ჰქონდეს ხტომა და მტერს მოძრაობა მარცხნიდან მარჯვნივ.
შემდეგ:

AI ქმნის სცენას;
მომხმარებელი A ცვლის დიზაინს;
მომხმარებელი B ამატებს gameplay logic-ს;
ორივე ხედავს ცვლილებებს სხვადასხვა კომპიუტერიდან;
თამაში ეშვება Preview რეჟიმში.
ეს იქნება ძლიერი და გასაგები დემო.

რა არ უნდა გააკეთოთ პირველ ეტაპზე
ჰაკათონის MVP-ში არ გირჩევთ ჩასვათ:

სრულფასოვანი Animation Editor;
Tilemap Editor;
რთული Physics Engine;
macOS და Linux build-ები;
Local AI Model;
Asset Marketplace;
სრული CRDT არქიტექტურა;
რთული Version Control;
Multiplayer gameplay;
მობილური და კონსოლური Export;
სრულყოფილი Plugin System.
ესენი დატოვეთ roadmap-ში.

პრეზენტაციისთვის უკეთესი პროექტის პოზიციონირება
პროექტის სახელი
AI 2D CoBuilder

ან:

Forge2D AI

ან:

PixelPilot

ერთი წინადადებით
AI 2D CoBuilder არის Desktop ინსტრუმენტი, რომელიც მომხმარებლებს საშუალებას აძლევს ტექსტური ბრძანებებით შექმნან 2D თამაშები და ერთდროულად იმუშაონ ერთ პროექტზე სხვადასხვა კომპიუტერიდან.

პრობლემა
2D თამაშისა და ინტერაქტიული აპლიკაციის შექმნა მოითხოვს:

პროგრამირებას;
გრაფიკულ დიზაინს;
სცენების აწყობას;
ფიზიკის ცოდნას;
asset-ების მართვას;
გუნდურ კოორდინაციას.
დამწყები მომხმარებლებისთვის ეს პროცესი რთულია, ხოლო პატარა გუნდებისთვის — ნელი.

გადაწყვეტა
AI 2D CoBuilder აერთიანებს:

ვიზუალურ 2D რედაქტორს;
AI ასისტენტს;
კოდის გენერირებას;
რეალურ დროში თანამშრომლობას;
მყისიერ Preview-ს.
მთავარი განსხვავება
ჩვეულებრივი AI ჩათბოტი მხოლოდ კოდს წერს.

შენი პროდუქტი კი:

ხედავს მიმდინარე სცენას;
იცის რომელი ობიექტია არჩეული;
ქმნის რეალურ 2D ობიექტებს;
ცვლის სცენას;
წერს კოდს;
უშვებს პროექტს;
მუშაობს ერთდროულად რამდენიმე მომხმარებელთან.
პრეზენტაციის სავარაუდო სტრუქტურა
Slide 1 — Title
Text
AI 2D CoBuilder
Create 2D games together with AI
Slide 2 — Problem
2D აპლიკაციის შექმნა რთულია;
საჭიროა ბევრი სხვადასხვა უნარი;
AI ხელსაწყოები ხშირად მხოლოდ კოდის დონეზე მუშაობენ;
გუნდური realtime მუშაობა ნაკლებად ხელმისაწვდომია.
Slide 3 — Solution
აჩვენეთ:

Text
Text Prompt → AI Actions → 2D Scene → Playable Preview
Slide 4 — How it works
Text
User A + User B
        ↓
Shared Desktop Project
        ↓
AI Context
        ↓
Scene / Code / Runtime
Slide 5 — Live Demo
დემო უნდა იყოს მაქსიმალურად მოკლე:

ახალი პროექტის შექმნა;
AI prompt-ის შეყვანა;
სცენის ავტომატურად შექმნა;
მეორე მომხმარებლის შემოსვლა;
ერთ-ერთი ობიექტის შეცვლა;
ცვლილების მეორე კომპიუტერში გამოჩენა;
თამაშის გაშვება.
Slide 6 — Technology
Text
Tauri
React
TypeScript
PixiJS ან Phaser
Monaco Editor
WebSocket
PostgreSQL
AI API
Slide 7 — Open-source Value
აქ აუცილებლად უნდა აჩვენოთ, რა იქნება open-source:

AI Action Schema;
2D Scene Format;
Collaboration Protocol;
basic Runtime;
example templates;
documentation;
plugin API.
Slide 8 — Roadmap
Text
MVP → Animation → Tilemaps → Local AI → Plugins → Export
Slide 9 — Impact
ამცირებს 2D განვითარების ბარიერს;
ეხმარება დამწყებ დეველოპერებს;
აჩქარებს პროტოტიპირებას;
აერთიანებს დიზაინერსა და პროგრამისტს;
შესაძლებელია სასწავლო გარემოდ გამოყენება.
Slide 10 — Final Demo / Call to Action
Describe it. Build it. Play it. Together.

ყველაზე ძლიერი მხარეები
1. AI არ არის უბრალოდ ჩათი
AI რეალურად ცვლის პროექტის მდგომარეობას — ქმნის ობიექტებს, სცენებსა და კოდს.

2. კარგი live demo-ს პოტენციალი
ტექსტიდან playable scene-ის მიღება ჟიურისთვის მარტივად აღსაქმელია.

3. Collaboration აშკარა განსხვავებაა
ორი მომხმარებლის ერთდროული მუშაობა სხვადასხვა კომპიუტერიდან იდეას უფრო განსაკუთრებულს ხდის.

4. Open-source გაფართოების შესაძლებლობა
შეიძლება პლატფორმა მომავალში გახდეს open-source 2D development ecosystem.

5. მომხმარებლის პრობლემა რეალურია
ბევრ ადამიანს უნდა პატარა თამაშის ან აპლიკაციის შექმნა, მაგრამ სრული game engine-ის სწავლა რთულია.

მთავარი რისკები
ზედმეტად დიდი Scope
სრული პროდუქტის შექმნა ვერ მოესწრება. საჭიროა მხოლოდ ერთი ძლიერი workflow.

AI-ის არასტაბილური შედეგი
AI-მ შეიძლება შექმნას არასწორი ან არასრული კოდი. ამიტომ საჭიროა:

შეზღუდული Action Schema;
მხოლოდ 4–5 ძირითადი ობიექტი;
წინასწარ მომზადებული template-ები;
action preview;
მარტივი validation.
Collaboration-ის სირთულე
სრული CRDT-ის ნაცვლად MVP-ში შეგიძლიათ გამოიყენოთ:

WebSocket;
operation events;
ერთი ცენტრალური project state;
last-write-wins მიდგომა.
Desktop build-ის დრო
თუ Tauri-ის სრული build რთული აღმოჩნდა, პროტოტიპისთვის შეიძლება გამოიყენოთ:

Electron;
ერთი პლატფორმის build;
ან Desktop wrapper-ში გაშვებული local web app.
საბოლოო შეფასება
იდეა ძალიან კარგად ერგება პრეზენტაციისა და ჰაკათონის ფორმატს, თუ მას წარმოადგენთ არა როგორც სრულფასოვან Unity-ს შემცვლელს, არამედ როგორც:

AI-powered collaborative 2D prototyping tool for desktop.

ჩემი რეკომენდებული შეფასებაა:

იდეის პოტენციალი: 9/10;
AI შესაბამისობა: 9/10;
დემოს ეფექტი: 9/10;
ჰაკათონის დროში სრული განხორციელება: 4/10;
შეზღუდული MVP-ის განხორციელება: 8/10.
ყველაზე სწორი სტრატეგიაა: ერთი სცენა, ერთი playable თამაში, ერთი AI workflow და ორი მომხმარებლის realtime collaboration. Hacktoberfest-ის ოფიციალური აღწერაც ამჟამად ხაზს უსვამს hands-on building-ს, open-source/open-weight AI-სა და პრაქტიკულ პროექტებს, ამიტომ ეს მიმართულება თემატურად შესაბამისია. (hacktoberfest.com)

მაშინ დაამუშავე გეგმა, როგორ შეიძლება ამ პლათფორმის შექმნა
AI 2D CoBuilder-ის შექმნის გეგმა
პლატფორმის შექმნა უმჯობესია დაიწყოს მცირე, დემონსტრირებადი MVP-ით და შემდეგ გაფართოვდეს სრულ Desktop პროდუქტად.

მთავარი პრინციპი:

პირველ ეტაპზე არ უნდა შეიქმნას სრული Unity-ს მსგავსი Engine. უნდა შეიქმნას ერთი ძლიერი workflow:
ტექსტური მოთხოვნა → AI ქმნის 2D სცენას → ორი მომხმარებელი ცვლის სცენას → თამაში ეშვება Preview-ში.

1. პირველი ვერსიის მიზანი
MVP-ის საბოლოო დემო უნდა გამოიყურებოდეს ასე:

მომხმარებელი ხსნის Desktop აპლიკაციას;
ქმნის ახალ 2D პროექტს;
წერს AI-ს:
Text
შექმენი პატარა 2D პლატფორმერი.
დაამატე მოთამაშე, სამი პლატფორმა,
ორი მონეტა და ერთი მტერი.
მოთამაშეს შეეძლოს ხტომა.
AI ქმნის სცენას;
მეორე მომხმარებელი სხვა კომპიუტერიდან უერთდება პროექტს;
ერთი ცვლის ობიექტებს;
მეორე წერს ან ცვლის ლოგიკას;
ცვლილებები ორივე კომპიუტერში ჩნდება;
თამაში ეშვება Preview რეჟიმში.
ეს არის პირველი ვერსიის მთავარი მიზანი.

2. MVP-ის ფარგლები
აუცილებელი ფუნქციები
Desktop აპლიკაცია
Windows მხარდაჭერა;
ახალი პროექტის შექმნა;
პროექტის გახსნა და შენახვა;
ლოკალური ფაილების გამოყენება;
Auto-save;
აპლიკაციის ძირითადი მენიუ.
2D Editor
2D Canvas;
Grid;
Zoom და Pan;
ობიექტების დამატება;
ობიექტების გადაადგილება;
ობიექტის ზომის შეცვლა;
ობიექტის წაშლა;
Scene Hierarchy;
Inspector Panel.
ძირითადი ობიექტები
Player;
Platform;
Enemy;
Coin;
Text;
Background;
Button.
AI
AI Chat;
მიმდინარე სცენის კონტექსტის გაგზავნა;
ობიექტების შექმნა;
ობიექტების განახლება;
მარტივი სკრიპტების გენერირება;
შეცდომების ახსნა;
ცვლილებების დადასტურება ან გაუქმება.
Collaboration
მომხმარებლის რეგისტრაცია;
პროექტის მოწვევა;
მეორე მომხმარებლის შემოსვლა;
WebSocket კავშირი;
ობიექტების ცვლილების სინქრონიზაცია;
მომხმარებლის Online სტატუსი;
საერთო AI Chat.
Runtime
Scene Preview;
მოთამაშის მოძრაობა;
ხტომა;
მარტივი ფიზიკა;
კოლაიდერები;
მონეტების შეგროვება;
მტრის მოძრაობა;
ქულების ჩვენება.
3. რა არ უნდა გაკეთდეს MVP-ში
პირველ ვერსიაში არ უნდა დაემატოს:

სრული Animation Editor;
რთული Tilemap სისტემა;
Multiplayer gameplay;
საკუთარი AI მოდელის შექმნა;
AI-generated 3D ანიმაციები;
Plugin Marketplace;
Steam Export;
Mobile Export;
Linux და macOS build-ები, თუ დრო შეზღუდულია;
რთული CRDT არქიტექტურა;
სრულყოფილი Version Control;
დიდი Asset Marketplace.
ეს ფუნქციები უნდა გადავიდეს Roadmap-ში.

4. ტექნოლოგიური არჩევანი
Desktop
რეკომენდებულია:

Text
Tauri + React + TypeScript
რატომ Tauri
მცირე ზომის აპლიკაცია;
დაბალი RAM-ის გამოყენება;
Windows/macOS/Linux მხარდაჭერა;
Desktop ფაილებთან წვდომა;
React UI-ის გამოყენების შესაძლებლობა.
თუ გუნდს Rust-ის გამოცდილება არ აქვს, MVP-სთვის შეიძლება Electron-ის გამოყენება, მაგრამ გრძელვადიანად Tauri უფრო მსუბუქი არჩევანია.

Frontend
Text
React
TypeScript
Vite
Zustand
Tailwind CSS
Monaco Editor
State Management
MVP-ში რეკომენდებულია Zustand:

Text
projectStore
sceneStore
selectionStore
aiStore
collaborationStore
runtimeStore
2D Editor და Runtime
Text
Editor Renderer: PixiJS
Game Runtime: Phaser
რატომ ორი ფენა
Editor-ს სჭირდება:

თავისუფალი ობიექტების გადაადგილება;
Selection;
Grid;
Inspector;
Editing tools.
Runtime-ს სჭირდება:

Input;
Physics;
Collision;
Game loop;
Scene execution.
ამიტომ Editor და Runtime ცალკე მოდულებად უნდა იყოს.

Backend
Text
Node.js
NestJS ან Fastify
PostgreSQL
Redis
WebSocket
MVP-ში შეიძლება გამოიყენოთ უფრო მარტივი სტრუქტურა:

Text
Node.js + Fastify + WebSocket + PostgreSQL
AI
Text
LLM API
Structured JSON Output
Function Calling
AI Action Validator
AI-მ არ უნდა დააბრუნოს მხოლოდ ჩვეულებრივი ტექსტი. მან უნდა დააბრუნოს სტრუქტურირებული მოქმედებები.

5. სისტემის არქიტექტურა
Text
┌─────────────────────────────┐
│       Desktop Client        │
│                             │
│ React UI                    │
│ Scene Editor                │
│ AI Chat                     │
│ Code Editor                 │
│ Game Preview                │
│ Collaboration Client        │
└──────────────┬──────────────┘
               │
        WebSocket / HTTPS
               │
┌──────────────┴──────────────┐
│         Backend             │
│                             │
│ Auth Service                │
│ Project Service             │
│ Collaboration Service       │
│ AI Service                  │
│ Validation Service          │
└──────────────┬──────────────┘
               │
┌──────────────┴──────────────┐
│        Infrastructure       │
│                             │
│ PostgreSQL                  │
│ Redis                       │
│ Object Storage              │
└─────────────────────────────┘
6. მონაცემთა მოდელი
Project
TypeScript
type Project = {
  id: string;
  name: string;
  ownerId: string;
  type: "platformer" | "topdown" | "custom";
  width: number;
  height: number;
  mainSceneId: string;
  version: number;
  createdAt: string;
  updatedAt: string;
};
Scene
TypeScript
type Scene = {
  id: string;
  projectId: string;
  name: string;
  objects: SceneObject[];
  background?: string;
  settings: SceneSettings;
};
Scene Object
TypeScript
type SceneObject = {
  id: string;
  name: string;
  type: "player" | "platform" | "enemy" | "coin" | "text" | "background";
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  asset?: string;
  components: Component[];
};
Component
TypeScript
type Component = {
  type:
    | "sprite"
    | "rigidbody"
    | "collider"
    | "script"
    | "health"
    | "collectible"
    | "controller";
  properties: Record<string, unknown>;
};
7. AI Action System
AI-ს უნდა ჰქონდეს მკაცრად განსაზღვრული მოქმედებები.

ძირითადი მოქმედებები
Text
CREATE_OBJECT
UPDATE_OBJECT
DELETE_OBJECT
CREATE_SCRIPT
UPDATE_SCRIPT
ADD_COMPONENT
REMOVE_COMPONENT
UPDATE_SCENE
RUN_VALIDATION
AI პასუხის მაგალითი
JSON
{
  "message": "დავამატე მოთამაშე და სამი პლატფორმა.",
  "actions": [
    {
      "type": "CREATE_OBJECT",
      "payload": {
        "name": "Player",
        "objectType": "player",
        "x": 100,
        "y": 400,
        "components": [
          {
            "type": "controller",
            "properties": {
              "speed": 200,
              "jumpForce": 450
            }
          }
        ]
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
AI-ის მუშაობის პროცესი
Text
User Prompt
    ↓
Project Context
    ↓
AI Request
    ↓
Structured Actions
    ↓
Schema Validation
    ↓
Permission Check
    ↓
Preview/Diff
    ↓
Apply to Project
    ↓
Save and Broadcast
8. AI-ის უსაფრთხოება
AI-მ არ უნდა შეძლოს პირდაპირი სისტემური ბრძანებების შესრულება.

დაშვებული მოქმედებები
Text
CREATE_OBJECT
UPDATE_OBJECT
DELETE_OBJECT
CREATE_SCRIPT
UPDATE_SCRIPT
ADD_COMPONENT
RUN_VALIDATION
აკრძალული მოქმედებები
Text
EXECUTE_SYSTEM_COMMAND
READ_PRIVATE_FILES
DELETE_SYSTEM_FILES
INSTALL_PROGRAMS
ACCESS_OTHER_PROJECTS
DIRECT_DATABASE_ACCESS
AI ცვლილება უნდა გაიაროს:

JSON Schema validation;
Project permission check;
Security validation;
User approval, საჭიროების შემთხვევაში;
Undo history-ში ჩაწერა.
9. Collaboration-ის განხორციელება
MVP მიდგომა
პირველ ეტაპზე არ არის აუცილებელი სრული CRDT სისტემის შექმნა.

გამოიყენეთ:

Text
WebSocket
Central Project State
Operation Events
Version Number
Last-Write-Wins
ოპერაციის მაგალითი
JSON
{
  "operationId": "op-123",
  "projectId": "project-1",
  "userId": "user-2",
  "type": "UPDATE_OBJECT",
  "objectId": "enemy-1",
  "changes": {
    "x": 620
  },
  "version": 14,
  "timestamp": "2026-10-17T12:00:00Z"
}
ცვლილების პროცესი
Text
User A changes object
        ↓
Client creates operation
        ↓
WebSocket sends operation
        ↓
Server validates operation
        ↓
Server saves operation
        ↓
Server broadcasts operation
        ↓
User B receives change
        ↓
User B updates local scene
პირველი ვერსიის შეზღუდვა
MVP-ში უმჯობესია ერთი ოპერაცია ეხებოდეს ერთ ობიექტს ან ერთ property-ს. ეს ამარტივებს კონფლიქტების მართვას.

10. მომხმარებლების ავტორიზაცია და პროექტში მოწვევა
Authentication
პირველ ეტაპზე საკმარისია:

Email/password;
Google OAuth;
JWT session.
მოწვევის პროცესი
Text
Owner creates invite
        ↓
Server generates invite token
        ↓
Owner copies invite link
        ↓
Second user opens link
        ↓
User accepts invitation
        ↓
Project state is downloaded
        ↓
WebSocket connection starts
მოწვევის ბმული
Text
https://app.example.com/invite/project-id/token
Desktop აპლიკაციაში შესაძლებელია custom protocol-ის გამოყენება:

Text
ai2dstudio://invite/project-id/token
11. სამუშაო ეტაპები
ეტაპი 1 — პროექტის დაგეგმვა
შეიქმნას:

Product Requirements Document;
User Flow;
UI Wireframes;
Data Model;
AI Action Schema;
MVP Scope;
ტექნოლოგიური სტეკის საბოლოო არჩევანი.
შედეგი
ყველამ უნდა იცოდეს:

რას ვაშენებთ;
რას არ ვაშენებთ;
როგორ გამოიყურება დემო;
რა არის პირველი დასრულებული ფუნქცია.
ეტაპი 2 — Repository და პროექტის სტრუქტურა
რეპოზიტორიის რეკომენდებული სტრუქტურა:

Text
apps/
├── desktop/
└── server/

packages/
├── shared-types/
├── scene-schema/
├── ai-actions/
├── runtime/
└── collaboration-protocol/

docs/
scripts/
Desktop სტრუქტურა
Text
apps/desktop/
├── src/
│   ├── app/
│   ├── components/
│   ├── editor/
│   ├── ai/
│   ├── collaboration/
│   ├── runtime/
│   ├── stores/
│   └── services/
├── src-tauri/
└── package.json
Server სტრუქტურა
Text
apps/server/
├── src/
│   ├── auth/
│   ├── projects/
│   ├── scenes/
│   ├── ai/
│   ├── collaboration/
│   ├── validation/
│   └── websocket/
└── package.json
ეტაპი 3 — Desktop Shell
ამ ეტაპზე უნდა შეიქმნას:

Tauri აპლიკაცია;
ძირითადი ფანჯარა;
მენიუები;
ფაილის გახსნა;
ფაილის შენახვა;
პროექტის შექმნა;
პროექტის დახურვა;
პროექტის ლოკალური ჩატვირთვა.
დასრულების კრიტერიუმი
მომხმარებელს შეუძლია:

შექმნას პროექტი;
შეინახოს იგი დისკზე;
დახუროს აპლიკაცია;
ხელახლა გახსნას იგივე პროექტი.
ეტაპი 4 — Scene Editor
დაემატოს:

Canvas;
Grid;
Zoom;
Pan;
Scene hierarchy;
Object selection;
Object drag;
Resize;
Delete;
Inspector.
დასრულების კრიტერიუმი
მომხმარებელს შეუძლია შექმნას სცენა Player-ით, Platform-ითა და Coin-ით და შეინახოს იგი JSON ფორმატში.

ეტაპი 5 — Runtime
დაემატოს:

game loop;
keyboard input;
Player movement;
Jump;
Gravity;
Collision;
Coin collection;
Enemy movement;
Score.
დასრულების კრიტერიუმი
შექმნილი სცენა უნდა გაეშვას და მომხმარებელმა შეძლოს მარტივი პლატფორმერის თამაში.

ეტაპი 6 — Code Editor
დაემატოს:

Monaco Editor;
Script Explorer;
TypeScript ფაილები;
Error highlighting;
Script loading;
Code save;
Basic runtime integration.
დასრულების კრიტერიუმი
მომხმარებელს შეუძლია შეცვალოს Player-ის სიჩქარე ან Jump Force კოდის მეშვეობით და შედეგი ნახოს Preview-ში.

ეტაპი 7 — AI Integration
დაემატოს:

AI Chat;
Project Context Builder;
Scene Context;
Selected Object Context;
AI Action Parser;
Action Validator;
Apply/Reject UI;
Undo support.
პირველი AI ბრძანებები
Text
შექმენი მოთამაშე.
Text
დაამატე სამი პლატფორმა.
Text
დაამატე მონეტა.
Text
მოთამაშეს დაუმატე ორმაგი ნახტომი.
Text
შექმენი მტერი, რომელიც მარცხნიდან მარჯვნივ მოძრაობს.
დასრულების კრიტერიუმი
მომხმარებლის ერთი ტექსტური ბრძანებით უნდა შეიქმნას playable სცენის ძირითადი ნაწილი.

ეტაპი 8 — Collaboration
დაემატოს:

User Accounts;
Project Ownership;
Invite Link;
WebSocket Server;
Presence;
Operation Broadcast;
Shared Scene State;
Shared AI Chat.
დასრულების კრიტერიუმი
ორი კომპიუტერიდან:

User A ქმნის პროექტს;
User B უერთდება invite link-ით;
User A ამატებს ობიექტს;
User B ხედავს ობიექტს;
User B ცვლის ობიექტს;
User A ხედავს ცვლილებას.
ეტაპი 9 — Build და Export
MVP-ში აირჩიეთ ერთი მთავარი target:

Text
Windows Build
შემდეგ დაემატოს:

Web Export;
macOS;
Linux;
ZIP Project;
Source Export.
დასრულების კრიტერიუმი
მომხმარებელს შეუძლია შექმნას პროექტი და მიიღოს playable build.

12. სავარაუდო სამუშაო გეგმა ჰაკათონისთვის
თუ პროექტი მოკლე ვადაში უნდა გაკეთდეს, გამოიყენეთ ეს განაწილება.

პირველი დღე — Foundation
Repository setup;
Tauri/React setup;
ძირითადი UI;
Project model;
Canvas;
ძირითადი ობიექტები.
მეორე დღე — Runtime და AI
Player movement;
Collision;
Preview;
AI Chat;
AI Action Schema;
ობიექტების გენერირება.
მესამე დღე — Collaboration და Demo
Authentication;
Invite link;
WebSocket;
ორი მომხმარებლის სცენის სინქრონიზაცია;
UI polish;
Demo scenario;
პრეზენტაცია.
თუ დრო უფრო შეზღუდულია, რეალურ Collaboration-ს შეიძლება ჰქონდეს მხოლოდ ორი ოპერაცია:

Text
CREATE_OBJECT
UPDATE_OBJECT
ეს საკმარისია ძლიერი დემოსთვის.

13. გუნდის როლები
Backend/Infrastructure Developer
პასუხისმგებელია:

API;
WebSocket;
Authentication;
Database;
Project Sync.
Frontend/Desktop Developer
პასუხისმგებელია:

Tauri;
React UI;
Scene Editor;
Local Project Manager.
Runtime Developer
პასუხისმგებელია:

Phaser/PixiJS;
Physics;
Collision;
Player;
Enemy;
Preview.
AI Developer
პასუხისმგებელია:

Prompt design;
Project Context;
Structured Actions;
Action validation;
AI error handling.
Product/Design/Presentation
პასუხისმგებელია:

UX;
UI design;
Demo scenario;
Presentation;
Documentation;
User testing.
ერთ ადამიანს რამდენიმე როლის შესრულება შეუძლია.

14. ტესტირების გეგმა
Unit Tests
უნდა შემოწმდეს:

Scene Object validation;
AI Action validation;
Project serialization;
Permission checks;
Operation processing.
Integration Tests
უნდა შემოწმდეს:

AI prompt → action;
action → scene update;
scene save/load;
WebSocket operation broadcast;
invite link;
project synchronization.
Manual Tests
სცენარის ტესტი
შექმენი პროექტი;
დაამატე Player;
დაამატე Platform;
გაუშვი Preview;
შეამოწმე ხტომა;
დაამატე Coin AI-ით;
შეამოწმე კოლიზია;
შეუერთდი მეორე კომპიუტერიდან;
შეცვალე სცენა ორივე მხარეს.
15. ძირითადი რისკები და გადაწყვეტილებები
რისკი: Scope ძალიან დიდია
გამოსავალი
შემოიფარგლეთ:

ერთი Scene;
5 ობიექტის ტიპი;
ერთი runtime;
ერთი AI workflow;
ორი მომხმარებელი;
ერთი export target.
რისკი: AI ქმნის არასწორ კოდს
გამოსავალი
წინასწარ მომზადებული templates;
შეზღუდული API;
Structured Actions;
validation;
AI-სთვის მხოლოდ დაშვებული კომპონენტების ჩვენება.
რისკი: Collaboration-ის კონფლიქტები
გამოსავალი
MVP-ში:

ერთი ცენტრალური project state;
ოპერაციების რიგი;
version number;
last-write-wins;
object-level updates.
რისკი: Desktop build ვერ ეწყობა
გამოსავალი
პირველ ეტაპზე მხოლოდ Windows;
წინასწარ გამზადებული build pipeline;
საჭიროების შემთხვევაში Electron fallback;
სრული cross-platform build-ის გადატანა შემდეგ ეტაპზე.
რისკი: AI API ძვირია
გამოსავალი
მოკლე Project Context;
მხოლოდ აქტიური სცენის გაგზავნა;
token limits;
prompt caching;
AI ბრძანებების შეზღუდვა;
mock AI რეჟიმი დეველოპმენტისთვის.
16. წარმატების კრიტერიუმები
MVP წარმატებულად ჩაითვლება, თუ:

Desktop აპლიკაცია იხსნება;
მომხმარებელი ქმნის პროექტს;
სცენაში ჩანს მინიმუმ 5 ტიპის ობიექტი;
პროექტი ინახება და იტვირთება;
AI ქმნის ობიექტებს ტექსტური მოთხოვნით;
AI ქმნის მინიმუმ ერთ სკრიპტს;
თამაში ეშვება Preview რეჟიმში;
ორი მომხმარებელი უერთდება ერთ პროექტს;
ცვლილებები სინქრონიზდება;
შესაძლებელია playable Windows build-ის მიღება;
მომხმარებელი ხედავს და აუქმებს AI ცვლილებებს.
17. შემდგომი განვითარების Roadmap
Version 1.0
Windows Desktop;
2D Editor;
AI Object Creation;
Basic Runtime;
Two-user Collaboration;
Preview;
Project Save/Load.
Version 1.5
Animation Editor;
Tilemap;
Better conflict resolution;
Multiple scenes;
Web Export;
Comments;
Project history.
Version 2.0
macOS/Linux;
Visual scripting;
AI-generated assets;
Local AI;
Plugin API;
Team permissions;
Multiplayer testing.
Version 3.0
Asset Marketplace;
Cloud builds;
Mobile export;
Steam export;
AI voice commands;
Full collaborative editing;
Community templates.
18. რეკომენდებული პირველი დემო
საუკეთესო დემო იქნება Forest Coin Runner.

სცენის შემადგენლობა
ტყის ფონი;
Player;
სამი Platform;
ორი Coin;
ერთი Enemy;
Score UI;
მარტივი Finish Zone.
დემოს AI prompt
Text
შექმენი პატარა 2D პლატფორმერი ტყის თემაზე.
დაამატე მოთამაშე მარცხნივ, სამი პლატფორმა,
ორი მონეტა, ერთი მტერი და ფინიშის ზონა.
მოთამაშეს ჰქონდეს მოძრაობა და ხტომა,
ხოლო მტერი მოძრაობდეს მარცხნიდან მარჯვნივ.
დაამატე ქულების UI.
დემოს ეტაპები
ახალი პროექტის შექმნა;
Prompt-ის გაგზავნა;
AI-ის მიერ სცენის შექმნა;
მეორე მომხმარებლის მოწვევა;
მეორე მომხმარებელი ცვლის ფონს;
პირველი მომხმარებელი ცვლის მტრის სიჩქარეს;
ცვლილებების სინქრონიზაცია;
Preview;
მონეტის შეგროვება;
თამაშის დასრულება.
19. საბოლოო რეკომენდაცია
პლატფორმა უნდა შეიქმნას სამ ფაზად:

ფაზა 1 — დემო MVP
Text
Desktop + Scene Editor + AI + Basic Runtime
ფაზა 2 — თანამშრომლობა
Text
Authentication + Invite + WebSocket + Shared Project
ფაზა 3 — სრული პროდუქტი
Text
Multi-scene + Animation + Tilemap + Export + Plugins + Local AI
ყველაზე სწორი პირველი ნაბიჯია არა მთელი პლატფორმის ერთდროულად შექმნა, არამედ ერთი დასრულებული სცენარის განხორციელება:

მომხმარებელი ტექსტით ქმნის playable 2D თამაშს და მეგობარი სხვა კომპიუტერიდან იმავე პროექტში რეალურ დროში უერთდება.

თუ ეს workflow სტაბილურად იმუშავებს, პლატფორმის დანარჩენი ფუნქციების დამატება უკვე ეტაპობრივად და უსაფრთხოდ იქნება შესაძლებელი.

დავიწყოთ პირველი ფაზა, სად ავაგო?
პირველი ფაზა ააგე უკვე არსებულ GitHub რეპოზიტორიაში:

Text
https://github.com/Rumpela/newnew
GitHub გამოიყენე კოდის, დოკუმენტაციისა და ვერსიების შესანახად, ხოლო რეალური Desktop აპლიკაცია განავითარე ლოკალურად შენს კომპიუტერზე, VS Code-ში ან სხვა IDE-ში.

რეკომენდებული სტრუქტურა
რადგან რეპოზიტორიაში უკვე არის README.md, პირველი ფაზისთვის საუკეთესოა ასეთი სტრუქტურა:

Text
newnew/
├── README.md
├── apps/
│   └── desktop/
├── packages/
│   ├── shared-types/
│   ├── scene-schema/
│   └── runtime/
├── docs/
└── .gitignore
პირველ ეტაპზე იმუშავე მხოლოდ აქ:

Text
apps/desktop/
პირველი ფაზის ტექნოლოგიური სტეკი
Text
Desktop: Tauri
UI: React + TypeScript
Build Tool: Vite
State: Zustand
2D Editor: PixiJS
Game Preview: Phaser
Code Editor: Monaco Editor
Local Storage: JSON project files
Tauri სწორია, რადგან შექმნილია მცირე ზომის, სწრაფი Desktop აპლიკაციებისთვის და იყენებს სისტემის WebView-ს. ოფიციალური ინსტრუქცია ახალ პროექტს create-tauri-app-ით ქმნის. (tauri.app)

React გამოიყენე აპლიკაციის ინტერფეისისთვის, Vite — სწრაფი დეველოპმენტისა და build-ისთვის, ხოლო Phaser — პირველი playable 2D სცენისა და ფიზიკისთვის. (vite.dev)

პირველი ფაზის მიზანი
პირველი ფაზის ბოლოს უნდა გქონდეს Desktop აპლიკაცია, სადაც მომხმარებელი შეძლებს:

აპლიკაციის გახსნას;
ახალი პროექტის შექმნას;
2D Canvas-ის ნახვას;
Player-ის, Platform-ისა და Coin-ის დამატებას;
ობიექტების გადაადგილებას;
სცენის JSON ფაილად შენახვას;
პროექტის ხელახლა გახსნას;
Preview რეჟიმში თამაშის გაშვებას.
ამ ეტაპზე ჯერ არ დაამატო:

AI;
მომხმარებლების რეგისტრაცია;
Cloud;
WebSocket;
Collaboration;
რთული Physics;
Build Export.
ჯერ უნდა დამტკიცდეს, რომ ძირითადი Desktop Editor მუშაობს.

როგორ დაიწყო ლოკალურად
1. დააყენე საჭირო პროგრამები
საჭიროა:

Text
Node.js
Rust
Visual Studio Code
Git
Tauri-ის ოფიციალური წინაპირობები მოიცავს Rust-სა და ოპერაციული სისტემის შესაბამის build dependencies-ს. (tauri.app)

2. გადმოწერე რეპოზიტორია
bash
git clone https://github.com/Rumpela/newnew.git
cd newnew
3. შექმენი სამუშაო branch
bash
git checkout -b phase-1-desktop-foundation
4. შექმენი Tauri + React აპლიკაცია
რეკომენდებული ბრძანება:

bash
npm create tauri-app@latest apps/desktop
აირჩიე:

Text
Frontend: React
Language: TypeScript
Package manager: npm
Tauri-ის ოფიციალური დოკუმენტაცია სწორედ npm create tauri-app@latest გზას გვთავაზობს ახალი აპლიკაციის დასაწყებად. (tauri.app)

შემდეგ:

bash
cd apps/desktop
npm install
npm run tauri dev
პირველი ფაზის საქაღალდეები
apps/desktop/src-ში შექმენი:

Text
src/
├── app/
│   ├── App.tsx
│   └── app.css
├── components/
│   ├── TopMenu.tsx
│   ├── ProjectExplorer.tsx
│   ├── SceneCanvas.tsx
│   ├── InspectorPanel.tsx
│   └── BottomPanel.tsx
├── editor/
│   ├── scene/
│   │   ├── scene-types.ts
│   │   ├── scene-store.ts
│   │   └── scene-serializer.ts
│   └── objects/
│       ├── object-types.ts
│       └── object-factory.ts
├── project/
│   ├── project-types.ts
│   └── project-storage.ts
└── main.tsx
პირველი ეკრანის განლაგება
პირველ ვერსიაში საკმარისია ასეთი UI:

Text
┌────────────────────────────────────────────────────┐
│ File   Edit   Project   Run                         │
├──────────────┬───────────────────────┬─────────────┤
│ Project      │                       │ Inspector   │
│ Explorer     │     2D Canvas         │             │
│              │                       │             │
│ Scenes       │                       │ Position    │
│ Objects      │                       │ Size        │
│ Assets       │                       │ Type        │
├──────────────┴───────────────────────┴─────────────┤
│ Console                                             │
└────────────────────────────────────────────────────┘
ჯერ გააკეთე მხოლოდ ეს პანელები:

Project Explorer;
Scene Canvas;
Inspector;
Bottom Console.
პირველი მონაცემთა მოდელი
შექმენი scene-types.ts:

TypeScript
export type ObjectType =
  | "player"
  | "platform"
  | "coin"
  | "enemy"
  | "text"
  | "background";

export type SceneObject = {
  id: string;
  name: string;
  type: ObjectType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
};

export type Scene = {
  id: string;
  name: string;
  width: number;
  height: number;
  objects: SceneObject[];
};
საწყისი სცენა:

TypeScript
export const defaultScene: Scene = {
  id: "scene-1",
  name: "Main Scene",
  width: 1280,
  height: 720,
  objects: [],
};
პირველი ობიექტების სისტემა
პირველ ეტაპზე გამოიყენე მარტივი ფერადი Shapes, არა გრაფიკული Asset-ები.

TypeScript
const player: SceneObject = {
  id: crypto.randomUUID(),
  name: "Player",
  type: "player",
  x: 100,
  y: 500,
  width: 48,
  height: 64,
  rotation: 0,
  color: "#3b82f6",
};
ფერები:

Text
Player     #3b82f6
Platform   #22c55e
Coin       #facc15
Enemy      #ef4444
Background #111827
ეს დაგეხმარება, რომ პირველ ეტაპზე არ დაკარგო დრო Sprite-ების, Asset Upload-ისა და Animation-ის შექმნაზე.

პირველი ფუნქციები რიგითობით
ნაბიჯი 1 — ცარიელი Desktop ფანჯარა
დარწმუნდი, რომ მუშაობს:

bash
npm run tauri dev
ნაბიჯი 2 — UI layout
შექმენი:

ზედა მენიუ;
მარცხენა Explorer;
ცენტრალური Canvas;
მარჯვენა Inspector;
ქვედა Console.
ნაბიჯი 3 — Scene State
დაამატე Zustand store:

TypeScript
type SceneStore = {
  scene: Scene;
  addObject: (object: SceneObject) => void;
  updateObject: (
    id: string,
    changes: Partial<SceneObject>
  ) => void;
  deleteObject: (id: string) => void;
  selectObject: (id: string | null) => void;
};
ნაბიჯი 4 — ობიექტების დამატება
დაამატე ღილაკები:

Text
[Add Player]
[Add Platform]
[Add Coin]
[Add Enemy]
ნაბიჯი 5 — ობიექტის გადაადგილება
ჯერ მარტივი drag-and-drop დაამატე.

შემდეგ დაამატე Inspector-ში:

Text
X: 100
Y: 300
Width: 48
Height: 64
Rotation: 0
ნაბიჯი 6 — შენახვა
პირველ ეტაპზე სცენა შეინახე JSON-ად:

JSON
{
  "id": "scene-1",
  "name": "Main Scene",
  "width": 1280,
  "height": 720,
  "objects": []
}
ლოკალური შენახვისთვის ჯერ გამოიყენე Tauri-ის ფაილური API ან ბრაუზერის local storage. საბოლოოდ უმჯობესია პროექტის საქაღალდეში რეალური ფაილები შეინახო.

ნაბიჯი 7 — Preview
Preview ღილაკზე:

Text
Run → Open Preview
უნდა გაიხსნას Phaser-ის სცენა, სადაც:

Player მოძრაობს;
Player ხტება;
Platform-ზე ეჯახება;
Coin-ის აღება შესაძლებელია;
Enemy მოძრაობს.
Phaser-ის ოფიციალური პირველი მაგალითიც ეფუძნება მოთამაშეს, პლატფორმებს, მოძრაობას, ვარსკვლავების შეგროვებასა და მტრების თავიდან არიდებას, ამიტომ ის კარგი საფუძველია შენი პირველი playable დემოსთვის. (docs.phaser.io)

რეკომენდებული Git workflow
იმუშავე ეტაპობრივად:

bash
git checkout -b phase-1-desktop-foundation
შემდეგ გააკეთე მცირე commits:

bash
git add .
git commit -m "Initialize Tauri desktop application"
bash
git commit -m "Add desktop editor layout"
bash
git commit -m "Add scene object model"
bash
git commit -m "Add object selection and inspector"
bash
git commit -m "Add local scene serialization"
bash
git commit -m "Add basic playable preview"
შემდეგ ატვირთე branch:

bash
git push -u origin phase-1-desktop-foundation
და შექმენი Pull Request main branch-ში.

პირველი ფაზის დასრულების კრიტერიუმი
პირველი ფაზა დასრულებულია, თუ შეძლებ ამ დემოს:

Text
1. ვხსნი AI 2D Desktop Studio-ს
2. ვქმნი ახალ პროექტს
3. ვამატებ Player-ს
4. ვამატებ Platform-ს
5. ვამატებ Coin-ს
6. ვამოძრავებ ობიექტებს Canvas-ზე
7. ვინახავ სცენას
8. ვხურავ აპლიკაციას
9. ხელახლა ვხსნი პროექტს
10. ვუშვებ თამაშს Preview რეჟიმში
ჩემი რეკომენდაცია
დაიწყე პირდაპირ:

Text
Rumpela/newnew
└── apps/desktop
პირველ ფაზაში ააშენე ლოკალური Desktop Editor + მარტივი playable 2D Preview. AI და ორ მომხმარებელზე გათვლილი Collaboration დაამატე მხოლოდ მას შემდეგ, რაც Scene Editor-ის ძირითადი ფუნქციები სტაბილურად იმუშავებს.

შემდეგი ტექნიკური ნაბიჯი უნდა იყოს phase-1-desktop-foundation branch-ის შექმნა და Tauri + React + TypeScript აპლიკაციის საწყისი სტრუქტურის დამატება.

გაყევი ეტაპობრივად და დამაყენებინე ყველაფერ
კარგი — გავყვეთ ნაბიჯ-ნაბიჯ. მე მოგცემ ერთ ეტაპს, შენ შეასრულებ და გამომიგზავნი შედეგს; შემდეგ გადავალთ შემდეგ ეტაპზე.

პირველად მითხარი, რომელ სისტემაზე აყენებ:

Windows 10 ან 11
macOS
Linux — მიუთითე დისტრიბუცია, მაგალითად Ubuntu
Tauri-ისთვის ინსტალაციის ნაბიჯები განსხვავდება ოპერაციული სისტემის მიხედვით: Windows-ზე საჭიროა Microsoft C++ Build Tools და WebView2, macOS-ზე Xcode Command Line Tools, Linux-ზე კი შესაბამისი სისტემური პაკეტები. ასევე დაგვჭირდება Node.js LTS და Rust. (v2.tauri.app)

დაწყებამდე შეგიძლია მხოლოდ ეს მითხრა:

Text
Windows 11
ან:

Text
macOS
შემდეგ ზუსტად მოგწერ პირველ ინსტალაციის ბრძანებებს.

linux ubuntu
კარგია. ვიწყებთ პირველი ნაბიჯით — Ubuntu-ის შემოწმებით და Tauri-ის აუცილებელი პაკეტების დაყენებით.

Tauri-ის Linux ვერსიისთვის საჭიროა WebKitGTK, C/C++ build tools, OpenSSL, libxdo, AppIndicator და SVG ბიბლიოთეკები. (tauri.app)

ნაბიჯი 1 — გახსენი Terminal
დააჭირე:

Text
Ctrl + Alt + T
ჯერ შეამოწმე Ubuntu-ის ვერსია:

bash
lsb_release -a
შემდეგ ჩასვი ეს ბრძანებები:

bash
sudo apt update
sudo apt install -y \
  git \
  curl \
  wget \
  file \
  build-essential \
  libwebkit2gtk-4.1-dev \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
პაროლის მოთხოვნისას შეიყვანე Ubuntu-ის პაროლი. პაროლის აკრეფისას ეკრანზე სიმბოლოები არ გამოჩნდება — ეს ნორმალურია.

შემდეგ შეამოწმე, რომ git და build tools დაყენდა:

bash
git --version
gcc --version
ამ ეტაპზე გამომიგზავნე Terminal-ის შედეგი
განსაკუთრებით თუ რომელიმე ასეთი შეცდომა გამოჩნდა:

Text
Unable to locate package libwebkit2gtk-4.1-dev
ან:

Text
E: Sub-process /usr/bin/dpkg returned an error code
თუ ყველაფერი წარმატებით დასრულდა, გამომიგზავნე ამ ოთხი ბრძანების შედეგი:

bash
lsb_release -a
git --version
gcc --version
pkg-config --modversion webkit2gtk-4.1
ამის შემდეგ გადავალთ ნაბიჯი 2-ზე — Node.js-ისა და Rust-ის დაყენებაზე.

No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 22.04.5 LTS
Release:	22.04
Codename:	jammy
rumpela@rumpela-X555LJ:~$ git --version
git version 2.34.1
rumpela@rumpela-X555LJ:~$ gcc --version
gcc (Ubuntu 11.4.0-1ubuntu1~22.04.3) 11.4.0
Copyright (C) 2021 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

rumpela@rumpela-X555LJ:~$ pkg-config --modversion webkit2gtk-4.1
2.50.4
ყველაფერი სწორადაა დაყენებული — შენი სისტემა არის Ubuntu 22.04.5 LTS, ხოლო Git, GCC და WebKitGTK მზად არის. No LSB modules are available შეცდომა არ არის და მისი იგნორირება შეიძლება.

ახლა გადავდივართ ნაბიჯი 2-ზე: Node.js და Rust-ის დაყენება. Tauri-სთვის საჭიროა Rust, ხოლო React/TypeScript frontend-ისთვის — Node.js და npm. (v2.tauri.app)

2.1. ჯერ შეამოწმე, უკვე ხომ არ არის დაყენებული
ტერმინალში გაუშვი:

bash
node --version
npm --version
rustc --version
cargo --version
თუ ყველა ბრძანებაზე მიიღე ვერსიის ნომერი, მაგალითად:

Text
v22.x.x
10.x.x
rustc 1.x.x
cargo 1.x.x
მაშინ ამ ნაწილის დაყენება აღარ დაგჭირდება.

თუ რომელიმე ბრძანებაზე მიიღე:

Text
command not found
გააგრძელე ქვემოთ მოცემული ინსტრუქციით.

2.2. Node.js-ის დაყენება NVM-ით
NVM საშუალებას მოგვცემს Node.js-ის ვერსიები მარტივად ვმართოთ.

გაუშვი:

bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
შემდეგ ჩატვირთე NVM მიმდინარე Terminal-ში:

bash
export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
ახლა დააყენე Node.js-ის LTS ვერსია:

bash
nvm install --lts
გახადე ის ნაგულისხმევი:

bash
nvm alias default 'lts/*'
nvm use --lts
შეამოწმე:

bash
node --version
npm --version
Node.js-ის ოფიციალური რეკომენდაციაა LTS ვერსიის გამოყენება; Tauri-ის დოკუმენტაციაც JavaScript frontend-ისთვის Node.js LTS-ს ითხოვს. (v2.tauri.app)

2.3. Rust-ის დაყენება
გაუშვი:

bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
ინსტალერი დაგისვამს კითხვას. აირჩიე:

Text
1) Proceed with installation (default)
ან უბრალოდ დააჭირე:

Text
Enter
ინსტალაციის დასრულების შემდეგ ჩატვირთე Rust მიმდინარე Terminal-ში:

bash
source "$HOME/.cargo/env"
შემდეგ დაამატე Rust-ის გარემო .bashrc-ში, რათა მომავალში ავტომატურად ჩაიტვირთოს:

bash
echo 'source "$HOME/.cargo/env"' >> ~/.bashrc
ახლა შეამოწმე:

bash
rustc --version
cargo --version
rustup --version
Rust-ის ოფიციალური ინსტალაციის მეთოდი Linux-ზე არის rustup ინსტალერი. (rust-lang.org)

2.4. Tauri CLI-ის დაყენება
ახლა დააყენე Tauri CLI:

bash
cargo install tauri-cli --version "^2.0.0" --locked
ეს შეიძლება რამდენიმე წუთი გაგრძელდეს, რადგან Rust პაკეტებს ააწყობს. Tauri-ის ოფიციალური დოკუმენტაცია Tauri CLI-ის დასაყენებლად სწორედ Cargo-ს გამოყენებას აღწერს. (v2.tauri.app)

შეამოწმე:

bash
cargo tauri --version
მოსალოდნელი შედეგი დაახლოებით ასეთი იქნება:

Text
tauri-cli 2.x.x
2.5. საბოლოო შემოწმება
ყველა დაყენების შემდეგ გაუშვი ეს ოთხი ბრძანება:

bash
node --version
npm --version
rustc --version
cargo tauri --version
შედეგი უნდა იყოს მსგავსი:

Text
v22.x.x
10.x.x
rustc 1.x.x
tauri-cli 2.x.x
გამომიგზავნე ამ ბრძანებების სრული შედეგი
თუ რომელიმე ეტაპზე შეცდომა გამოჩნდა, გამომიგზავნე შეცდომის სრული ტექსტი. შემდეგ გადავალთ ნაბიჯი 3-ზე — GitHub რეპოზიტორიის ჩამოტვირთვა და პირველი Tauri Desktop პროექტის შექმნა.

v24.22.0
11.19.1
rustc 1.99.1 (58cf8f9c3 2026-10-13)
tauri-cli 2.12.3
შესანიშნავია — ყველა საჭირო ინსტრუმენტი წარმატებით დაყენებულია:

Text
Node.js:  v24.22.0
npm:      11.19.1
Rust:     1.99.1
Tauri CLI: 2.12.3
ახლა გადავდივართ ნაბიჯი 3-ზე — GitHub რეპოზიტორიის ჩამოტვირთვა და Desktop პროექტის შექმნა.

ნაბიჯი 3 — რეპოზიტორიის მომზადება
3.1. რეპოზიტორიის ჩამოტვირთვა
ტერმინალში გაუშვი:

bash
cd ~
git clone https://github.com/Rumpela/newnew.git
cd newnew
შეამოწმე, სწორ რეპოზიტორიაში ხარ თუ არა:

bash
pwd
git remote -v
მოსალოდნელი შედეგი დაახლოებით ასეთი იქნება:

Text
/home/rumpela/newnew
და:

Text
origin  https://github.com/Rumpela/newnew.git (fetch)
origin  https://github.com/Rumpela/newnew.git (push)
3.2. შექმენი სამუშაო branch
არ ვიმუშაოთ პირდაპირ main branch-ზე.

bash
git checkout -b phase-1-desktop-foundation
შეამოწმე:

bash
git branch
მოსალოდნელია:

Text
* phase-1-desktop-foundation
  main
3.3. შექმენი Tauri + React პროექტი
ჯერ დარწმუნდი, რომ რეპოზიტორიის მთავარ საქაღალდეში ხარ:

bash
cd ~/newnew
შემდეგ შექმენი apps საქაღალდე:

bash
mkdir -p apps
ახლა გაუშვი Tauri პროექტის გენერატორი:

bash
npm create tauri-app@latest apps/desktop
ინსტალერი დაგისვამს რამდენიმე კითხვას. აირჩიე შემდეგი:

Text
Project name:
desktop

Identifier:
com.rumpela.ai2d

Choose which language to use for your frontend:
TypeScript / JavaScript

Choose your package manager:
npm

Choose your UI framework:
React

Choose your UI flavor:
TypeScript
თუ კითხვები ოდნავ განსხვავებულად გამოჩნდა, აირჩიე ეკვივალენტური ვარიანტები:

Text
React
TypeScript
npm
3.4. დააყენე frontend პაკეტები
შედი Desktop პროექტში:

bash
cd ~/newnew/apps/desktop
და დააყენე dependencies:

bash
npm install
ახლა დააყენე პირველი ფაზისთვის საჭირო პაკეტები:

bash
npm install zustand pixi.js phaser
დეველოპმენტისთვის დაამატე TypeScript ტიპები:

bash
npm install -D @types/node
3.5. გაუშვი პირველი Desktop აპლიკაცია
იმავე საქაღალდეში გაუშვი:

bash
npm run tauri dev
პირველ გაშვებაზე Rust-ის კომპილაციას შეიძლება რამდენიმე წუთი დასჭირდეს.

თუ ყველაფერი სწორადაა, უნდა გაიხსნას Desktop ფანჯარა Tauri-ის საწყისი ეკრანით.

თუ npm run tauri dev არ იმუშავებს
თუ მიიღებ ასეთ შეცდომას:

Text
command not found: cargo-tauri
გაუშვი:

bash
cargo install tauri-cli --version "^2.0.0" --locked
შემდეგ ხელახლა:

bash
npm run tauri dev
თუ მიიღებ WebKitGTK-სთან დაკავშირებულ შეცდომას, გამომიგზავნე სრული ტექსტი.

3.6. შეამოწმე ფაილების სტრუქტურა
გაუშვი:

bash
cd ~/newnew
find apps/desktop -maxdepth 2 -type f | sort
უნდა დაინახო მსგავსი სტრუქტურა:

Text
apps/desktop/package.json
apps/desktop/src/App.tsx
apps/desktop/src/main.tsx
apps/desktop/src-tauri/Cargo.toml
apps/desktop/src-tauri/tauri.conf.json
apps/desktop/vite.config.ts
3.7. გააკეთე პირველი commit
ჯერ დაბრუნდი repository-ის მთავარ საქაღალდეში:

bash
cd ~/newnew
შეამოწმე ცვლილებები:

bash
git status
შემდეგ შეინახე პირველი Desktop პროექტი:

bash
git add apps/desktop
git commit -m "Initialize Tauri desktop application"
ამ ეტაპზე GitHub-ზე ატვირთვა ჯერ არ არის საჭირო.

ახლა გამომიგზავნე ეს ინფორმაცია
გაუშვი:

bash
cd ~/newnew
git branch --show-current
git status --short
ls apps/desktop
და ასევე მითხარი:

გაიხსნა თუ არა Tauri Desktop ფანჯარა;
npm run tauri dev წარმატებით დასრულდა თუ არა;
გამოჩნდა თუ არა რაიმე შეცდომა.
შემდეგ გადავალთ ნაბიჯი 4-ზე — საწყისი UI-ის შეცვლა და 2D Editor-ის სამუშაო სივრცის შექმნა.


1. გაიხსნა
2. წარმატებით დასრულდა
3.არანაირი შეცდომა
git branch --show-current
git status --short
ls apps/desktop
phase-1-desktop-foundation
index.html    package-lock.json  src            tsconfig.node.json
node_modules  public             src-tauri      vite.config.ts
package.json  README.md          tsconfig.json
შესანიშნავია — პირველი ეტაპი დასრულებულია: Tauri Desktop აპლიკაცია წარმატებით გაეშვა. ახლა ვაკეთებთ ნაბიჯი 4-ს — პირველი 2D Editor-ის სამუშაო სივრცეს.

ამ ეტაპზე ჯერ არ ვამატებთ AI-სა და Multiplayer-ს. შევქმნით:

მარცხენა Project Explorer-ს;
ცენტრალურ 2D Canvas-ს;
მარჯვენა Inspector-ს;
Player/Platform/Coin/Enemy ობიექტების დამატებას;
ობიექტის არჩევასა და წაშლას;
ობიექტის პოზიციის შეცვლას.
ნაბიჯი 4 — საწყისი 2D Editor UI
4.1. გახსენი პროექტი VS Code-ში
ახალ Terminal-ში გაუშვი:

bash
cd ~/newnew
code .
თუ code: command not found გამოჩნდა, გახსენი VS Code ხელით და აირჩიე:

Text
File → Open Folder → /home/rumpela/newnew
4.2. შეცვალე apps/desktop/src/App.tsx
გახსენი:

Text
apps/desktop/src/App.tsx
წაშალე არსებული შიგთავსი და ჩასვი:

apps/desktop/src/App.tsx
import { useState } from "react";
import "./App.css";

type ObjectType = "player" | "platform" | "coin" | "enemy";

type SceneObject = {
4.3. შეცვალე apps/desktop/src/App.css
გახსენი:

Text
apps/desktop/src/App.css
წაშალე არსებული შიგთავსი და ჩასვი:

apps/desktop/src/App.css
:root {
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #e5e7eb;
  background: #0f172a;
4.4. გაასუფთავე index.css
გახსენი:

Text
apps/desktop/src/index.css
ჩაანაცვლე ამით:

apps/desktop/src/index.css
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
ნაბიჯი 4.5 — გაუშვი აპლიკაცია
ტერმინალში:

bash
cd ~/newnew/apps/desktop
npm run tauri dev
უნდა დაინახო:

მარცხნივ Project Explorer;
შუაში ცარიელი სცენა;
მარჯვნივ Inspector;
ქვემოთ Console;
მარცხნივ ღილაკები + Player, + Platform, + Coin, + Enemy.
დააჭირე რამდენიმე ღილაკს და შეამოწმე:

ობიექტი ჩნდება Canvas-ზე;
ობიექტი ჩნდება მარცხენა სიაში;
ობიექტზე დაჭერისას Inspector იხსნება;
X/Y მნიშვნელობის შეცვლისას ობიექტი გადაადგილდება;
Delete object მუშაობს.
ნაბიჯი 4.6 — შეამოწმე TypeScript
აპლიკაციის გაჩერება შეგიძლია:

Text
Ctrl + C
შემდეგ გაუშვი:

bash
cd ~/newnew/apps/desktop
npm run build
თუ მიიღებ:

Text
✓ built successfully
მაშინ პირველი Editor UI გამართულად მუშაობს.

ამის შემდეგ შეინახე ცვლილებები:

bash
cd ~/newnew
git add apps/desktop
git commit -m "Add initial 2D scene editor workspace"
ახლა გაუშვი ეს ბრძანება და გამომიგზავნე შედეგი:

bash
cd ~/newnew/apps/desktop
npm run build
თუ build წარმატებით დასრულდა, შემდეგ ეტაპზე დავამატებთ ობიექტების drag-and-drop გადაადგილებას Canvas-ზე.

4.4 index.css არ არსებობს
ეს ნორმალურია — შენს Tauri + React template-ში index.css ფაილი უბრალოდ არ შეიქმნა. შექმენი ეს ფაილი ხელით.

1. შექმენი index.css
ტერმინალში გაუშვი:

bash
cd ~/newnew/apps/desktop
touch src/index.css
შემდეგ გახსენი:

Text
apps/desktop/src/index.css
და ჩასვი:

CSS
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
}
2. შეამოწმე main.tsx
გახსენი:

Text
apps/desktop/src/main.tsx
მასში უნდა იყოს ეს import:

TSX
import "./index.css";
თუ არ არის, დაამატე ფაილის დასაწყისში:

TSX
import "./index.css";
მაგალითად, main.tsx დაახლოებით ასეთი უნდა იყოს:

TSX
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
თუ შენს main.tsx-ში React.StrictMode არ არის, ესეც ნორმალურია — მთავარია import "./index.css"; არსებობდეს.

3. შეამოწმე App.tsx-ის import
apps/desktop/src/App.tsx-ის დასაწყისში უნდა იყოს:

TSX
import { useState } from "react";
import "./App.css";
4. გაუშვი Build
bash
cd ~/newnew/apps/desktop
npm run build
თუ წარმატებით დასრულდა, გაუშვი Desktop აპლიკაცია:

bash
npm run tauri dev
შემდეგ შეამოწმე:

ჩანს თუ არა ახალი UI;
მუშაობს თუ არა + Player;
მუშაობს თუ არა + Platform;
მუშაობს თუ არა + Coin;
Inspector-ში იცვლება თუ არა X და Y;
მუშაობს თუ არა Delete object.
თუ build-ზე შეცდომა მიიღო, გამომიგზავნე სრული ტექსტი.

> desktop@0.1.0 build
> tsc && vite build

vite v8.3.4 building client environment for production...
✓ 17 modules transformed.
computing gzip size...
dist/index.html                   0.47 kB │ gzip:  0.30 kB
dist/assets/index-fAxRk-nj.css    6.54 kB │ gzip:  2.02 kB
dist/assets/index-6ppXZBuH.js   226.52 kB │ gzip: 70.52 kB

შესანიშნავია — Build წარმატებით დასრულდა. TypeScript და Vite შეცდომების გარეშე გაიარა:

Text
✓ 17 modules transformed.
ახლა შეამოწმე Desktop აპლიკაცია.

ნაბიჯი 4.7 — გაუშვი აპლიკაცია
ტერმინალში:

bash
cd ~/newnew/apps/desktop
npm run tauri dev
შეამოწმე შემდეგი ფუნქციები:

ჩანს თუ არა ახალი Editor UI;
დააჭირე + Player;
დააჭირე + Platform;
დააჭირე + Coin;
დააჭირე რომელიმე ობიექტს Canvas-ზე;
Inspector-ში შეცვალე X;
Inspector-ში შეცვალე Y;
დააჭირე Delete object.
მოსალოდნელი შედეგი:

ობიექტები ჩნდება Canvas-ზე;
ობიექტები ჩნდება მარცხენა OBJECTS სიაში;
არჩეული ობიექტი მონიშნულია;
X/Y ცვლილება გადაადგილებს ობიექტს;
Delete ღილაკი შლის ობიექტს.
თუ ყველაფერი მუშაობს, შეინახე ცვლილებები:

bash
cd ~/newnew
git add apps/desktop
git commit -m "Add initial 2D editor workspace"
შემდეგ გამომიგზავნე მხოლოდ ეს ინფორმაცია:

Text
UI გაიხსნა: კი/არა
ობიექტების დამატება მუშაობს: კი/არა
Inspector მუშაობს: კი/არა
Delete მუშაობს: კი/არა
ამის შემდეგ გადავალთ შემდეგ ეტაპზე — ობიექტების მაუსით Drag-and-Drop გადაადგილება Canvas-ზე.

მუშაობს ოთხივე.
ძალიან კარგია — პირველი Editor-ის ძირითადი ფუნქციები მუშაობს. ახლა დავამატოთ Canvas-ზე მაუსით Drag-and-Drop გადაადგილება.

ნაბიჯი 5 — ობიექტების გადაადგილება მაუსით
5.1. შეცვალე App.tsx
გახსენი:

Text
apps/desktop/src/App.tsx
A. დაამატე DragState ტიპი
იპოვე:

TSX
type SceneObject = {
ამ ბლოკის შემდეგ დაამატე:

TSX
type DragState = {
  id: string;
  offsetX: number;
  offsetY: number;
};
B. დაამატე drag state
იპოვე:

TSX
const [selectedId, setSelectedId] = useState<string | null>(null);
მის ქვემოთ დაამატე:

TSX
const [dragState, setDragState] =
  useState<DragState | null>(null);
C. დაამატე დამხმარე ფუნქციები
იპოვე:

TSX
const selectedObject = objects.find(
  (object) => object.id === selectedId
);
მის ქვემოთ დაამატე:

TSX
function getScenePoint(
  clientX: number,
  clientY: number,
) {
  const canvas = document.querySelector(
    ".scene-canvas",
  ) as HTMLElement | null;

  if (!canvas) {
    return { x: 0, y: 0 };
  }

  const rect = canvas.getBoundingClientRect();

  return {
    // Canvas ვიზუალურად 2-ჯერ არის დაპატარავებული
    x: (clientX - rect.left) * 2,
    y: (clientY - rect.top) * 2,
  };
}

function startDragging(
  event: React.PointerEvent<HTMLButtonElement>,
  object: SceneObject,
) {
  event.stopPropagation();

  const point = getScenePoint(
    event.clientX,
    event.clientY,
  );

  setSelectedId(object.id);

  setDragState({
    id: object.id,
    offsetX: point.x - object.x,
    offsetY: point.y - object.y,
  });

  event.currentTarget.setPointerCapture(event.pointerId);
}

function moveDraggedObject(
  event: React.PointerEvent<HTMLDivElement>,
) {
  if (!dragState) return;

  const point = getScenePoint(
    event.clientX,
    event.clientY,
  );

  const nextX = Math.max(
    0,
    Math.min(1280 - 1, point.x - dragState.offsetX),
  );

  const nextY = Math.max(
    0,
    Math.min(720 - 1, point.y - dragState.offsetY),
  );

  setObjects((currentObjects) =>
    currentObjects.map((object) =>
      object.id === dragState.id
        ? {
            ...object,
            x: Math.round(nextX),
            y: Math.round(nextY),
          }
        : object,
    ),
  );
}

function stopDragging() {
  setDragState(null);
}
თუ TypeScript React.PointerEvent-ზე შეცდომას აჩვენებს, ფაილის დასაწყისში შეცვალე import:

TSX
import { useState } from "react";
ამით:

TSX
import type { PointerEvent } from "react";
import { useState } from "react";
შემდეგ კოდში შეცვალე:

TSX
React.PointerEvent<HTMLButtonElement>
ამით:

TSX
PointerEvent<HTMLButtonElement>
და:

TSX
React.PointerEvent<HTMLDivElement>
ამით:

TSX
PointerEvent<HTMLDivElement>
5.2. დაამატე Canvas-ის event-ები
იპოვე ეს ხაზი:

TSX
<div className="scene-canvas">
ჩაანაცვლე ამით:

TSX
<div
  className="scene-canvas"
  onPointerMove={moveDraggedObject}
  onPointerUp={stopDragging}
  onPointerLeave={stopDragging}
>
5.3. დაამატე ობიექტზე onPointerDown
იპოვე ობიექტის ღილაკი:

TSX
<button
  key={object.id}
  className={`scene-object ${
    object.id === selectedId ? "selected-object" : ""
  }`}
მის შემდეგ დაამატე:

TSX
onPointerDown={(event) =>
  startDragging(event, object)
}
საბოლოოდ ეს ნაწილი დაახლოებით ასეთი უნდა იყოს:

TSX
<button
  key={object.id}
  className={`scene-object ${
    object.id === selectedId ? "selected-object" : ""
  }`}
  onPointerDown={(event) =>
    startDragging(event, object)
  }
  style={{
    left: `${object.x / 2}px`,
    top: `${object.y / 2}px`,
    width: `${object.width / 2}px`,
    height: `${object.height / 2}px`,
    backgroundColor: object.color,
  }}
  onClick={() => setSelectedId(object.id)}
  title={object.name}
>
  {object.type === "coin" ? "★" : ""}
</button>
5.4. დაამატე CSS ცვლილებები
გახსენით:

Text
apps/desktop/src/App.css
იპოვე:

CSS
.scene-canvas {
მის შიგნით დაამატე:

CSS
  touch-action: none;
  user-select: none;
იპოვე:

CSS
.scene-object {
და დაამატე:

CSS
  cursor: grab;
  touch-action: none;
  user-select: none;
იპოვე:

CSS
.scene-object:hover {
მის ზემოთ დაამატე:

CSS
.scene-object:active {
  cursor: grabbing;
}
5.5. შეამოწმე Build
გაუშვი:

bash
cd ~/newnew/apps/desktop
npm run build
შემდეგ გაუშვი აპლიკაცია:

bash
npm run tauri dev
შეამოწმე:

დაამატე Player;
დააჭირე Player-ს;
გადაიტანე მაუსით სხვა ადგილას;
შეამოწმე Inspector-ში X და Y;
გადაიტანე Platform და Coin;
დარწმუნდი, რომ Canvas-ის საზღვრებს გარეთ ობიექტი არ გადის.
თუ ყველაფერი მუშაობს, შეინახე:

bash
cd ~/newnew
git add apps/desktop
git commit -m "Add drag and drop scene object movement"
შემდეგი ეტაპი იქნება სცენის Save/Load — პროექტის JSON ფაილად შენახვა და გახსნა.

შემდეგი ეტაპი
კარგია. ახლა გადავდივართ ნაბიჯი 6-ზე — სცენის JSON ფაილად შენახვა და გახსნა.

ამ ეტაპზე დავამატებთ:

Save Project ღილაკს;
Open Project ღილაკს;
სისტემურ Save/Open ფანჯრებს;
სცენის JSON ფორმატში შენახვას;
JSON ფაილიდან სცენის აღდგენას.
Tauri 2-ში ამისთვის გამოვიყენებთ ოფიციალურ dialog და fs პლაგინებს: dialog ხსნის სისტემურ Save/Open ფანჯრებს, ხოლო fs კითხულობს და წერს ფაილებს. (v2.tauri.app)

ნაბიჯი 6.1 — დააყენე Tauri-ის პლაგინები
გახსენით Terminal:

bash
cd ~/newnew/apps/desktop
დააყენე JavaScript პაკეტები:

bash
npm install @tauri-apps/plugin-dialog @tauri-apps/plugin-fs
შემდეგ დააყენე Rust-ის პლაგინები:

bash
cd src-tauri
cargo add tauri-plugin-dialog
cargo add tauri-plugin-fs
cd ..
ნაბიჯი 6.2 — ჩართე პლაგინები Rust-ში
გახსენი:

Text
apps/desktop/src-tauri/src/lib.rs
იპოვე:

Rust
tauri::Builder::default()
და მის შემდეგ დაამატე:

Rust
.plugin(tauri_plugin_dialog::init())
.plugin(tauri_plugin_fs::init())
მაგალითად, საბოლოო სტრუქტურა დაახლოებით ასეთი უნდა იყოს:

Rust
tauri::Builder::default()
    .plugin(tauri_plugin_dialog::init())
    .plugin(tauri_plugin_fs::init())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
თუ უკვე გაქვს სხვა .plugin(...) ჩანაწერები, არ წაშალო — უბრალოდ დაამატე ეს ორი.

ნაბიჯი 6.3 — დაამატე Permissions
გახსენი:

Text
apps/desktop/src-tauri/capabilities/default.json
თუ ფაილი არსებობს, permissions მასივში დაამატე:

JSON
"dialog:default",
"fs:read-files",
"fs:write-files"
მაგალითად:

JSON
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "main-capability",
  "description": "Main application capability",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "dialog:default",
    "fs:read-files",
    "fs:write-files"
  ]
}
თუ permissions უკვე არსებობს, მთლიანად არ ჩაანაცვლო — მხოლოდ საჭირო ჩანაწერები დაამატე.

Tauri-ის უსაფრთხოების მოდელში ფაილური წვდომა ნაგულისხმევად შეზღუდულია; fs permission-ის გარდა საჭიროა შესაბამისი წვდომის scope-იც. (v2.tauri.app)

თუ მოგვიანებით მიიღებ შეცდომას forbidden path, გამომიგზავნე სრული ტექსტი და დავამატებთ უფრო ზუსტ scope-ს.

ნაბიჯი 6.4 — დაამატე Import-ები App.tsx-ში
გახსენი:

Text
apps/desktop/src/App.tsx
ფაილის დასაწყისში ახლა ალბათ გაქვს:

TSX
import { useState } from "react";
import "./App.css";
შეცვალე ამით:

TSX
import { useState } from "react";
import { open, save } from "@tauri-apps/plugin-dialog";
import {
  readTextFile,
  writeTextFile,
} from "@tauri-apps/plugin-fs";
import "./App.css";
ნაბიჯი 6.5 — დაამატე პროექტის მონაცემთა ტიპი
SceneObject ტიპის შემდეგ დაამატე:

TSX
type ProjectFile = {
  version: 1;
  name: string;
  scene: {
    id: string;
    name: string;
    width: number;
    height: number;
    objects: SceneObject[];
  };
};
ნაბიჯი 6.6 — დაამატე Save/Open ფუნქციები
იპოვე ეს ნაწილი:

TSX
const selectedObject = objects.find(
  (object) => object.id === selectedId
);
მის შემდეგ დაამატე:

TSX
async function saveProject() {
  try {
    const filePath = await save({
      title: "Save AI 2D Project",
      defaultPath: "forest-adventure.ai2d.json",
      filters: [
        {
          name: "AI 2D Project",
          extensions: ["json"],
        },
      ],
    });

    if (!filePath) {
      return;
    }

    const projectFile: ProjectFile = {
      version: 1,
      name: "Forest Adventure",
      scene: {
        id: "scene-1",
        name: "Main Scene",
        width: 1280,
        height: 720,
        objects,
      },
    };

    await writeTextFile(
      filePath,
      JSON.stringify(projectFile, null, 2),
    );

    console.log("Project saved:", filePath);
  } catch (error) {
    console.error("Failed to save project:", error);
  }
}

async function openProject() {
  try {
    const selectedPath = await open({
      title: "Open AI 2D Project",
      multiple: false,
      directory: false,
      filters: [
        {
          name: "AI 2D Project",
          extensions: ["json"],
        },
      ],
    });

    if (!selectedPath || Array.isArray(selectedPath)) {
      return;
    }

    const fileContent = await readTextFile(selectedPath);
    const projectFile = JSON.parse(
      fileContent,
    ) as ProjectFile;

    setObjects(projectFile.scene.objects);
    setSelectedId(null);

    console.log("Project opened:", selectedPath);
  } catch (error) {
    console.error("Failed to open project:", error);
  }
}
Tauri-ის save() აბრუნებს არჩეულ ფაილის გზას, ხოლო open() — გახსნილი ფაილის გზას; writeTextFile() და readTextFile() გამოიყენება ტექსტური JSON-ის ჩასაწერად და წასაკითხად. (v2.tauri.app)

ნაბიჯი 6.7 — შეაერთე ღილაკები
იპოვე ზედა მენიუში ეს ნაწილი:

TSX
<button className="secondary-button">Save</button>
<button className="primary-button">Preview</button>
ჩაანაცვლე ამით:

TSX
<button
  className="secondary-button"
  onClick={openProject}
>
  Open
</button>

<button
  className="secondary-button"
  onClick={saveProject}
>
  Save
</button>

<button className="primary-button">
  Preview
</button>
ახლა ზედა პანელში გამოჩნდება:

Text
Open
Save
Preview
ნაბიჯი 6.8 — დაამატე ფაილის სახელის გაფართოება
იმავე App.css ფაილში დაამატე:

CSS
.topbar-actions button {
  white-space: nowrap;
}
ნაბიჯი 6.9 — შეამოწმე TypeScript Build
გაჩერდი თუ არა tauri dev პროცესი, შემდეგ გაუშვი:

bash
cd ~/newnew/apps/desktop
npm run build
თუ მიიღებ:

Text
✓ built successfully
შემდეგ გაუშვი:

bash
npm run tauri dev
ნაბიჯი 6.10 — შეამოწმე Save
აპლიკაციაში:

დაამატე Player;
დაამატე Platform;
დაამატე Coin;
შეცვალე რომელიმე ობიექტის პოზიცია;
დააჭირე Save;
აირჩიე საქაღალდე;
შეინახე მაგალითად:
Text
forest-adventure.ai2d.json
ფაილი დაახლოებით ასეთი უნდა იყოს:

JSON
{
  "version": 1,
  "name": "Forest Adventure",
  "scene": {
    "id": "scene-1",
    "name": "Main Scene",
    "width": 1280,
    "height": 720,
    "objects": [
      {
        "id": "player-001",
        "name": "Player 1",
        "type": "player",
        "x": 100,
        "y": 420,
        "width": 48,
        "height": 64,
        "color": "#3b82f6"
      }
    ]
  }
}
ნაბიჯი 6.11 — შეამოწმე Open
წაშალე ყველა ობიექტი;
დააჭირე Open;
აირჩიე შენახული .ai2d.json ფაილი;
სცენა და ობიექტები უნდა აღდგეს.
ნაბიჯი 6.12 — შეინახე Git-ში
თუ Save/Open მუშაობს:

bash
cd ~/newnew
git add apps/desktop
git commit -m "Add project JSON save and load"
შემდეგ გამომიგზავნე:

Text
npm run build შედეგი
Save მუშაობს: კი/არა
Open მუშაობს: კი/არა
forbidden path შეცდომა: კი/არა
შემდეგ ეტაპზე დავამატებთ Project Manager-ს — New Project, project name და ახალი პროექტის საწყისი სცენის შექმნას.

6.2 apps/desktop/src-tauri/src/lib.rs: Permission denied
ეს შეცდომა, ალბათ, იმიტომ მიიღე, რომ lib.rs ფაილის გზა პირდაპირ Terminal-ში გაუშვი. ფაილი არ უნდა გაეშვას ბრძანებად — ის უნდა გახსნა რედაქტორში.

1. გახსენი lib.rs
გამოიყენე ერთ-ერთი მეთოდი.

VS Code-ით
bash
code ~/newnew/apps/desktop/src-tauri/src/lib.rs
ან Terminal-ის ტექსტური რედაქტორით
bash
nano ~/newnew/apps/desktop/src-tauri/src/lib.rs
თუ nano გამოიყენე:

შენახვა: Ctrl + O
დადასტურება: Enter
გამოსვლა: Ctrl + X
2. იპოვე tauri::Builder::default()
ფაილში მოძებნე დაახლოებით ასეთი კოდი:

Rust
tauri::Builder::default()
მის შემდეგ დაამატე:

Rust
.plugin(tauri_plugin_dialog::init())
.plugin(tauri_plugin_fs::init())
მაგალითად, lib.rs შეიძლება ასე გამოიყურებოდეს:

Rust
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
თუ შენს ფაილში ეს ჩანაწერი არ არსებობს:

Rust
.plugin(tauri_plugin_opener::init())
არ არის პრობლემა — დატოვე არსებული სტრუქტურა და უბრალოდ დაამატე ორი ახალი plugin:

Rust
.plugin(tauri_plugin_dialog::init())
.plugin(tauri_plugin_fs::init())
3. თუ VS Code-იდან ფაილი არ ინახება
შეამოწმე ფაილის უფლებები:

bash
ls -l ~/newnew/apps/desktop/src-tauri/src/lib.rs
შემდეგ პროექტის ფაილების მფლობელობა შენს მომხმარებელზე გადაიტანე:

bash
sudo chown -R "$USER":"$USER" ~/newnew
შემდეგ ხელახლა გახსენი ფაილი:

bash
code ~/newnew/apps/desktop/src-tauri/src/lib.rs
არ გამოიყენო sudo code, რადგან ამან შეიძლება პროექტის ფაილები root მომხმარებლის საკუთრებად გახადოს.

4. შეამოწმე plugin-ები
დარწმუნდი, რომ ორივე პაკეტი დაყენებულია:

bash
cd ~/newnew/apps/desktop

grep -n "tauri-plugin" src-tauri/Cargo.toml
უნდა ჩანდეს დაახლოებით:

Text
tauri-plugin-dialog
tauri-plugin-fs
თუ რომელიმე აკლია, გაუშვი:

bash
cd ~/newnew/apps/desktop/src-tauri
cargo add tauri-plugin-dialog
cargo add tauri-plugin-fs
cd ..
5. შემდეგ გაუშვი Build
bash
cd ~/newnew/apps/desktop
npm run build
თუ Build წარმატებით დასრულდა, გაუშვი:

bash
npm run tauri dev
თუ ისევ მიიღებ შეცდომას, გამომიგზავნე ეს ორი შედეგი:

bash
sed -n '1,120p' ~/newnew/apps/desktop/src-tauri/src/lib.rs
და:

bash
cat ~/newnew/apps/desktop/src-tauri/Cargo.toml
პაროლები ან API გასაღებები ამ ფაილებში ჩვეულებრივ არ არის, მაგრამ თუ რაიმე პირადი მონაცემი გამოჩნდა, გამომგზავნამდე წაშალე.

6.3 Value is not accepted. Valid values: "core:default", "core:app:default", "core:app:allow-app-hide", "core:app:allow-app-show", "core:app:allow-bundle-type", "core:app:allow-default-window-icon", "core:app:allow-exit", "core:app:allow-fetch-data-store-identifiers", "core:app:allow-identifier", "core:app:allow-name", "core:app:allow-register-listener", "core:app:allow-remove-data-store", "core:app:allow-remove-listener", "core:app:allow-set-app-theme", "core:app:allow-set-dock-visibility", "core:app:allow-supports-multiple-windows", "core:app:allow-tauri-version", "core:app:allow-version", "core:app:deny-app-hide", "core:app:deny-app-show", "core:app:deny-bundle-type", "core:app:deny-default-window-icon", "core:app:deny-exit", "core:app:deny-fetch-data-store-identifiers", "core:app:deny-identifier", "core:app:deny-name", "core:app:deny-register-listener", "core:app:deny-remove-data-store", "core:app:deny-remove-listener", "core:app:deny-set-app-theme", "core:app:deny-set-dock-visibility", "core:app:deny-supports-multiple-windows", "core:app:deny-tauri-version", "core:app:deny-version", "core:event:default", "core:event:allow-emit", "core:event:allow-emit-to", "core:event:allow-listen", "core:event:allow-unlisten", "core:event:deny-emit", "core:event:deny-emit-to", "core:event:deny-listen", "core:event:deny-unlisten", "core:image:default", "core:image:allow-from-bytes", "core:image:allow-from-path", "core:image:allow-new", "core:image:allow-rgba", "core:image:allow-size", "core:image:deny-from-bytes", "core:image:deny-from-path", "core:image:deny-new", "core:image:deny-rgba", "core:image:deny-size", "core:menu:default", "core:menu:allow-append", "core:menu:allow-create-default", "core:menu:allow-get", "core:menu:allow-insert", "core:menu:allow-is-checked", "core:menu:allow-is-enabled", "core:menu:allow-items", "core:menu:allow-new", "core:menu:allow-popup", "core:menu:allow-prepend", "core:menu:allow-remove", "core:menu:allow-remove-at", "core:menu:allow-set-accelerator", "core:menu:allow-set-as-app-menu", "core:menu:allow-set-as-help-menu-for-nsapp", "core:menu:allow-set-as-window-menu", "core:menu:allow-set-as-windows-menu-for-nsapp", "core:menu:allow-set-checked", "core:menu:allow-set-enabled", "core:menu:allow-set-icon", "core:menu:allow-set-text", "core:menu:allow-text", "core:menu:deny-append", "core:menu:deny-create-default", "core:menu:deny-get", "core:menu:deny-insert", "core:menu:deny-is-checked", "core:menu:deny-is-enabled", "core:menu:deny-items", "core:menu:deny-new", "core:menu:deny-popup", "core:menu:deny-prepend", "core:menu:deny-remove", "core:menu:deny-remove-at", "core:menu:deny-set-accelerator", "core:menu:deny-set-as-app-menu", "core:menu:deny-set-as-help-menu-for-nsapp", "core:menu:deny-set-as-window-menu", "core:menu:deny-set-as-windows-menu-for-nsapp", "core:menu:deny-set-checked", "core:menu:deny-set-enabled", "core:menu:deny-set-icon", "core:menu:deny-set-text", "core:menu:deny-text", "core:path:default", "core:path:allow-basename", "core:path:allow-dirname", "core:path:allow-extname", "core:path:allow-is-absolute", "core:path:allow-join", "core:path:allow-normalize", "core:path:allow-resolve", "core:path:allow-resolve-directory", "core:path:deny-basename", "core:path:deny-dirname", "core:path:deny-extname", "core:path:deny-is-absolute", "core:path:deny-join", "core:path:deny-normalize", "core:path:deny-resolve", "core:path:deny-resolve-directory", "core:resources:default", "core:resources:allow-close", "core:resources:deny-close", "core:tray:default", "core:tray:allow-get-by-id", "core:tray:allow-new", "core:tray:allow-remove-by-id", "core:tray:allow-set-icon", "core:tray:allow-set-icon-as-template", "core:tray:allow-set-icon-with-as-template", "core:tray:allow-set-menu", "core:tray:allow-set-show-menu-on-left-click", "core:tray:allow-set-temp-dir-path", "core:tray:allow-set-title", "core:tray:allow-set-tooltip", "core:tray:allow-set-visible", "core:tray:deny-get-by-id", "core:tray:deny-new", "core:tray:deny-remove-by-id", "core:tray:deny-set-icon", "core:tray:deny-set-icon-as-template", "core:tray:deny-set-icon-with-as-template", "core:tray:deny-set-menu", "core:tray:deny-set-show-menu-on-left-click", "core:tray:deny-set-temp-dir-path", "core:tray:deny-set-title", "core:tray:deny-set-tooltip", "core:tray:deny-set-visible", "core:webview:default", "core:webview:allow-clear-all-browsing-data", "core:webview:allow-create-webview", "core:webview:allow-create-webview-window", "core:webview:allow-get-all-webviews", "core:webview:allow-internal-toggle-devtools", "core:webview:allow-print", "core:webview:allow-reparent", "core:webview:allow-set-webview-auto-resize", "core:webview:allow-set-webview-background-color", "core:webview:allow-set-webview-focus", "core:webview:allow-set-webview-position", "core:webview:allow-set-webview-size", "core:webview:allow-set-webview-zoom", "core:webview:allow-webview-close", "core:webview:allow-webview-hide", "core:webview:allow-webview-position", "core:webview:allow-webview-show", "core:webview:allow-webview-size", "core:webview:deny-clear-all-browsing-data", "core:webview:deny-create-webview", "core:webview:deny-create-webview-window", "core:webview:deny-get-all-webviews", "core:webview:deny-internal-toggle-devtools", "core:webview:deny-print", "core:webview:deny-reparent", "core:webview:deny-set-webview-auto-resize", "core:webview:deny-set-webview-background-color", "core:webview:deny-set-webview-focus", "core:webview:deny-set-webview-position", "core:webview:deny-set-webview-size", "core:webview:deny-set-webview-zoom", "core:webview:deny-webview-close", "core:webview:deny-webview-hide", "core:webview:deny-webview-position", "core:webview:deny-webview-show", "core:webview:deny-webview-size", "core:window:default", "core:window:allow-activity-name", "core:window:allow-available-monitors", "core:window:allow-center", "core:window:allow-close", "core:window:allow-create", "core:window:allow-current-monitor", "core:window:allow-cursor-position", "core:window:allow-destroy", "core:window:allow-get-all-windows", "core:window:allow-hide", "core:window:allow-inner-position", "core:window:allow-inner-size", "core:window:allow-internal-toggle-maximize", "core:window:allow-is-always-on-top", "core:window:allow-is-closable", "core:window:allow-is-decorated", "core:window:allow-is-enabled", "core:window:allow-is-focused", "core:window:allow-is-fullscreen", "core:window:allow-is-maximizable", "core:window:allow-is-maximized", "core:window:allow-is-minimizable", "core:window:allow-is-minimized", "core:window:allow-is-resizable", "core:window:allow-is-visible", "core:window:allow-maximize", "core:window:allow-minimize", "core:window:allow-monitor-from-point", "core:window:allow-outer-position", "core:window:allow-outer-size", "core:window:allow-primary-monitor", "core:window:allow-request-user-attention", "core:window:allow-scale-factor", "core:window:allow-scene-identifier", "core:window:allow-set-always-on-bottom", "core:window:allow-set-always-on-top", "core:window:allow-set-background-color", "core:window:allow-set-badge-count", "core:window:allow-set-badge-label", "core:window:allow-set-closable", "core:window:allow-set-content-protected", "core:window:allow-set-cursor-grab", "core:window:allow-set-cursor-icon", "core:window:allow-set-cursor-position", "core:window:allow-set-cursor-visible", "core:window:allow-set-decorations", "core:window:allow-set-effects", "core:window:allow-set-enabled", "core:window:allow-set-focus", "core:window:allow-set-focusable", "core:window:allow-set-fullscreen", "core:window:allow-set-fullscreen-on-monitor", "core:window:allow-set-icon", "core:window:allow-set-ignore-cursor-events", "core:window:allow-set-max-size", "core:window:allow-set-maximizable", "core:window:allow-set-min-size", "core:window:allow-set-minimizable", "core:window:allow-set-overlay-icon", "core:window:allow-set-position", "core:window:allow-set-progress-bar", "core:window:allow-set-resizable", "core:window:allow-set-shadow", "core:window:allow-set-simple-fullscreen", "core:window:allow-set-size", "core:window:allow-set-size-constraints", "core:window:allow-set-skip-taskbar", "core:window:allow-set-theme", "core:window:allow-set-title", "core:window:allow-set-title-bar-style", "core:window:allow-set-visible-on-all-workspaces", "core:window:allow-show", "core:window:allow-start-dragging", "core:window:allow-start-resize-dragging", "core:window:allow-theme", "core:window:allow-title", "core:window:allow-toggle-maximize", "core:window:allow-unmaximize", "core:window:allow-unminimize", "core:window:deny-activity-name", "core:window:deny-available-monitors", "core:window:deny-center", "core:window:deny-close", "core:window:deny-create", "core:window:deny-current-monitor", "core:window:deny-cursor-position", "core:window:deny-destroy", "core:window:deny-get-all-windows", "core:window:deny-hide", "core:window:deny-inner-position", "core:window:deny-inner-size", "core:window:deny-internal-toggle-maximize", "core:window:deny-is-always-on-top", "core:window:deny-is-closable", "core:window:deny-is-decorated", "core:window:deny-is-enabled", "core:window:deny-is-focused", "core:window:deny-is-fullscreen", "core:window:deny-is-maximizable", "core:window:deny-is-maximized", "core:window:deny-is-minimizable", "core:window:deny-is-minimized", "core:window:deny-is-resizable", "core:window:deny-is-visible", "core:window:deny-maximize", "core:window:deny-minimize", "core:window:deny-monitor-from-point", "core:window:deny-outer-position", "core:window:deny-outer-size", "core:window:deny-primary-monitor", "core:window:deny-request-user-attention", "core:window:deny-scale-factor", "core:window:deny-scene-identifier", "core:window:deny-set-always-on-bottom", "core:window:deny-set-always-on-top", "core:window:deny-set-background-color", "core:window:deny-set-badge-count", "core:window:deny-set-badge-label", "core:window:deny-set-closable", "core:window:deny-set-content-protected", "core:window:deny-set-cursor-grab", "core:window:deny-set-cursor-icon", "core:window:deny-set-cursor-position", "core:window:deny-set-cursor-visible", "core:window:deny-set-decorations", "core:window:deny-set-effects", "core:window:deny-set-enabled", "core:window:deny-set-focus", "core:window:deny-set-focusable", "core:window:deny-set-fullscreen", "core:window:deny-set-fullscreen-on-monitor", "core:window:deny-set-icon", "core:window:deny-set-ignore-cursor-events", "core:window:deny-set-max-size", "core:window:deny-set-maximizable", "core:window:deny-set-min-size", "core:window:deny-set-minimizable", "core:window:deny-set-overlay-icon", "core:window:deny-set-position", "core:window:deny-set-progress-bar", "core:window:deny-set-resizable", "core:window:deny-set-shadow", "core:window:deny-set-simple-fullscreen", "core:window:deny-set-size", "core:window:deny-set-size-constraints", "core:window:deny-set-skip-taskbar", "core:window:deny-set-theme", "core:window:deny-set-title", "core:window:deny-set-title-bar-style", "core:window:deny-set-visible-on-all-workspaces", "core:window:deny-show", "core:window:deny-start-dragging", "core:window:deny-start-resize-dragging", "core:window:deny-theme", "core:window:deny-title", "core:window:deny-toggle-maximize", "core:window:deny-unmaximize", "core:window:deny-unminimize", "opener:default", "opener:allow-default-urls", "opener:allow-open-path", "opener:allow-open-url", "opener:allow-reveal-item-in-dir", "opener:deny-open-path", "opener:deny-open-url", "opener:deny-reveal-item-in-dir".
ეს შეცდომა იმიტომ ჩნდება, რომ fs:read-files და fs:write-files არასწორი Tauri permission სახელებია. Tauri 2-ში სწორი სახელებია:

Text
fs:allow-read-text-file
fs:allow-write-text-file
Tauri-ის ოფიციალურ დოკუმენტაციაში fs:default-თან ერთად სწორედ ეს permissions გამოიყენება ტექსტური ფაილების წასაკითხად და ჩასაწერად. (v2.tauri.app)

1. გახსენი default.json
bash
code ~/newnew/apps/desktop/src-tauri/capabilities/default.json
თუ VS Code არ გაიხსნა, გამოიყენე:

bash
nano ~/newnew/apps/desktop/src-tauri/capabilities/default.json
2. შეცვალე permissions
თუ ახლა გაქვს მსგავსი:

JSON
"permissions": [
  "core:default",
  "dialog:default",
  "fs:read-files",
  "fs:write-files"
]
შეცვალე ამით:

JSON
"permissions": [
  "core:default",
  "dialog:default",
  "fs:default",
  "fs:allow-read-text-file",
  "fs:allow-write-text-file"
]
სრული მინიმალური ფაილი შეიძლება ასეთი იყოს:

apps/desktop/src-tauri/capabilities/default.json
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "main-capability",
  "description": "Main application capability",
  "windows": ["main"],
  "permissions": [
dialog:default მოიცავს open და save მოქმედებებს. (v2.tauri.app)

3. შეინახე ფაილი და შეამოწმე JSON
bash
python3 -m json.tool \
  ~/newnew/apps/desktop/src-tauri/capabilities/default.json
თუ JSON სწორია, დაინახავ ფორმატირებულ JSON-ს. თუ შეცდომაა, Python ზუსტად მიუთითებს ხაზს.

4. შეამოწმე plugin-ები Rust-ში
გახსენი:

bash
code ~/newnew/apps/desktop/src-tauri/src/lib.rs
run() ფუნქციაში უნდა იყოს:

Rust
.plugin(tauri_plugin_dialog::init())
.plugin(tauri_plugin_fs::init())
მაგალითი:

Rust
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
5. შეამოწმე Cargo.toml
bash
grep -n "tauri-plugin" \
  ~/newnew/apps/desktop/src-tauri/Cargo.toml
უნდა ჩანდეს:

Text
tauri-plugin-dialog
tauri-plugin-fs
თუ არ ჩანს, გაუშვი:

bash
cd ~/newnew/apps/desktop/src-tauri
cargo add tauri-plugin-dialog
cargo add tauri-plugin-fs
6. კვლავ გაუშვი Build
bash
cd ~/newnew/apps/desktop
npm run build
შემდეგ:

bash
npm run tauri dev
თუ შემდეგ მიიღებ forbidden path შეცდომას
ეს უკვე სხვა ტიპის პრობლემაა: permission სწორია, მაგრამ ფაილის გზისთვის scope უნდა დაემატოს. Tauri-ის დოკუმენტაცია განმარტავს, რომ permission მარტო არ ნიშნავს ნებისმიერი ფაილის წვდომას — საჭიროა შესაბამისი path scope-იც. (v2.tauri.app)

ჯერ ეს ცვლილება გააკეთე და გაუშვი:

bash
npm run tauri dev
შემდეგ დააჭირე Save-ს. თუ გამოჩნდა forbidden path, გამომიგზავნე სრული შეცდომა და შემდეგ დავამატებთ სწორ scope-ს.