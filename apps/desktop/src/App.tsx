import { useState } from "react";
import "./App.css";

type ObjectType = "player" | "platform" | "coin" | "enemy";

type SceneObject = {
  id: string;
  name: string;
  type: ObjectType;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
};

const objectTemplates: Record<
  ObjectType,
  Omit<SceneObject, "id">
> = {
  player: {
    name: "Player",
    type: "player",
    x: 100,
    y: 420,
    width: 48,
    height: 64,
    color: "#3b82f6",
  },
  platform: {
    name: "Platform",
    type: "platform",
    x: 280,
    y: 500,
    width: 220,
    height: 32,
    color: "#22c55e",
  },
  coin: {
    name: "Coin",
    type: "coin",
    x: 420,
    y: 420,
    width: 32,
    height: 32,
    color: "#facc15",
  },
  enemy: {
    name: "Enemy",
    type: "enemy",
    x: 650,
    y: 436,
    width: 48,
    height: 48,
    color: "#ef4444",
  },
};

function App() {
  const [objects, setObjects] = useState<SceneObject[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedObject = objects.find((object) => object.id === selectedId);

  function addObject(type: ObjectType) {
    const template = objectTemplates[type];

    const newObject: SceneObject = {
      ...template,
      id: crypto.randomUUID(),
      name: `${template.name} ${objects.length + 1}`,
    };

    setObjects((currentObjects) => [...currentObjects, newObject]);
    setSelectedId(newObject.id);
  }

  function updateSelectedObject(
    changes: Partial<SceneObject>
  ) {
    if (!selectedId) return;

    setObjects((currentObjects) =>
      currentObjects.map((object) =>
        object.id === selectedId
          ? { ...object, ...changes }
          : object
      )
    );
  }

  function deleteSelectedObject() {
    if (!selectedId) return;

    setObjects((currentObjects) =>
      currentObjects.filter((object) => object.id !== selectedId)
    );

    setSelectedId(null);
  }

  return (
    <main className="studio">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">A2D</div>
          <div>
            <strong>AI 2D Desktop Studio</strong>
            <span>Phase 1 Editor</span>
          </div>
        </div>

        <nav className="menu">
          <button>File</button>
          <button>Edit</button>
          <button>Project</button>
          <button>Run</button>
        </nav>

        <div className="topbar-actions">
          <button className="secondary-button">Save</button>
          <button className="primary-button">Preview</button>
        </div>
      </header>

      <section className="workspace">
        <aside className="sidebar left-sidebar">
          <div className="panel-title">Project Explorer</div>

          <div className="tree-section">
            <div className="tree-title">PROJECT</div>
            <div className="tree-item active">📁 Forest Adventure</div>
            <div className="tree-item">📄 project.json</div>
          </div>

          <div className="tree-section">
            <div className="tree-title">SCENES</div>
            <div className="tree-item active">🎬 Main Scene</div>
          </div>

          <div className="tree-section">
            <div className="tree-title">OBJECTS</div>

            {objects.length === 0 ? (
              <div className="empty-text">
                ობიექტები ჯერ არ არის
              </div>
            ) : (
              objects.map((object) => (
                <button
                  key={object.id}
                  className={`tree-item object-item ${
                    object.id === selectedId ? "selected" : ""
                  }`}
                  onClick={() => setSelectedId(object.id)}
                >
                  <span
                    className="object-dot"
                    style={{ backgroundColor: object.color }}
                  />
                  {object.name}
                </button>
              ))
            )}
          </div>

          <div className="add-object-section">
            <div className="tree-title">ADD OBJECT</div>

            <div className="add-object-grid">
              <button onClick={() => addObject("player")}>
                + Player
              </button>
              <button onClick={() => addObject("platform")}>
                + Platform
              </button>
              <button onClick={() => addObject("coin")}>
                + Coin
              </button>
              <button onClick={() => addObject("enemy")}>
                + Enemy
              </button>
            </div>
          </div>
        </aside>

        <section className="editor-area">
          <div className="editor-toolbar">
            <span>Main Scene</span>
            <div className="toolbar-actions">
              <button>−</button>
              <span>100%</span>
              <button>+</button>
              <button>Grid</button>
            </div>
          </div>

          <div className="canvas-wrapper">
            <div className="scene-canvas">
              <div className="canvas-label">1280 × 720</div>

              {objects.map((object) => (
                <button
                  key={object.id}
                  className={`scene-object ${
                    object.id === selectedId ? "selected-object" : ""
                  }`}
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
              ))}

              {objects.length === 0 && (
                <div className="canvas-empty">
                  <div className="canvas-empty-icon">＋</div>
                  <h2>ცარიელი სცენა</h2>
                  <p>
                    მარცხენა პანელიდან დაამატე პირველი ობიექტი
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bottom-panel">
            <div className="bottom-tab active">Console</div>
            <div className="bottom-tab">Errors</div>
            <div className="bottom-tab">AI Activity</div>
            <div className="console-message">
              Ready. შექმენი პირველი 2D ობიექტი.
            </div>
          </div>
        </section>

        <aside className="sidebar right-sidebar">
          <div className="panel-title">Inspector</div>

          {!selectedObject ? (
            <div className="inspector-empty">
              <div className="inspector-icon">◇</div>
              <p>აირჩიე ობიექტი</p>
              <span>
                ობიექტის თვისებების სანახავად აირჩიე სცენის ელემენტი.
              </span>
            </div>
          ) : (
            <div className="inspector-content">
              <div className="selected-object-title">
                <span
                  className="object-dot large"
                  style={{
                    backgroundColor: selectedObject.color,
                  }}
                />
                <div>
                  <strong>{selectedObject.name}</strong>
                  <span>{selectedObject.type}</span>
                </div>
              </div>

              <div className="inspector-group">
                <div className="inspector-group-title">
                  TRANSFORM
                </div>

                <label>
                  X
                  <input
                    type="number"
                    value={selectedObject.x}
                    onChange={(event) =>
                      updateSelectedObject({
                        x: Number(event.target.value),
                      })
                    }
                  />
                </label>

                <label>
                  Y
                  <input
                    type="number"
                    value={selectedObject.y}
                    onChange={(event) =>
                      updateSelectedObject({
                        y: Number(event.target.value),
                      })
                    }
                  />
                </label>

                <label>
                  Width
                  <input
                    type="number"
                    value={selectedObject.width}
                    onChange={(event) =>
                      updateSelectedObject({
                        width: Number(event.target.value),
                      })
                    }
                  />
                </label>

                <label>
                  Height
                  <input
                    type="number"
                    value={selectedObject.height}
                    onChange={(event) =>
                      updateSelectedObject({
                        height: Number(event.target.value),
                      })
                    }
                  />
                </label>
              </div>

              <div className="inspector-group">
                <div className="inspector-group-title">
                  COMPONENTS
                </div>

                <div className="component-row">
                  <span>Transform</span>
                  <span className="component-status">Active</span>
                </div>

                <div className="component-row">
                  <span>Renderer</span>
                  <span className="component-status">Active</span>
                </div>
              </div>

              <button
                className="delete-button"
                onClick={deleteSelectedObject}
              >
                Delete object
              </button>
            </div>
          )}
        </aside>
      </section>
    </main>
  );
}

export default App;