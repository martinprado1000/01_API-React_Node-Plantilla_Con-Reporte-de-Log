import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthUserContext";

export function ProtectedRoute({rol}) {
  
  const { getUserAuth, isAuth, userAuth, loading } = useAuthContext();

  useEffect(() => {
    const getUserFromContext = async () => {
      const res = await getUserAuth();
    };
    getUserFromContext();
  }, []);

  if (loading) return <p className="container mt-5">Cargando ... </p>;

  if (!loading && !isAuth) {
    console.log("Usuario deslogueado");
    return <Navigate to="/home" replace />; // replace, borra el historial de navegación.
  }

  switch (rol) {
    case "superAdmin":
      if (userAuth.rol == "superAdmin") {
        return <Outlet />;  // Outlet: indica que puede continuar con las RUTAS que esten adentro. 
                            // Outlet hace referencia a las rutas que tiene como hijo.
                            // Mientras que childres hace referencia a los componentes.
      }
      break

    case "admin":
      if ( userAuth.rol == "superAdmin" || userAuth.rol == "admin" ) {
        return <Outlet />;
      }
      break

    case "user":
      if ( userAuth.rol == "superAdmin" || userAuth.rol == "admin" || userAuth.rol == "user") {
        return <Outlet />;
      }
    
    break
      
  }
  console.log({"Error":"No puede consumir este recurso"});
  return <Navigate to="/home" replace />;
}
