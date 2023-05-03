import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


let cursorX = 0, cursorY = 0;
const fakeCursor = document.getElementById('fake-cursor') as HTMLDivElement;

window.addEventListener('keydown', (e) => {
  console.log({cursorX, cursorY});
  switch (e.key) {
    case 'ArrowUp': {
      cursorY -= 10;
      if (cursorY < 0) {
        cursorY = 0;
      }
      break;
    }
    case 'ArrowDown': {
      cursorY += 10;
      if (cursorY > window.innerHeight) {
        cursorY = window.innerHeight;
      }
      break;
    }
    case 'ArrowLeft': {
      cursorX -= 10;
      if (cursorX < 0) {
        cursorX = 0;
      }
      break;
    }
    case 'ArrowRight': {
      cursorX += 10;
      if (cursorX > window.innerWidth) {
        cursorX = 0;
      }
      break;
    }

    case 'Enter': {
      let e = document.elementFromPoint(cursorX, cursorY);
      if (e instanceof HTMLElement) {
        e.click();
      }
    }
  }
  fakeCursor.style.left = `${cursorX}px`
  fakeCursor.style.top = `${cursorY}px`
})