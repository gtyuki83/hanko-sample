import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "@teamhanko/hanko-elements";

export default function HankoAuth({ hankoApi }: { hankoApi: string }) {
  const navigate = useNavigate();

  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    navigate("/profile", { replace: true });
  }, [navigate]);

  useEffect(() => {
    document.addEventListener("hankoAuthSuccess", redirectAfterLogin);
    return () =>
      document.removeEventListener("hankoAuthSuccess", redirectAfterLogin);
  }, [redirectAfterLogin]);

  useEffect(() => {
    // register the component
    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script
    register({ shadow: true })
      .then(()=>{
      })
      .catch((error) => {
        // handle error
      });
  }, []);

  return (
    <hanko-auth api={hankoApi} />
  );
}