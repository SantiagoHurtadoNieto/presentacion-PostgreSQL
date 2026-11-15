(() => {
  const sections = [...document.querySelectorAll(".slide-shell")];
  const toc = document.getElementById("toc");
  const tocList = document.getElementById("toc-list");
  const uniqueSections = [...new Set(sections.map(s => s.dataset.section))];
  uniqueSections.forEach(name => {
    const index = sections.findIndex(s => s.dataset.section === name);
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${String(index + 1).padStart(2,"0")}  ${name}`;
    button.addEventListener("click", () => {
      if (window.Reveal?.isReady()) window.Reveal.slide(index);
      toc.close();
    });
    tocList.appendChild(button);
  });
  document.getElementById("toc-open").addEventListener("click", () => toc.showModal());
  const fullscreenButton = document.getElementById("fullscreen");
  fullscreenButton.addEventListener("click", async () => {
    const target = document.querySelector(".reveal");
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (target?.requestFullscreen) await target.requestFullscreen();
  });
  document.addEventListener("fullscreenchange", () => {
    fullscreenButton.textContent = document.fullscreenElement ? "Salir de pantalla completa" : "Pantalla completa";
  });

  document.addEventListener("click", event => {
    const tabButton = event.target.closest(".tab-buttons button");
    if (tabButton) {
      const group = tabButton.closest("[data-tabs]");
      const buttons = [...group.querySelectorAll(".tab-buttons button")];
      const panels = [...group.querySelectorAll(".tab-panel")];
      const index = buttons.indexOf(tabButton);
      buttons.forEach((button,i) => button.setAttribute("aria-selected", String(i === index)));
      panels.forEach((panel,i) => panel.classList.toggle("active", i === index));
      event.stopPropagation();
      return;
    }
    const joinButton = event.target.closest("[data-kind]");
    if (joinButton && joinButton.closest("[data-join-lab]")) {
      const lab = joinButton.closest("[data-join-lab]");
      const kind = joinButton.dataset.kind;
      lab.querySelectorAll("[data-kind]").forEach(button => button.classList.toggle("active", button === joinButton));
      const venn = lab.querySelector(".venn");
      venn.dataset.kind = kind;
      const text = {
        inner: "INNER: conserva coincidencias. En este esquema son 6 filas.",
        left: "LEFT: conserva los 7 empleados; Paula queda sin departamento relacionado.",
        right: "RIGHT: conserva los 4 departamentos; Logística queda sin empleado relacionado.",
        full: "FULL: conserva ambos lados; el resultado contiene 8 filas e incluye a Paula y Logística.",
        cross: "CROSS: producto cartesiano; 7 empleados × 4 departamentos = 28 filas."
      };
      lab.querySelector(".join-description").textContent = text[kind];
      event.stopPropagation();
      return;
    }
    const cursorButton = event.target.closest("[data-step]");
    if (cursorButton && cursorButton.closest("[data-cursor-demo]")) {
      const demo = cursorButton.closest("[data-cursor-demo]");
      const step = Number(cursorButton.dataset.step);
      demo.querySelectorAll("[data-step]").forEach(button => button.classList.toggle("active", button === cursorButton));
      const messages = [
        "Declaración: c_emp consulta nombre y salario de empleados del departamento 20, ordenados por id. Variables destino: v_nombre y v_salario.",
        "OPEN c_emp inicia el recorrido y deja el cursor listo para entregar la primera fila.",
        "FETCH c_emp INTO v_nombre, v_salario lee una fila. FOUND indica si se obtuvo una fila; el bloque repite FETCH hasta que NOT FOUND.",
        "CLOSE c_emp termina el recorrido y libera el cursor explícito."
      ];
      demo.querySelector(".cursor-state").textContent = messages[step];
      event.stopPropagation();
    }
  });

  document.querySelectorAll("[data-tabs]").forEach(group => {
    const buttons = [...group.querySelectorAll(".tab-buttons button")];
    const panels = [...group.querySelectorAll(".tab-panel")];
    buttons.forEach((button,i) => button.setAttribute("aria-selected", String(i === 0)));
    panels.forEach((panel,i) => panel.classList.toggle("active", i === 0));
  });
  document.querySelectorAll("[data-join-lab]").forEach(lab => {
    const first = lab.querySelector("[data-kind]");
    first?.classList.add("active");
    lab.querySelector(".venn").dataset.kind = "inner";
  });

  document.addEventListener("keydown", event => {
    if (event.key.toLowerCase() === "i" && !event.ctrlKey && !event.metaKey && !event.altKey && !toc.open) {
      event.preventDefault();
      toc.showModal();
    }
  });

  if (window.Reveal) {
    window.Reveal.initialize({
      hash: true,
      progress: true,
      controls: true,
      controlsTutorial: false,
      slideNumber: false,
      transition: "fade",
      transitionSpeed: "fast",
      backgroundTransition: "none",
      center: false,
      width: 1600,
      height: 900,
      margin: 0,
      minScale: 0.35,
      maxScale: 1.25,
      keyboard: true,
      touch: true,
      overview: true,
      viewDistance: 3
    }).then(() => {
      document.body.classList.add("reveal-ready");
    });
  } else {
    document.body.classList.add("reveal-missing");
    const warning = document.createElement("p");
    warning.className = "dependency-warning";
    warning.textContent = "No se pudo cargar Reveal.js. Comprueba la conexión a internet y vuelve a abrir la presentación.";
    document.body.appendChild(warning);
  }
})();
