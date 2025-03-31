import { useState } from "react";
import "./App.css";
import Services from "./components/Services";

import settings from "./assets/images/icon-sun.svg";

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Dev Lens",
      description:
        " Quickly inspect page layouts and visualize element boundaries",
      logo: "./assets/images/logo-devlens.svg",
      active: true,
    },
    {
      id: 2,
      name: "StyleSpy ",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 3,
      name: "SpeedBoost  ",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 4,
      name: "JSONWizard  ",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 5,
      name: "TabMaster Pro ",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 6,
      name: "ViewportBuddy  ",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 7,
      name: "Markup Notes ",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 8,
      name: "GridGuides",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 9,
      name: "Palette Picker",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 10,
      name: "LinkChecker",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 11,
      name: "DOM Snapshot",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
    {
      id: 12,
      name: "ConsolePlus",
      description: "Instantly analyze and copy CSS from any webpage element",
      logo: "./assets/images/logo-style-spy.svg",
      active: false,
    },
  ]);

  const removeService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <section>
      <div className="header">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="179"
            height="41"
            fill="none"
            theme="dark"
            viewBox="0 0 179 41"
            preserveAspectRatio="xMidYMid meet"
          >
            <g clip-path="url(#a)">
              <path
                fill="#C7231A"
                fill-rule="evenodd"
                d="M13.715.516c-2.257 0-4.42.896-6.016 2.492L0 10.707v3.524c0 2.49 1.07 4.73 2.774 6.285A8.485 8.485 0 0 0 0 26.802v3.524l7.699 7.698A8.507 8.507 0 0 0 20 37.742a8.508 8.508 0 0 0 12.301.282L40 30.326v-3.524c0-2.49-1.07-4.73-2.774-6.286A8.485 8.485 0 0 0 40 14.231v-3.524l-7.699-7.7A8.508 8.508 0 0 0 20 3.29 8.485 8.485 0 0 0 13.715.516Zm12.044 20a8.528 8.528 0 0 1-.282-.27L20 14.77l-5.477 5.477a8.528 8.528 0 0 1-.282.27c.096.087.19.177.282.269L20 26.262l5.477-5.476c.092-.093.186-.182.282-.27Zm-3.537 9.81v1.682a4.063 4.063 0 0 0 6.936 2.874l6.398-6.397v-1.683a4.063 4.063 0 0 0-6.937-2.874l-6.397 6.398Zm-4.444 0-6.397-6.398a4.063 4.063 0 0 0-6.937 2.873v1.684l6.397 6.397a4.063 4.063 0 0 0 6.937-2.873v-1.683Zm0-21.302v1.683l-6.397 6.397a4.063 4.063 0 0 1-6.937-2.873v-1.683l6.397-6.397a4.063 4.063 0 0 1 6.937 2.873Zm10.841 8.08-6.397-6.397V9.024a4.063 4.063 0 0 1 6.936-2.873l6.398 6.397v1.683a4.063 4.063 0 0 1-6.937 2.873Z"
                clip-rule="evenodd"
              ></path>
            </g>
            <path
              fill="white"
              d="M54.318 29V12.2h11.484v3.096H57.87v3.6h6.72v2.868h-6.72v4.104h8.028V29h-11.58Zm12.818.024 4.368-6.036-4.14-6.108h4.428l2.148 3.684 2.088-3.684h4.32l-4.02 6.036L80.66 29h-4.488l-2.352-3.696-2.388 3.66-4.296.06Zm20.293.336c-1.296 0-2.32-.364-3.072-1.092-.744-.736-1.116-1.844-1.116-3.324V13.388h3.504v3.492h3.012v2.808h-3.012v4.62c0 .712.148 1.212.444 1.5.296.288.692.432 1.188.432.256 0 .504-.028.744-.084.248-.064.476-.152.684-.264l.492 2.76c-.36.2-.792.368-1.296.504a5.92 5.92 0 0 1-1.572.204Zm-6.648-9.672V16.88h2.808v2.808H80.78Zm17.126 9.672c-1.32 0-2.48-.268-3.48-.804a5.853 5.853 0 0 1-2.34-2.244c-.56-.96-.84-2.084-.84-3.372 0-.936.16-1.796.48-2.58a6.052 6.052 0 0 1 1.368-2.028A6.203 6.203 0 0 1 95.171 17c.8-.32 1.676-.48 2.628-.48 1.048 0 1.976.184 2.784.552a5.43 5.43 0 0 1 2.028 1.548c.536.656.908 1.428 1.116 2.316.216.888.236 1.852.06 2.892h-9.288c0 .56.144 1.048.432 1.464.296.416.708.744 1.236.984.536.232 1.16.348 1.872.348.704 0 1.376-.096 2.016-.288a6.426 6.426 0 0 0 1.812-.876l1.164 2.4c-.384.296-.864.56-1.44.792-.576.224-1.188.396-1.836.516a9.422 9.422 0 0 1-1.848.192Zm-3.204-7.944h5.724c-.024-.712-.276-1.276-.756-1.692-.472-.416-1.124-.624-1.956-.624-.832 0-1.524.208-2.076.624-.544.416-.856.98-.936 1.692ZM105.83 29V16.88h3.504v1.368c.464-.608 1.012-1.048 1.644-1.32a5.072 5.072 0 0 1 2.004-.408c1.128 0 2.056.224 2.784.672.736.44 1.28 1.012 1.632 1.716.36.704.54 1.444.54 2.22V29h-3.504v-6.78c0-.768-.216-1.38-.648-1.836-.424-.456-1.04-.684-1.848-.684-.512 0-.964.116-1.356.348-.392.224-.7.54-.924.948-.216.408-.324.88-.324 1.416V29h-3.504Zm19.29.348c-1.08 0-2.076-.14-2.988-.42-.912-.288-1.692-.68-2.34-1.176l1.14-2.448a8.333 8.333 0 0 0 2.052 1.02c.736.24 1.444.36 2.124.36.672 0 1.188-.1 1.548-.3.368-.208.552-.504.552-.888 0-.344-.164-.596-.492-.756-.32-.168-.944-.348-1.872-.54-1.6-.288-2.768-.74-3.504-1.356-.736-.624-1.104-1.48-1.104-2.568 0-.768.212-1.444.636-2.028.432-.584 1.024-1.036 1.776-1.356.752-.328 1.616-.492 2.592-.492.96 0 1.864.132 2.712.396.856.256 1.588.616 2.196 1.08l-1.104 2.46a5.34 5.34 0 0 0-1.104-.672 6.35 6.35 0 0 0-1.296-.444 5.43 5.43 0 0 0-1.32-.168c-.584 0-1.056.1-1.416.3-.36.192-.54.464-.54.816 0 .352.164.612.492.78.328.168.94.352 1.836.552 1.672.352 2.86.82 3.564 1.404.712.576 1.068 1.388 1.068 2.436 0 .808-.22 1.512-.66 2.112-.432.6-1.04 1.068-1.824 1.404-.776.328-1.684.492-2.724.492Zm7.413-.348V16.88h3.504V29h-3.504Zm1.752-14.04a2.26 2.26 0 0 1-1.512-.54c-.424-.368-.636-.856-.636-1.464 0-.616.212-1.104.636-1.464a2.23 2.23 0 0 1 1.512-.552 2.23 2.23 0 0 1 1.512.552c.424.36.636.848.636 1.464 0 .608-.212 1.096-.636 1.464a2.26 2.26 0 0 1-1.512.54Zm10.362 14.4c-1.304 0-2.46-.292-3.468-.876a6.504 6.504 0 0 1-2.376-2.328 6.28 6.28 0 0 1-.852-3.216c0-.856.164-1.668.492-2.436a6.302 6.302 0 0 1 1.392-2.052c.6-.6 1.308-1.072 2.124-1.416.816-.344 1.712-.516 2.688-.516 1.304 0 2.456.292 3.456.876a6.38 6.38 0 0 1 2.364 2.34c.576.968.864 2.036.864 3.204 0 .848-.164 1.66-.492 2.436a6.439 6.439 0 0 1-1.392 2.064 6.547 6.547 0 0 1-2.112 1.404c-.816.344-1.712.516-2.688.516Zm0-3.036c.616 0 1.168-.136 1.656-.408.488-.28.872-.672 1.152-1.176.28-.512.42-1.112.42-1.8 0-.696-.14-1.296-.42-1.8a2.854 2.854 0 0 0-1.14-1.164c-.488-.28-1.044-.42-1.668-.42-.624 0-1.184.14-1.68.42-.488.272-.872.66-1.152 1.164-.272.504-.408 1.104-.408 1.8s.14 1.296.42 1.8c.28.504.664.896 1.152 1.176.488.272 1.044.408 1.668.408ZM153.235 29V16.88h3.504v1.368c.464-.608 1.012-1.048 1.644-1.32a5.072 5.072 0 0 1 2.004-.408c1.128 0 2.056.224 2.784.672.736.44 1.28 1.012 1.632 1.716.36.704.54 1.444.54 2.22V29h-3.504v-6.78c0-.768-.216-1.38-.648-1.836-.424-.456-1.04-.684-1.848-.684-.512 0-.964.116-1.356.348-.392.224-.7.54-.924.948-.216.408-.324.88-.324 1.416V29h-3.504Zm19.291.348c-1.08 0-2.076-.14-2.988-.42-.912-.288-1.692-.68-2.34-1.176l1.14-2.448a8.333 8.333 0 0 0 2.052 1.02c.736.24 1.444.36 2.124.36.672 0 1.188-.1 1.548-.3.368-.208.552-.504.552-.888 0-.344-.164-.596-.492-.756-.32-.168-.944-.348-1.872-.54-1.6-.288-2.768-.74-3.504-1.356-.736-.624-1.104-1.48-1.104-2.568 0-.768.212-1.444.636-2.028.432-.584 1.024-1.036 1.776-1.356.752-.328 1.616-.492 2.592-.492.96 0 1.864.132 2.712.396.856.256 1.588.616 2.196 1.08l-1.104 2.46a5.34 5.34 0 0 0-1.104-.672 6.35 6.35 0 0 0-1.296-.444 5.43 5.43 0 0 0-1.32-.168c-.584 0-1.056.1-1.416.3-.36.192-.54.464-.54.816 0 .352.164.612.492.78.328.168.94.352 1.836.552 1.672.352 2.86.82 3.564 1.404.712.576 1.068 1.388 1.068 2.436 0 .808-.22 1.512-.66 2.112-.432.6-1.04 1.068-1.824 1.404-.776.328-1.684.492-2.724.492Z"
            ></path>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h40v41H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="settingsIcon">
          <img src={settings} alt="settingsIcon" />
        </div>
      </div>
      <div className="manageLine">
        <div> Extensions List</div>
        <div className="buttons">
          <button>All</button>
          <button>Active</button>
          <button>Inactive</button>
        </div>
      </div>
      <div>
        <Services services={services} removeService={removeService} />
      </div>
    </section>
  );
}

export default App;
