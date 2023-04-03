import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

export default function HankoProfile({ hankoApi }: { hankoApi: string }) {
  useEffect(() => {
    // register the component
    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script
    register({ shadow: true })
      .catch((error) => {
        // handle error
      });
  }, []);

  return (
    <hanko-profile api={hankoApi} />
  );
};