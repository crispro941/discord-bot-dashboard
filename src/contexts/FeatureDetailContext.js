import {createContext, useContext} from "react";
import {QueryHolder} from "./components/AsyncContext";
import {GuildContext} from "./guild/GuildContext";
import {getFeatureDetail} from "api/yeecord";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";

export const FeatureDetailContext = createContext({
  id: null,
  name: null,
  description: null,
  values: null
});

export function FeatureDetailProvider({children, featureId}) {
  const { id: serverId } = useContext(GuildContext);
  const query = useQuery(["feature_detail", serverId, featureId],
      () => getFeatureDetail(serverId, featureId),
      {
        retry: 0
      }
  )

  return (
    <QueryHolder query={query}>
        <FeatureDetailContext.Provider value={query.data}>
          {children}
        </FeatureDetailContext.Provider>
    </QueryHolder>
  );
}
