import {createContext, useContext} from "react";
import {QueryHolder} from "./components/AsyncContext";
import {getFeatures} from "api/yeecord";
import {GuildContext} from "./guild/GuildContext";
import {useQuery} from "react-query";

export const FeatureContext = createContext({
    features: null
});

export function FeaturesProvider({children}) {
    const {id: serverId} = useContext(GuildContext);
    const query = useQuery(["features", serverId],
        () => getFeatures(serverId),
        {
            retry: 0
        }
  )

  return (
    <QueryHolder query={query}>
        <FeatureContext.Provider value={query.data}>
          {children}
        </FeatureContext.Provider>
    </QueryHolder>
  );
}
