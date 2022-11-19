const { useEffect } = require("react")

const useDocTitle = (title) => {
  useEffect(() => {
    document.title = (title) ? `${title} - Módulo de Usuarios` : 'Módulo de Usuarios';
  }, [title])
}

export default useDocTitle;
