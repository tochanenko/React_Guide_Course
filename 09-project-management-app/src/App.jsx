import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      tasks: prevProjectsState.tasks.filter((task) => task.id !== id)
    }));
  }

  function handleStartAddProject() {
    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: null
    }));
  }

  function handleSelectProject(id) {
    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: id
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: undefined
    }));
  }

  function handleDeleteProject() {
    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: undefined,
      projects: prevProjectsState.projects.filter((project) => project.id !== prevProjectsState.selectedProjectId)
    }));
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}
  />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
