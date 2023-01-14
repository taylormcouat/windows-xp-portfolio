import MenuBar from "./components/menu-bar/MenuBar";
import { MenuItemState } from "./components/menu-bar/MenuBarItem";
import "./App.css"
import PopupMenu from "./components/menu/PopupMenu";
import Screen from "./components/screen/Screen"
import BootupScreen from "./components/screen/BootupScreen";
import {useRef, useEffect} from 'react'
import useState from 'react-usestateref'
import resumeIcon from './data/resume-icon.png'
import aboutMeIcon from './data/about-me-icon.png'
import githubIcon from './data/github-icon.png'
import readMeIcon from './data/readme.txt.png'
import ResumeContent from "./components/windows/ResumeContent";
import ReadMeContent from './components/windows/ReadMeContent';
import AboutMeContent from "./components/windows/AboutMeWindow";
import Window from "./components/windows/Window";
import startUpSound from './data/windows-xp-startup-sound.mp3'


function App() {
  const initialWindows = [
    {
      id: 0,
      title: "Resume",
      initialWidth: 620,
      initialHeight: 800,
      content: <ResumeContent/>,
      icon: resumeIcon,
      open: false,
      active: false,
      minimized: false,
      maximized: false,
      zIndex: 0,
      windowRef: useRef<HTMLDivElement>(null)
    },
    {
      id: 1,
      title: "About Me",
      initialWidth: 650,
      initialHeight: 650,
      content: <AboutMeContent/>,
      icon: aboutMeIcon,
      open: false,
      active: false,
      minimized: false,
      maximized: false,
      zIndex: 0,
      windowRef: useRef<HTMLDivElement>(null)
    },
    {
      id: 2,
      title: "README.txt",
      initialWidth: 400,
      initialHeight: 400,
      content: <ReadMeContent/>,
      icon: readMeIcon,
      open: false,
      active: false,
      minimized: false,
      maximized: false,
      zIndex: 0,
      windowRef: useRef<HTMLDivElement>(null)
    }
  ]

  const [isMenuActive, setMenuActive] = useState(false)
  const [zIndex, setZIndex, zIndexStateRef] = useState(1)
  const [openWindows, setOpenWindows, openWindowsStateRef] = useState<MenuItemState[]>([])
  const [windows, setWindows, windowsStateRef] = useState(initialWindows)
  const menuRef = useRef<HTMLDivElement>(null)
  const startButtonRef = useRef<HTMLDivElement>(null)
  const [isBooted, setBooted] = useState(false)

  const desktopIcons = [
    {
      key: 0,
      iconImage: resumeIcon,
      name: "Resume",
      onDoubleClick: () => openwindow(0),
    },
    {
      key: 1,
      iconImage: aboutMeIcon,
      name: "About Me",
      onDoubleClick: () => openwindow(1),
    },
    {
      key: 2,
      iconImage: githubIcon,
      name: "My GitHub",
      onDoubleClick: () => window.open('https://www.github.com/taylormcouat', '_blank')?.focus() ,
    },
    {
      key: 3,
      iconImage: readMeIcon,
      name: "README.txt",
      onDoubleClick: () => openwindow(2)
    }    
  ]

  function setActiveWindow(id: number) {
    const updatedOpenWindows = openWindowsStateRef.current.map((openWindow) => {
      openWindow.active = (openWindow.id === id)
      return openWindow
    })
    setOpenWindows(updatedOpenWindows)
    setZIndex(zIndexStateRef.current + 1)
    const updatedWindows = windowsStateRef.current.map((window) => {
      window.active = (window.id === id)
      window.zIndex = window.id === id ? zIndexStateRef.current : window.zIndex
      window.minimized = window.id === id ? false : window.minimized
      return window
    })
    setWindows(updatedWindows)
  }

  function openwindow(id: number) {
    const updatedWindows = [...windows]
    // Window is not open, need to add to openWindows
    if (!updatedWindows[id].open) {
      const updatedOpenWindows = openWindows.map((openWindow) => {
        openWindow.active = (openWindow.id === id)
        return openWindow
      })
      updatedOpenWindows.push({
        id: id,
        title: updatedWindows[id].title,
        active: true,
        icon: updatedWindows[id].icon,
        onClick: () => setActiveWindow(id),
      })
      setOpenWindows(updatedOpenWindows)
    } else {
      setActiveWindow(id)
    }
    setZIndex(zIndex + 1)
    const openWindow = {
      ...updatedWindows[id],
      open: true,
      minimized: false,
      zIndex: zIndex,
    }
    updatedWindows[id] = openWindow
    setWindows(updatedWindows)
  }

  function closewindow(id: number) {
    const updatedWindows = [...windows]

    const updatedOpenWindows = [...openWindows]
    const index = updatedOpenWindows.findIndex(window => window.id === id)
    updatedOpenWindows.splice(index, 1)
    const closedWindow = {
      ...updatedWindows[id],
      open: false,
      minimized: false,
      maximized: false,
    }
    updatedWindows[id] = closedWindow
    for (var i = updatedOpenWindows.length - 1; i >= 0; i--) {
      const openWindow = updatedOpenWindows[i]
      const windowId = openWindow.id
      if (!windows[windowId].minimized) {
        setActiveWindow(windowId)
        openWindow.active = true
        updatedOpenWindows[i] = openWindow
      }
    }
    setOpenWindows(updatedOpenWindows)
    setWindows(updatedWindows)
  }

  function clickMinimize(id: number) {
    const updatedWindows = [...windows]
    const minimizedWindow = {
      ...updatedWindows[id],
      minimized: !updatedWindows[id].minimized,
    }
    updatedWindows[id] = minimizedWindow
    setWindows(updatedWindows)

    const updatedOpenWindows = openWindows.map((openWindow) => {
      openWindow.active = false
      return openWindow 
    })
    for (var i = updatedOpenWindows.length - 1; i >= 0; i--) {
      const openWindow = updatedOpenWindows[i]
      const windowId = openWindow.id
      if (!windows[windowId].minimized && windowId !== id) {
        setActiveWindow(windowId)
        openWindow.active = true
        updatedOpenWindows[i] = openWindow
      }
    }
    setOpenWindows(updatedOpenWindows)
  }

  function clickMaximize(id: number) {
    const updatedWindows = [...windows]
    const maximizedWindow = {
      ...updatedWindows[id],
      maximized: !updatedWindows[id].maximized,
      minimized: false,
    }
    updatedWindows[id] = maximizedWindow
    setWindows(updatedWindows)
  }

  useEffect(() => {
    initWindows()
  }, [])

  function initWindows() {
    initialWindows.forEach((window) => {

      function clickWindow(e: MouseEvent) {
        if (window.windowRef.current &&
          window.windowRef.current.contains(e.target as Node)) {
            setActiveWindow(window.id)
        }
      }
      document.addEventListener('mousedown', clickWindow)
    })
  }

  function createwindows() {
     return windows.map((window) => (
      <Window
        key={window.title}
        windowRef={window.windowRef}
        open={window.open}
        minimized={window.minimized}
        maximized={window.maximized}
        title={window.title}
        content={window.content}
        initialWidth={window.initialWidth}
        initialHeight={window.initialHeight}
        openWindow={() => openwindow(window.id)}
        closeWindow={() => closewindow(window.id)}
        clickMinimize={() => clickMinimize(window.id)}
        clickMaximize={() => clickMaximize(window.id)}
        zIndex={window.zIndex}
      />
     ));
  };

  function closeMenu(e: MouseEvent) {
    if (isMenuActive &&
       menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(e.target as Node)
      ) {
      setMenuActive(false)
    } 
  }
  document.addEventListener('mousedown', closeMenu)

  function setMenuOnClick() {
    setMenuActive(!isMenuActive)
  }

  function onClickStart() {
    setBooted(true)
    new Audio(startUpSound).play()
  }

  return (
    <div className="App">
      {isBooted ? <div className="main">
        <Screen desktopIcons={desktopIcons} createWindows={createwindows}/>
        <PopupMenu menuRef={menuRef} isMenuActive={isMenuActive}/>
        <MenuBar startButtonRef={startButtonRef} setMenuOnClick={setMenuOnClick} openWindows={openWindows}/>
      </div> :
      <div>
        <BootupScreen onClickStart={onClickStart}/>
      </div>}
    </div>
  );
}

export default App;
