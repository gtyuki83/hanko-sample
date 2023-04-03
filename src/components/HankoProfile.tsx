import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { useNavigate } from "react-router-dom";

export default function HankoProfile({ hankoApi }: { hankoApi: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    // register the component
    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script
    register({ shadow: true })
      .catch((error) => {
        // handle error
        navigate('/')
      });
  }, []);

  return (
    <hanko-profile api={hankoApi} />
  );
};